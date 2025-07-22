'use client';

import { useState } from 'react';
import './signup.css';
import { useRouter } from 'next/navigation';


export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

 return (
    <div className="signup-container">
      {/* Left Panel */}
      <div className="signup-left">
        <h1 className="brand-name">🔷 PingDue</h1>
        <h2>Create your account</h2>
        <p className="subtitle">Start automating your payment reminders today</p>

        <form>
          <div className="name-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-group">
            <label>Business Name</label>
            <input type="text" placeholder="Your Business Name" />
          </div>

          <div className="form-group">
            <label>Work Email</label>
            <input type="email" placeholder="john@yourbusiness.com" />
          </div>

          <div className="form-group password-wrapper">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
            <ul className="password-checks">
              <li className="valid">✓ At least 8 characters</li>
              <li>○ One uppercase letter</li>
              <li>○ One number or symbol</li>
            </ul>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>

         <button  onClick={() => router.push('/invite')} type="submit" className="signup-btn" >Create Account</button>

          <div className="divider"><span>or</span></div>

          <button type="button" className="google-btn">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              width="20"
            />
            Sign up with Google
          </button>

          <p className="signin-link">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>

      {/* Right Panel */}
      <div className="signup-right">
        <h3>Why choose PingDue?</h3>
        <p className="benefit-intro">
          Join thousands of businesses automating their payment collection
        </p>

        <div className="benefit-item">
          <div className="benefit-icon">⚡</div>
          <div>
            <strong>Automated Workflows</strong>
            <p>Set up once and let PingDue handle all your payment reminders automatically</p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">📡</div>
          <div>
            <strong>Multi-Channel Reach</strong>
            <p>Reach customers via SMS, Email, WhatsApp, and Voice calls from one platform</p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">📊</div>
          <div>
            <strong>Advanced Analytics</strong>
            <p>Track performance and optimize your payment collection with detailed insights</p>
          </div>
        </div>

        <p className="trusted-text">Trusted by 10,000+ businesses worldwide</p>

        <div className="trust-badges">
          <span>🛡 SOC 2 Compliant</span>
          <span>⚡ 99.9% Uptime</span>
        </div>
      </div>
    </div>
  );
}
