import Document, { Html, Head, Main, NextScript } from 'next/document'
import { keyframes, css, Global } from '@emotion/core'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Global
          styles={css`
            html,
            body {
              line-height: 1.5;
              font-size: 16px;
            }
          `}
        />
        <Head>
          <title>🤘longlen</title>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
