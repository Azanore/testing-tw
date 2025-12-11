import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      icon: '🚀',
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimization']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that converts visitors into customers.',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
      features: ['React Native', 'iOS & Android', 'App Store Optimization', 'Push Notifications']
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand identity and visual communication systems.',
      icon: '✨',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Digital Assets']
    }
  ]

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce solution with advanced filtering and payment integration.'
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'Patient management system with telemedicine capabilities.'
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Comprehensive financial analytics dashboard with real-time data visualization.'
    },
    {
      title: 'Restaurant Brand',
      category: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'Complete brand identity for upscale restaurant chain.'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass dark:glass-dark border-b border-neutral-200/30 dark:border-neutral-700/30" role="navigation" aria-label="Main navigation">
        <div className="container-width">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">PixelCraft</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.href.slice(1)
                      ? 'text-brand-primary'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-brand-primary'
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Dark mode toggle and mobile menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content">
        <section id="home" className="pt-16 section-padding min-h-screen flex items-center">
          <div className="container-width">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-balance animate-fade-in">
                    Crafting Digital Experiences That
                    <span className="gradient-text block">Convert & Inspire</span>
                  </h1>
                  <p className="text-lg text-neutral-700 dark:text-neutral-300 animate-fade-in animation-delay-200">
                    We're a digital agency specializing in web development, UI/UX design, and brand identity.
                    Let's transform your vision into reality with cutting-edge technology and thoughtful design.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
                  <button className="btn-primary">
                    Start Your Project
                  </button>
                  <button className="btn-secondary">
                    View Our Work
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in animation-delay-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">150+</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">98%</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">5+</div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Hero Image/Animation */}
              <div className="relative animate-fade-in animation-delay-100">
                <div className="relative z-10 bg-gradient-to-br from-brand-primary to-accent rounded-2xl p-8 shadow-elevation-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
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
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-white dark:bg-neutral-900">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="mb-4">About PixelCraft</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                We're a team of passionate designers and developers who believe in the power of great design
                to transform businesses and create meaningful connections with users.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="mb-3">Mission-Driven</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Every project starts with understanding your goals and your users' needs.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="mb-3">Performance First</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We build fast, accessible, and scalable solutions that perform beautifully.
                </p>
              </div>
              <div className="card text-center md:col-span-2 lg:col-span-1">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="mb-3">Collaborative</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Your success is our success. We work closely with you throughout the entire process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                From concept to launch, we provide comprehensive digital solutions
                that help your business thrive in the digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.title} className="card group">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3">{service.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section-padding bg-white dark:bg-neutral-900">
          <div className="container-width">
            <div className="text-center mb-16">
              <h2 className="mb-4">Featured Work</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                A selection of our recent projects that showcase our expertise
                in creating impactful digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolioItems.map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.category} project showcase`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-2">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="mb-2 group-hover:text-brand-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="mb-4">Let's Work Together</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Ready to bring your vision to life? Get in touch and let's discuss your project.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4">Get in Touch</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      We'd love to hear about your project and explore how we can help bring it to life.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-brand-primary">📧</span>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">Email</div>
                        <div className="text-neutral-600 dark:text-neutral-400">hello@pixelcraft.agency</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-brand-primary">📱</span>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">Phone</div>
                        <div className="text-neutral-600 dark:text-neutral-400">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-brand-primary">📍</span>
                      </div>
                      <div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">Location</div>
                        <div className="text-neutral-600 dark:text-neutral-400">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 dark:bg-neutral-950 text-white section-padding" role="contentinfo">
        <div className="container-width">
          <div className="text-center">
            <h2 className="gradient-text mb-4">PixelCraft</h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Crafting digital experiences that convert and inspire.
              Let's build something amazing together.
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                Dribbble
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                GitHub
              </a>
            </div>

            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-400">
              <p>&copy; 2024 PixelCraft. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
