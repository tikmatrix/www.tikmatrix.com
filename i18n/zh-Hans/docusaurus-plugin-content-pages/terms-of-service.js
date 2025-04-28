import React from 'react';
import Layout from '@theme/Layout';
import styles from './terms-of-service.module.css';

export default function TermsOfService() {
    return (
        <Layout
            title="服务条款"
            description="TikMatrix 服务条款 - 使用我们平台的规则和指南">
            <div className="container">
                <div className={styles.termsContent}>
                    <h1>服务条款</h1>
                    <p>最后更新日期: {new Date().toISOString().split('T')[0]}</p>

                    <h2>1. 条款接受</h2>
                    <p>通过访问或使用 TikMatrix 网站和服务，您同意受这些服务条款以及所有适用的法律法规的约束。如果您不同意这些条款中的任何一条，您将被禁止使用或访问本网站。</p>

                    <h2>2. 使用许可</h2>
                    <p>允许临时下载 TikMatrix 网站上的材料（信息或软件）仅供个人、非商业性的临时浏览。这是授予许可，而非所有权转让，根据此许可，您不得：</p>
                    <ul>
                        <li>修改或复制材料</li>
                        <li>将材料用于任何商业目的或公开展示</li>
                        <li>尝试对 TikMatrix 网站包含的任何软件进行逆向工程</li>
                        <li>从材料中删除任何版权或其他专有标记</li>
                        <li>将材料转让给他人或在任何其他服务器上"镜像"材料</li>
                    </ul>
                    <p>如果您违反任何这些限制，本许可将自动终止，并可能随时被 TikMatrix 终止。</p>

                    <h2>3. 服务和订阅</h2>
                    <p>TikMatrix 提供用于 TikTok 账户管理和营销自动化的软件工具。访问这些服务可能需要订阅或一次性付款。通过订阅我们的服务，您同意：</p>
                    <ul>
                        <li>提供准确和完整的账单信息</li>
                        <li>支付产生费用时有效的所有费用</li>
                        <li>不将服务用于任何非法目的或违反任何适用法律或法规</li>
                    </ul>

                    <h2>4. 用户行为</h2>
                    <p>在使用我们的服务时，您同意不会：</p>
                    <ul>
                        <li>违反任何适用的法律或法规</li>
                        <li>侵犯他人的权利</li>
                        <li>分发恶意软件或从事其他有害活动</li>
                        <li>尝试未经授权访问我们的系统或其他用户的账户</li>
                        <li>以任何可能损害、禁用、使负担过重或损害我们服务的方式使用我们的服务</li>
                    </ul>

                    <h2>5. 知识产权</h2>
                    <p>TikMatrix 名称、标志、软件和内容是 TikMatrix 及其许可方的专属财产。我们的服务和通过我们的服务包含或提供的所有内容均受知识产权法保护。</p>

                    <h2>6. 免责声明</h2>
                    <p>TikMatrix 网站上的材料和提供的服务均按"原样"提供。TikMatrix 不做任何明示或暗示的保证，并特此否认所有其他保证，包括但不限于对特定用途的适销性或适用性的暗示保证。</p>

                    <h2>7. 责任限制</h2>
                    <p>在任何情况下，TikMatrix 或其供应商均不对因使用或无法使用材料或服务而产生的任何损害负责，即使 TikMatrix 已被告知可能发生此类损害。</p>

                    <h2>8. 适用法律</h2>
                    <p>这些条款应受 TikMatrix 成立地管辖法律的管辖并按其解释，不考虑其法律冲突规定。</p>

                    <h2>9. 条款变更</h2>
                    <p>TikMatrix 保留随时修改这些条款的权利。我们将通过更新这些条款的"最后更新日期"来通知用户任何更改。您在任何更改后继续使用我们的网站和服务表示您接受修改后的条款。</p>

                    <h2>10. 联系我们</h2>
                    <p>如果您对这些条款有任何疑问，请联系我们：</p>
                    <p>电子邮件：support@tikmatrix.com</p>
                </div>
            </div>
        </Layout>
    );
} 