import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate message="Easy to Use">Easy to Use</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <Translate message="TikMatrix is designed to be easy to use and install. It is a simple and easy to use tool for TikTok.">TikMatrix is designed to be easy to use and install. It is a simple and easy to use tool for TikTok.</Translate>
      </>
    ),
  },
  {
    title: <Translate message="Focus on What Matters">Focus on What Matters</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <Translate message="TikMatrix lets you focus on your content, and we'll do the chores. Go ahead and build your TikTok content.">
          TikMatrix lets you focus on your content, and we'll do the chores. Go ahead and build your TikTok content.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate message="Powered by Google UI Automator">Powered by Google UI Automator</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <Translate message="TikMatrix is powered by Google UI Automator. It is a powerful tool that can automate anything on TikTok without Root Access and Accessibility.">
          TikMatrix is powered by Google UI Automator. It is a powerful tool that can automate anything on TikTok without Root Access and Accessibility.
        </Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
