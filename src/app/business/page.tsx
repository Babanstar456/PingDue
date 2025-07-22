// pages/admin.tsx
import React from "react";
import "./page.css"; // This line links your global.css

const AdminPage = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="brand-title">PingDue Admin</h2>
        <div className="user-info">
          <div className="avatar">AD</div>
          <div className="user-text">
            <p>Admin User</p>
            <span>Super Admin</span>
          </div>
        </div>

        <nav>
          <ul>
            <li className="nav-item">Dashboard</li>
            <li className="nav-item active">All Businesses</li>
            <li className="nav-item">Usage Analytics</li>
            <li className="nav-item">Billing & Revenue</li>
          </ul>
        </nav>
      </aside>

      <main className="main-section">
        <div className="header">
          <div>
            <h1>Business Management</h1>
            <p>Monitor and manage all business accounts</p>
          </div>
          <div className="header-buttons">
            <button className="btn-outline">Export</button>
            <button className="btn-primary">+ Add Business</button>
          </div>
        </div>

        <div className="filters">
          <input type="text" placeholder="Search businesses..." />
          <select><option>All Plans</option></select>
          <select><option>All Status</option></select>
          <select><option>All Industries</option></select>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Business</th>
                <th>Plan</th>
                <th>Revenue</th>
                <th>UsageStatus</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="business-info">
                    <div className="avatar color-blue">TF</div>
                    <div>
                      <strong>TechFlow Solutions</strong><br />
                      <span>tech@techflow.com</span><br />
                      <small>SaaS • 150 employees</small>
                    </div>
                  </div>
                </td>
                <td>Enterprise</td>
                <td>$1,999</td>
                <td><span className="badge green">Active</span> 85%</td>
                <td>2 hours ago</td>
                <td>...</td>
              </tr>
              {/* Repeat other rows similarly... */}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <span>Showing 1-5 of 2,847 businesses</span>
          <div className="pagination-buttons">
            <button>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>57</button>
            <button>Next</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
