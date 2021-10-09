import { GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import useSWR from 'swr'

import { fetcher } from '@/utils/fetcher'
import {
  TOKENS_BASE_URL,
  TOKENS_QUERY,
  TOKENS_CURRENCY,
} from '@/utils/constants'
import { ICMSToken, IAPIToken } from '@/types/index'

import List from '@/components/Tokens/List'
import Card from '@/components/Tokens/Card'

export default function Tokens({
  gcmsTokens,
}: {
  gcmsTokens: ICMSToken[]
}): JSX.Element {
  const urls = gcmsTokens.map((token) => token.slug)
  const query = urls.map((slug) => `${TOKENS_QUERY}${slug}`).join('')
  const url = `${TOKENS_BASE_URL}${query}${TOKENS_CURRENCY}`

  const { data, error } = useSWR<IAPIToken>(url, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const tokens = Object.keys(data).map((key) => ({
    name: key,
    price: data[key],
  }))

  return (
    <div>
      <h1>Tokens</h1>
      <List>
        {tokens.map((token, idx) => {
          return <Card key={idx} token={token} />
        })}
      </List>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL)

  const query = gql`
    query HomePage {
      tokens {
        id
        name
        price
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    props: { gcmsTokens: data.tokens },
  }
}
