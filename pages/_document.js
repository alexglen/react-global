import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='utf-8' />
          <link rel='shortcut icon' href='/public/favicon.ico' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Orienta&display=swap'
            rel='stylesheet'
          />
          <title>Netflix</title>
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
