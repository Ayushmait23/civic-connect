import { Bell, MapPin, Menu, ShieldCheck } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">
          <ShieldCheck size={22} strokeWidth={2.5} />
        </div>

        <div className="brand-text">
          <span className="brand-name">CivicConnect</span>
          <span className="brand-tagline">Better cities, together.</span>
        </div>
      </div>

      <div className="navbar-location">
        <MapPin size={17} />
        <span>Delhi NCR</span>
      </div>

      <div className="navbar-actions">
        <button className="nav-icon-button" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <button className="nav-menu-button" aria-label="Menu">
          <Menu size={21} />
        </button>

        <div className="profile-avatar">
          A
        </div>
      </div>
    </nav>
  );
}

export default Navbar;