const footerLinks = {
    quickLinks: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Practice Areas', href: '#practice-areas' },
        { label: 'Contact', href: '#contact' },
    ],
    practiceAreas: [
        { label: 'Criminal Defense', href: '#practice-areas' },
        { label: 'Civil Litigation', href: '#practice-areas' },
        { label: 'Corporate Law', href: '#practice-areas' },
        { label: 'Family Law', href: '#practice-areas' },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <span
                                className="text-2xl font-bold"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                <span className="text-accent">Taye Bezabih</span> Fino
                            </span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Over 23 years of dedicated legal service in Ethiopia.
                            Former Federal Prosecutor, now your trusted advocate for
                            justice and legal excellence.
                        </p>
                        {/* Ethiopian Bar Association Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                            <span className="text-accent text-lg">⚖️</span>
                            <span className="text-sm text-white/80">Licensed Attorney</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-accent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Practice Areas
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.practiceAreas.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-accent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Contact Us
                        </h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div className="text-white/70">
                                    Kirkos, Kebele 63<br />
                                    Addis Ababa, Ethiopia
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-white/70">
                                    Mon - Fri: 9AM - 6PM
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                    <path strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-white/60 text-sm">
                            © {currentYear} Taye Bezabih Fino Law Office. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-sm text-white/60">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
