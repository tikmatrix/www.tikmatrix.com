import clsx from 'clsx';
import './styles.css';
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
            <Translate>
              Our Core Advantages
            </Translate>
          </p>
          <p>
            <Translate>
              Compared to similar products on the market, using our product TIK results in at least a 30% increase in traffic compared to other similar products.
            </Translate>
          </p>
          <p>
            <Translate>
              Additionally, our real device matrix program system can perfectly avoid account suspensions caused by TIK's risk control measures. Our account suspension rate is 0%.
            </Translate>
          </p>
        </div>

        <div className="featuresRow">
          <div className="featuresCol featuresDetail">
            <Translate>Features</Translate>
          </div>
          <div className="featuresCol featuresTitle">
            <Translate>TikMatrix RealPhone Matrix</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            <Translate>Fingerprint Browser Matrix</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            <Translate>Protocol Matrix</Translate>
          </div>
        </div>

        <div className="featuresRow">
          <div className="featuresCol featuresTitle">
            <Translate>Account Safe</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            ★★★★★
          </div>
          <div className="featuresCol featuresDetail">
            ★★★★
          </div>
          <div className="featuresCol featuresDetail">
            ★
          </div>
        </div>
        <div className="featuresRow">
          <div className="featuresCol featuresTitle">
            <Translate>Automatic registration</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            ✅
          </div>
          <div className="featuresCol featuresDetail">
            ✅
          </div>
          <div className="featuresCol featuresDetail">
            ❌
          </div>
        </div>
        <div className="featuresRow">
          <div className="featuresCol featuresTitle">
            <Translate>Automated account nurturing</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            ✅
          </div>
          <div className="featuresCol featuresDetail">
            ❌
          </div>
          <div className="featuresCol featuresDetail">
            ❌
          </div>
        </div>
        <div className="featuresRow">
          <div className="featuresCol featuresTitle">
            <Translate>Automatic video posting</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            ✅
          </div>
          <div className="featuresCol featuresDetail">
            ✅
          </div>
          <div className="featuresCol featuresDetail">
            ❌
          </div>
        </div>
        <div className="featuresRow">
          <div className="featuresCol featuresTitle">
            <Translate>Full Network Video Download</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            ✅
          </div>
          <div className="featuresCol featuresDetail">
            ❌
          </div>
          <div className="featuresCol featuresDetail">
            ❌
          </div>
        </div>

        <div className="featuresRow">
          <div className="featuresCol featuresTitle">
            <Translate>Pricing</Translate>
          </div>
          <div className="featuresCol featuresDetail">
            ★
          </div>
          <div className="featuresCol featuresDetail">
            ★★★
          </div>
          <div className="featuresCol featuresDetail">
            ★★★★★
          </div>
        </div>

      </div>
    </section >
  );
}
