import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw')} >
      <div className="container row ">
        <div className='col col--6'>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            <Translate
              message="TikMatrix is a powerful tool for batch controlling Android phones to achieve matrix-based operations.">
              TikMatrix is a powerful tool for batch controlling Android phones to achieve matrix-based operations.
            </Translate>
          </p>
          <div>
            <Link
              className="button button--primary button--outline button--lg"
              to="/docs/intro">
              <Translate
                message="Start Now">
                Start Now
              </Translate>
            </Link>
          </div>
        </div>
        <img
          className="hero__img col col--6"
          src="img/startup.png"
        />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
