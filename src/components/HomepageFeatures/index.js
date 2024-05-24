import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';



export default function HomepageFeatures() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>
            <Translate>Why TikMatrix?</Translate>
          </h2>
          <p>
            <Translate>Our advantages</Translate>
          </p>
        </div>

        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresTitle)}>
            <Translate>Features</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresTitle)}>
            <Translate>TikMatrix RealPhone Matrix</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            <Translate>Fingerprint Browser Matrix</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            <Translate>Protocol Matrix</Translate>
          </div>
        </div>

        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            <Translate>Account Safe</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ★★★★★
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ★★★★
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ★
          </div>
        </div>
        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            <Translate>Automatic registration</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ❌
          </div>
        </div>
        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            <Translate>Automated account nurturing</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ❌
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ❌
          </div>
        </div>
        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            <Translate>Automatic video posting</Translate>
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ❌
          </div>
        </div>
        {/* <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            批量关注
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
        </div>
        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            批量私信
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
        </div>
        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            自动评论
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ✔
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ❌
          </div>
        </div> */}
        <div className={clsx("row", styles.features)}>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            价格
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ★
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ★★★
          </div>
          <div className={clsx("col col--3", styles.featuresDetail)}>
            ★★★★★
          </div>
        </div>

      </div>
    </section >
  );
}
