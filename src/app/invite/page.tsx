'use client';
import React, { useState } from 'react';
import '../login/login.css'; // Reuse global styles
import { useRouter } from 'next/navigation';

export default function SignupInvitePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
    const router = useRouter();

  return (
    <div className="login-container center-card">
      <div className="card-box">
        <div className="login-title">PingDue</div>
        <p className="subtitle" style={{ fontWeight: 600 }}>You're invited to join</p>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>
          Acme Corporation
        </h2>
        <p className="subtitle" style={{ marginBottom: '24px' }}>on PingDue</p>

        <div style={{
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '32px',
        }}>
          <div style={{ marginBottom: '12px' }}>
            <strong>John Doe</strong> invited you to join their team<br />
            <span style={{ fontSize: '14px', color: '#6b7280' }}>john.doe@acmecorp.com</span>
          </div>
          <div style={{ marginBottom: '8px' }}>
            <span className="badge">👤 Team Member</span>
          </div>
          <div style={{ fontSize: '14px', color: '#4b5563' }}>
            <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
              <li style={{ color: '#16a34a' }}>✔ View dashboard and reports</li>
              <li style={{ color: '#16a34a' }}>✔ Create and edit templates</li>
              <li style={{ color: '#ef4444' }}>✘ Manage team members</li>
            </ul>
          </div>
        </div>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="form-group password-toggle">
            <label>Create Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a secure password"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="form-group password-toggle">
            <label>Confirm Password</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm your password"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit" className="login-btn" style={{ marginTop: '16px' }}>
            Accept Invitation & Join Team
          </button>

          <button
          onClick={() => router.push('/signup')}
            type="button"
            className="google-btn"
            style={{ background: '#f9fafb', border: 'none', marginTop: '12px' }}
          >
            Decline Invitation
          </button>

          <p className="signup-text" style={{ marginTop: '32px' }}>
            Need help? <a href="#">Contact support</a>
          </p>
        </form>
      </div>
    </div>
  );
}
