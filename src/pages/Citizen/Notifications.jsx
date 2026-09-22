import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "update",
      icon: FileText,
      title: "Your report is under review",
      description:
        "Your report CC-1024 has been received and is currently being reviewed by the relevant department.",
      time: "10 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "resolved",
      icon: CheckCircle2,
      title: "Issue resolved",
      description:
        "The streetlight issue you reported in Sector 14 has been marked as resolved.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "ai",
      icon: Sparkles,
      title: "AI detected a nearby issue hotspot",
      description:
        "Several reports have been detected around your area. View the City Map to explore the affected zone.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      type: "location",
      icon: MapPin,
      title: "New civic issue near you",
      description:
        "A new road damage report was submitted near your selected location.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 5,
      type: "reminder",
      icon: Clock3,
      title: "Report awaiting additional information",
      description:
        "Your report may require additional details before the department can proceed.",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <div className="notifications-page">
      <div className="notifications-container">

        <motion.div
          className="notifications-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <div className="page-kicker">YOUR UPDATES</div>
            <h1>Notifications</h1>
            <p>
              Stay updated about your reports and nearby civic activity.
            </p>
          </div>

          <button className="mark-read-button">
            <CheckCircle2 size={16} />
            Mark all as read
          </button>
        </motion.div>

        <div className="notification-summary">
          <div className="notification-summary-icon">
            <Bell size={20} />
          </div>

          <div>
            <strong>3 new notifications</strong>
            <span>
              You have updates waiting for your attention.
            </span>
          </div>
        </div>

        <div className="notifications-list">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;

            return (
              <motion.div
                key={notification.id}
                className={`notification-card ${
                  notification.unread ? "unread" : ""
                }`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className={`notification-icon ${notification.type}`}>
                  <Icon size={19} />
                </div>

                <div className="notification-content">
                  <div className="notification-title-row">
                    <h3>{notification.title}</h3>

                    {notification.unread && (
                      <span className="notification-new-dot"></span>
                    )}
                  </div>

                  <p>{notification.description}</p>

                  <span className="notification-time">
                    {notification.time}
                  </span>
                </div>

                {notification.unread && (
                  <div className="notification-unread-label">
                    New
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="notifications-empty-note">
          <AlertCircle size={16} />
          Notifications will appear here when there are updates to your
          reports.
        </div>

      </div>
    </div>
  );
}

export default Notifications;