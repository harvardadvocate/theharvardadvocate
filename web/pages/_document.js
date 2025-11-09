import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />

        {/* Font Loading */}
        <link href="https://db.onlinewebfonts.com/c/d1c51727db68ef981e554754d623c268?family=Bernhard+Gothic+Medium" rel="stylesheet" />

        {/* SEO Meta Tags */}
        <meta name="title" property="og:title" content="The Harvard Advocate" />
        <meta
          name="description"
          property="og:description"
          content="America's oldest continuously published college literary magazine"
        />
        <meta name="url" property="og:url" content="https://theharvardadvocate.com/" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="The Harvard Advocate" />
        <meta name="twitter:description" content="America's oldest continuously published college literary magazine" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
