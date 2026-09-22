import {
  CalendarDays,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileText,
  MapPin,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

const reports = [
  {
    id: "CC-1024",
    title: "Large pothole on main road",
    category: "Road Damage",
    location: "Delhi NCR",
    status: "In Progress",
    date: "18 Sep 2026",
    icon: FileText,
  },
  {
    id: "CC-1021",
    title: "Streetlight not working",
    category: "Streetlight",
    location: "Sector 14",
    status: "Resolved",
    date: "14 Sep 2026",
    icon: CircleCheck,
  },
  {
    id: "CC-1017",
    title: "Overflowing garbage near park",
    category: "Garbage",
    location: "Model Town",
    status: "Under Review",
    date: "10 Sep 2026",
    icon: Clock3,
  },
];

function MyReports() {
  return (
    <div className="my-reports-page">
      <div className="my-reports-container">

        <motion.div
          className="my-reports-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <span className="my-reports-kicker">
              YOUR ACTIVITY
            </span>

            <h1>My Reports</h1>

            <p>
              Track the civic issues you've reported and follow
              their progress.
            </p>
          </div>

          <div className="my-reports-search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search reports..."
            />
          </div>
        </motion.div>

        <div className="my-reports-stats">

          <div className="my-report-stat-card">
            <div className="my-report-stat-icon blue">
              <FileText size={19} />
            </div>

            <div>
              <span>Total reports</span>
              <strong>12</strong>
            </div>
          </div>

          <div className="my-report-stat-card">
            <div className="my-report-stat-icon orange">
              <Clock3 size={19} />
            </div>

            <div>
              <span>In progress</span>
              <strong>04</strong>
            </div>
          </div>

          <div className="my-report-stat-card">
            <div className="my-report-stat-icon green">
              <CircleCheck size={19} />
            </div>

            <div>
              <span>Resolved</span>
              <strong>08</strong>
            </div>
          </div>

        </div>

        <div className="my-reports-section">

          <div className="my-reports-section-header">
            <div>
              <h2>Recent reports</h2>
              <p>Your latest civic issue submissions</p>
            </div>

            <span className="reports-count">
              3 recent
            </span>
          </div>

          <div className="reports-list">

            {reports.map((report, index) => {
              const Icon = report.icon;

              return (
                <motion.div
                  className="report-list-card"
                  key={report.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="report-list-icon">
                    <Icon size={20} />
                  </div>

                  <div className="report-list-main">

                    <div className="report-list-top">
                      <span className="report-id">
                        {report.id}
                      </span>

                      <span
                        className={`report-status ${report.status
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        {report.status}
                      </span>
                    </div>

                    <h3>{report.title}</h3>

                    <div className="report-list-meta">

                      <span>
                        {report.category}
                      </span>

                      <span>
                        <MapPin size={12} />
                        {report.location}
                      </span>

                      <span>
                        <CalendarDays size={12} />
                        {report.date}
                      </span>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="report-view-button"
                  >
                    View
                    <ChevronRight size={15} />
                  </button>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
}

export default MyReports;