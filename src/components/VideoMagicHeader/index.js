import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import './index.css';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import VideoMagicSlider from '../VideoMagicSlider';


export default function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header id="start" className='hero shadow--lw' >
            <div className="row">
                <div className='col col--6'>
                    <Heading as="h1" className="hero__title">
                        <Translate>
                            Video Magic is a tool that can generate unique videos
                        </Translate>
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate>
                            Video Magic is a professional video generation software designed for operators. It can generate unique videos for you, greatly enhancing operational efficiency
                        </Translate>
                    </p>
                    <div>
                        <a href="https://pro.api.tikmatrix.com/front-api/download-videomagic" className="download-btn"><i className="bx bxl-windows"></i>
                            <Translate>
                                Download for Windows
                            </Translate>
                        </a>

                    </div>
                </div>
                <div className="col col--6 image-slider">
                    <VideoMagicSlider />
                </div>

            </div>
        </header>
    );
}
