import React from 'react';
import { Star, Users, Clock, Shield, Zap, Headphones, Settings, Gift, CheckCircle } from 'lucide-react';
import './about.css';

const PingDueLanding = () => {
  return (
    <main>
      {/* Header */}
      <header className='header'>
        <div className="container">
          <div className="header-content">
            <div className="logo">PingDue</div>
            <nav>
              <a href="/features">Features</a>
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

      <div className="min-h-screen bg-surface">
        {/* Header Banner */}
        <div className="header-banner">
          <div className="container header-content banner">
            <Users className="w-5 h-5" />
            <span>Referred by a trusted partner? You're in good company!</span>
            <span className="special-badge">Special Offer Inside</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="trust-badge">
              <Shield className="w-4 h-4" />
              Trusted by 10,000+ Businesses Worldwide
            </div>
            <h1 className="hero-title">
              The Payment Collection Platform Your<br />
              Peers Recommend
            </h1>
            <p className="hero-subtitle">
              Join the thousands of businesses who've already improved their cash flow by 40% with 
              PingDue's intelligent payment reminder system. See why your industry colleagues trust us 
              with their payment collection.
            </p>
            <div className="btn-group">
              <button className="btn-primary">
                <Zap className="w-5 h-5" />
                Start Free Trial
              </button>
              <button className="btn-secondary">
                <Users className="w-5 h-5" />
                See Customer Stories
              </button>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">40%</div>
                <div className="stat-label">Average Improvement</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star" fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "PingDue transformed our payment collection process. We went from chasing payments manually to having a 95% collection rate within 30 days. The ROI was immediate."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar avatar-sm">SM</div>
                  <div className="author-info">
                    <h4>Sarah Mitchell</h4>
                    <p>CFO, TechFlow Solutions</p>
                    <p>SaaS • 150 employees</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star" fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "The multi-channel approach is brilliant. Our customers respond better when we reach them on their preferred platform. WhatsApp integration was a game-changer."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar avatar-mj">MJ</div>
                  <div className="author-info">
                    <h4>Mike Johnson</h4>
                    <p>Owner, Johnson & Associates</p>
                    <p>Professional Services • 25 employees</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star" fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "Setup was incredibly easy. We were sending automated reminders within 30 minutes. The customer support team guided us through everything step by step."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar avatar-lw">LW</div>
                  <div className="author-info">
                    <h4>Lisa Wang</h4>
                    <p>Finance Director, GrowthCorp</p>
                    <p>E-commerce • 75 employees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="trust-section">
          <div className="container">
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <div className="trust-grid">
              <div className="trust-item">
                <div className="trust-icon icon-emerald">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="trust-title">SOC 2 Compliant</h3>
                <p className="trust-subtitle">Bank-level security</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon icon-blue">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="trust-title">99.9% Uptime</h3>
                <p className="trust-subtitle">Always available</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon icon-purple">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="trust-title">24/7 Support</h3>
                <p className="trust-subtitle">Expert assistance</p>
              </div>
              <div className="trust-item">
                <div className="trust-icon icon-yellow">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="trust-title">Easy Integration</h3>
                <p className="trust-subtitle">Works with your tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="case-study-section">
          <div className="container">
            <h2 className="section-title">Real Results from Real Businesses</h2>
            <p className="case-study-subtitle">See how companies like yours have transformed their payment collection</p>
            <div className="case-study-card">
              <div className="case-study-content">
                <div className="company-header">
                  <div className="company-logo">TF</div>
                  <div className="company-info">
                    <h3>TechFlow Solutions</h3>
                    <p>SaaS Company • $2M ARR • 150 employees</p>
                  </div>
                </div>
                <div className="case-study-grid">
                  <div className="challenge-section">
                    <h4>The Challenge</h4>
                    <p>
                      TechFlow was spending 15+ hours per week manually following up on overdue payments. Their average collection time was 45 days, severely impacting cash flow.
                    </p>
                    <h4>The PingDue Solution</h4>
                    <p>
                      Implemented automated multi-channel reminder workflows with personalized messaging based on customer segments and payment history.
                    </p>
                    <h4>The Results</h4>
                    <ul className="results-list">
                      <li><CheckCircle className="w-5 h-5" /> Collection time reduced by 28 days</li>
                      <li><CheckCircle className="w-5 h-5" /> Time saved: 12 hours per week</li>
                      <li><CheckCircle className="w-5 h-5" /> Collection rate improvement: 29%</li>
                    </ul>
                  </div>
                  <div className="results-panel">
                    <h4>Before vs After PingDue</h4>
                    <div className="metric-row">
                      <span>Average collection time</span>
                      <div className="metric-values">
                        <span className="metric-before">45 days</span>
                        <span className="metric-arrow">→</span>
                        <span className="metric-after">17 days</span>
                      </div>
                    </div>
                    <div className="metric-row">
                      <span>Manual follow-up time</span>
                      <div className="metric-values">
                        <span className="metric-before">15+ hrs/week</span>
                        <span className="metric-arrow">→</span>
                        <span className="metric-after">3 hrs/week</span>
                      </div>
                    </div>
                    <div className="metric-row">
                      <span>Collection rate</span>
                      <div className="metric-values">
                        <span className="metric-before">65%</span>
                        <span className="metric-arrow">→</span>
                        <span className="metric-after">94%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer CTA */}
        <section className="offer-section">
          <div className="container offer-content">
            <div className="offer-header">
              <Gift className="w-6 h-6" />
              <h2 className="offer-title">Special Referral Offer</h2>
            </div>
            <p className="offer-subtitle">
              Since you were referred by a trusted partner, enjoy 3 months free on any paid plan when you upgrade from your trial.
            </p>
            <button className="btn-offer">
              <Gift className="w-5 h-5" />
              Claim Your Free Months
            </button>
            <p className="offer-disclaimer">
              14-day free trial • No credit card required • Claim offer anytime during trial
            </p>
          </div>
        </section>
      </div>
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
    </main>
  );
};

export default PingDueLanding;