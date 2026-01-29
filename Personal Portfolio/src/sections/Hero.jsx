export const Hero = () => {
    return (<section className="relative min-h-screen flex items-center overflow-hidden" style={{ zIndex: 1 }}>
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />

            <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/80 to-background" />
        </div>

        {/* Dots */}
        <div>
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                        backgroundColor: "#59A699",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${10 + Math.random() * 25}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-8 ">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full" />Frontend Developer | UI/UX Designer
                        </span>
                    </div>

                    {/* Headline */}
                    <div>
                        <h1>
                            
                        </h1>
                    </div>
                </div>
                {/* Right Column - Profile Picture */}
            </div>
        </div>
    </section>
    );
};