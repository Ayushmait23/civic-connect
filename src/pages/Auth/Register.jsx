import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  MapPin,
  ShieldCheck,
  User,
} from "lucide-react";
import { useState } from "react";

function Register() {
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
              Join your civic community
            </span>

            <h1>
              Your voice
              <span>can change a city.</span>
            </h1>

            <p>
              Create your CivicConnect account and help report, track and
              resolve issues around your community.
            </p>

            <div className="auth-benefits">
              <div>
                <div className="benefit-icon">
                  <CheckCircle2 size={18} />
                </div>
                <span>Report civic problems easily</span>
              </div>

              <div>
                <div className="benefit-icon">
                  <MapPin size={18} />
                </div>
                <span>Pin issues on the city map</span>
              </div>

              <div>
                <div className="benefit-icon">
                  <ShieldCheck size={18} />
                </div>
                <span>Track resolution transparently</span>
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
              <span className="auth-welcome">GET STARTED</span>

              <h2>Create your account</h2>

              <p>
                Join CivicConnect and make your community better.
              </p>
            </div>

            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full name</label>

                <div className="input-wrapper">
                  <User size={19} />

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="register-email">Email address</label>

                <div className="input-wrapper">
                  <Mail size={19} />

                  <input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="register-password">Password</label>

                <div className="input-wrapper">
                  <LockKeyhole size={19} />

                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
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
                <span>
                  I agree to the CivicConnect terms and privacy policy.
                </span>
              </label>

              <button type="submit" className="auth-submit">
                Create account
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <div className="auth-register">
              <span>Already have an account?</span>

             <Link to="/login" className="auth-register-button">
  Sign in
</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;