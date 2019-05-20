import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import { keyframes, css, Global } from '@emotion/core'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <Global
            styles={css`
              html,
              body {
                line-height: 1.5;
                font-size: 16px;
                *::selection {
                  background: #0029ff;
                  color: #fff;
                }
              }
            `}
          />
        </Head>
        <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet" />
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
