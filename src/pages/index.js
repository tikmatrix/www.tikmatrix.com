import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageVS from '@site/src/components/HomepageVS';
import PricingPage from '@site/src/components/PricingPage';
import FrequentlyAsked from '@site/src/components/FrequentlyAsked';
import ContactPage from '@site/src/components/ContactPage';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import './index.css'




export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 动画持续时间，单位毫秒
    });
  }, []);

  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageVS />
        <HomepageFeatures />
        <PricingPage />
        <FrequentlyAsked />
        <ContactPage />
      </main>
    </Layout>
  );
}
