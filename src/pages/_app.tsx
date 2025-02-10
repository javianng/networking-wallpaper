import Head from "next/head";
import "~/styles/globals.css";
import { type AppType } from "next/app";
import Footer from "~/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ErrorBoundary } from "~/components/error-boundary";
import { Feedback } from "~/components/feedback";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary>
      <Head>
        <title>Networking Lock Screen Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta property="og:image" content="/example2.png" />
        <meta property="og:title" content="Networking Lock Screen Generator" />
        <meta
          property="og:description"
          content="Generate professional lock screens for networking events with QR codes and contact information. Free, instant, and easy to use."
        />
        <meta
          property="og:url"
          content="https://networking-wallpaper-generator.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Create custom lock screens for networking events that showcase your professional details. Features QR codes, company logos, and contact information."
        />
        <meta
          name="keywords"
          content="networking, lock screen, wallpaper, generator, QR code, professional, contact information"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <Feedback />
      <Footer />
    </ErrorBoundary>
  );
};

export default MyApp;
