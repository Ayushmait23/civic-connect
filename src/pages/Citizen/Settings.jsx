import {
  Bell,
  ChevronRight,
  Lock,
  Mail,
  MapPin,
  Moon,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(true);
  const [aiInsights, setAiInsights] = useState(true);

  return (
    <div
  className="settings-page"
  style={{
    width: "100%",
    minWidth: "0",
    boxSizing: "border-box",
  }}
>
      <div className="settings-container">

        <motion.div
          className="settings-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <div className="page-kicker">ACCOUNT CONTROL</div>
            <h1>Settings</h1>
            <p>
              Manage your profile, preferences and privacy.
            </p>
          </div>
        </motion.div>

        {/* Profile */}

        <motion.section
          className="settings-section profile-settings-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <div className="settings-profile-avatar">A</div>

          <div className="settings-profile-info">
            <h2>Ayush</h2>
            <p>Citizen account</p>

            <div className="settings-profile-meta">
              <span>
                <Mail size={13} />
                ayush@example.com
              </span>

              <span>
                <MapPin size={13} />
                Delhi NCR
              </span>
            </div>
          </div>

          <button className="edit-profile-button">
            Edit profile
            <ChevronRight size={15} />
          </button>
        </motion.section>

        {/* Preferences */}

        <section className="settings-section">
          <div className="settings-section-heading">
            <div>
              <h2>Preferences</h2>
              <p>Control how CivicConnect works for you.</p>
            </div>
          </div>

          <div className="settings-option">
            <div className="settings-option-icon blue">
              <Bell size={18} />
            </div>

            <div className="settings-option-content">
              <strong>Notifications</strong>
              <span>
                Receive updates about your submitted reports.
              </span>
            </div>

            <button
              className={`settings-toggle ${
                notifications ? "active" : ""
              }`}
              onClick={() => setNotifications(!notifications)}
              aria-label="Toggle notifications"
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div className="settings-option-icon green">
              <MapPin size={18} />
            </div>

            <div className="settings-option-content">
              <strong>Location services</strong>
              <span>
                Use your location to show nearby civic issues.
              </span>
            </div>

            <button
              className={`settings-toggle ${
                location ? "active" : ""
              }`}
              onClick={() => setLocation(!location)}
              aria-label="Toggle location services"
            >
              <span></span>
            </button>
          </div>

          <div className="settings-option">
            <div className="settings-option-icon purple">
              <Sparkles size={18} />
            </div>

            <div className="settings-option-content">
              <strong>AI insights</strong>
              <span>
                Receive AI-powered insights about civic activity.
              </span>
            </div>

            <button
              className={`settings-toggle ${
                aiInsights ? "active" : ""
              }`}
              onClick={() => setAiInsights(!aiInsights)}
              aria-label="Toggle AI insights"
            >
              <span></span>
            </button>
          </div>
        </section>

        {/* Account & Security */}

        <section className="settings-section">
          <div className="settings-section-heading">
            <div>
              <h2>Account & Security</h2>
              <p>Manage your account security and access.</p>
            </div>
          </div>

          <button className="settings-action-row">
            <div className="settings-option-icon blue">
              <User size={18} />
            </div>

            <div>
              <strong>Personal information</strong>
              <span>Update your name and contact details.</span>
            </div>

            <ChevronRight size={17} />
          </button>

          <button className="settings-action-row">
            <div className="settings-option-icon orange">
              <Lock size={18} />
            </div>

            <div>
              <strong>Password & security</strong>
              <span>Change your password and security settings.</span>
            </div>

            <ChevronRight size={17} />
          </button>

          <button className="settings-action-row">
            <div className="settings-option-icon green">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>Privacy</strong>
              <span>Manage your privacy preferences.</span>
            </div>

            <ChevronRight size={17} />
          </button>

          <button className="settings-action-row">
            <div className="settings-option-icon purple">
              <Moon size={18} />
            </div>

            <div>
              <strong>Appearance</strong>
              <span>Customize how the application looks.</span>
            </div>

            <ChevronRight size={17} />
          </button>
        </section>

        <div className="settings-footer-note">
          <ShieldCheck size={15} />
          Your account settings are securely managed by CivicConnect.
        </div>

      </div>
    </div>
  );
}

export default Settings;