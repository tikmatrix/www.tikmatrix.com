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

                <div className="row no-gutters">
                    <div className="col col--4 box" data-aos="fade-right">
                        <h3>
                            <Translate>Free</Translate>
                        </h3>
                        <h4>0$
                            <span>
                                <Translate>Per Month</Translate>
                            </span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Automatic registration</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Automatic login</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Automated account nurturing</Translate>
                            </span></li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Automatic video posting</Translate>
                            </span></li>
                            <li className="na"><i className="bx bx-x"></i>
                                <span>
                                    <Translate>Manage unlimited devices</Translate>
                                </span>
                            </li>
                            <li className="na"><i className="bx bx-x"></i> <span>
                                <Translate>Customer support</Translate>
                            </span></li>
                        </ul>
                        <a href="#" className="get-started-btn">
                            <Translate>Get Started</Translate>
                        </a>
                    </div>
                    <div className="col col--4 box featured" data-aos="fade-up">
                        <h3>
                            <Translate>Monthly</Translate>
                        </h3>
                        <h4>99$
                            <span>
                                <Translate>Per Month</Translate>
                            </span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Automatic registration</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Automatic login</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Automated account nurturing</Translate>
                            </span></li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Automatic video posting</Translate>
                            </span></li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Manage unlimited devices</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Customer support</Translate>
                            </span></li>
                        </ul>
                        <a href="#" className="get-started-btn">
                            <Translate>Get Started</Translate>
                        </a>
                        <div id="paypal-button-container-P-51N76453KY9797203MW6FJEY"></div>

                    </div>
                    <div className="col col--4 box" data-aos="fade-left">
                        <h3>
                            <Translate>Yearly</Translate>
                        </h3>
                        <h4>599$
                            <span>
                                <Translate>Per Year</Translate>
                            </span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Automatic registration</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Automatic login</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Automated account nurturing</Translate>
                            </span></li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Automatic video posting</Translate>
                            </span></li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Manage unlimited devices</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i> <span>
                                <Translate>Customer support</Translate>
                            </span></li>
                        </ul>
                        <a href="#" className="get-started-btn"><Translate>Get Started</Translate></a>
                        <div id="paypal-button-container-P-6S8294320E2240513MW6FRHI"></div>

                    </div>
                </div>
            </div>

        </section>
    );
}
