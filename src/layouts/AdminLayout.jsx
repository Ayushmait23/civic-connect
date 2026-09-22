import {
  BarChart3,
  Bell,
  FileWarning,
  LayoutDashboard,
  Map,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  const navItems = [
    {
      label: "Overview",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Issues",
      path: "/admin/issues",
      icon: FileWarning,
    },
    {
      label: "City Map",
      path: "/admin/map",
      icon: Map,
    },
    {
      label: "Analytics",
      path: "/admin/analytics",
      icon: BarChart3,
    },
    {
      label: "Citizens",
      path: "/admin/citizens",
      icon: Users,
    },
    {
      label: "Notifications",
      path: "/admin/notifications",
      icon: Bell,
    },
  ];

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-brand-icon">
            <ShieldCheck size={21} strokeWidth={2.5} />
          </div>

          <div>
            <div className="admin-brand-name">
              CivicConnect
            </div>

            <div className="admin-brand-role">
              Administration
            </div>
          </div>
        </div>

        <div className="admin-nav-label">
          MAIN MENU
        </div>

        <nav className="admin-nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/admin"}
                className={({ isActive }) =>
                  `admin-nav-link ${
                    isActive ? "admin-nav-link-active" : ""
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="admin-sidebar-bottom">
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `admin-nav-link ${
                isActive ? "admin-nav-link-active" : ""
              }`
            }
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>

          <div className="admin-user-card">
            <div className="admin-user-avatar">
              A
            </div>

            <div className="admin-user-info">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="admin-layout-main">

        <header className="admin-topbar">
          <div className="admin-topbar-location">
            <Map size={17} />
            <span>Delhi NCR</span>
          </div>

          <div className="admin-topbar-actions">

            <button
              className="admin-topbar-button"
              aria-label="Notifications"
            >
              <Bell size={19} />
              <span className="admin-notification-dot"></span>
            </button>

            <div className="admin-topbar-profile">
              <div className="admin-topbar-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>

          </div>
        </header>

        <div className="admin-layout-content">
          <Outlet />
        </div>

      </main>

    </div>
  );
}

export default AdminLayout;