function Hero() {
  return (
    <section id="home" className="pt-16 section-padding min-h-screen flex items-center">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance animate-fade-in">
                Building Digital Solutions That
                <span className="gradient-text block">Drive Real Results</span>
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 animate-fade-in animation-delay-200">
                We're a boutique development studio specializing in custom web applications,
                API integrations, and scalable cloud solutions. From MVP to enterprise,
                we turn complex technical challenges into elegant, performant software.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in animation-delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-fade-in animation-delay-100">
            <div className="hero-visual">
              <div className="hero-visual-content">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="h-20 bg-white/20 rounded-lg"></div>
                    <div className="h-20 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-visual-bg-1"></div>
            <div className="hero-visual-bg-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero