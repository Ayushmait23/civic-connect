import {
  Bell,
  Bot,
  Check,
  Globe,
  Lock,
  MapPin,
  Save,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Settings() {
  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    notifications: true,
    aiInsights: true,
    locationAlerts: true,
    duplicateDetection: true,
    autoPriority: true,
  });

  const toggleSetting = (key) => {
    setSettings((current) => ({
      ...current,
      [key]: !current[key],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="admin-settings-page">
      <div className="admin-settings-container">

        {/* Header */}
        <motion.div
          className="admin-settings-header"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              Administration
            </div>

            <h1>Settings</h1>

            <p>
              Configure platform preferences, notifications and AI features.
            </p>
          </div>

          <button
            className={`admin-settings-save ${saved ? "saved" : ""}`}
            onClick={handleSave}
          >
            {saved ? <Check size={15} /> : <Save size={15} />}
            {saved ? "Saved" : "Save changes"}
          </button>
        </motion.div>

        {/* General */}
        <motion.section
          className="admin-settings-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <div className="admin-settings-card-header">
            <div className="admin-settings-card-icon blue">
              <SlidersHorizontal size={18} />
            </div>

            <div>
              <h2>General Settings</h2>
              <p>Basic configuration for the civic platform.</p>
            </div>
          </div>

          <div className="admin-settings-options">

            <div className="admin-settings-row">
              <div className="admin-settings-row-icon">
                <Globe size={17} />
              </div>

              <div className="admin-settings-row-content">
                <strong>Platform region</strong>
                <span>Default operating region for CivicConnect.</span>
              </div>

              <select defaultValue="Delhi NCR">
                <option>Delhi NCR</option>
                <option>Gurugram</option>
                <option>Noida</option>
              </select>
            </div>

            <div className="admin-settings-row">
              <div className="admin-settings-row-icon">
                <MapPin size={17} />
              </div>

              <div className="admin-settings-row-content">
                <strong>Location services</strong>
                <span>Use location data for issue mapping and analytics.</span>
              </div>

              <button
                className={`admin-toggle ${
                  settings.locationAlerts ? "active" : ""
                }`}
                onClick={() => toggleSetting("locationAlerts")}
                aria-label="Toggle location services"
              >
                <span></span>
              </button>
            </div>

          </div>
        </motion.section>

        {/* Notifications */}
        <motion.section
          className="admin-settings-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
        >
          <div className="admin-settings-card-header">
            <div className="admin-settings-card-icon purple">
              <Bell size={18} />
            </div>

            <div>
              <h2>Notifications</h2>
              <p>Control administrative alerts and system updates.</p>
            </div>
          </div>

          <div className="admin-settings-options">

            <div className="admin-settings-row">
              <div className="admin-settings-row-icon">
                <Bell size={17} />
              </div>

              <div className="admin-settings-row-content">
                <strong>Admin notifications</strong>
                <span>
                  Receive alerts for important civic activity and system events.
                </span>
              </div>

              <button
                className={`admin-toggle ${
                  settings.notifications ? "active" : ""
                }`}
                onClick={() => toggleSetting("notifications")}
              >
                <span></span>
              </button>
            </div>

            <div className="admin-settings-row">
              <div className="admin-settings-row-icon">
                <AlertIcon />
              </div>

              <div className="admin-settings-row-content">
                <strong>High-priority alerts</strong>
                <span>
                  Notify administrators when critical issues are reported.
                </span>
              </div>

              <button
                className={`admin-toggle ${
                  settings.locationAlerts ? "active" : ""
                }`}
                onClick={() => toggleSetting("locationAlerts")}
              >
                <span></span>
              </button>
            </div>

          </div>
        </motion.section>

        {/* AI */}
        <motion.section
          className="admin-settings-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="admin-settings-card-header">
            <div className="admin-settings-card-icon green">
              <Bot size={18} />
            </div>

            <div>
              <h2>AI Features</h2>
              <p>Configure intelligent issue-management capabilities.</p>
            </div>
          </div>

          <div className="admin-settings-options">

            <SettingToggle
              icon={<Bot size={17} />}
              title="AI Insights"
              description="Generate analytical insights from civic issue patterns."
              enabled={settings.aiInsights}
              onClick={() => toggleSetting("aiInsights")}
            />

            <SettingToggle
              icon={<ShieldCheck size={17} />}
              title="Duplicate Detection"
              description="Identify potentially duplicate civic reports."
              enabled={settings.duplicateDetection}
              onClick={() => toggleSetting("duplicateDetection")}
            />

            <SettingToggle
              icon={<SlidersHorizontal size={17} />}
              title="Smart Priority"
              description="Use issue information to assist with priority assignment."
              enabled={settings.autoPriority}
              onClick={() => toggleSetting("autoPriority")}
            />

          </div>
        </motion.section>

        {/* Security */}
        <motion.section
          className="admin-settings-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26 }}
        >
          <div className="admin-settings-card-header">
            <div className="admin-settings-card-icon orange">
              <Lock size={18} />
            </div>

            <div>
              <h2>Security</h2>
              <p>Administrative account and access controls.</p>
            </div>
          </div>

          <div className="admin-settings-security">
            <div>
              <strong>Administrator access</strong>
              <span>Protected administrative session</span>
            </div>

            <span className="admin-security-badge">
              <ShieldCheck size={13} />
              Protected
            </span>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

function SettingToggle({
  icon,
  title,
  description,
  enabled,
  onClick,
}) {
  return (
    <div className="admin-settings-row">
      <div className="admin-settings-row-icon">
        {icon}
      </div>

      <div className="admin-settings-row-content">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <button
        className={`admin-toggle ${enabled ? "active" : ""}`}
        onClick={onClick}
      >
        <span></span>
      </button>
    </div>
  );
}

function AlertIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10.3 4.2 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 4.2a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export default Settings;