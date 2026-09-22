import {
  MoreHorizontal,
  Search,
  ShieldCheck,
  UserCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const citizens = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    reports: 18,
    resolved: 15,
    status: "Active",
    joined: "12 Sep 2026",
  },
  {
    id: 2,
    name: "Priya Mehta",
    email: "priya.mehta@gmail.com",
    reports: 12,
    resolved: 10,
    status: "Active",
    joined: "08 Sep 2026",
  },
  {
    id: 3,
    name: "Arjun Verma",
    email: "arjun.verma@gmail.com",
    reports: 9,
    resolved: 7,
    status: "Active",
    joined: "02 Sep 2026",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    email: "neha.kapoor@gmail.com",
    reports: 7,
    resolved: 5,
    status: "Inactive",
    joined: "28 Aug 2026",
  },
  {
    id: 5,
    name: "Karan Singh",
    email: "karan.singh@gmail.com",
    reports: 21,
    resolved: 18,
    status: "Active",
    joined: "21 Aug 2026",
  },
  {
    id: 6,
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    reports: 6,
    resolved: 4,
    status: "Active",
    joined: "16 Aug 2026",
  },
];

function Citizens() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCitizens = useMemo(() => {
    return citizens.filter((citizen) => {
      const matchesSearch =
        citizen.name.toLowerCase().includes(search.toLowerCase()) ||
        citizen.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || citizen.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <div className="admin-citizens-page">
      <div className="admin-citizens-container">

        {/* Header */}
        <motion.div
          className="admin-citizens-header"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              Citizen management
            </div>

            <h1>Citizens</h1>

            <p>
              Manage registered citizens and monitor their civic participation.
            </p>
          </div>

          <button className="admin-citizens-add-button">
            <UserPlus size={16} />
            Add Citizen
          </button>
        </motion.div>

        {/* Stats */}
        <div className="admin-citizens-stats">

          <motion.div
            className="admin-citizen-stat"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="admin-citizen-stat-icon blue">
              <Users size={18} />
            </div>

            <div>
              <span>Total Citizens</span>
              <strong>8,492</strong>
            </div>
          </motion.div>

          <motion.div
            className="admin-citizen-stat"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
          >
            <div className="admin-citizen-stat-icon green">
              <UserCheck size={18} />
            </div>

            <div>
              <span>Active Citizens</span>
              <strong>7,864</strong>
            </div>
          </motion.div>

          <motion.div
            className="admin-citizen-stat"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <div className="admin-citizen-stat-icon purple">
              <UserPlus size={18} />
            </div>

            <div>
              <span>New This Month</span>
              <strong>426</strong>
            </div>
          </motion.div>

          <motion.div
            className="admin-citizen-stat"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <div className="admin-citizen-stat-icon orange">
              <ShieldCheck size={18} />
            </div>

            <div>
              <span>Verified Accounts</span>
              <strong>96.8%</strong>
            </div>
          </motion.div>

        </div>

        {/* Citizens panel */}
        <motion.section
          className="admin-citizens-panel"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="admin-citizens-toolbar">

            <div>
              <h2>Registered Citizens</h2>
              <p>View and manage citizen accounts</p>
            </div>

            <div className="admin-citizens-controls">

              <div className="admin-citizens-search">
                <Search size={15} />
                <input
                  type="text"
                  placeholder="Search citizens..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

            </div>
          </div>

          {/* Table */}
          <div className="admin-citizens-table">

            <div className="admin-citizens-table-head">
              <span>Citizen</span>
              <span>Reports</span>
              <span>Resolved</span>
              <span>Status</span>
              <span>Joined</span>
              <span></span>
            </div>

            {filteredCitizens.map((citizen) => (
              <motion.div
                className="admin-citizens-row"
                key={citizen.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >

                <div className="admin-citizen-profile">
                  <div className="admin-citizen-avatar">
                    {citizen.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{citizen.name}</strong>
                    <span>{citizen.email}</span>
                  </div>
                </div>

                <span className="admin-citizen-number">
                  {citizen.reports}
                </span>

                <span className="admin-citizen-number">
                  {citizen.resolved}
                </span>

                <span
                  className={`admin-citizen-status ${citizen.status.toLowerCase()}`}
                >
                  <i></i>
                  {citizen.status}
                </span>

                <span className="admin-citizen-joined">
                  {citizen.joined}
                </span>

                <button
                  className="admin-citizen-more"
                  aria-label={`More options for ${citizen.name}`}
                >
                  <MoreHorizontal size={17} />
                </button>

              </motion.div>
            ))}

            {filteredCitizens.length === 0 && (
              <div className="admin-citizens-empty">
                No citizens found.
              </div>
            )}

          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default Citizens;