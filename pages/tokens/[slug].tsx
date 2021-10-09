import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'

import { fetcher } from '@/utils/fetcher'
import { TOKEN_BASE_URL } from '@/utils/constants'
import { ICMSToken, IAPIToken } from '@/types/index'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

export default function Token({ token }: { token: ICMSToken }): JSX.Element {
  const url = `${TOKEN_BASE_URL}${token.slug}`

  const { data, error } = useSWR<IAPIToken>(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      <h1>{token.name}</h1>
      <h2>Price: ${data.market_data.current_price.usd}</h2>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string

  const query = gql`
    query Token($slug: String!) {
      token(where: { slug: $slug }) {
        id
        slug
        name
      }
    }
  `

  const data: { token: ICMSToken | null } = await client.request(query, {
    slug,
  })

  if (!data.token) {
    return {
      notFound: true,
    }
  }

  return {
    props: { token: { ...data.token } },
    revalidate: 60 * 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Tokens {
      tokens {
        slug
      }
    }
  `
  const data = await client.request(query)

  return {
    paths: data.tokens.map((token) => ({ params: { slug: token.slug } })),
    fallback: 'blocking',
  }
}
