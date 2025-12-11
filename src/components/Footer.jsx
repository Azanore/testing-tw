function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white section-padding" role="contentinfo">
      <div className="container-width">
        <div className="text-center">
          <h2 className="gradient-text mb-4">CodeCraft Studio</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Building digital solutions that drive real results.
            Let's turn your technical challenges into competitive advantages.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="footer-link">
              GitHub
            </a>
            <a href="#" className="footer-link">
              LinkedIn
            </a>
            <a href="#" className="footer-link">
              Twitter
            </a>
            <a href="#" className="footer-link">
              Email
            </a>
          </div>

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-400">
            <p>&copy; 2024 CodeCraft Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer