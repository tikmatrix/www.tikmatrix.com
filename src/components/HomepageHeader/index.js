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
                            Professional TikTok Account Management & Marketing Tool
                        </Translate>
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate>
                            Streamline your TikTok phone farm with advanced batch control and marketing automation
                        </Translate>
                    </p>
                    <div className="header-buttons">
                        <Link to="/Download" className="download-btn">
                            <i className="bx bx-download"></i>
                            <Translate>
                                Download TikMatrix
                            </Translate>
                        </Link>

                        <Link to="IgMatrix" className="link-btn">
                            <i className="bx bxl-instagram"></i>
                            <Translate>
                                IgMatrix
                            </Translate>
                        </Link>
                        <Link to="VideoMagic" className="link-btn">
                            <i className="bx bxs-video-plus"></i>
                            <Translate>
                                VideoMagic
                            </Translate>
                        </Link>
                    </div>
                </div>
                <div className="col col--6 image-slider">
                    <ImageSlider />
                </div>
            </div>
        </header>
    );
}
