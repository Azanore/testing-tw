function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Let's Build Something Great</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Ready to turn your technical challenges into competitive advantages?
              Let's discuss your project and explore how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-4">Get in Touch</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  We'd love to learn about your project and discuss how our expertise
                  can help you achieve your technical and business goals.
                </p>
              </div>

              <div className="space-y-4">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">hello@codecraft.studio</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <div className="contact-info-value">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="form-input"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="form-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="form-label">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  <option value="full-stack">Full-Stack Development</option>
                  <option value="cloud">Cloud Architecture</option>
                  <option value="integration">System Integration</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="form-input resize-none"
                  placeholder="Tell us about your project, technical requirements, timeline, and budget..."
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
  )
}

export default Contact