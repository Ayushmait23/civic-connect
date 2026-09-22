import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock3,
  FileWarning,
  MoreHorizontal,
  Settings2,
  Sparkles,
  UserPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    type: "critical",
    title: "High-priority issue reported",
    message:
      "A major road damage report has been submitted near Sector 15.",
    time: "8 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "success",
    title: "Issue resolved",
    message:
      "Issue CC-1024 has been marked as resolved by Road Maintenance.",
    time: "32 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "citizen",
    title: "New citizen registered",
    message:
      "A new citizen account has been successfully created.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "ai",
    title: "AI duplicate detection alert",
    message:
      "3 reports may refer to the same recurring drainage issue.",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 5,
    type: "warning",
    title: "Resolution deadline approaching",
    message:
      "5 unresolved issues are approaching their expected resolution window.",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 6,
    type: "system",
    title: "System update completed",
    message:
      "CivicConnect analytics services have been successfully updated.",
    time: "Yesterday",
    unread: false,
  },
];

function Notifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [items, setItems] = useState(notifications);

  const filteredNotifications =
    activeFilter === "Unread"
      ? items.filter((item) => item.unread)
      : items;

  const markAllRead = () => {
    setItems((current) =>
      current.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "critical":
        return <AlertTriangle size={17} />;
      case "success":
        return <CheckCircle2 size={17} />;
      case "citizen":
        return <UserPlus size={17} />;
      case "ai":
        return <Sparkles size={17} />;
      case "warning":
        return <Clock3 size={17} />;
      default:
        return <Settings2 size={17} />;
    }
  };

  return (
    <div className="admin-notifications-page">
      <div className="admin-notifications-container">

        {/* Header */}
        <motion.div
          className="admin-notifications-header"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              System activity
            </div>

            <h1>Notifications</h1>

            <p>
              Stay updated with important civic activity and system events.
            </p>
          </div>

          <button
            className="admin-notifications-mark"
            onClick={markAllRead}
          >
            <CheckCircle2 size={15} />
            Mark all as read
          </button>
        </motion.div>

        {/* Summary */}
        <div className="admin-notification-summary">

          <div className="admin-notification-summary-card">
            <div className="admin-notification-summary-icon blue">
              <Bell size={18} />
            </div>
            <div>
              <span>Total Notifications</span>
              <strong>{items.length}</strong>
            </div>
          </div>

          <div className="admin-notification-summary-card">
            <div className="admin-notification-summary-icon red">
              <AlertTriangle size={18} />
            </div>
            <div>
              <span>Unread</span>
              <strong>{items.filter((item) => item.unread).length}</strong>
            </div>
          </div>

          <div className="admin-notification-summary-card">
            <div className="admin-notification-summary-icon purple">
              <Sparkles size={18} />
            </div>
            <div>
              <span>AI Alerts</span>
              <strong>
                {items.filter((item) => item.type === "ai").length}
              </strong>
            </div>
          </div>

        </div>

        {/* Notification Panel */}
        <motion.section
          className="admin-notifications-panel"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >

          <div className="admin-notifications-toolbar">
            <div>
              <h2>Recent Activity</h2>
              <p>Important events from your civic platform</p>
            </div>

            <div className="admin-notification-filters">
              <button
                className={activeFilter === "All" ? "active" : ""}
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>

              <button
                className={activeFilter === "Unread" ? "active" : ""}
                onClick={() => setActiveFilter("Unread")}
              >
                Unread
              </button>
            </div>
          </div>

          <div className="admin-notification-list">
            {filteredNotifications.map((notification) => (
              <motion.div
                key={notification.id}
                className={`admin-notification-item ${
                  notification.unread ? "unread" : ""
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
              >

                <div
                  className={`admin-notification-icon ${notification.type}`}
                >
                  {getIcon(notification.type)}
                </div>

                <div className="admin-notification-content">
                  <div className="admin-notification-title-row">
                    <strong>{notification.title}</strong>

                    {notification.unread && (
                      <span className="admin-notification-new">
                        NEW
                      </span>
                    )}
                  </div>

                  <p>{notification.message}</p>

                  <span className="admin-notification-time">
                    {notification.time}
                  </span>
                </div>

                <button
                  className="admin-notification-more"
                  aria-label="Notification options"
                >
                  <MoreHorizontal size={17} />
                </button>

              </motion.div>
            ))}

            {filteredNotifications.length === 0 && (
              <div className="admin-notifications-empty">
                <Bell size={24} />
                <strong>You're all caught up</strong>
                <span>No unread notifications.</span>
              </div>
            )}
          </div>

        </motion.section>

        {/* Bottom AI card */}
        <motion.div
          className="admin-notification-ai"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="admin-notification-ai-icon">
            <Sparkles size={19} />
          </div>

          <div>
            <span>SMART ALERTS</span>
            <h3>AI-powered notification prioritization</h3>
            <p>
              Important alerts can be surfaced automatically based on issue
              priority, recurring patterns and operational activity.
            </p>
          </div>

          <FileWarning size={19} />
        </motion.div>

      </div>
    </div>
  );
}

export default Notifications;