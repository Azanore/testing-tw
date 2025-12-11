function About() {
  const principles = [
    {
      icon: '⚡',
      title: 'Performance Engineering',
      description: 'Sub-second load times, optimized database queries, and efficient algorithms. We measure everything and optimize relentlessly.',
      metrics: '< 200ms avg response time'
    },
    {
      icon: '🛡️',
      title: 'Security by Design',
      description: 'OWASP compliance, encrypted data flows, and comprehensive security audits. Your data and users are protected.',
      metrics: 'Zero security incidents'
    },
    {
      icon: '📈',
      title: 'Scalable Architecture',
      description: 'Built to handle growth from day one. Microservices, load balancing, and auto-scaling infrastructure.',
      metrics: '10x traffic growth supported'
    }
  ]

  const team = [
    {
      name: 'Senior Full-Stack Engineers',
      experience: '8+ years average experience',
      expertise: ['React/Node.js', 'Python/Django', 'Go/Rust', 'TypeScript']
    },
    {
      name: 'DevOps & Cloud Architects',
      experience: 'AWS/GCP certified professionals',
      expertise: ['Kubernetes', 'Terraform', 'CI/CD', 'Monitoring']
    },
    {
      name: 'Technical Leadership',
      experience: 'Former tech leads at scale-ups',
      expertise: ['System Design', 'Code Review', 'Mentoring', 'Strategy']
    }
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-width">
        {/* Main Introduction */}
        <div className="text-center mb-20">
          <div className="about-badge">
            Founded 2016 • San Francisco
          </div>
          <h2 className="mb-6">Engineering Excellence, Delivered</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            We're a boutique engineering team that's built and scaled systems handling millions of users.
            Former engineers from Google, Stripe, and Airbnb who now focus on solving complex technical
            challenges for growing companies.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Engineering Principles</h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              These aren't just buzzwords. They're measurable commitments we make on every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="about-principle-card">
                <div className="about-principle-icon">
                  {principle.icon}
                </div>
                <h4 className="about-principle-title">{principle.title}</h4>
                <p className="about-principle-description">
                  {principle.description}
                </p>
                <div className="about-principle-metrics">
                  <span className="about-metrics-icon">📊</span>
                  <span className="about-metrics-text">{principle.metrics}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Expertise */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Deep Technical Expertise</h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our team combines years of experience at high-growth companies with hands-on expertise
              in modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="about-team-card">
                <h4 className="about-team-title">{member.name}</h4>
                <p className="about-team-experience">{member.experience}</p>
                <div className="about-team-expertise">
                  {member.expertise.map((skill) => (
                    <span key={skill} className="about-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="about-results">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">Proven Results</h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We measure success by the impact we create for our clients' businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="about-stat">
              <div className="about-stat-number">50+</div>
              <div className="about-stat-label">Projects Delivered</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">$2M+</div>
              <div className="about-stat-label">Revenue Generated</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">99.9%</div>
              <div className="about-stat-label">Uptime Achieved</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-number">100%</div>
              <div className="about-stat-label">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About