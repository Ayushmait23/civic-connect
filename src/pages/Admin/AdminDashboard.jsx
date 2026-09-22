import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileWarning,
  MapPin,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Issues",
    value: "1,284",
    change: "+12.8%",
    icon: FileWarning,
  },
  {
    title: "Pending Review",
    value: "186",
    change: "+8.4%",
    icon: Clock3,
  },
  {
    title: "Resolved",
    value: "934",
    change: "+16.2%",
    icon: CheckCircle2,
  },
  {
    title: "Active Citizens",
    value: "8,492",
    change: "+11.5%",
    icon: Users,
  },
];

const recentIssues = [
  {
    id: "CC-1024",
    title: "Large pothole on main road",
    category: "Road Damage",
    location: "Sector 14",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "CC-1023",
    title: "Streetlight not working",
    category: "Streetlight",
    location: "Model Town",
    priority: "Medium",
    status: "Under Review",
  },
  {
    id: "CC-1022",
    title: "Garbage overflowing near park",
    category: "Garbage",
    location: "Rohini",
    priority: "High",
    status: "Pending",
  },
  {
    id: "CC-1021",
    title: "Water leakage on service road",
    category: "Water & Drainage",
    location: "Dwarka",
    priority: "Critical",
    status: "Assigned",
  },
];

function AdminDashboard() {
  return (
    <div className="admin-dashboard-page">
      <div className="admin-dashboard-container">

        {/* Header */}
        <motion.div
          className="admin-dashboard-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              <span>Live system overview</span>
            </div>

            <h1>Admin Dashboard</h1>

            <p>
              Monitor civic issues, track resolutions and understand city
              activity in real time.
            </p>
          </div>

          <button className="admin-date-button">
            <BarChart3 size={17} />
            September 2026
          </button>
        </motion.div>

        {/* Stats */}
        <div className="admin-stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="admin-stat-card"
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
              >
                <div className="admin-stat-top">
                  <div className="admin-stat-icon">
                    <Icon size={19} />
                  </div>

                  <button className="admin-more-button">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="admin-stat-value">{stat.value}</div>

                <div className="admin-stat-bottom">
                  <span>{stat.title}</span>

                  <span className="admin-stat-change">
                    <TrendingUp size={13} />
                    {stat.change}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main grid */}
        <div className="admin-main-grid">

          {/* Issue activity */}
          <motion.section
            className="admin-panel admin-activity-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="admin-panel-header">
              <div>
                <h2>Issue Activity</h2>
                <p>Reports received over the last 7 days</p>
              </div>

              <button className="admin-view-button">
                View analytics
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="admin-chart">
              <div className="admin-chart-y">
                <span>120</span>
                <span>90</span>
                <span>60</span>
                <span>30</span>
                <span>0</span>
              </div>

              <div className="admin-chart-area">
                <div className="admin-chart-grid-line"></div>
                <div className="admin-chart-grid-line"></div>
                <div className="admin-chart-grid-line"></div>
                <div className="admin-chart-grid-line"></div>

                <div className="admin-chart-bars">
                  {[52, 72, 48, 91, 67, 84, 106].map((height, index) => (
                    <div className="admin-chart-bar-wrapper" key={index}>
                      <motion.div
                        className="admin-chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${height / 1.2}%` }}
                        transition={{
                          duration: 0.7,
                          delay: 0.35 + index * 0.06,
                        }}
                      />

                      <span>
                        {
                          ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
                            index
                          ]
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* AI insight */}
          <motion.section
            className="admin-panel admin-ai-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            <div className="admin-ai-icon">
              <Sparkles size={20} />
            </div>

            <span className="admin-ai-label">AI CITY INSIGHT</span>

            <h2>Road issues are increasing</h2>

            <p>
              AI analysis detects a concentration of road-related reports
              around several high-traffic zones.
            </p>

            <div className="admin-ai-metric">
              <strong>+24%</strong>
              <span>compared with last week</span>
            </div>

            <button className="admin-ai-button">
              Explore AI insights
              <ArrowUpRight size={16} />
            </button>
          </motion.section>
        </div>

        {/* Bottom section */}
        <div className="admin-bottom-grid">

          {/* Recent issues */}
          <motion.section
            className="admin-panel admin-issues-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="admin-panel-header">
              <div>
                <h2>Recent Issues</h2>
                <p>Latest citizen reports</p>
              </div>

              <button className="admin-view-button">
                View all
                <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="admin-issues-list">
              {recentIssues.map((issue) => (
                <div className="admin-issue-row" key={issue.id}>
                  <div className="admin-issue-icon">
                    <AlertTriangle size={17} />
                  </div>

                  <div className="admin-issue-info">
                    <strong>{issue.title}</strong>

                    <div>
                      <span>{issue.id}</span>
                      <span>{issue.category}</span>
                      <span>
                        <MapPin size={11} />
                        {issue.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`admin-priority admin-priority-${issue.priority
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {issue.priority}
                  </span>

                  <span className="admin-status">
                    {issue.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Map preview */}
          <motion.section
            className="admin-panel admin-map-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
          >
            <div className="admin-panel-header">
              <div>
                <h2>Issue Hotspots</h2>
                <p>Current city activity</p>
              </div>

              <MapPin size={19} />
            </div>

            <div className="admin-map-preview">
              <div className="admin-map-grid"></div>

              <span className="admin-map-road road-one"></span>
              <span className="admin-map-road road-two"></span>
              <span className="admin-map-road road-three"></span>

              <span className="admin-hotspot hotspot-one"></span>
              <span className="admin-hotspot hotspot-two"></span>
              <span className="admin-hotspot hotspot-three"></span>
              <span className="admin-hotspot hotspot-four"></span>

              <div className="admin-map-label">
                <MapPin size={13} />
                Delhi NCR
              </div>
            </div>
          </motion.section>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;