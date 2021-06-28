import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Helmet} from "react-helmet";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="//fonts.googleapis.com/css?family=Poppins:400,600,700" rel="stylesheet" title="Google Fonts" type="text/css"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
