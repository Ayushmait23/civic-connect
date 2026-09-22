import {
  AlertTriangle,
  CalendarDays,
  ChevronDown,
  CircleCheck,
  Clock3,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const issues = [
  {
    id: "CC-1024",
    title: "Large pothole on main road",
    category: "Road Damage",
    location: "Sector 14",
    date: "18 Sep 2026",
    priority: "High",
    status: "In Progress",
  },
  {
    id: "CC-1023",
    title: "Streetlight not working",
    category: "Streetlight",
    location: "Model Town",
    date: "17 Sep 2026",
    priority: "Medium",
    status: "Under Review",
  },
  {
    id: "CC-1022",
    title: "Garbage overflowing near park",
    category: "Garbage",
    location: "Rohini",
    date: "17 Sep 2026",
    priority: "High",
    status: "Pending",
  },
  {
    id: "CC-1021",
    title: "Water leakage on service road",
    category: "Water & Drainage",
    location: "Dwarka",
    date: "16 Sep 2026",
    priority: "Critical",
    status: "Assigned",
  },
  {
    id: "CC-1020",
    title: "Broken footpath near market",
    category: "Public Infrastructure",
    location: "Saket",
    date: "16 Sep 2026",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: "CC-1019",
    title: "Open drainage cover",
    category: "Water & Drainage",
    location: "Janakpuri",
    date: "15 Sep 2026",
    priority: "Critical",
    status: "Under Review",
  },
  {
    id: "CC-1018",
    title: "Damaged traffic sign",
    category: "Public Infrastructure",
    location: "Vasant Kunj",
    date: "15 Sep 2026",
    priority: "Low",
    status: "Resolved",
  },
];

function AdminIssues() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("All Priority");

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const searchMatch =
        issue.title.toLowerCase().includes(search.toLowerCase()) ||
        issue.id.toLowerCase().includes(search.toLowerCase()) ||
        issue.location.toLowerCase().includes(search.toLowerCase());

      const statusMatch =
        statusFilter === "All Status" ||
        issue.status === statusFilter;

      const priorityMatch =
        priorityFilter === "All Priority" ||
        issue.priority === priorityFilter;

      return searchMatch && statusMatch && priorityMatch;
    });
  }, [search, statusFilter, priorityFilter]);

  return (
    <div className="admin-issues-page">
      <div className="admin-issues-container">

        {/* Header */}
        <motion.div
          className="admin-issues-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              Issue management
            </div>

            <h1>All Issues</h1>

            <p>
              Review, prioritize and manage civic reports submitted by
              citizens.
            </p>
          </div>

          <div className="admin-issues-summary">
            <div>
              <strong>1,284</strong>
              <span>Total reports</span>
            </div>

            <div>
              <strong>186</strong>
              <span>Needs review</span>
            </div>
          </div>
        </motion.div>

        {/* Toolbar */}
        <motion.div
          className="admin-issues-toolbar"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="admin-search-box">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search issue, ID or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="admin-filter-group">

            <div className="admin-filter-select">
              <Filter size={15} />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option>All Status</option>
                <option>Pending</option>
                <option>Under Review</option>
                <option>Assigned</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>

              <ChevronDown size={14} />
            </div>

            <div className="admin-filter-select">
              <SlidersHorizontal size={15} />

              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option>All Priority</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              <ChevronDown size={14} />
            </div>

            <button className="admin-filter-button">
              <CalendarDays size={15} />
              Date
            </button>

          </div>
        </motion.div>

        {/* Table */}
        <motion.section
          className="admin-issues-table-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          <div className="admin-table-top">
            <div>
              <h2>Issue Reports</h2>

              <span>
                Showing {filteredIssues.length} of {issues.length} reports
              </span>
            </div>

            <button className="admin-export-button">
              Export
            </button>
          </div>

          <div className="admin-table-wrapper">
            <table className="admin-issues-table">
              <thead>
                <tr>
                  <th>Issue</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Priority</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredIssues.map((issue, index) => (
                  <motion.tr
                    key={issue.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.04 * index,
                    }}
                  >
                    <td>
                      <div className="admin-table-issue">
                        <div className="admin-table-issue-icon">
                          {issue.priority === "Critical" ? (
                            <AlertTriangle size={16} />
                          ) : issue.status === "Resolved" ? (
                            <CircleCheck size={16} />
                          ) : (
                            <Clock3 size={16} />
                          )}
                        </div>

                        <div>
                          <strong>{issue.title}</strong>
                          <span>{issue.id}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="admin-category-text">
                        {issue.category}
                      </span>
                    </td>

                    <td>
                      <span className="admin-location-text">
                        <MapPin size={13} />
                        {issue.location}
                      </span>
                    </td>

                    <td>
                      <span className="admin-date-text">
                        {issue.date}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`admin-table-priority admin-table-priority-${issue.priority.toLowerCase()}`}
                      >
                        {issue.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`admin-table-status admin-table-status-${issue.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {filteredIssues.length === 0 && (
              <div className="admin-no-results">
                <Search size={25} />
                <strong>No issues found</strong>
                <span>
                  Try changing your search or filters.
                </span>
              </div>
            )}
          </div>

          <div className="admin-table-footer">
            <span>
              Last updated just now
            </span>

            <div className="admin-pagination">
              <button disabled>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default AdminIssues;