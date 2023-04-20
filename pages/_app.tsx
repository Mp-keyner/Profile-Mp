import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Head>
        <link rel="icon" href="/favicon.ico" />
          <title>Profile MP</title>
          
        </Head>
  <Component {...pageProps} />
    </Layout>
  )
}
