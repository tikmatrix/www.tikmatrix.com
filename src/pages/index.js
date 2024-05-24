import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PricingPage from '@site/src/components/PricingPage';
import FrequentlyAsked from '@site/src/components/FrequentlyAsked';

import 'boxicons/css/boxicons.min.css';
import './index.css'




export default function Home() {

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
