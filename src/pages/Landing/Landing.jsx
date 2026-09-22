import { Link } from "react-router-dom";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Map,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "12.8K+",
    label: "Issues Reported",
    icon: CircleAlert,
  },
  {
    value: "8.4K+",
    label: "Issues Resolved",
    icon: CheckCircle2,
  },
  {
    value: "94%",
    label: "Resolution Rate",
    icon: TrendingUp,
  },
  {
    value: "26K+",
    label: "Citizens Connected",
    icon: Users,
  },
];

const categories = [
  {
    icon: "🚧",
    title: "Road Damage",
    description: "Potholes, damaged roads and unsafe infrastructure.",
  },
  {
    icon: "🗑️",
    title: "Garbage",
    description: "Overflowing bins and waste-management problems.",
  },
  {
    icon: "💡",
    title: "Streetlights",
    description: "Broken or malfunctioning public lighting.",
  },
  {
    icon: "💧",
    title: "Water & Drainage",
    description: "Leaks, flooding and drainage-related issues.",
  },
];

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Reporting",
    description:
      "Use intelligent analysis to categorize reports and identify potentially similar issues.",
  },
  {
    icon: Map,
    title: "Location Intelligence",
    description:
      "Visualize reported problems on an interactive map and identify issue hotspots.",
  },
  {
    icon: Zap,
    title: "Transparent Tracking",
    description:
      "Follow every report from submission and assignment through progress and resolution.",
  },
];

function Landing() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badge">
              <Sparkles size={15} />
              <span>Building smarter cities together</span>
            </div>

            <h1>
              Report problems.
              <br />
              <span className="gradient-text">Improve your city.</span>
            </h1>

            <p className="hero-description">
              A transparent civic platform that connects citizens with
              responsible teams to report, track and resolve everyday public
              infrastructure problems.
            </p>

            <div className="hero-actions">
              <Link to="/login" className="primary-button">
  Report an Issue
  <ArrowRight size={18} />
</Link>

              <Link to="/login" className="secondary-button">
  Explore the Map
  <Map size={18} />
</Link>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span>AK</span>
                <span>RS</span>
                <span>PM</span>
                <span>+</span>
              </div>

              <div>
                <strong>Thousands of citizens</strong>
                <p>are helping improve their communities.</p>
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="dashboard-preview">
              <div className="preview-header">
                <div>
                  <span className="preview-eyebrow">Civic Overview</span>
                  <h3>Delhi NCR</h3>
                </div>

                <div className="preview-live">
                  <span />
                  Live
                </div>
              </div>

              <div className="preview-map">
                <div className="map-grid" />

                <div className="map-road road-one" />
                <div className="map-road road-two" />
                <div className="map-road road-three" />

                <motion.div
                  className="map-marker marker-one"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <MapPin size={20} />
                </motion.div>

                <motion.div
                  className="map-marker marker-two"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.3,
                    repeat: Infinity,
                  }}
                >
                  <MapPin size={20} />
                </motion.div>

                <motion.div
                  className="map-marker marker-three"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                >
                  <MapPin size={20} />
                </motion.div>

                <div className="map-overlay-card">
                  <span className="overlay-label">Nearby Issues</span>
                  <strong>24</strong>
                  <span className="overlay-status">
                    <TrendingUp size={13} />
                    12% this week
                  </span>
                </div>
              </div>

              <div className="preview-footer">
                <div>
                  <span className="preview-small-label">High Priority</span>
                  <strong>8 Issues</strong>
                </div>

                <div>
                  <span className="preview-small-label">Resolved Today</span>
                  <strong>17 Issues</strong>
                </div>

                <button className="preview-arrow">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <motion.div
              className="floating-ai-card"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="ai-card-icon">
                <BrainCircuit size={19} />
              </div>

              <div>
                <span>AI Analysis</span>
                <strong>Issue detected · 94%</strong>
              </div>

              <CheckCircle2 size={18} className="ai-check" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="stat-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Civic Issues</span>
              <h2>Report what needs attention.</h2>
            </div>

            <p>
              From damaged roads to overflowing garbage, help make problems
              visible so they can be addressed.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <motion.div
                className="category-card"
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="category-emoji">{category.icon}</div>

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <button>
                  Report issue
                  <ArrowRight size={15} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="features-heading">
            <span className="section-kicker">Built for smarter cities</span>

            <h2>
              Technology that turns
              <span className="gradient-text"> reports into action.</span>
            </h2>

            <p>
              CivicConnect combines structured issue management, location
              intelligence and advanced AI capabilities into one platform.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="feature-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <div className="feature-link">
                    Learn more
                    <ArrowRight size={15} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-decoration cta-decoration-one" />
            <div className="cta-decoration cta-decoration-two" />

            <div className="cta-icon">
              <ShieldCheck size={26} />
            </div>

            <h2>
              See something that needs fixing?
            </h2>

            <p>
              Report it in a few seconds and help your community stay safer,
              cleaner and better connected.
            </p>

            <button className="cta-button">
              Report an Issue
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <ShieldCheck size={18} />
            </div>

            <span>CivicConnect</span>
          </div>

          <p>
            Crowdsourced civic issue reporting and resolution platform.
          </p>

          <span className="footer-copy">
            © 2026 CivicConnect
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;