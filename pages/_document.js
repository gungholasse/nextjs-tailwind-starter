import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/favicon/LW.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon/LW.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/favicon/LW.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon/LW.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon/LW.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon/LW.png'
          />
          <link rel='manifest' href='/favicon/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicon/LW.png'
          />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
