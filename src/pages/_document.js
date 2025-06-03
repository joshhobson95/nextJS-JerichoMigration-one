import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
<Head>
  <link rel="icon" href="/favicon.png" type="image/png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
  <meta name="theme-color" content="#242424" />
  <meta property="og:image" content="/favicon.png" />
  <meta name="twitter:image" content="/favicon.png" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=yard" />
  <link
  rel="preload" href="/_next/static/media/slick.653a4cbb.woff" as="font" type="font/woff" crossorigin="anonymous"/>
</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
