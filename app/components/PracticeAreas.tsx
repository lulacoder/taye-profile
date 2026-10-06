const practiceAreas = [
    {
        icon: '⚖️',
        title: 'Criminal Defense',
        description: 'Expert defense representation with 9 years of prosecutorial insight. Understanding both sides of criminal law.',
    },
    {
        icon: '📋',
        title: 'Civil Litigation',
        description: 'Comprehensive civil dispute resolution including contracts, property disputes, and commercial conflicts.',
    },
    {
        icon: '🏢',
        title: 'Corporate Law',
        description: 'Business formation, contracts, compliance, and corporate governance for Ethiopian enterprises.',
    },
    {
        icon: '👨‍👩‍👧‍👦',
        title: 'Family Law',
        description: 'Compassionate guidance through divorce, custody, inheritance, and family dispute matters.',
    },
    {
        icon: '📜',
        title: 'Legal Advisory',
        description: 'Strategic legal counsel for individuals and businesses navigating Ethiopian law.',
    },
    {
        icon: '🤝',
        title: 'Contract Law',
        description: 'Drafting, review, and negotiation of contracts to protect your interests.',
    },
];

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="section bg-background-alt">
            <div className="container mx-auto">
                {/* Section Heading */}
                <div className="section-heading">
                    <div className="accent-line" />
                    <h2 className="heading-lg">
                        Practice <span className="text-gradient">Areas</span>
                    </h2>
                    <p>
                        Comprehensive legal services backed by decades of experience in Ethiopian law.
                        From criminal defense to corporate counsel, we&apos;re here to help.
                    </p>
                </div>

                {/* Practice Areas Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {practiceAreas.map((area, index) => (
                        <div
                            key={index}
                            className="card p-8 group cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-3xl mb-5 group-hover:bg-accent/10 transition-colors">
                                {area.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                                {area.title}
                            </h3>
                            <p className="text-foreground-muted text-sm leading-relaxed">
                                {area.description}
                            </p>

                            {/* Arrow Link */}
                            <div className="mt-5 flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-foreground-muted mb-6">
                        Don&apos;t see your specific legal need? We handle many additional practice areas.
                    </p>
                    <a href="#contact" className="btn btn-secondary">
                        Discuss Your Case
                    </a>
                </div>
            </div>
        </section>
    );
}
