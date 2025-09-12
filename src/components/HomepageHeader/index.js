import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import ImageSlider from '../ImageSlider';


export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header id="start" className='hero shadow--lw' >
            <div className="row header-row">
                <div className='col col--6 header-content'>
                    <Heading as="h1" className="hero__title">
                        <Translate>
                            Professional TikTok Account Management & Marketing Tool for Windows & Mac
                        </Translate>
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate>
                            Streamline your Android TikTok phone farm with advanced batch control and marketing automation
                        </Translate>
                    </p>
                    <div className="header-buttons">
                        <Link to="/Download" className="download-btn">
                            <i className="bx bx-download"></i>
                            <Translate>
                                Download TikZenX
                            </Translate>
                        </Link>

                        <Link to="docs/intro" className="link-btn">
                            <i className="bx bx-book"></i>
                            <Translate>
                                Tutorial
                            </Translate>
                        </Link>

                    </div>
                </div>
                <div className="col col--6 image-slider">
                    {/* <ImageSlider /> */}
                </div>
            </div>
        </header>
    );
}
