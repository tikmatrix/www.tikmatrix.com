import clsx from 'clsx';
import './pricing.css';

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        description: 'For individuals and small teams',
        price: 29,
        device_count: 5,
        includes: [
            'Manage up to 5 phones',
            'All features included',
            'Dedicated support & Telegram 1:1'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        description: 'For professionals and small businesses',
        price: 59,
        device_count: 20,
        includes: [
            'Manage up to 20 phones',
            'All features included',
            'Dedicated support & Telegram 1:1'
        ]
    },
    {
        id: 'business',
        name: 'Business',
        description: 'For large enterprises',
        price: 149,
        device_count: 100,
        includes: [
            'Manage up to 100 phones',
            'All features included',
            'Dedicated support & Telegram 1:1'
        ]
    }
];

export default function PricingPage() {
    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title">
                    <h2>Pricing</h2>
                    <p>Flexible plans for everyone. Enjoy 30% off with annual billing!</p>
                </div>
                <div className="row">
                    {plans.map((plan, idx) => (
                        <div className={clsx('box', idx === 1 && 'featured')} data-aos="fade-up" data-aos-delay={100 * (idx + 1)} key={plan.id}>
                            <h3>{plan.name}</h3>
                            <div className="plan-desc">{plan.description}</div>
                            <h4>
                                ${plan.price} <span>Per Month / PC</span>
                            </h4>
                            <ul>
                                {plan.includes.map((item, i) => (
                                    <li key={i}><i className="bx bx-check"></i> <span>{item}</span></li>
                                ))}
                            </ul>
                            <a href="/Download" className="get-started-btn">
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
