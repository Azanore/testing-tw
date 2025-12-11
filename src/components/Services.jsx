function Services() {
  const services = [
    {
      title: 'Custom Web Applications',
      description: 'Production-ready web applications built with modern frameworks, optimized for performance and scalability.',
      icon: '⚡',
      features: [
        'React/Next.js with TypeScript',
        'Node.js/Python/Go backends',
        'PostgreSQL/MongoDB databases',
        'Real-time features with WebSocket'
      ],
      metrics: '50+ apps deployed',
      highlight: 'Full-Stack'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Enterprise-grade cloud architecture with automated deployment, monitoring, and disaster recovery.',
      icon: '☁️',
      features: [
        'AWS/GCP/Azure multi-cloud',
        'Kubernetes orchestration',
        'Infrastructure as Code (Terraform)',
        '99.9% uptime SLA'
      ],
      metrics: '10M+ requests/day',
      highlight: 'DevOps'
    },
    {
      title: 'API Development',
      description: 'High-performance APIs and microservices with comprehensive documentation and testing.',
      icon: '🔗',
      features: [
        'REST & GraphQL APIs',
        'Microservices architecture',
        'Rate limiting & caching',
        'OpenAPI documentation'
      ],
      metrics: '100+ integrations',
      highlight: 'Backend'
    },
    {
      title: 'Technical Leadership',
      description: 'Strategic technical guidance, code reviews, and team mentoring to accelerate your development.',
      icon: '🎯',
      features: [
        'Architecture design reviews',
        'Code quality audits',
        'Team training & mentoring',
        'Technology roadmap planning'
      ],
      metrics: '20+ teams guided',
      highlight: 'Consulting'
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="mb-4">Technical Expertise</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            We specialize in complex technical challenges that require deep expertise,
            proven methodologies, and a track record of delivering results at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-header">
                <div className="service-icon-wrapper">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <div className="service-badge">
                  {service.highlight}
                </div>
              </div>

              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-metrics">
                  <span className="service-metrics-icon">📊</span>
                  <span className="service-metrics-text">{service.metrics}</span>
                </div>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature} className="service-feature">
                      <span className="service-feature-dot"></span>
                      <span className="service-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="services-cta">
            <h3 className="services-cta-title">Ready to Build Something Great?</h3>
            <p className="services-cta-description">
              Let's discuss your technical requirements and create a solution that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button className="btn-primary">
                Schedule Technical Call
              </button>
              <button className="btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services