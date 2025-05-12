import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import './Download.css';

/**
 * 下载页面组件
 * 支持通过URL参数选择不同的软件：
 * - ?software=TikMatrix - 显示TikMatrix的下载信息（默认）
 * - ?software=VideoMagic - 显示VideoMagic的下载信息
 */
export default function Download() {
  const location = useLocation();
  const [software, setSoftware] = useState('TikMatrix');

  useEffect(() => {
    // 从URL参数中获取软件类型
    const searchParams = new URLSearchParams(location.search);
    const softwareParam = searchParams.get('software');
    
    if (softwareParam && ['TikMatrix', 'VideoMagic'].includes(softwareParam)) {
      setSoftware(softwareParam);
    }
  }, [location]);

  // 根据软件类型设置下载链接
  const getDownloadUrl = (platform) => {
    const baseUrl = 'https://pro.api.tikmatrix.com/front-api';
    if (software === 'TikMatrix') {
      return `${baseUrl}/download-${platform}?app=tikmatrix`;
    } else if (software === 'VideoMagic') {
      return `${baseUrl}/download-${platform}?app=videomagic`;
    }
  };

  // 获取应用名称
  const getAppName = () => software === 'TikMatrix' ? 'TikMatrix' : 'VideoMagic';
  
  // 构造MacOS应用路径
  const macAppPath = `/Applications/${getAppName()}.app`;

  return (
    <Layout
      title={translate({
        id: 'download.title',
        message: `Download ${getAppName()}`,
        description: 'The title of the download page'
      })}
      description={translate({
        id: 'download.description',
        message: `Download ${getAppName()} for Windows, Mac and Linux`,
        description: 'The description of the download page'
      })}>
      <main className="download-page">
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1 className="download-title">
                Download {getAppName()}
              </h1>
              <p className="download-subtitle">
                Choose your platform to download {getAppName()}
              </p>
              
            </div>
          </div>
          
          <div className="row download-buttons">
            <div className="col col--4">
              <a href={getDownloadUrl('windows')} className="download-card">
                <div className="platform-icon">
                  <i className="bx bxl-windows"></i>
                </div>
                <h3>Windows</h3>
                <p>Windows 10/11 (64-bit)</p>
                <div className="download-btn">
                  Download for Windows
                </div>
              </a>
            </div>
            
            <div className="col col--4">
              <div className="download-card mac-card">
                <div className="platform-icon">
                  <i className="bx bxl-apple"></i>
                </div>
                <h3>Mac</h3>
                <p>macOS 10.15 or later</p>
                <a href={getDownloadUrl('mac')} className="download-btn">
                  Download for Mac
                </a>
                <p className="mac-install-tip">
                  After installation, please run the following command in Terminal to allow the app to run:
                  <code>xattr -cr {macAppPath}</code>
                </p>
              </div>
            </div>
            
            <div className="col col--4">
              <div className="download-card linux-card">
                <div className="platform-icon">
                  <i className="bx bxl-tux"></i>
                </div>
                <h3>Linux</h3>
                <p>Coming Soon</p>
                <div className="download-btn disabled">
                  Under Development
                </div>
                <p className="coming-soon-text">
                  Linux version is currently under development
                </p>
              </div>
            </div>
          </div>
          
          <div className="row system-requirements">
            <div className="col col--12">
              <h2>System Requirements</h2>
              <ul>
                <li>Operating System: Windows 10/11, macOS 10.15+, or Ubuntu 20.04+</li>
                <li>Processor: Intel Core i5 or equivalent</li>
                <li>Memory: 8 GB RAM</li>
                <li>Storage: 500 MB available space</li>
                <li>Internet Connection: Required</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 