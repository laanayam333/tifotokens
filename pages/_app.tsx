import type { AppProps } from 'next/app'
import '@/styles/global.css'

import Layout from '@/components/Navigation/Layout'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
