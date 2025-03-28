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
            <div className="row header-row">
                <div className='col col--6 header-content'>
                    <Heading as="h1" className="hero__title">
                        <Translate>
                            Batch Generating Unique Videos
                        </Translate>
                    </Heading>
                    <p className="hero__subtitle">
                        <Translate>
                            VideoMagic is a Software for Batch Generating Unique Videos
                        </Translate>
                    </p>
                    <div>
                        <a href="https://pro.api.tikmatrix.com/front-api/download-videomagic" className="download-btn"><i className="bx bxl-windows"></i>
                            <Translate>
                                Download VideoMagic
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
