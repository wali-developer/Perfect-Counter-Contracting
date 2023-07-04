import '../styles/globals.css';
import '../styles/fonts.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentLanguage = router.locale;

  // useEffect(() => {
  //   let dir = currentLanguage == "ar" ? "rtl" : "ltr";
  //   let lang = currentLanguage == "ar" ? "ar" : "en";

  //   document.querySelector("html").setAttribute("dir", dir);
  //   document.querySelector("html").setAttribute("lang", lang);
  // }, [currentLanguage]);

  return (
    <>
      <Head>
        <title>Perfect Counter Contracting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.svg" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/* fontawesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  )
}
