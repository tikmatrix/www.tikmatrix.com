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
                    <Translate>Supports 100+ phones mirroring to a computer, with synchronized operation</Translate>
                  </p>
                </div>                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="100" style={{ opacity: 0.5 }}>
                  <i className="bx bx-registered"></i>
                  <h4>
                    <Translate>Automatic registration</Translate> <span style={{ color: '#ff4444', fontSize: '12px', fontWeight: 'bold' }}>[DISCONTINUED]</span>
                  </h4>
                  <p>
                    <strike><Translate>Create new TikTok accounts with email registration and password setup</Translate></strike>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-log-in"></i>
                  <h4>
                    <Translate>Automatic login</Translate>
                  </h4>
                  <p>
                    <Translate>Batch login to TikTok accounts with account list management</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-id-card"></i>
                  <h4>
                    <Translate>Automatic profile setup</Translate>
                  </h4>
                  <p>
                    <Translate>Set up account profiles including avatars, nicknames, signatures, and usernames</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-search"></i>
                  <h4>
                    <Translate>Automatic account matching</Translate>
                  </h4>
                  <p>
                    <Translate>Recognize and match TikTok accounts from phones to add to account list</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bxs-pointer"></i>
                  <h4>
                    <Translate>Account warmup</Translate>
                  </h4>
                  <p>
                    <Translate>Warm up accounts by searching keywords, watching videos, following, liking, commenting, and favoriting</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-paper-plane"></i>
                  <h4>
                    <Translate>Automatic posting</Translate>
                  </h4>
                  <p>
                    <Translate>Publish videos or images to TikTok with batch posting capabilities</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="700">
                  <i className="bx bxs-bell-plus"></i>
                  <h4>
                    <Translate>User engagement boost</Translate>
                  </h4>
                  <p>
                    <Translate>Increase user engagement by following or unfollowing accounts in bulk</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="800">
                  <i className="bx bx-heart"></i>
                  <h4>
                    <Translate>Post engagement boost</Translate>
                  </h4>
                  <p>
                    <Translate>Increase engagement on posts by liking, sharing, favoriting, and viewing them in bulk</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="900">
                  <i className="bx bx-message-rounded-dots"></i>
                  <h4>
                    <Translate>Mass direct messaging</Translate>
                  </h4>
                  <p>
                    <Translate>Send messages to multiple TikTok accounts in bulk with personalized content</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1000">
                  <i className="bx bxs-arrow-to-bottom"></i>
                  <h4>
                    <Translate>User scraping</Translate>
                  </h4>
                  <p>
                    <Translate>Scrape TikTok usernames from followers lists or keyword searches</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1100">
                  <i className="bx bx-trash"></i>
                  <h4>
                    <Translate>Post management</Translate>
                  </h4>
                  <p>
                    <Translate>Remove posts based on their view count for content optimization</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1200">
                  <i className="bx bx-message-dots"></i>
                  <h4>
                    <Translate>Mass commenting</Translate>
                  </h4>
                  <p>
                    <Translate>Comment on multiple TikTok posts in bulk with customizable content and emojis</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1300">
                  <i className="bx bx-broadcast"></i>
                  <h4>
                    <Translate>Live stream boost</Translate>
                  </h4>
                  <p>
                    <Translate>Control farm accounts to watch, like, and comment on target live streams</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1400">
                  <i className="bx bx-rocket"></i>
                  <h4>
                    <Translate>Super boost</Translate>
                  </h4>
                  <p>
                    <Translate>Comprehensive automation combining multiple engagement strategies with AI-generated comments</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1500">
                  <i className="bx bx-chat"></i>
                  <h4>
                    <Translate>Comment boost</Translate>
                  </h4>
                  <p>
                    <Translate>Boost engagement on specific comments by liking and replying to them in bulk</Translate>
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Technical Advantages Section */}
        <div className="section-title" style={{ marginTop: '80px' }}>
          <h2>
            <Translate>Technical Advantages</Translate>
          </h2>
          <p>
            <Translate>Advanced Technology for Superior Performance</Translate>
          </p>
        </div>

        <div className="row no-gutters">
          <div className="col col--12 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col col--3 icon-box" data-aos="fade-up">
                  <i className="bx bx-brain"></i>
                  <h4>
                    <Translate>AI-Generated Comments</Translate>
                  </h4>
                  <p>
                    <Translate>Generate intelligent and contextual comments through ChatGPT API integration</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="100">
                  <i className="bx bx-shuffle"></i>
                  <h4>
                    <Translate>Script Parameter Randomization</Translate>
                  </h4>
                  <p>
                    <Translate>Randomized script parameters to avoid behavior detection patterns</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-time"></i>
                  <h4>
                    <Translate>Scheduled Tasks</Translate>
                  </h4>
                  <p>
                    <Translate>Automated scheduling for unattended operation</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-mouse"></i>
                  <h4>
                    <Translate>Human-like Click Simulation</Translate>
                  </h4>
                  <p>
                    <Translate>Script engine simulates natural human clicking with randomized button offset</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-trending-up"></i>
                  <h4>
                    <Translate>Natural Swipe Gestures</Translate>
                  </h4>
                  <p>
                    <Translate>Simulates natural right-hand arc swipe trajectories like real human interaction</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-text"></i>
                  <h4>
                    <Translate>Character-by-Character Input</Translate>
                  </h4>
                  <p>
                    <Translate>Text input mimics human typing patterns with character-by-character simulation</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="600">
                  <i className="bx bx-desktop"></i>
                  <h4>
                    <Translate>Computer-based Execution</Translate>
                  </h4>
                  <p>
                    <Translate>Scripts run on computer to avoid mobile device detection</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="700">
                  <i className="bx bx-shield"></i>
                  <h4>
                    <Translate>No Root Required</Translate>
                  </h4>
                  <p>
                    <Translate>No root permissions needed, ensuring device environment security</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="800">
                  <i className="bx bx-lock"></i>
                  <h4>
                    <Translate>Private Local Deployment</Translate>
                  </h4>
                  <p>
                    <Translate>Completely local private deployment ensuring user data security</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="900">
                  <i className="bx bx-support"></i>
                  <h4>
                    <Translate>Expert Technical Team</Translate>
                  </h4>
                  <p>
                    <Translate>Powerful technical team with real-time maintenance and updates ensuring script reliability</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1000">
                  <i className="bx bx-code"></i>
                  <h4>
                    <Translate>Open Source Client</Translate>
                  </h4>
                  <p>
                    <Translate>Open source client code allows users to customize their own client</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1100">
                  <i className="bx bx-briefcase"></i>
                  <h4>
                    <Translate>Work Profile Support</Translate>
                  </h4>
                  <p>
                    <Translate>Supports work profile enterprise space for professional use</Translate>
                  </p>
                </div>
                <div className="col col--3 icon-box" data-aos="fade-up" data-aos-delay="1200">
                  <i className="bx bx-group"></i>
                  <h4>
                    <Translate>24/7 Technical Support</Translate>
                  </h4>
                  <p>
                    <Translate>Strong technical support team with open community ecosystem</Translate>:&nbsp;
                    <a href="https://t.me/tikmatrix_chat" target="_blank" rel="noopener noreferrer">
                      <Translate>Telegram Support</Translate>
                    </a> |
                    <a href="https://t.me/tikmatrix_bot" target="_blank" rel="noopener noreferrer">
                      <Translate>24h AI Assistant</Translate>
                    </a>
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
