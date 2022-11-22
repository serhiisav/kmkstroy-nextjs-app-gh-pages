import Head from 'next/head'
import Script from 'next/script'

import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro';
import About from '../sections/About/About';
import Gallery from '../sections/Gallery/Gallery';
import ScrollToTop from './../components/ScrollToTop/ScrollToTop';
import Services from './../sections/Services/Services';
import Partners from './../sections/Partners/Partners';
import Contacts from './../sections/Contacts/Contacts';
import SubmitForm from '../components/SubmitForm/SubmitForm';

import { useDispatch } from 'react-redux';
import { addAllImages } from './../store/thunk';
import { useEffect } from 'react';

import { useTranslation } from "next-export-i18n";
import { getGallery } from './api/getGallery';


export default function Home({ gallery }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(addAllImages(gallery));
  }, [dispatch]);

  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="ua" href='https://www.kmkstroy.com.ua' />
        <link rel="alternate" hrefLang="en" href='https://www.kmkstroy.com.ua/en' />
        <link rel="alternate" hrefLang="ua" href="https://www.kmkstroy.com.ua/reference_KMKSTROY.pdf" />
        <link rel="alternate" hrefLang="en" href="https://www.kmkstroy.com.ua/reference_KMKSTROY_en.pdf" />
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.png" />
        <title>{t("head.title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description"
          content={t("head.meta_description")} />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1HBCXSNJJT" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-1HBCXSNJJT');
        `}
      </Script>

      <Header />
      <ScrollToTop />
      <main >
        <Intro />
        <About />
        <Services />
        <Gallery />
        <Partners />
        <SubmitForm />
      </main>
      <footer>
        <Contacts />
      </footer>

    </>
  )
}

export async function getStaticProps() {
  const gallery = await getGallery();
  if (!gallery) {
    return {
      notFound: true,
    }
  };
  return {
    props: {
      gallery,
    }
  }

}