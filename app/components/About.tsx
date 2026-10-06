const timeline = [
    {
        year: '2002',
        title: 'Federal Prosecutor',
        description: 'Joined the Federal Public Prosecutor\'s office (Ministry of Justice), beginning nearly a decade of public service.',
        icon: '⚖️',
    },
    {
        year: '2011',
        title: 'Private Practice',
        description: 'Established independent practice as Attorney at Law and Legal Adviser, serving clients across Ethiopia.',
        icon: '🏛️',
    },
    {
        year: 'Today',
        title: 'Law Office',
        description: 'Operating Taye Bezabih Fino Law Office in Kirkos, Addis Ababa, with 23+ years of combined experience.',
        icon: '🌟',
    },
];

export default function About() {
    return (
        <section id="about" className="section bg-background">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Image & Credentials */}
                    <div className="relative">
                        {/* Decorative frame */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl" />

                        {/* Main image container */}
                        <div className="relative bg-primary rounded-2xl p-8 overflow-hidden">
                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                    </pattern>
                                    <rect width="100" height="100" fill="url(#grid)" />
                                </svg>
                            </div>

                            {/* Photo placeholder with professional styling */}
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-primary-light flex items-center justify-center">
                                <div className="text-center text-white/80 p-8">
                                    <div className="text-7xl mb-4">⚖️</div>
                                    <p className="text-lg font-medium" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        Ato Taye Bezabih Fino
                                    </p>
                                    <p className="text-sm text-white/60 mt-2">Attorney at Law</p>
                                </div>
                            </div>

                            {/* Credentials badge */}
                            <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-xl shadow-xl">
                                <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>23+</div>
                                <div className="text-xs uppercase tracking-wide">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div>
                        <div className="accent-line !ml-0" />
                        <h2 className="heading-lg mb-6">
                            A Legacy of <span className="text-gradient">Justice</span>
                        </h2>

                        <p className="text-foreground-muted text-lg mb-6 leading-relaxed">
                            Ato Taye Bezabih Fino is a distinguished Ethiopian attorney with over two decades
                            of legal experience. His journey from Federal Prosecutor to trusted private counsel
                            has equipped him with unparalleled expertise in both criminal and civil law.
                        </p>

                        <p className="text-foreground-muted mb-8 leading-relaxed">
                            Educated at the prestigious Ethiopian Civil Service University, Ato Taye combines
                            academic excellence with practical wisdom gained through years of courtroom experience.
                            His commitment to justice and client advocacy has made him one of Addis Ababa&apos;s
                            most respected legal professionals.
                        </p>

                        {/* Timeline */}
                        <div className="space-y-6">
                            {timeline.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-accent font-bold">{item.year}</span>
                                            <span className="w-8 h-px bg-accent/30" />
                                            <span className="font-semibold text-primary">{item.title}</span>
                                        </div>
                                        <p className="text-foreground-muted text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
