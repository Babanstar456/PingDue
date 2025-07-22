// pages/index.js
'use client';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import './features.css';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>

      <div className="min-h-screen bg-white">
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

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Payment Reminder Software &<br />
                Automated Collection Platform
              </h1>
              <p className="hero-description">
                PingDue is the leading payment reminder platform that helps businesses automate payment
                collection through SMS, WhatsApp, Email, and Voice reminders. Reduce late payments by
                up to 40% with our intelligent automation system.
              </p>
              <div className="hero-buttons">
                <button className="cta-button primary">
                  ▶ Start Free Trial
                </button>
                <button className="cta-button secondary">
                  📖 Learn More
                </button>
              </div>
              <div className="hero-features">
                <span>✓ 14 day free trial</span>
                <span>✓ No setup fees</span>
                <span>✓ Cancel anytime</span>
              </div>
              <p className="trust-text">Trusted by 2,500+ businesses worldwide</p>
            </div>
          </div>
        </section>

        {/* What is Payment Reminder Software Section */}
        <section className="info-section">
          <div className="container">
            <h2 className="section-title">What is Payment Reminder Software?</h2>
            <p className="section-description">
              Payment reminder software automates the process of following up with customers about outstanding invoices and overdue
              payments. Instead of manually tracking and sending reminders, businesses can set up automated workflows that send personalized
              messages across multiple communication channels.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="container">
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <h3>SMS Payment Reminders</h3>
                <p>Send automated SMS reminders with 98% open rates. Perfect for urgent payment notifications, past due reminders, and thank you messages.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h3>WhatsApp Business Integration</h3>
                <p>Leverage WhatsApp's 2 billion users for payment collection. Send rich media messages with images, documents, and maintain business relationships.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📧</div>
                <h3>Email Payment Notifications</h3>
                <p>Professional email reminders with invoice attachments, payment links, and branded templates. Track open rates for enhanced campaigns.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📞</div>
                <h3>Voice Call Reminders</h3>
                <p>Automated voice calls for high-value accounts or final payment notices. Personal touch when other methods haven't worked for debt collection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <div className="container">
            <h2 className="section-title">How Payment Reminder Automation Works</h2>
            <p className="section-description">
              Set up automated payment collection workflows in minutes, not hours. Our intelligent system handles the entire process from initial
              invoice to final collection, so you can focus on growing your business.
            </p>

            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Connect Your Payment Systems</h3>
                <p>
                  Integrate with any existing invoicing platform, CRM, or
                  accounting software. Supports Stripe, PayPal, Xero,
                  QuickBooks, Sage, and custom APIs.
                </p>
                <div className="step-features">
                  <span>QuickBooks</span>
                  <span>Xero</span>
                  <span>Stripe</span>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <h3>Design Your Reminder Workflows</h3>
                <p>
                  Create personalized reminder sequences using our drag-and-
                  drop workflow builder. Set timing, channels, and messaging for
                  each step in your collection process.
                </p>
                <div className="workflow-items">
                  <div className="workflow-item">📅 Day -7: Friendly reminder via Email</div>
                  <div className="workflow-item">📋 Day 0: Payment due notice via SMS</div>
                  <div className="workflow-item">⚠️ Day +5: Urgent reminder via WhatsApp</div>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <h3>Monitor and Optimize Performance</h3>
                <p>
                  Track payment collection rates, message performance, and
                  customer engagement through our analytics and reporting
                  dashboard. Optimize your workflows based on real data.
                </p>
                <div className="stats-preview">
                  <div className="stat">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Open Rate</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">40%</span>
                    <span className="stat-label">Collection Increase</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">10hrs</span>
                    <span className="stat-label">Time Saved/Week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <h2 className="section-title">Benefits of Automated Payment Collection</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Improve Cash Flow</h3>
                <p>Automated reminders reduce average payment terms from 45 days to 28 days. Consistent follow-up ensures faster payment and improves your cash flow predictability.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⏰</div>
                <h3>Save Time and Resources</h3>
                <p>Eliminate manual follow-up tasks that consume 5+ hours per week. Your team can focus on growing your business instead of chasing payments.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3>Maintain Customer Relationships</h3>
                <p>Professional, consistent communication maintains positive relationships while ensuring payments. Avoid awkward phone calls with polite automated outreach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="industries-section">
          <div className="container">
            <h2 className="section-title">Payment Reminder Software for Every Industry</h2>
            <div className="industries-grid">
              <div className="industry-card">
                <div className="industry-icon">🛒</div>
                <h3>E-commerce & Retail</h3>
                <p>Recover abandoned carts and follow up on subscription payments automatically.</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">💼</div>
                <h3>Professional Services</h3>
                <p>Automate client invoices and retainer reminders for consulting, legal, and accounting firms.</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏥</div>
                <h3>Healthcare</h3>
                <p>Send payment reminders for patient billing and insurance reimbursements.</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🎓</div>
                <h3>Education</h3>
                <p>Collect tuition payments and fees for schools, universities, and training institutes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              <div className="faq-item">
                <h3>What is payment reminder software and how does it work?</h3>
                <p>Payment reminder software automates the process of following up with customers about outstanding invoices. It connects to your existing billing systems and sends automated reminders via SMS, email, WhatsApp, or voice calls based on your configured workflows.</p>
              </div>
              <div className="faq-item">
                <h3>How much can I improve my payment collection rates?</h3>
                <p>Most businesses see 25-40% improvement in collection rates within the first 30 days. The exact improvement depends on your current process, industry, and customer base. Our automated system ensures consistent follow-up that manual processes often miss.</p>
              </div>
              <div className="faq-item">
                <h3>Which communication channels work best for payment reminders?</h3>
                <p>SMS has the highest open rate (98%) for urgent reminders, email works well for detailed information with invoices/documents, WhatsApp provides a personal touch, and voice calls are effective for high-value accounts or final notices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Automate Your Payment Collection?</h2>
              <p>Join thousands of businesses that have improved their cash flow with automated payment reminders.</p>
              <button className="cta-button large">
                ⚡ Start Free 14-Day Trial
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
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
      </div>
    </>
  )
}