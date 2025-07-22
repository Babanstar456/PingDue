export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">PingDue</div>
            <nav>
              <a href="#features">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </nav>
            <div className="header-actions">
              <a href="./login" className="btn btn-secondary">Sign In</a>
              <a href="./signup" className="btn btn-primary">Get Started Free</a>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Automate Your Payment Collection with Smart Multi-Channel Reminders</h1>
          <p>Stop chasing payments manually. PingDue helps businesses recover payments faster with personalized reminders across SMS, WhatsApp, Email, and Voice.</p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">📊 Start Free Trial</a>
            <a href="#" className="btn btn-secondary">▶️ Watch Demo</a>
          </div>
          <div className="trust-badge">Trusted by 10,000+ businesses worldwide</div>

          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <div className="dashboard-title">PINGDUE DASHBOARD</div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div style={{ width: "12px", height: "12px", background: "#ef4444", borderRadius: "50%" }}></div>
                <div style={{ width: "12px", height: "12px", background: "#f59e0b", borderRadius: "50%" }}></div>
                <div style={{ width: "12px", height: "12px", background: "#10b981", borderRadius: "50%" }}></div>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">2,847</div>
                  <div className="stat-label">+ 14% This Month</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">1,923</div>
                  <div className="stat-label">+ 8% This Month</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">1,456</div>
                  <div className="stat-label">+ 6% This Month</div>
                </div>
              </div>
              <div className="recent-activity">
                <div className="activity-title">Recent Payments Collected</div>
                <div className="activity-item">
                  <div className="activity-text">$2,340 collected from Acme Corp</div>
                  <div className="activity-amount">2 min ago</div>
                </div>
                <div className="activity-item">
                  <div className="activity-text">$847 collected from Tech Solutions</div>
                  <div className="activity-amount">15 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2 className="section-title">Everything you need to automate payment collection</h2>
          <p className="section-subtitle">Powerful features designed to help businesses recover payments faster and more efficiently</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">Smart Automation</h3>
              <p className="feature-description">Set up payment workflows and automate reminders using AI-driven logic that adapts to customer behavior and payment patterns.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📡</div>
              <h3 className="feature-title">Multi-Channel Reach</h3>
              <p className="feature-description">Send reminders via SMS, WhatsApp, Email, and Voice from your brand handle. All messages are sent from your business handle to maintain brand consistency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Advanced Analytics</h3>
              <p className="feature-description">Access real-time data to track reminder success and customer responses. Monitor open rates, response rates, and payment success across all channels.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3 className="feature-title">Enterprise Security</h3>
              <p className="feature-description">Built with end-to-end encryption and compliance in mind. Your customer data is protected with enterprise-grade security measures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section setup-section">
        <div className="container">
          <h2 className="section-title">Get started in minutes, not hours</h2>
          <p className="section-subtitle">Simple setup process that gets you collecting payments faster</p>
          <div className="setup-grid">
            <div className="setup-card">
              <div className="setup-number">1</div>
              <h3 className="feature-title">Connect Your Channels</h3>
              <p className="feature-description">Link your SMS, Email, WhatsApp, and Voice services. We support all major providers and make integration seamless.</p>
            </div>
            <div className="setup-card">
              <div className="setup-number">2</div>
              <h3 className="feature-title">Create Your Workflows</h3>
              <p className="feature-description">Design personalized payment reminder sequences and templates based on customer types and debt structures.</p>
            </div>
            <div className="setup-card">
              <div className="setup-number">3</div>
              <h3 className="feature-title">Start Collecting</h3>
              <p className="feature-description">Activate your workflows and watch as PingDue automatically sends reminders and tracks payments from your dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">Loved by businesses worldwide</h2>
          <p className="section-subtitle">See how PingDue is helping businesses improve their payment collection</p>
          <div className="features-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"PingDue increased our payment collection rate by 40% in just 3 months. The automation saves us 10 hours per week."</p>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-info">
                  <strong>Sarah Mitchell</strong><br />
                  <small>CFO, TechRise Solutions</small>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"The multi-channel approach is game-changing. Customers respond better when we reach them on their preferred platform."</p>
              <div className="testimonial-author">
                <div className="author-avatar">MJ</div>
                <div className="author-info">
                  <strong>Mike Johnson</strong><br />
                  <small>Owner, Johnson & Associates</small>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Setup was incredibly easy. We were sending automated reminders within 30 minutes of signing up. Highly recommend!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">LW</div>
                <div className="author-info">
                  <strong>Lina Wang</strong><br />
                  <small>Finance Director, OmniCorp</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Businesses Trust PingDue</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40%</div>
              <div className="stat-label">Average Increase in Collections</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Platform Uptime</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-subtitle">Choose the plan that fits your business size and needs</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="pricing-title">Starter</h3>
              <div className="pricing-price">$29</div>
              <div className="pricing-period">/month</div>
              <ul className="pricing-features">
                <li>Up to 5 team members</li>
                <li>2,000 SMS credits/month</li>
                <li>5,000 Email credits/month</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <a href="#" className="btn btn-primary">Start Free Trial</a>
            </div>
            <div className="pricing-card featured">
              <h3 className="pricing-title">Professional</h3>
              <div className="pricing-price">$79</div>
              <div className="pricing-period">/month</div>
              <ul className="pricing-features">
                <li>Up to 25 team members</li>
                <li>10,000 SMS credits/month</li>
                <li>25,000 Email credits/month</li>
                <li>WhatsApp integration</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <a href="#" className="btn btn-primary">Start Free Trial</a>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-title">Enterprise</h3>
              <div className="pricing-price">Custom</div>
              <div className="pricing-period">pricing</div>
              <ul className="pricing-features">
                <li>Unlimited team members</li>
                <li>Custom credit limits</li>
                <li>All integrations included</li>
                <li>API access</li>
                <li>Dedicated account manager</li>
                <li>Phone support</li>
              </ul>
              <a href="#" className="btn btn-secondary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2 className="section-title">Ready to automate your payment collection?</h2>
          <p className="section-subtitle">Join thousands of businesses already using PingDue to recover payments faster</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">📊 Start Free Trial</a>
            <a href="#" className="btn btn-secondary">📞 Schedule Demo</a>
          </div>
          <p className="cta-note">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Integrations</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="/blog.html">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">Community</a>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
              <a href="#">GDPR</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div>©️ 2025 PingDue. All rights reserved.</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}