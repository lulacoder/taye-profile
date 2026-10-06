const testimonials = [
    {
        quote: "Ato Taye's expertise in criminal law was invaluable to my case. His prosecutorial background gave him unique insights that made all the difference.",
        author: "Business Owner",
        location: "Addis Ababa",
        rating: 5,
    },
    {
        quote: "Professional, knowledgeable, and genuinely cared about my family's legal matters. I couldn't have asked for better representation.",
        author: "Private Client",
        location: "Kirkos",
        rating: 5,
    },
    {
        quote: "His 20+ years of experience showed in every aspect of my case. Thorough preparation and excellent courtroom presence.",
        author: "Corporate Client",
        location: "Bole",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section bg-background">
            <div className="container mx-auto">
                {/* Section Heading */}
                <div className="section-heading">
                    <div className="accent-line" />
                    <h2 className="heading-lg">
                        Client <span className="text-gradient">Testimonials</span>
                    </h2>
                    <p>
                        What our clients say about their experience working with
                        Taye Bezabih Fino Law Office.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl bg-background-alt border border-primary/5 hover:border-accent/20 transition-all group"
                        >
                            {/* Quote Mark */}
                            <div className="absolute -top-4 left-8">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xl font-serif">
                                    &ldquo;
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4 pt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-accent"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-foreground-muted mb-6 italic leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <div className="font-semibold text-primary text-sm">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-foreground-muted text-xs">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
