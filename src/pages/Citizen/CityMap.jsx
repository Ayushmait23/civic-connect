import {
  AlertTriangle,
  Filter,
  Layers3,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function CityMap() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { name: "All", count: 24 },
    { name: "Road Damage", count: 8 },
    { name: "Streetlight", count: 5 },
    { name: "Garbage", count: 6 },
    { name: "Water & Drainage", count: 5 },
  ];

  return (
    <div className="city-map-page">
      <div className="city-map-container">

        {/* Header */}
        <motion.div
          className="city-map-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <div className="page-kicker">LIVE CIVIC MAP</div>

            <h1>City Map</h1>

            <p>
              Explore reported civic issues across your city.
            </p>
          </div>

          <button
            className="map-filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={17} />
            Filters
          </button>
        </motion.div>

        {/* Search */}
        <div className="city-map-search">
          <Search size={17} />

          <input
            type="text"
            placeholder="Search an area, street or issue..."
          />

          <button>
            <MapPin size={16} />
            Locate me
          </button>
        </div>

        {/* Category filters */}
        <div className="map-category-row">
          {categories.map((category) => (
            <button
              key={category.name}
              className={
                selectedCategory === category.name
                  ? "map-category active"
                  : "map-category"
              }
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
              <span>{category.count}</span>
            </button>
          ))}
        </div>

        {/* Map area */}
        <div className="advanced-map-card">

          {/* Map background */}
          <div className="map-background">

            {/* Decorative roads */}
            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>
            <div className="map-road road-four"></div>

            {/* Map labels */}
            <span className="map-label label-one">Connaught Place</span>
            <span className="map-label label-two">Karol Bagh</span>
            <span className="map-label label-three">Civil Lines</span>
            <span className="map-label label-four">Model Town</span>

            {/* Issue markers */}
            <motion.button
              className="issue-marker marker-danger"
              whileHover={{ scale: 1.2 }}
            >
              <AlertTriangle size={15} />
            </motion.button>

            <motion.button
              className="issue-marker marker-warning"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin size={16} />
            </motion.button>

            <motion.button
              className="issue-marker marker-success"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin size={16} />
            </motion.button>

            <motion.button
              className="issue-marker marker-blue"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin size={16} />
            </motion.button>

            <motion.button
              className="issue-marker marker-purple"
              whileHover={{ scale: 1.2 }}
            >
              <MapPin size={16} />
            </motion.button>

            {/* Hotspot */}
            <div className="map-hotspot">
              <div className="hotspot-pulse"></div>
              <span>High issue density</span>
            </div>

          </div>

          {/* Map controls */}
          <div className="map-control-stack">
            <button title="Layers">
              <Layers3 size={18} />
            </button>

            <button title="Location">
              <MapPin size={18} />
            </button>
          </div>

          {/* AI Insight */}
          <motion.div
            className="map-ai-insight"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="map-ai-icon">
              <Sparkles size={17} />
            </div>

            <div>
              <strong>AI Map Insight</strong>
              <p>
                A cluster of civic issues has been detected in this area.
              </p>
            </div>
          </motion.div>

          {/* Map legend */}
          <div className="map-legend">
            <div>
              <span className="legend-dot danger"></span>
              High priority
            </div>

            <div>
              <span className="legend-dot warning"></span>
              Under review
            </div>

            <div>
              <span className="legend-dot success"></span>
              Resolved
            </div>
          </div>

        </div>

        {/* Bottom information */}
        <div className="map-bottom-grid">

          <div className="map-info-card">
            <div className="map-info-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>Visible issues</span>
              <strong>24</strong>
            </div>
          </div>

          <div className="map-info-card">
            <div className="map-info-icon warning-icon">
              <AlertTriangle size={19} />
            </div>

            <div>
              <span>High priority</span>
              <strong>06</strong>
            </div>
          </div>

          <div className="map-info-card">
            <div className="map-info-icon ai-icon">
              <Sparkles size={19} />
            </div>

            <div>
              <span>AI hotspots</span>
              <strong>03</strong>
            </div>
          </div>

        </div>

        {/* Filter panel */}
        {showFilters && (
          <motion.div
            className="map-filter-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="map-filter-panel-header">
              <div>
                <strong>Map Filters</strong>
                <span>Customize what you see</span>
              </div>

              <button onClick={() => setShowFilters(false)}>
                <X size={17} />
              </button>
            </div>

            <label>
              <input type="checkbox" defaultChecked />
              Active issues
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              High priority
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              Resolved issues
            </label>

            <label>
              <input type="checkbox" defaultChecked />
              AI hotspots
            </label>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default CityMap;