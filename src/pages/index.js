import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PricingPage from '@site/src/components/PricingPage';
import FrequentlyAsked from '@site/src/components/FrequentlyAsked';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';




export default function Home() {

  AOS.init({
  });
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <PricingPage />
        <FrequentlyAsked />
      </main>
    </Layout>
  );
}
