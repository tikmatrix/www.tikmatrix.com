import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageVS from '@site/src/components/HomepageVS';
import PricingPage from '@site/src/components/PricingPage';
import FrequentlyAsked from '@site/src/components/FrequentlyAsked';
import ContactPage from '@site/src/components/ContactPage';
import Testimonials from '@site/src/components/Testimonials';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import './index.css'
import Translate, { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';


export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间，单位毫秒
    });
    // 动态插入 AnythingLLM 聊天小部件
    const script = document.createElement('script');
    script.src = 'https://llm.tikmatrix.com/embed/anythingllm-chat-widget.min.js';
    script.async = true;
    script.setAttribute('data-embed-id', 'b69ccd65-9f2b-4d8c-9c6e-66f523abc798');
    script.setAttribute('data-base-api-url', 'https://llm.tikmatrix.com/api/embed');
    script.setAttribute('data-chat-icon', 'support');
    script.setAttribute('data-brand-image-url', '/img/logo.png');
    script.setAttribute('data-assistant-icon', '/img/logo.png');
    script.setAttribute('data-no-sponsor', '1');
    script.setAttribute('data-assistant-name', 'TikZenX Support');
    script.onload = () => {
      console.log('AnythingLLM chat widget script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load AnythingLLM chat widget script');
    };
    // document.body.appendChild(script);
  }, []);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TikZenX",
    "url": "https://tikmatrix.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, macOS",
    "screenshot": [
      "https://tikmatrix.com/img/startup1.png",
      "https://tikmatrix.com/img/startup2.png",
      "https://tikmatrix.com/img/startup3.png",
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": translate({ message: 'Free' }),
    },
    "description": translate({ message: 'Professional TikTok account management and marketing tool designed for Android phone farms on Windows and Mac. Automate posting, following, and grow your TikTok presence with zero account suspension rate.' }),
    "featureList": [
      translate({ message: 'Phone screen mirroring to a computer' }),
      translate({ message: 'Automatic registration' }),
      translate({ message: 'Automatic login' }),
      translate({ message: 'Automatic account nurturing' }),
      translate({ message: 'Automatic posting' }),
      translate({ message: 'Automatic following' }),
      translate({ message: 'Automatic commenting' }),
      translate({ message: 'Batch account management' }),
      translate({ message: 'Performance analytics' }),
    ],
    "softwareVersion": "2.1.9",
    "downloadUrl": "https://tikmatrix.com/Download?software=TikZenX",
    "supportUrl": "https://t.me/tikmatrix_support",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "230809",
      "bestRating": "5",
      "worstRating": "1",
    },
    "author": {
      "@type": "Organization",
      "name": "TikZenX",
      "url": "https://tikmatrix.com",
      "logo": "https://tikmatrix.com/img/logo.png",
    },
    "keywords": "TikTok Marketing, TikTok Automation, Phone Farm, Social Media Growth, TikTok Management, TikTok Phone Farm, TikTok Matrix, TikZenX, Windows, Mac",
    "datePublished": "2025-03-07",
  }
  return (
    <Layout>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <meta name="keywords" content="TikZenX, TikTok Phone Farm, TikTok Marketing, TikTok Automation, Social Media Growth, TikTok Management, Android Phone Farm, Windows and Mac Support" />
        <meta property="og:title" content="TikZenX - Professional TikTok Account Management & Marketing Tool for Windows & Mac" />
        <meta property="og:description" content="Professional TikTok account management and marketing tool designed for Android phone farms. Automate posting, following, commenting with advanced batch control and maintain zero suspension rate." />
        <meta property="og:image" content="https://tikmatrix.com/img/startup1.png" />
        <meta property="og:url" content="https://tikmatrix.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TikZenX - Professional TikTok Account Management & Marketing Tool for Windows & Mac" />
        <meta name="twitter:description" content="Professional TikTok account management and marketing tool designed for Android phone farms. Automate posting, following, commenting with advanced batch control and maintain zero suspension rate." />
        <meta name="twitter:image" content="https://tikmatrix.com/img/startup1.png" />
        <link rel="canonical" href="https://tikmatrix.com" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageVS />
        <HomepageFeatures />
        <PricingPage />
        {/* <FrequentlyAsked /> */}
        <ContactPage />
        <Testimonials />
        {/* Start of Tawk.to Script */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/683bc34961be34190fe14eed/1iskn5mjr';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
        {/* End of Tawk.to Script */}
      </main>
    </Layout>
  );
}
