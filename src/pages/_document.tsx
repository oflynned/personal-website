import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
          <title>Syzible</title>
          <meta property={'og:title'} content={'Syzible'} key={'title'} />
          <meta
            property={'og:description'}
            content={'My personal website for showcasing my work'}
            key={'description'}
          />
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
