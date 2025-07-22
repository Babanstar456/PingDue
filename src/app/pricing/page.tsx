'use client';
import React from 'react';
import './pricing.css'; 

export default function Home() {
  const CheckIcon = () => <span className="text-green-500 text-lg font-bold">✓</span>;
  const XIcon = () => <span className="text-red-500 text-lg font-bold">✗</span>;

  const sections = [
    {
      title: "Core Features",
      features: [
        { name: "Customer Limit", starter: "200", growth: "2,000", scale: "10,000+" },
        { name: "Active Workflows", starter: "1", growth: "5", scale: "Unlimited" },
        { name: "Team Members", starter: "1", growth: "3", scale: "10+" },
        { name: "Monthly Credits", starter: "~500", growth: "~2,000", scale: "Custom" }
      ]
    },
    {
      title: "Communication Channels",
      features: [
        { name: "Email Reminders", starter: "check", growth: "check", scale: "check" },
        { name: "SMS Reminders", starter: "x", growth: "check", scale: "check" },
        { name: "WhatsApp Business", starter: "x", growth: "x", scale: "check" },
        { name: "Voice Calls", starter: "x", growth: "x", scale: "Add-on Available" }
      ]
    },
    {
      title: "Automation & Logic",
      features: [
        { name: "Payment Exit Logic", starter: "check", growth: "check", scale: "check" },
        { name: "Automated Retry Logic", starter: "Basic", growth: "Advanced", scale: "All Channels + Fallback" },
        { name: "Segment-based Campaigns", starter: "x", growth: "check", scale: "check" }
      ]
    },
    {
      title: "Templates & Content",
      features: [
        { name: "Message Templates", starter: "Limited", growth: "Full Access", scale: "Advanced Features" },
        { name: "White Labeling", starter: "x", growth: "x", scale: "check" },
        { name: "Public Payment Page", starter: "x", growth: "check", scale: "Customizable" }
      ]
    },
    {
      title: "Integrations & API",
      features: [
        { name: "CRM Integration", starter: "Basic API", growth: "1-click OAuth", scale: "All + Sync Scheduling" },
        { name: "Webhook Support", starter: "x", growth: "check", scale: "Advanced" },
        { name: "API Rate Limits", starter: "Standard", growth: "Higher Quota", scale: "Custom Quotas" }
      ]
    },
    {
      title: "Analytics & Reporting",
      features: [
        { name: "Workflow Analytics", starter: "Basic", growth: "Full Analytics", scale: "Advanced + Funnel" },
        { name: "Usage Alerts & Logs", starter: "Basic Logs", growth: "Logs + Alerts", scale: "Enhanced + IP Logs" }
      ]
    },
    {
      title: "Team & Security",
      features: [
        { name: "Role-Based Access Control", starter: "x", growth: "Basic Roles", scale: "Full RBAC" },
        { name: "Customer Support", starter: "Email Support", growth: "Priority Support", scale: "SLA-based Support" },
        { name: "Trial Period", starter: "Always Free Tier", growth: "14-day Free Trial", scale: "14-day Free Trial" }
      ]
    }
  ];

  const renderValue = (value: string | number) => {
    if (value === "check") return <CheckIcon />;
    if (value === "x") return <XIcon />;
    if (value === "Add-on Available") return <span className="text-orange-500 text-sm font-medium">Add-on Available</span>;
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <>
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

      <div className="max-w-6xl mx-auto p-6 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Detailed Feature Comparison</h1>
          <p className="text-gray-600">Compare all features across our plans to find the perfect fit</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-900"></th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">Growth</th>
                <th className="text-center py-4 px-6 font-semibold text-gray-900">Scale</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <tr>
                    <td colSpan={4} className="py-6">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    </td>
                  </tr>
                  {section.features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-700 font-medium">{feature.name}</td>
                      <td className="py-4 px-6 text-center">
                        {renderValue(feature.starter)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderValue(feature.growth)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderValue(feature.scale)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
<section className="faq-section">
  <div className="faq-container">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <p className="faq-subtitle">Got questions? We’ve got answers about our pricing and plans</p>

    <div className="faq-grid">
      <div className="faq-card">
        <h4 className="faq-question">What happens when I exceed my customer or credit limits?</h4>
        <p className="faq-answer">We’ll notify you in advance. You can upgrade your plan or purchase more credits. No abrupt service cuts.</p>
      </div>
      <div className="faq-card">
        <h4 className="faq-question">Is there a setup fee or long-term contract?</h4>
        <p className="faq-answer">No setup fees or long-term contracts. All plans are monthly, cancel anytime. The Starter plan is free forever.</p>
      </div>
      <div className="faq-card">
        <h4 className="faq-question">Can I change plans at any time?</h4>
        <p className="faq-answer">Yes! Upgrades take effect immediately; downgrades apply from the next billing cycle.</p>
      </div>
      <div className="faq-card">
        <h4 className="faq-question">What kind of support do you provide?</h4>
        <p className="faq-answer">Starter plan: email support. Growth: priority support. Scale: SLA-based support + account manager.</p>
      </div>
      <div className="faq-card">
        <h4 className="faq-question">What’s included in the credit bundles?</h4>
        <p className="faq-answer">1 credit = 1 SMS, 1 email, or 1 WhatsApp. Voice calls use more credits. Credits roll over up to 3 months.</p>
      </div>
      <div className="faq-card">
        <h4 className="faq-question">Can I get a custom plan for my enterprise needs?</h4>
        <p className="faq-answer">Absolutely! Contact our sales team to tailor features, pricing, and support to your business.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="cta-section">
  <div className="cta-container">
    <h2 className="cta-title">Ready to get started?</h2>
    <p className="cta-subtitle">Start with our free plan or try any paid plan with a 14-day free trial</p>
    <div className="cta-buttons">
      <a href="#" className="cta-button-light">⚡ Start Free Forever</a>
      <a href="#" className="cta-button-dark">🚀 Try Growth Plan</a>
    </div>
    <p className="cta-note">No credit card required for free plan • Cancel anytime</p>
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
