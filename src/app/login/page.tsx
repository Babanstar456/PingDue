'use client';

import { useState } from 'react';
import './login.css';

import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from './firebase/config';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // redirect to dashboard or home
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/dashboard');
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h1 className="login-title">PingDue</h1>
        <h2>Welcome back</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <form onSubmit={handleLogin}>
          {errorMsg && <p className="error-text">{errorMsg}</p>}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-toggle">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <a href="./forget-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign In</button>

          <div className="divider"><span>or</span></div>

          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              width="20"
            />
            Continue with Google
          </button>

          <p className="signup-text">
            Don’t have an account? <a href="./signup">Sign up</a>
          </p>
        </form>
      </div>

      <div className="right-panel">
        <div>
          <div className="card-dashboard">
            <h3 style={{ color: '#2563eb', fontWeight: '600' }}>PingDue Dashboard</h3>
            <div className="card-stats">
              <div className="stat-box stat-sms">2.4k SMS Sent</div>
              <div className="stat-box stat-email">1.8k Emails</div>
            </div>
            <div className="dashboard-description">📊 Analytics Dashboard</div>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: '600' }}>
            Automate Payment Reminders
          </h3>
          <p className="dashboard-description">
            Send personalized payment reminders across SMS, Email, WhatsApp, and Voice channels with intelligent automation.
          </p>
        </div>
      </div>
    </div>
  );
}
