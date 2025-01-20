import Layout from '@theme/Layout';
import VideoMagicHeader from '@site/src/components/VideoMagicHeader';
import VideoMagicFeatures from '@site/src/components/VideoMagicFeatures';
import VideoMagicPrice from '@site/src/components/VideoMagicPrice';
import ContactPage from '@site/src/components/ContactPage';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import './VideoMagic.css'
import Translate, { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';
export default function VideoMagic() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间，单位毫秒
    });
  }, []);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VideoMagic",
    "url": "https://tikmatrix.com/videomagic",
    "applicationCategory": "Social Media Management",
    "operatingSystem": "Windows",
    "screenshot": [
      "https://tikmatrix.com/img/video-magic-startup1.png",
      "https://tikmatrix.com/img/video-magic-startup2.png",
    ],

    "offers": {
      "@type": "Offer",
      "priceCurrency": "USDT",
      "price": "0",
      "description": translate({ message: 'Free' }),
    },
    "description": translate({ message: 'Video Magic is a professional video generation software designed for operators. It can generate unique videos for you, greatly enhancing operational efficiency' }),
    "featureList": [
      translate({ message: 'Video download' }),
      translate({ message: 'Video generate' }),
      translate({ message: 'Recognize subtitles' }),
      translate({ message: 'Translate subtitles' }),
    ],
    "softwareVersion": "1.0.0",
    "downloadUrl": "https://api.tikmatrix.com/download-videomagic",
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
      "logo": "https://tikmatrix.com/img/logo.png",
    },
  }
  return (
    <Layout title={translate({ message: 'VideoMagic' })} description="Video Magic is a professional video generation software designed for operators. It can generate unique videos for you, greatly enhancing operational efficiency">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>
      <VideoMagicHeader />
      <main>
        <VideoMagicFeatures />
        <VideoMagicPrice />
        <ContactPage />
      </main>
    </Layout>
  );
}
