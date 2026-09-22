import {
  Bell,
  ChevronRight,
  FileText,
  Home,
  LogOut,
  Map,
  Plus,
  Settings,
  ShieldCheck,
  User,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function CitizenLayout() {
      const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("civicconnect_logged_in");
    localStorage.removeItem("civicconnect_user_email");
    navigate("/login");
  };
  const navigation = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: Home,
    },
    {
      label: "Report Issue",
      path: "/report",
      icon: Plus,
    },
    {
      label: "My Reports",
      path: "/reports",
      icon: FileText,
    },
    {
      label: "City Map",
      path: "/map",
      icon: Map,
    },
    {
      label: "Notifications",
      path: "/notifications",
      icon: Bell,
    },
  ];

  return (
    <div className="citizen-layout">
      {/* Sidebar */}
      <aside className="citizen-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <ShieldCheck size={21} />
          </div>

          <div>
            <strong>CivicConnect</strong>
            <span>Citizen Portal</span>
          </div>
        </div>

        <nav className="sidebar-navigation">
          <span className="sidebar-section-label">MAIN MENU</span>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={18} />
                <span>{item.label}</span>

                {item.label === "Notifications" && (
                  <span className="sidebar-notification-count">3</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Settings size={18} />
            <span>Settings</span>
          </NavLink>

          <div className="sidebar-user">
            <div className="sidebar-avatar">A</div>

            <div className="sidebar-user-info">
              <strong>Ayush</strong>
              <span>Citizen</span>
            </div>

            <button
  className="sidebar-logout"
  aria-label="Logout"
  onClick={handleLogout}
>
  <LogOut size={16} />
</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="citizen-layout-main">
        <header className="citizen-topbar">
          <div className="topbar-location">
            <Map size={16} />
            <span>Delhi NCR</span>
          </div>

          <div className="topbar-actions">
            <button
              className="topbar-icon-button"
              aria-label="Notifications"
            >
              <Bell size={18} />
              <span></span>
            </button>

            <div className="topbar-profile">
              <div className="topbar-avatar">A</div>

              <div>
                <strong>Ayush</strong>
                <span>Citizen</span>
              </div>

              <ChevronRight size={15} />
            </div>
          </div>
        </header>

        <div className="citizen-layout-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default CitizenLayout;