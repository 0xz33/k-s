import Head from "next/head";

function Kharmha({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kharmha Labs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="We make things happen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Kharmha;
