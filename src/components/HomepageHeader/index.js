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
        <header className='hero shadow--lw' >
            <div className="row">
                <div className='col col--6'>
                    <Heading as="h1" className="hero__title">
                        <Translate>
                            TikMatrix is a TikTok group control operation tool
                        </Translate>
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate>
                            TikMatrix is a professional TikTok matrix software designed for operators. It controls multiple Android phones via a computer for automatic registration, login, account nurturing, messaging, and posting, greatly enhancing operational efficiency
                        </Translate>
                    </p>
                    <div>
                        <a href="https://api.tikmatrix.com/download" className="download-btn"><i className="bx bxl-windows"></i>
                            <Translate>
                                Download for Windows
                            </Translate>
                        </a>
                        <a href="#contact" className="download-btn"><i className="bx bxl-telegram"></i>
                            <Translate>
                                Contact
                            </Translate>
                        </a>
                        <Link to="/docs/intro" className="download-btn">
                            <i className="bx bxs-book"></i>
                            <Translate>
                                Get Started
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
