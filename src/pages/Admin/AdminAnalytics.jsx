import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  FileWarning,
  MapPin,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const categoryData = [
  { name: "Road Damage", value: 32 },
  { name: "Water & Drainage", value: 24 },
  { name: "Garbage", value: 18 },
  { name: "Streetlight", value: 15 },
  { name: "Infrastructure", value: 11 },
];

const monthlyData = [
  { month: "Apr", value: 48 },
  { month: "May", value: 62 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 76 },
  { month: "Aug", value: 69 },
  { month: "Sep", value: 91 },
];

const performance = [
  {
    department: "Road Maintenance",
    resolved: "184",
    rate: "92%",
    trend: "+8.2%",
  },
  {
    department: "Water Department",
    resolved: "142",
    rate: "88%",
    trend: "+5.4%",
  },
  {
    department: "Sanitation",
    resolved: "126",
    rate: "84%",
    trend: "+3.8%",
  },
  {
    department: "Street Lighting",
    resolved: "98",
    rate: "81%",
    trend: "+6.1%",
  },
];

function AdminAnalytics() {
  return (
    <div className="admin-analytics-page">
      <div className="admin-analytics-container">

        {/* Header */}
        <motion.div
          className="admin-analytics-header"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div className="admin-title-row">
              <span className="admin-live-dot"></span>
              City intelligence
            </div>

            <h1>Analytics</h1>

            <p>
              Understand civic activity, resolution performance and
              recurring issue patterns.
            </p>
          </div>

          <button className="admin-analytics-period">
            <BarChart3 size={16} />
            Last 6 months
          </button>
        </motion.div>

        {/* KPI cards */}
        <div className="admin-analytics-kpis">

          <motion.div
            className="admin-analytics-kpi"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="admin-analytics-kpi-top">
              <span>Total Reports</span>
              <div className="admin-analytics-kpi-icon blue">
                <FileWarning size={17} />
              </div>
            </div>

            <strong>1,284</strong>

            <div className="admin-analytics-kpi-change positive">
              <ArrowUpRight size={13} />
              12.8%
              <span>vs previous period</span>
            </div>
          </motion.div>

          <motion.div
            className="admin-analytics-kpi"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
          >
            <div className="admin-analytics-kpi-top">
              <span>Resolution Rate</span>
              <div className="admin-analytics-kpi-icon green">
                <CheckCircle2 size={17} />
              </div>
            </div>

            <strong>86.4%</strong>

            <div className="admin-analytics-kpi-change positive">
              <ArrowUpRight size={13} />
              4.6%
              <span>vs previous period</span>
            </div>
          </motion.div>

          <motion.div
            className="admin-analytics-kpi"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <div className="admin-analytics-kpi-top">
              <span>Avg. Resolution</span>
              <div className="admin-analytics-kpi-icon orange">
                <Clock3 size={17} />
              </div>
            </div>

            <strong>3.8 days</strong>

            <div className="admin-analytics-kpi-change positive">
              <ArrowDownRight size={13} />
              8.1%
              <span>faster than before</span>
            </div>
          </motion.div>

          <motion.div
            className="admin-analytics-kpi"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <div className="admin-analytics-kpi-top">
              <span>Active Areas</span>
              <div className="admin-analytics-kpi-icon purple">
                <MapPin size={17} />
              </div>
            </div>

            <strong>26</strong>

            <div className="admin-analytics-kpi-change positive">
              <ArrowUpRight size={13} />
              7.2%
              <span>this month</span>
            </div>
          </motion.div>

        </div>

        {/* Charts */}
        <div className="admin-analytics-chart-grid">

          {/* Reports trend */}
          <motion.section
            className="admin-analytics-panel reports-trend"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <div className="admin-analytics-panel-header">
              <div>
                <h2>Reports Trend</h2>
                <p>Monthly civic reports received</p>
              </div>

              <button className="admin-analytics-more">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="admin-line-chart">

              <div className="analytics-y-axis">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="analytics-chart-area">

                <div className="analytics-grid-line"></div>
                <div className="analytics-grid-line"></div>
                <div className="analytics-grid-line"></div>
                <div className="analytics-grid-line"></div>
                <div className="analytics-grid-line"></div>

                <svg
                  className="analytics-line-svg"
                  viewBox="0 0 600 230"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="analyticsGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#2563eb"
                        stopOpacity="0.2"
                      />
                      <stop
                        offset="100%"
                        stopColor="#2563eb"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,125 C80,110 85,92 120,100 C170,111 180,76 235,82 C285,88 300,60 350,67 C405,74 420,40 465,51 C515,63 530,25 600,32 L600,230 L0,230 Z"
                    fill="url(#analyticsGradient)"
                  />

                  <path
                    d="M0,125 C80,110 85,92 120,100 C170,111 180,76 235,82 C285,88 300,60 350,67 C405,74 420,40 465,51 C515,63 530,25 600,32"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="analytics-chart-points">
                  {monthlyData.map((item, index) => (
                    <div
                      key={item.month}
                      className="analytics-point"
                      style={{
                        left: `${index * 20}%`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="analytics-x-axis">
                  {monthlyData.map((item) => (
                    <span key={item.month}>{item.month}</span>
                  ))}
                </div>

              </div>
            </div>
          </motion.section>

          {/* Category distribution */}
          <motion.section
            className="admin-analytics-panel category-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <div className="admin-analytics-panel-header">
              <div>
                <h2>Issue Categories</h2>
                <p>Distribution of reported issues</p>
              </div>

              <button className="admin-analytics-more">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="analytics-donut-wrapper">
              <div className="analytics-donut">
                <div className="analytics-donut-center">
                  <strong>1,284</strong>
                  <span>Reports</span>
                </div>
              </div>
            </div>

            <div className="analytics-category-list">
              {categoryData.map((category, index) => (
                <div
                  className="analytics-category-row"
                  key={category.name}
                >
                  <div>
                    <span
                      className={`analytics-category-dot dot-${index}`}
                    ></span>
                    <span>{category.name}</span>
                  </div>

                  <strong>{category.value}%</strong>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Department performance */}
        <motion.section
          className="admin-analytics-panel analytics-performance-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
        >
          <div className="admin-analytics-panel-header">
            <div>
              <h2>Department Performance</h2>
              <p>Resolution performance by civic department</p>
            </div>

            <button className="admin-analytics-more">
              View details
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="analytics-performance-table">

            <div className="analytics-performance-head">
              <span>Department</span>
              <span>Resolved</span>
              <span>Resolution Rate</span>
              <span>Trend</span>
            </div>

            {performance.map((item, index) => (
              <div
                className="analytics-performance-row"
                key={item.department}
              >
                <div className="analytics-department">
                  <div className={`department-icon department-${index}`}>
                    <TrendingUp size={15} />
                  </div>

                  <strong>{item.department}</strong>
                </div>

                <span>{item.resolved}</span>

                <div className="analytics-rate">
                  <div className="analytics-progress">
                    <span
                      style={{
                        width: item.rate,
                      }}
                    ></span>
                  </div>

                  <strong>{item.rate}</strong>
                </div>

                <span className="analytics-trend">
                  <ArrowUpRight size={12} />
                  {item.trend}
                </span>
              </div>
            ))}

          </div>
        </motion.section>

        {/* AI insight */}
        <motion.section
          className="admin-analytics-ai"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="analytics-ai-icon">
            <Sparkles size={21} />
          </div>

          <div className="analytics-ai-content">
            <span>AI ANALYTICS INSIGHT</span>

            <h2>
              Road-related reports show the strongest recurring pattern.
            </h2>

            <p>
              The current dataset indicates repeated reports around
              high-traffic areas. This insight can help administrators
              identify locations that may require closer monitoring.
            </p>
          </div>

          <button className="analytics-ai-button">
            Explore insights
            <ArrowUpRight size={15} />
          </button>
        </motion.section>

      </div>
    </div>
  );
}

export default AdminAnalytics;