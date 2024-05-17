import Head from "next/head";
import "~/styles/globals.css";
import { type AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Networking Lock Screen Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:image" content="" />
        <meta property="og:title" content="Networking Lock Screen Generator" />
        <meta
          property="og:description"
          content="Generate Name Card Lock Screen for Networking Events"
        />
        <meta
          property="og:url"
          content="https://networking-wallpaper-generator.vercel.app/"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
