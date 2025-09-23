import './styles.css';
import Translate, { translate } from '@docusaurus/Translate';

export default function HomepageFeatures() {
    return (
        <section id="vs" className="features section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>
                        <Translate>Why TikMatrix?</Translate>
                    </h2>
                    <p>
                        <Translate>Our Competitive Advantages</Translate>
                    </p>
                    <p>
                        <Translate>
                            TikMatrix delivers at least 30% higher engagement compared to similar products, with advanced real-device technology that ensures complete account safety.
                        </Translate>
                    </p>
                    <p>
                        <Translate>
                            Our proprietary real device matrix system perfectly avoids TikTok's risk control measures, resulting in an extremely low account suspension rate.
                        </Translate>
                    </p>
                </div>

                <div className="featuresRow">
                    {/* 表头行 */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Features</Translate>
                    </div>
                    <div className="featuresCol featuresTitle">
                        <Translate>TikMatrix</Translate>
                    </div>
                    <div className="featuresCol featuresTitle">
                        <Translate>Fingerprint Browser</Translate>
                    </div>
                    <div className="featuresCol featuresTitle">
                        <Translate>API Protocol</Translate>
                    </div>
                    {/* Account Safe */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Account Safe</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span>★★★★★</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span>★★★★</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span>★</span>
                    </div>                    {/* Automatic registration */}
                    <div className="featuresCol featuresTitle" style={{ opacity: 0.5 }}>
                        <strike><Translate>Automatic registration</Translate></strike> <span style={{ color: '#ff4444', fontSize: '12px' }}>[DISCONTINUED]</span>
                    </div>
                    <div className="featuresCol featuresDetail" style={{ opacity: 0.5 }}>
                        <span className="cross">❌</span>
                    </div>
                    <div className="featuresCol featuresDetail" style={{ opacity: 0.5 }}>
                        <span className="cross">❌</span>
                    </div>
                    <div className="featuresCol featuresDetail" style={{ opacity: 0.5 }}>
                        <span className="cross">❌</span>
                    </div>
                    {/* Automated account nurturing */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Automated account nurturing</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="cross">❌</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="cross">❌</span>
                    </div>
                    {/* Automated Comment */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Automated Comment</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="cross">❌</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="cross">❌</span>
                    </div>
                    {/* Automated Message */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Automated Message</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    {/* Automated Follow */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Automated Follow</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    {/* Automatic video posting */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Automatic video posting</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="cross">❌</span>
                    </div>
                    {/* Automatic Capture */}
                    <div className="featuresCol featuresTitle">
                        <Translate>Automatic Capture</Translate>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                    <div className="featuresCol featuresDetail">
                        <span className="checkmark">✅</span>
                    </div>
                </div>
            </div>
        </section>
    );
}