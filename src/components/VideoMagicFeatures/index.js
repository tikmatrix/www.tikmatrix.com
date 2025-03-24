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
            <Translate>Our Core Features</Translate>
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col col--12 d-flex align-items-stretch order-2 order-lg-1">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                {/* <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-cloud-download"></i>
                  <h4>
                    <Translate>Video download</Translate>
                  </h4>
                  <p>
                    <Translate>One-click download of videos from all video websites</Translate>
                  </p>
                </div> */}
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-extension"></i>
                  <h4>
                    <Translate>Video unique</Translate>
                  </h4>
                  <p>
                    <Translate>Generate unique videos from one source video</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-text"></i>
                  <h4>
                    <Translate>Recognize subtitles</Translate>
                  </h4>
                  <p>
                    <Translate>Automatically recognize subtitles and append them to the video</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-transfer"></i>
                  <h4>
                    <Translate>Translate subtitles</Translate>
                  </h4>
                  <p>
                    <Translate>Automatically translate subtitles to any language</Translate>
                  </p>
                </div>
                {/* <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-bot"></i>
                  <h4>
                    <Translate>AI Voiceover</Translate>
                  </h4>
                  <p>
                    <Translate>Automatically generate AI voiceover for videos</Translate>
                  </p>
                </div> */}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
