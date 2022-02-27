import Layout from '../components/Layout'
import '../styles/test.css'
import '../styles/global2.scss'
import { NextSeo } from 'next-seo'
import Script from 'next/script'
import {Provider} from "next-auth/client"


function MyApp({ Component, pageProps }) {
  return (
    <>
    
<Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-WLF680E234`} />

<Script strategy='lazyOnload' id="my-script">
{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WLF680E234', {
    page_path: window.location.pathname,
  });
  `} 
</Script>

<NextSeo 
title="This is Next JS tutorial"
titleTemplate="Muzaffarxon Next.js"
description="This is Nextjs"
/>

<Provider session={pageProps.session}>
<Layout>
<Component {...pageProps} />
</Layout>
</Provider>
      
  </>
  )
}

export default MyApp
