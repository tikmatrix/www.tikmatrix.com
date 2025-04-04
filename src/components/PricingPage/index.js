import clsx from 'clsx';
import './pricing.css';
import Translate, { translate } from '@docusaurus/Translate';

export default function PricingPage() {
    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <Translate>Pricing</Translate>
                    </h2>
                    <p>
                        <Translate>Our plans</Translate>
                    </p>
                </div>

                <div className="row">
                    <div className="box" data-aos="fade-up" data-aos-delay="100">
                        <h3>
                            <Translate>Free</Translate>
                        </h3>
                        <h4>
                            0$ <span><Translate>Per Month</Translate></span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Basic Automation</Translate>
                                </span>
                                <div className="feature-details">
                                    <Translate>Comments, Messages, Follows</Translate>
                                </div>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Content Management</Translate>
                                </span>
                                <div className="feature-details">
                                    <Translate>Video posting, Account nurturing</Translate>
                                </div>
                            </li>
                        </ul>
                        <a href="#start" className="get-started-btn">
                            <Translate>Get Started</Translate>
                        </a>
                    </div>
                    <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                        <h3>
                            <Translate>Monthly</Translate>
                        </h3>
                        <h4>
                            99$ <span><Translate>Per Month</Translate></span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Account Setup</Translate>
                                </span>
                                <div className="feature-details">
                                    <Translate>Automatic registration & login</Translate>
                                </div>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>All Free Features</Translate>
                                </span>
                                <div className="feature-details">
                                    <Translate>Automation & Content Management</Translate>
                                </div>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Premium Benefits</Translate>
                                </span>
                                <div className="feature-details">
                                    <Translate>Unlimited devices, Customer support</Translate>
                                </div>
                            </li>
                        </ul>
                        <a href="#start" className="get-started-btn">
                            <Translate>Get Started</Translate>
                        </a>
                    </div>
                    <div className="box" data-aos="fade-up" data-aos-delay="300">
                        <h3>
                            <Translate>Yearly</Translate>
                        </h3>
                        <h4>
                            599$ <span><Translate>Per Year</Translate></span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>All Monthly Features</Translate>
                                </span>
                                <div className="feature-details">
                                    <Translate>Save 50% compared to monthly plan</Translate>
                                </div>
                            </li>
                        </ul>
                        <a href="#start" className="get-started-btn">
                            <Translate>Get Started</Translate>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
