import clsx from 'clsx';
import './styles.css';
import Translate, { translate } from '@docusaurus/Translate';



export default function HomepageFeatures() {
  return (
    <section id="features" className="features">
      <div className="container">

        <div className="section-title">
          <h2>
            <Translate>Features</Translate>
          </h2>
          <p>
            <Translate>Powerful TikTok Automation & Management Tools</Translate>
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col col--12 d-flex align-items-stretch order-2 order-lg-1">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col col--3 icon-box" data-aos="fade-up">
                  <i className="bx bxs-devices"></i>
                  <h4>
                    <Translate>Phone screen mirroring to a computer</Translate>
                  </h4>
                  <p>
                    <Translate>Supports 200+ phones mirroring to a computer, with synchronized operation</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-registered"></i>
                  <h4>
                    <Translate>Automatic registration</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic registration of TikTok accounts, supports business email</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-id-card"></i>
                  <h4>
                    <Translate>Automatic profile setup</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic setup of avatars, nicknames, signatures, usernames</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-log-in"></i>
                  <h4>
                    <Translate>Automatic login</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic login to TikTok accounts, supports batch import/export of accounts</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-search"></i>
                  <h4>
                    <Translate>Automatic matching</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic matching of logged-in accounts, no manual binding needed</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bxs-pointer"></i>
                  <h4>
                    <Translate>Automatic account nurturing</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic account nurturing, supports keyword search, random follow, like, comment, and bookmark</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-paper-plane"></i>
                  <h4>
                    <Translate>Automatic posting</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic posting, supports adding product links</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bxs-bell-plus"></i>
                  <h4>
                    <Translate>Automatic following</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic follow of target accounts</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-message-rounded-dots"></i>
                  <h4>
                    <Translate>Automatic direct messaging</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic direct messaging to multiple target users</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-message-dots"></i>
                  <h4>
                    <Translate>Automatic commenting</Translate>
                  </h4>
                  <p>
                    <Translate>One-click batch automatic commenting on multiple videos with specified scripts and random emojis</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bxs-arrow-to-bottom"></i>
                  <h4>
                    <Translate>Fan collection</Translate>
                  </h4>
                  <p>
                    <Translate>One-click automatic collection of target account fan lists, can be used for direct messaging</Translate>
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
