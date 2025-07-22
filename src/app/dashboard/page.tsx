import './page.css';
export default function Home() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">P</div>
          <span className="brand-text">PingDue Admin</span>
        </div>

        <div className="user-info">
          <div className="user-avatar">AD</div>
          <div className="user-details">
            <h4>Admin User</h4>
            <p>Super Admin</p>
          </div>
        </div>

        <nav>
          <div className="nav-section">
            <div className="nav-title">Overview</div>
            <a href="#" className="nav-item active">
              <span className="nav-icon">📊</span>
              Dashboard
            </a>
          </div>

          <div className="nav-section">
            <div className="nav-title">Business Management</div>
            <a href="#" className="nav-item">
              <span className="nav-icon">🏢</span>
              All Businesses
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">📈</span>
              Usage Analytics
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">💰</span>
              Billing & Revenue
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">⚙️</span>
              Workflows
            </a>
          </div>

          <div className="nav-section">
            <div className="nav-title">Marketing & Support</div>
            <a href="#" className="nav-item">
              <span className="nav-icon">📝</span>
              Blog Management
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">📧</span>
              Contact Submissions
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">🎫</span>
              Support Tickets
            </a>
          </div>

          <div className="nav-section">
            <div className="nav-title">System</div>
            <a href="#" className="nav-item">
              <span className="nav-icon">⚙️</span>
              System Settings
            </a>
            <a href="#" className="nav-item">
              <span className="nav-icon">📋</span>
              System Logs
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div className="header-title">
            <h1>Admin Dashboard</h1>
            <p>Monitor all business accounts and platform activity</p>
          </div>
          <div className="header-actions">
            <div className="notification-bell">
              🔔
              <div className="notification-badge">5</div>
            </div>
            <div className="search-box">
              <input type="search" placeholder="Search businesses..." />
            </div>
          </div>
        </header>

        <div className="content">
          <h2 className="section-title">Platform Overview</h2>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-change positive">+12%</div>
              <div className="stat-header">
                <span className="stat-icon">🏢</span>
                <span className="stat-title">Total Businesses</span>
              </div>
              <div className="stat-value">2,847</div>
              <div className="stat-description">Active accounts on the platform</div>
            </div>

            <div className="stat-card">
              <div className="stat-change positive">+25%</div>
              <div className="stat-header">
                <span className="stat-icon">💬</span>
                <span className="stat-title">Messages Sent</span>
              </div>
              <div className="stat-value">1.2M</div>
              <div className="stat-description">Total messages this month</div>
            </div>

            <div className="stat-card">
              <div className="stat-change warning">23 Open</div>
              <div className="stat-header">
                <span className="stat-icon">🎫</span>
                <span className="stat-title">Support Tickets</span>
              </div>
              <div className="stat-value">156</div>
              <div className="stat-description">Total tickets this month</div>
            </div>
          </div>

          <h2 className="section-title">Platform Usage Analytics</h2>

          <div className="analytics-grid">
            {/* Messages by Channel */}
            <div className="analytics-card">
              <h3 className="analytics-title">Messages by Channel (This Month)</h3>

              {[
                { type: "SMS", value: "485,230", className: "sms" },
                { type: "Email", value: "342,156", className: "email" },
                { type: "WhatsApp", value: "298,445", className: "whatsapp" },
                { type: "Voice", value: "89,234", className: "voice" },
              ].map((item) => (
                <div key={item.type} className="channel-item">
                  <div className="channel-info">
                    <div className={`channel-icon ${item.className}`}></div>
                    <span className="channel-name">{item.type}</span>
                  </div>
                  <span className="channel-value">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Revenue Trend */}
            <div className="analytics-card">
              <h3 className="analytics-title">Monthly Revenue Trend</h3>
              <div className="revenue-item">
                <span className="revenue-label">March 2024</span>
                <span className="revenue-value positive">$284,750</span>
              </div>
              <div className="revenue-item">
                <span className="revenue-label">February 2024</span>
                <span className="revenue-value">$241,200</span>
              </div>
              <div className="revenue-item">
                <span className="revenue-label">Growth Rate</span>
                <span className="revenue-value positive">📈 +18.1%</span>
              </div>
              <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #f1f5f9" }}>
                <span className="growth-indicator">📊 Revenue Growth Chart</span>
              </div>
            </div>
          </div>

          {/* Support Ticket Overview */}
          <div className="support-overview">
            <h3 className="analytics-title">Support Ticket Overview</h3>
            <div className="support-grid">
              <div className="support-item">
                <div className="support-label">
                  <div className="support-indicator warning"></div>
                  Open Tickets
                </div>
                <div className="support-value warning">23</div>
              </div>
              <div className="support-item">
                <div className="support-label">
                  <div className="support-indicator success"></div>
                  Resolved Today
                </div>
                <div className="support-value success">12</div>
              </div>
              <div className="support-item">
                <div className="support-label">
                  <div className="support-indicator info"></div>
                  Avg Response Time
                </div>
                <div className="support-value info">2.3h</div>
              </div>
              <div className="support-item">
                <div className="support-label">
                  <div className="support-indicator rating"></div>
                  Customer Satisfaction
                </div>
                <div className="support-value rating">4.8/5</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


