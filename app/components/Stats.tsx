const stats = [
    {
        value: '23+',
        label: 'Years of Experience',
        description: 'Dedicated legal practice',
    },
    {
        value: '9',
        label: 'Years as Prosecutor',
        description: 'Federal justice system',
    },
    {
        value: '1000+',
        label: 'Cases Handled',
        description: 'Successful representations',
    },
    {
        value: '13+',
        label: 'Years Private Practice',
        description: 'Serving clients since 2011',
    },
];

export default function Stats() {
    return (
        <section className="py-20 gradient-primary relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="heading-md text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                        A Track Record of <span className="text-accent">Excellence</span>
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto">
                        Numbers that reflect decades of commitment to justice and client success.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all group"
                        >
                            <div
                                className="text-5xl md:text-6xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-white font-semibold mb-1">
                                {stat.label}
                            </div>
                            <div className="text-white/60 text-sm">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
