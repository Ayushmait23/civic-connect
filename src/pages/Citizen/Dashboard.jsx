import {
  Bell,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileCheck2,
  MapPin,
  Plus,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

function Dashboard() {
  const stats = [
    {
      label: "Total Reports",
      value: "12",
      icon: CircleAlert,
      change: "+2 this month",
    },
    {
      label: "In Progress",
      value: "04",
      icon: Clock3,
      change: "Being reviewed",
    },
    {
      label: "Resolved",
      value: "08",
      icon: FileCheck2,
      change: "+3 this month",
    },
  ];

  const recentReports = [
    {
      title: "Pothole near Main Road",
      category: "Road Damage",
      location: "Sector 14",
      status: "In Progress",
      statusClass: "status-progress",
      date: "Today",
    },
    {
      title: "Broken Streetlight",
      category: "Streetlights",
      location: "Market Area",
      status: "Resolved",
      statusClass: "status-resolved",
      date: "Yesterday",
    },
    {
      title: "Overflowing Garbage Bin",
      category: "Garbage",
      location: "Block B",
      status: "Under Review",
      statusClass: "status-review",
      date: "2 days ago",
    },
  ];

  return (
    <div className="citizen-dashboard">
      <div className="container dashboard-container">
        {/* Header */}
        <motion.div
          className="dashboard-welcome"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="dashboard-eyebrow">
              <span className="dashboard-live-dot"></span>
              CITIZEN DASHBOARD
            </span>

            <h1>
              Good morning, Ayush <span>👋</span>
            </h1>

            <p>
              Here's what's happening with your civic reports.
            </p>
          </div>

          <motion.button
            className="report-issue-button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={19} />
            Report an Issue
          </motion.button>
        </motion.div>

        {/* Stats */}
        <div className="dashboard-stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="dashboard-stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="dashboard-stat-top">
                  <div className="dashboard-stat-icon">
                    <Icon size={19} />
                  </div>

                  <TrendingUp size={16} />
                </div>

                <strong>{stat.value}</strong>

                <span>{stat.label}</span>

                <small>{stat.change}</small>
              </motion.div>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="dashboard-main-grid">
          {/* Recent Reports */}
          <motion.section
            className="dashboard-card reports-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="dashboard-card-header">
              <div>
                <span className="card-kicker">YOUR ACTIVITY</span>
                <h2>Recent reports</h2>
              </div>

              <button className="view-all-button">
                View all
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="reports-list">
              {recentReports.map((report) => (
                <div className="report-row" key={report.title}>
                  <div className="report-category-icon">
                    <CircleAlert size={18} />
                  </div>

                  <div className="report-info">
                    <strong>{report.title}</strong>

                    <span>
                      {report.category} · {report.location}
                    </span>
                  </div>

                  <div className="report-meta">
                    <span className={`report-status ${report.statusClass}`}>
                      {report.status}
                    </span>

                    <small>{report.date}</small>
                  </div>

                  <ChevronRight
                    size={17}
                    className="report-arrow"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* AI Insight */}
          <motion.section
            className="dashboard-card ai-insight-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="ai-insight-top">
              <div className="ai-insight-icon">
                <Sparkles size={21} />
              </div>

              <span>AI INSIGHT</span>
            </div>

            <h2>
              Help your report
              <span> get noticed faster.</span>
            </h2>

            <p>
              Adding a clear location and photo can help the system
              categorize and process your civic report more efficiently.
            </p>

            <div className="ai-tip">
              <ShieldCheck size={17} />

              <span>
                Tip: Include the exact location whenever possible.
              </span>
            </div>

            <button className="ai-action-button">
              Report an issue
              <ChevronRight size={17} />
            </button>
          </motion.section>
        </div>

        {/* Bottom Grid */}
        <div className="dashboard-bottom-grid">
          {/* City Activity */}
          <motion.section
            className="dashboard-card city-activity-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="dashboard-card-header">
              <div>
                <span className="card-kicker">CITY ACTIVITY</span>
                <h2>Issues around you</h2>
              </div>

              <button className="view-all-button">
                Open map
                <MapPin size={15} />
              </button>
            </div>

            <div className="mini-map">
              <div className="mini-map-grid"></div>

              <div className="mini-road mini-road-one"></div>
              <div className="mini-road mini-road-two"></div>
              <div className="mini-road mini-road-three"></div>

              <span className="mini-map-marker marker-a">
                <MapPin size={18} />
              </span>

              <span className="mini-map-marker marker-b">
                <MapPin size={18} />
              </span>

              <span className="mini-map-marker marker-c">
                <MapPin size={18} />
              </span>

              <div className="map-location-label">
                <MapPin size={14} />
                Delhi NCR
              </div>
            </div>
          </motion.section>

          {/* Notifications */}
          <motion.section
            className="dashboard-card notification-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="dashboard-card-header">
              <div>
                <span className="card-kicker">UPDATES</span>
                <h2>Notifications</h2>
              </div>

              <div className="notification-header-icon">
                <Bell size={17} />
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-dot blue"></div>

              <div>
                <strong>Report update</strong>
                <p>Your streetlight report is now resolved.</p>
                <small>2 hours ago</small>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-dot green"></div>

              <div>
                <strong>Issue verified</strong>
                <p>Your pothole report has been verified.</p>
                <small>Yesterday</small>
              </div>
            </div>

            <button className="notifications-link">
              View all notifications
              <ChevronRight size={15} />
            </button>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;