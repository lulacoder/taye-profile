export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 gradient-hero" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-light/20 rounded-full blur-3xl" />
                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">
                            Trusted Legal Counsel Since 2002
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1
                        className="heading-xl text-white mb-6 animate-fade-in-up"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Justice Through{' '}
                        <span className="text-gradient">Experience</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Over <strong className="text-accent">23 years</strong> of dedicated legal service.
                        Former Federal Prosecutor. Now your trusted advocate in Addis Ababa.
                    </p>

                    {/* Stats Row */}
                    <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up delay-300">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-playfair)' }}>23+</div>
                            <div className="text-white/70 text-sm">Years Experience</div>
                        </div>
                        <div className="w-px h-16 bg-white/20 hidden sm:block" />
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-playfair)' }}>9</div>
                            <div className="text-white/70 text-sm">Years Prosecutor</div>
                        </div>
                        <div className="w-px h-16 bg-white/20 hidden sm:block" />
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent" style={{ fontFamily: 'var(--font-playfair)' }}>1000+</div>
                            <div className="text-white/70 text-sm">Cases Handled</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                        <a href="#contact" className="btn btn-primary text-base px-8 py-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Schedule Consultation
                        </a>
                        <a href="#about" className="btn btn-white text-base px-8 py-4">
                            Learn More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
