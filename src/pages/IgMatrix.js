import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import './IgMatrix.css'
import Translate, { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';
import IgMatrixHeader from '@site/src/components/IgMatrixHeader';
export default function IgMatrix() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间，单位毫秒
    });
  }, []);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "IgMatrix",
    "url": "https://tikmatrix.com/igmatrix",
    "applicationCategory": "Social Media Management",
    "operatingSystem": "Windows",
    "screenshot": [
      "https://tikmatrix.com/img/igmatrix-startup1.png",
      "https://tikmatrix.com/img/igmatrix-startup2.png",
      "https://tikmatrix.com/img/igmatrix-startup3.png",
    ],

    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": translate({ message: 'Free' }),
    },
    "description": translate({ message: 'IgMatrix is a Instagram android phonefarm batch control tool' }),
    "featureList": [
      translate({ message: 'Phone screen mirroring to a computer' }),
      translate({ message: 'Automatic account nurturing' }),
      translate({ message: 'Automatic posting' }),
      translate({ message: 'Automatic following' }),
      translate({ message: 'Automatic commenting' }),
    ],
    "softwareVersion": "1.0.0",
    "downloadUrl": "https://pro.api.tikmatrix.com/front-api/download-igmatrix",
    "supportUrl": "https://t.me/+iGhozoBfAbI5YmE1",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1000000",
      "bestRating": "5",
      "worstRating": "1",
    },
    "author": {
      "@type": "Organization",
      "name": "TikMatrix",
      "url": "https://tikmatrix.com",
      "logo": "https://tikmatrix.com/img/igmatrix_logo.png",
    },
  }
  return (
    <Layout>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>
      <IgMatrixHeader />
     
    </Layout>
  );
}
