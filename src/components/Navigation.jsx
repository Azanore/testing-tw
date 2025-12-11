import { useState, useEffect } from 'react'

function Navigation({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

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

  return (
    <>
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 glass dark:glass-dark border-b border-neutral-200/30 dark:border-neutral-700/30"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-width">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">CodeCraft Studio</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.slice(1)
                        ? 'nav-link-active'
                        : ''
                      }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="nav-control"
                aria-label="Toggle dark mode"
              >
                <span className="text-lg">
                  {darkMode ? '☀️' : '🌙'}
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden nav-control"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="hamburger">
                  <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-1-open' : ''}`}></span>
                  <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-2-open' : ''}`}></span>
                  <span className={`hamburger-line ${isMenuOpen ? 'hamburger-line-3-open' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}>
            <div className="mobile-menu-content">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation