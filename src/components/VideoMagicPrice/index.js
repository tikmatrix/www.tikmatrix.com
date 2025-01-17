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
                    <div className="box" data-aos="fade-right">
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
                                    <Translate>Video download</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Video generate</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Recognize subtitles</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Translate subtitles</Translate>
                                </span>
                            </li>
                            <li className="na"><i className="bx bx-x"></i>
                                <span>
                                    <Translate>Unlimited process tasks</Translate>
                                </span>
                            </li>
                            <li className="na"><i className="bx bx-x"></i>
                                <span>
                                    <Translate>Customer support</Translate>
                                </span>
                            </li>
                        </ul>
                        <a href="#contact" className="get-started-btn">
                            <Translate>Contact</Translate>
                        </a>
                    </div>
                    <div className="box featured" data-aos="fade-up">
                        <h3>
                            <Translate>Monthly</Translate>
                        </h3>
                        <h4>19$
                            <span>
                                <Translate>Per Month</Translate>
                            </span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Video download</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Video generate</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Recognize subtitles</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Translate subtitles</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Unlimited process tasks</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Customer support</Translate>
                                </span>
                            </li>
                        </ul>
                        <a href="#contact" className="get-started-btn">
                            <Translate>Contact</Translate>
                        </a>

                    </div>
                    <div className="box" data-aos="fade-left">
                        <h3>
                            <Translate>Yearly</Translate>
                        </h3>
                        <h4>120$
                            <span>
                                <Translate>Per Year</Translate>
                            </span>
                        </h4>
                        <ul>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Video download</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Video generate</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Recognize subtitles</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Translate subtitles</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Unlimited process tasks</Translate>
                                </span>
                            </li>
                            <li><i className="bx bx-check"></i>
                                <span>
                                    <Translate>Customer support</Translate>
                                </span>
                            </li>
                        </ul>
                        <a href="#contact" className="get-started-btn">
                            <Translate>Contact</Translate>
                        </a>

                    </div>
                </div>
            </div>

        </section>
    );
}
