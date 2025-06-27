import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import './pricing.css';

const plans = [
    {
        id: 'starter',
        name: translate({
            id: 'pricing.starter.name',
            message: 'Starter',
            description: 'Starter plan name'
        }),
        description: translate({
            id: 'pricing.starter.description',
            message: 'For individuals and small teams',
            description: 'Starter plan description'
        }),
        price: 29,
        device_count: 5,
        includes: [
            translate({
                id: 'pricing.starter.manage_phones',
                message: 'Manage up to 5 phones',
                description: 'Starter plan feature'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.dedicated_support',
                message: 'Dedicated support & Telegram 1:1',
                description: 'Dedicated support text'
            })
        ]
    },
    {
        id: 'pro',
        name: translate({
            id: 'pricing.pro.name',
            message: 'Pro',
            description: 'Pro plan name'
        }),
        description: translate({
            id: 'pricing.pro.description',
            message: 'For professionals and small businesses',
            description: 'Pro plan description'
        }),
        price: 59,
        device_count: 20,
        includes: [
            translate({
                id: 'pricing.pro.manage_phones',
                message: 'Manage up to 20 phones',
                description: 'Pro plan feature'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.dedicated_support',
                message: 'Dedicated support & Telegram 1:1',
                description: 'Dedicated support text'
            })
        ]
    },
    {
        id: 'business',
        name: translate({
            id: 'pricing.business.name',
            message: 'Business',
            description: 'Business plan name'
        }),
        description: translate({
            id: 'pricing.business.description',
            message: 'For large enterprises',
            description: 'Business plan description'
        }),
        price: 149,
        device_count: 100,
        includes: [
            translate({
                id: 'pricing.business.manage_phones',
                message: 'Manage up to 100 phones',
                description: 'Business plan feature'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.dedicated_support',
                message: 'Dedicated support & Telegram 1:1',
                description: 'Dedicated support text'
            })
        ]
    }
];

export default function PricingPage() {
    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <Translate
                            id="pricing.title"
                            description="Pricing section title">
                            Pricing
                        </Translate>
                    </h2>
                    <p>
                        <Translate
                            id="pricing.subtitle"
                            description="Pricing section subtitle">
                            Flexible plans for everyone. Enjoy 30% off with annual billing!
                        </Translate>
                    </p>
                </div>
                <div className="row">
                    {plans.map((plan, idx) => (
                        <div className={clsx('box', idx === 1 && 'featured')} data-aos="fade-up" data-aos-delay={100 * (idx + 1)} key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className="plan-desc">{plan.description}</div>
                            <h4>
                                ${plan.price} <span>
                                    <Translate
                                        id="pricing.per_month_pc"
                                        description="Per month per PC text">
                                        Per Month / PC
                                    </Translate>
                                </span>
                            </h4>
                            <ul>
                                {plan.includes.map((item, i) => (
                                    <li key={i}><i className="bx bx-check"></i> <span>{item}</span></li>
                                ))}
                            </ul>
                            <a href="/Download" className="get-started-btn">
                                <Translate
                                    id="pricing.get_started"
                                    description="Get started button text">
                                    Get Started
                                </Translate>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
