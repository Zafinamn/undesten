import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="mn">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#1a1614" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}