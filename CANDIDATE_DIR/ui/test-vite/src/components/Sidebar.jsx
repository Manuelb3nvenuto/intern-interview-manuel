import PropTypes from "prop-types";

const Sidebar = ({ setActiveTab, activeTab }) => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <i className="bi bi-grid-fill logo"></i> {/* Bootstrap Icon */}
        <h2>COUNTLESS</h2>
      </div>
      {/* Navigation */}
      <nav>
        <button
          onClick={() => setActiveTab("dashboard")}
          className={activeTab === "dashboard" ? "active" : ""}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab("customers")}
          className={activeTab === "customers" ? "active" : ""}
        >
          Customers
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={activeTab === "settings" ? "active" : ""}
        >
          Settings
        </button>
      </nav>
      {/* Sign Out Button */}
      <button className="sign-out">
        <i className="bi bi-box-arrow-right"></i> {/* Bootstrap Icon */}
        Sign Out
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Sidebar;
