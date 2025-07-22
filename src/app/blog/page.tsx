// pages/index.tsx
'use client';
import React from 'react';
import './blog.css';

export default function PingDueBlog() {
  return (
    
    <main >
      <header>
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
      <section className="blog-header">
        <h1 className="blog-title">PingDue Blog</h1>
        <p className="blog-subtitle">
          Insights, tips, and best practices for payment collection and business automation
        </p>
        <div className="blog-tabs">
          {['All Posts', 'Payment Tips', 'Automation', 'Case Studies', 'Industry News'].map(tag => (
            <button
              key={tag}
              className={tag === 'All Posts' ? 'blog-tab-active' : 'blog-tab'}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-section">
        <div className="text-sm font-medium text-blue-600 mb-4">Featured Article</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="featured-image">
            <span className="text-blue-600 text-lg font-medium">Featured Article Image</span>
          </div>
          <div className="md:col-span-3">
            <div className="featured-labels">
              <span className="featured-badge">Payment Tips</span>
              <span className="text-gray-500">• March 15, 2024</span>
              <span className="text-gray-500">• 8 min read</span>
            </div>
            <h2 className="featured-title">
              10 Proven Strategies to Reduce Payment Delays and Improve Cash Flow
            </h2>
            <p className="featured-text">
              Discover actionable strategies that successful businesses use to minimize payment delays and maintain healthy cash flow. From setting clear payment terms to implementing automated reminder systems, learn how to transform your payment collection process.
            </p>
            <div className="featured-author">
              <div className="author-avatar">SM</div>
              <div>
                <p className="author-info-name">Sarah Mitchell</p>
                <p className="author-info-role">Payment Strategy Expert</p>
              </div>
            </div>
            <button className="read-button" onClick={() => window.location.href = '/single-blog'}>
              Read Full Article →
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="articles-section">
        <div className="articles-header">
          <h3 className="text-xl font-semibold">Latest Articles</h3>
          <a href="#" className="text-blue-600 text-sm font-medium">View all posts →</a>
        </div>
        <div className="articles-grid">
          {[
            {
              tag: 'Automation',
              date: 'March 12, 2024',
              title: 'How WhatsApp Business API is Revolutionizing Payment Reminders',
              author: 'Mike Johnson',
              time: '5 min read',
            },
            {
              tag: 'Case Studies',
              date: 'March 10, 2024',
              title: 'Case Study: How TechFlow Increased Collections by 45% in 90 Days',
              author: 'Lisa Wang',
              time: '7 min read',
            },
            {
              tag: 'Industry News',
              date: 'March 8, 2024',
              title: 'New Regulations: What Businesses Need to Know About Payment Collection',
              author: 'Robert Kim',
              time: '6 min read',
            }
          ].map((article, idx) => (
            <div key={idx} className="article-card">
              <div className="article-tag">{article.tag}</div>
              <p className="article-date">{article.date}</p>
              <h4 className="article-title">{article.title}</h4>
              <div className="article-author">
                <div className="article-author-avatar">
                  {article.author.split(' ')[0][0]}{article.author.split(' ')[1][0]}
                </div>
                <span>{article.author}</span>
                <span className="mx-1">•</span>
                <span>{article.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More Articles */}
      <section className="more-articles">
        <h3 className="text-xl font-semibold mb-4">More Articles</h3>
        <div className="space-y-4">
          {[
            'The Psychology of Payment: Why Timing Matters in Collection',
            'Building Customer-Friendly Payment Workflows That Actually Work',
            'SMS vs Email vs WhatsApp: Which Channel Performs Best for Payment Reminders?'
          ].map((title, idx) => (
            <div key={idx} className="more-article-box">
              <div className="more-article-meta">
                <div className="flex items-center gap-2">
                  <span className="more-article-tag">Payment Tips</span>
                  <span>March 5, 2024</span>
                  <span>•</span>
                  <span>{(idx + 4)} min read</span>
                </div>
              </div>
              <p className="font-medium text-gray-900">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription">
        <h2 className="subscription-title">Stay updated with payment collection insights</h2>
        <p className="subscription-subtitle">
          Get weekly tips, case studies, and industry news delivered to your inbox
        </p>
        <div className="subscription-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="subscription-input"
          />
          <button className="subscription-button">Subscribe</button>
        </div>
        <p className="subscription-note">No spam. Unsubscribe anytime.</p>
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
    </main>
  );
}