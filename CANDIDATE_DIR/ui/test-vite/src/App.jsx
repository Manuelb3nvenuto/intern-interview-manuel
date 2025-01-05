import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import Settings from "./components/Settings";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* Contenido dinámico */}
      <div className="content-container">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "customers" && <Customers />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default App;
