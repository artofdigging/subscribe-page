import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Helmet} from "react-helmet";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="//fonts.googleapis.com/css?family=Poppins:400,600,700" rel="stylesheet" title="Google Fonts" type="text/css"></link>
          <script data-ad-client="ca-pub-9580600822475194" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-11G7QJGR3Z"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-11G7QJGR3Z');
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
