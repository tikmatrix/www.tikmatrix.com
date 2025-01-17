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
export default function VideoMagic() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间，单位毫秒
    });
  }, []);

  return (
    <Layout title={translate({ message: 'VideoMagic' })} description="Video Magic is a professional video generation software designed for operators. It can generate unique videos for you, greatly enhancing operational efficiency">
      <VideoMagicHeader />
      <main>
        <VideoMagicFeatures />
        <VideoMagicPrice />
        <ContactPage />
      </main>
    </Layout>
  );
}
