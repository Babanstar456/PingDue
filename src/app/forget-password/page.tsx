'use client';

import { useState } from 'react';
import './forgot-password.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false); // toggle state

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual logic to trigger password reset (API/Firebase)
    setSent(true); // mock success
  };

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        <h1 className="brand-logo">🔷 PingDue</h1>

        {!sent ? (
          <>
            <h2>Forgot your password?</h2>
            <p className="subtitle">
              No worries! Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="reset-btn">Send Reset Link</button>

              <div className="divider"><span>or</span></div>

              <button type="button" className="back-btn" onClick={() => window.location.href = '/login'}>
                ← Back to Sign In
              </button>

              <button type="button" className="support-btn">
                🎧 Contact Support
              </button>

              <p className="signin-link">
                Remember your password? <a href="/login">Sign in</a>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2>Check your email 📬</h2>
            <p className="subtitle">
              A reset link has been sent to <strong>{email}</strong>. <br />
              Click the link in your inbox to reset your password.
            </p>

            <button type="button" className="reset-btn" onClick={() => setSent(false)}>
              Resend Link
            </button>

            <p className="signin-link" style={{ marginTop: '24px' }}>
              Back to <a href="/login">Sign in</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
