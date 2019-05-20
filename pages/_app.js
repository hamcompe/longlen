import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import 'sanitize.css'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>🤘longlen</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
