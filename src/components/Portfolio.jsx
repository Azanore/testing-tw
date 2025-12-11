function Portfolio() {
  const portfolioItems = [
    {
      title: 'FinTech Trading Platform',
      category: 'Full-Stack Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Real-time trading platform with advanced analytics, risk management, and regulatory compliance.',
      tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL']
    },
    {
      title: 'Healthcare Data Pipeline',
      category: 'Cloud Architecture',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'HIPAA-compliant data processing system handling millions of patient records daily.',
      tech: ['AWS Lambda', 'Python', 'RDS', 'S3']
    },
    {
      title: 'E-commerce Integration Hub',
      category: 'System Integration',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Multi-channel inventory and order management system connecting 15+ platforms.',
      tech: ['GraphQL', 'Redis', 'MongoDB', 'Docker']
    },
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Technical Consulting',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Custom analytics platform processing 10M+ events daily with real-time insights.',
      tech: ['Next.js', 'ClickHouse', 'Kafka', 'Kubernetes']
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">Case Studies</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Real projects, real results. Here's how we've helped businesses
            solve complex technical challenges and achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.title} className="portfolio-item">
              <div className="portfolio-image">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category} case study`}
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <span className="portfolio-category">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="portfolio-title">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio