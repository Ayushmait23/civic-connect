import {
  AlertTriangle,
  ChevronRight,
  Filter,
  Layers3,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const mapIssues = [
  {
    id: "CC-1024",
    title: "Large pothole on main road",
    category: "Road Damage",
    priority: "High",
    status: "In Progress",
    location: "Sector 14",
    top: "34%",
    left: "28%",
  },
  {
    id: "CC-1023",
    title: "Streetlight not working",
    category: "Streetlight",
    priority: "Medium",
    status: "Under Review",
    location: "Model Town",
    top: "24%",
    left: "61%",
  },
  {
    id: "CC-1022",
    title: "Garbage overflowing near park",
    category: "Garbage",
    priority: "High",
    status: "Pending",
    location: "Rohini",
    top: "51%",
    left: "73%",
  },
  {
    id: "CC-1021",
    title: "Water leakage on service road",
    category: "Water & Drainage",
    priority: "Critical",
    status: "Assigned",
    location: "Dwarka",
    top: "70%",
    left: "38%",
  },
  {
    id: "CC-1020",
    title: "Broken footpath near market",
    category: "Public Infrastructure",
    priority: "Medium",
    status: "In Progress",
    location: "Saket",
    top: "72%",
    left: "70%",
  },
  {
    id: "CC-1019",
    title: "Open drainage cover",
    category: "Water & Drainage",
    priority: "Critical",
    status: "Under Review",
    location: "Janakpuri",
    top: "55%",
    left: "20%",
  },
];

const categories = [
  "All Issues",
  "Road Damage",
  "Streetlight",
  "Garbage",
  "Water & Drainage",
  "Public Infrastructure",
];

function AdminMap() {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Issues");
  const [search, setSearch] = useState("");
  const [showLayers, setShowLayers] = useState(false);

  const filteredIssues = mapIssues.filter((issue) => {
    const categoryMatch =
      selectedCategory === "All Issues" ||
      issue.category === selectedCategory;

    const searchMatch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.location.toLowerCase().includes(search.toLowerCase()) ||
      issue.id.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="admin-map-page">
      <div className="admin-map-page-container">

        {/* Header */}
        <motion.div
          className="admin-map-page-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              Live city intelligence
            </div>

            <h1>City Issue Map</h1>

            <p>
              Explore reported civic issues, hotspots and affected areas
              across the city.
            </p>
          </div>

          <div className="admin-map-header-stat">
            <MapPin size={17} />
            <div>
              <strong>{filteredIssues.length}</strong>
              <span>visible issues</span>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="admin-map-controls"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="admin-map-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="Search location or issue..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="admin-map-category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "admin-map-category active"
                    : "admin-map-category"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            className={
              showLayers
                ? "admin-map-layer-button active"
                : "admin-map-layer-button"
            }
            onClick={() => setShowLayers(!showLayers)}
          >
            <Layers3 size={16} />
            Layers
          </button>
        </motion.div>

        {/* Map area */}
        <div className="admin-map-main-area">

          <motion.div
            className="admin-large-map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            {/* Decorative map */}
            <div className="admin-large-map-grid"></div>

            <span className="admin-large-road large-road-one"></span>
            <span className="admin-large-road large-road-two"></span>
            <span className="admin-large-road large-road-three"></span>
            <span className="admin-large-road large-road-four"></span>
            <span className="admin-large-road large-road-five"></span>

            {/* Map labels */}
            <span className="admin-map-area-label label-one">
              Rohini
            </span>

            <span className="admin-map-area-label label-two">
              Model Town
            </span>

            <span className="admin-map-area-label label-three">
              Sector 14
            </span>

            <span className="admin-map-area-label label-four">
              Dwarka
            </span>

            <span className="admin-map-area-label label-five">
              Saket
            </span>

            {/* Markers */}
            {filteredIssues.map((issue) => (
              <motion.button
                key={issue.id}
                className={`admin-map-marker marker-${issue.priority.toLowerCase()}`}
                style={{
                  top: issue.top,
                  left: issue.left,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                onClick={() => setSelectedIssue(issue)}
                aria-label={issue.title}
              >
                <span></span>
              </motion.button>
            ))}

            {/* Map controls */}
            <div className="admin-map-floating-controls">
              <button>
                +
              </button>

              <button>
                −
              </button>
            </div>

            <div className="admin-map-location-button">
              <MapPin size={16} />
            </div>

            {/* Layers panel */}
            {showLayers && (
              <motion.div
                className="admin-map-layers-panel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <strong>Map Layers</strong>

                <label>
                  <input type="checkbox" defaultChecked />
                  Issue markers
                </label>

                <label>
                  <input type="checkbox" defaultChecked />
                  Hotspot zones
                </label>

                <label>
                  <input type="checkbox" />
                  Ward boundaries
                </label>
              </motion.div>
            )}

            {/* Selected issue */}
            {selectedIssue && (
              <motion.div
                className="admin-map-selected-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <button
                  className="admin-map-selected-close"
                  onClick={() => setSelectedIssue(null)}
                >
                  <X size={15} />
                </button>

                <div className="admin-map-selected-icon">
                  <AlertTriangle size={18} />
                </div>

                <span className="admin-map-selected-id">
                  {selectedIssue.id}
                </span>

                <h3>{selectedIssue.title}</h3>

                <p>{selectedIssue.category}</p>

                <div className="admin-map-selected-location">
                  <MapPin size={13} />
                  {selectedIssue.location}
                </div>

                <div className="admin-map-selected-footer">
                  <span
                    className={`admin-table-priority admin-table-priority-${selectedIssue.priority.toLowerCase()}`}
                  >
                    {selectedIssue.priority}
                  </span>

                  <span className="admin-table-status admin-table-status-in-progress">
                    {selectedIssue.status}
                  </span>
                </div>

                <button className="admin-map-view-details">
                  View issue details
                  <ChevronRight size={14} />
                </button>
              </motion.div>
            )}

            {/* Legend */}
            <div className="admin-map-legend">
              <strong>Priority</strong>

              <span>
                <i className="legend-critical"></i>
                Critical
              </span>

              <span>
                <i className="legend-high"></i>
                High
              </span>

              <span>
                <i className="legend-medium"></i>
                Medium
              </span>

              <span>
                <i className="legend-low"></i>
                Low
              </span>
            </div>
          </motion.div>

          {/* Right insight panel */}
          <motion.aside
            className="admin-map-insight-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="admin-map-insight-icon">
              <Sparkles size={19} />
            </div>

            <span className="admin-map-insight-label">
              AI HOTSPOT ANALYSIS
            </span>

            <h2>High activity detected</h2>

            <p>
              Several reports are concentrated around major roads and
              high-traffic residential zones.
            </p>

            <div className="admin-map-insight-stat">
              <strong>6</strong>
              <span>active locations</span>
            </div>

            <div className="admin-map-insight-divider"></div>

            <div className="admin-map-insight-row">
              <span>Road Damage</span>
              <strong>32%</strong>
            </div>

            <div className="admin-map-insight-row">
              <span>Water & Drainage</span>
              <strong>24%</strong>
            </div>

            <div className="admin-map-insight-row">
              <span>Garbage</span>
              <strong>18%</strong>
            </div>

            <button className="admin-map-insight-button">
              View detailed analytics
              <ChevronRight size={15} />
            </button>
          </motion.aside>

        </div>

      </div>
    </div>
  );
}

export default AdminMap;