import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1>Acme Studios</h1>
          <p>adam.smith@acmestudios.com</p>
        </div>
        <div className="header-right">
          <button className="btn btn-outline-secondary">Average</button>
          <button className="btn btn-outline-secondary">Monthly</button>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="metrics">
        <div className="metric">
          <h4>Revenue</h4>
          <p className="value">$2,345</p>
          <p className="subtext">6 month average</p>
        </div>
        <div className="metric">
          <h4>Cost</h4>
          <p className="value">$1,008</p>
          <p className="subtext">6 month average</p>
        </div>
        <div className="metric">
          <h4>Margin</h4>
          <p className="value">$1,337</p>
          <p className="subtext">6 month average</p>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        {/* Top Events */}
        <div className="top-events">
          <h5>Top Events</h5>
          <p className="event-summary">506 Events recorded in May</p>
          <ul className="event-list">
            <li>
              Invoice Created <span>50%</span>
            </li>
            <li>
              KYC Completed <span>20%</span>
            </li>
            <li>
              Customer Support Case Opened <span>10%</span>
            </li>
            <li>
              AI Copilot Requested <span>3%</span>
            </li>
          </ul>
        </div>

        {/* Event Cost Breakdown */}
        <div className="event-cost-breakdown">
          <h5>Event Cost Breakdown</h5>
          <ul className="cost-list">
            <li>
              Lorem Ipsum <span>$104</span>
            </li>
            <li>
              Lorem Ipsum <span>$93</span>
            </li>
            <li>
              Lorem Ipsum <span>$85</span>
            </li>
            <li>
              Lorem Ipsum <span>$75</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
