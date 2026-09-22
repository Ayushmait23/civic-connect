import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-glow auth-glow-one"></div>
        <div className="auth-glow auth-glow-two"></div>
      </div>

      <motion.div
        className="auth-container"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side */}
        <div className="auth-showcase">
          <div className="auth-brand">
            <div className="auth-brand-icon">
              <ShieldCheck size={25} />
            </div>

            <span>CivicConnect</span>
          </div>

          <div className="auth-showcase-content">
            <span className="auth-mini-badge">
              <span className="status-dot"></span>
              Civic intelligence platform
            </span>

            <h1>
              Make your city
              <span> better, together.</span>
            </h1>

            <p>
              Report civic issues, track their progress, and help create
              cleaner, safer and smarter communities.
            </p>

            <div className="auth-benefits">
              <div>
                <div className="benefit-icon">
                  <ShieldCheck size={18} />
                </div>
                <span>Secure issue reporting</span>
              </div>

              <div>
                <div className="benefit-icon">
                  <ArrowRight size={18} />
                </div>
                <span>Real-time complaint tracking</span>
              </div>

              <div>
                <div className="benefit-icon">
                  <Mail size={18} />
                </div>
                <span>Instant notifications</span>
              </div>
            </div>
          </div>

          <div className="auth-footer-text">
            © 2026 CivicConnect
          </div>
        </div>

        {/* Right Side */}
        <div className="auth-form-section">
          <div className="auth-form-wrapper">
            <div className="auth-form-header">
              <span className="auth-welcome">WELCOME BACK</span>

              <h2>Sign in to CivicConnect</h2>

              <p>
                Access your dashboard and manage your civic reports.
              </p>
            </div>

            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email address</label>

                <div className="input-wrapper">
                  <Mail size={19} />

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="password-label">
                  <label htmlFor="password">Password</label>

                  <button type="button" className="forgot-password">
                    Forgot password?
                  </button>
                </div>

                <div className="input-wrapper">
                  <LockKeyhole size={19} />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <label className="remember-row">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="submit" className="auth-submit">
                Sign in
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <div className="auth-register">
              <span>Don't have an account?</span>

              <Link to="/register" className="auth-register-button">
  Create an account
</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;