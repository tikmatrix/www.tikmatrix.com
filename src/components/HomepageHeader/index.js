import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';

export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className='hero shadow--lw' >
            <div className="container row ">
                <div className='col col--6'>
                    <Heading as="h1" className="hero__title">
                        {siteConfig.title}
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate>
                            TikMatrix is a powerful tool for batch controlling Android phones to achieve matrix-based operations.
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
                    </div>
                </div>
                <div className="col col--6">
                    <img
                        className="hero__img "
                        src="img/startup.png?v=1"
                        data-aos="fade-up"
                    />
                </div>

            </div>
        </header>
    );
}
