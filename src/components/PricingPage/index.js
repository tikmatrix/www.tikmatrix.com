import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import './pricing.css';

const plans = [
    {
        id: 'free',
        name: translate({
            id: 'pricing.free.name',
            message: 'Free',
            description: 'Free plan name'
        }),
        description: translate({
            id: 'pricing.free.description',
            message: 'Free users can connect unlimited devices and use all basic features except automation tasks',
            description: 'Free plan description'
        }),
        price: 0,
        device_count: 0,
        includes: [
            translate({
                id: 'pricing.unlimited_devices',
                message: 'Unlimited device connections',
                description: 'Unlimited device connections text'
            }),
            translate({
                id: 'pricing.free.all_free_features',
                message: 'All basic features (automation excluded)',
                description: 'Free plan basic features'
            }),
            translate({
                id: 'pricing.free.automation_disabled',
                message: 'Automation tasks disabled',
                description: 'Automation disabled text'
            }),
            translate({
                id: 'pricing.free.community_support',
                message: 'Community support',
                description: 'Community support text'
            })
        ]
    },
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
                id: 'pricing.starter.concurrent_tasks',
                message: 'Up to 5 concurrent automation tasks',
                description: 'Starter plan concurrent tasks'
            }),
            translate({
                id: 'pricing.unlimited_devices',
                message: 'Unlimited device connections',
                description: 'Unlimited device connections text'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.ticket_support',
                message: 'Dedicated ticket support',
                description: 'Dedicated ticket support text'
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
                id: 'pricing.pro.concurrent_tasks',
                message: 'Up to 20 concurrent automation tasks',
                description: 'Pro plan concurrent tasks'
            }),
            translate({
                id: 'pricing.unlimited_devices',
                message: 'Unlimited device connections',
                description: 'Unlimited device connections text'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.ticket_support',
                message: 'Dedicated ticket support',
                description: 'Dedicated ticket support text'
            })
        ]
    },
    {
        id: 'team',
        name: translate({
            id: 'pricing.team.name',
            message: 'Team',
            description: 'Team plan name'
        }),
        description: translate({
            id: 'pricing.team.description',
            message: 'For growing teams and companies',
            description: 'Team plan description'
        }),
        price: 99,
        device_count: 50,
        includes: [
            translate({
                id: 'pricing.team.concurrent_tasks',
                message: 'Up to 50 concurrent automation tasks',
                description: 'Team plan concurrent tasks'
            }),
            translate({
                id: 'pricing.unlimited_devices',
                message: 'Unlimited device connections',
                description: 'Unlimited device connections text'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.ticket_support',
                message: 'Dedicated ticket support',
                description: 'Dedicated ticket support text'
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
                id: 'pricing.business.concurrent_tasks',
                message: 'Up to 100 concurrent automation tasks',
                description: 'Business plan concurrent tasks'
            }),
            translate({
                id: 'pricing.unlimited_devices',
                message: 'Unlimited device connections',
                description: 'Unlimited device connections text'
            }),
            translate({
                id: 'pricing.all_features',
                message: 'All features included',
                description: 'All features included text'
            }),
            translate({
                id: 'pricing.ticket_support',
                message: 'Dedicated ticket support',
                description: 'Dedicated ticket support text'
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
                        <div className={clsx('box', idx === 2 && 'featured')} data-aos="fade-up" data-aos-delay={100 * (idx + 1)} key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className="plan-desc">{plan.description}</div>
                            <h4>
                                {plan.price === 0 ? (
                                    <Translate id="pricing.free_label" description="Free label">Free</Translate>
                                ) : (
                                    <>
                                        ${plan.price} <span>
                                            <Translate
                                                id="pricing.per_month_pc"
                                                description="Per month per PC text">
                                                Per Month / PC
                                            </Translate>
                                        </span>
                                    </>
                                )}
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
