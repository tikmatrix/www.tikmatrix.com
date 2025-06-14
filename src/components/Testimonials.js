import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        stars: 5,
        text: "TikMatrix is a lifesaver for our studio! We can control so many phones at once, and the automation is super powerful. Posting and account farming are so much easier now. TikTok anti-detection really works—our posts get more natural traffic than before.",
        user: "StudioOps",
        usage: "1 year",
        avatar: "/img/user-1.png",
    },
    {
        stars: 5,
        text: "After using TikMatrix, our ad team’s efficiency shot up. The automation scripts save us tons of manual work, and accounts stay safe—no bans so far. Perfect for agencies like us!",
        user: "AdTeam Lee",
        usage: "10 months",
        avatar: "/img/user-2.png",
    },
    {
        stars: 5,
        text: "Controlling 100 phones at once is a game changer. Batch operations are super convenient, and our TikTok posts get more organic reach. Great for overseas marketing, and the price is really fair!",
        user: "MarketPro",
        usage: "6 months",
        avatar: "/img/user-3.png",
    },
    {
        stars: 5,
        text: "Tried other tools before, but TikMatrix is the most worry-free. Automation and anti-ban are both reliable. Perfect for marketing teams that need high-efficiency batch operations.",
        user: "Ken from Marketing",
        usage: "8 months",
        avatar: "/img/user-4.png",
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">Real User Testimonials</h2>
            <p className="testimonials-subtitle">What TikMatrix Users Say</p>
            <div className="testimonials-list">
                {testimonials.map((t, i) => (
                    <div className="testimonial-card" key={i}>
                        <div className="testimonial-stars">
                            {Array.from({ length: t.stars }).map((_, idx) => (
                                <span key={idx} className="star">★</span>
                            ))}
                            {t.stars < 5 && Array.from({ length: 5 - t.stars }).map((_, idx) => (
                                <span key={idx} className="star inactive">★</span>
                            ))}
                        </div>
                        <div className="testimonial-text">{t.text}</div>
                        <div className="testimonial-user">
                            <img className="testimonial-avatar" src={t.avatar} alt={t.user} />
                            <span className="testimonial-username">{t.user}</span>
                        </div>
                        <div className="testimonial-usage">Usage: {t.usage}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
