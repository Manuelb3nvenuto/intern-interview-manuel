import PropTypes from "prop-types";

const Header = ({ activeTab }) => {
  const titles = {
    dashboard: "Dashboard Overview",
    customers: "Customer Management",
    settings: "Settings",
  };

  return (
    <header>
      <h1>{titles[activeTab] || "Welcome"}</h1>
    </header>
  );
};

Header.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default Header;
