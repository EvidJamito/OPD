import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import SignUp from "./signup/SignUp";
import Dashboard from "./dashboard/Dashboard";
import DashboardC from "./clients/DashboardC"; // Import DashboardC component
import Services from "./services/Services";
import { InboxLayout } from "./inbox/InboxLayout";
import { ReportsPage } from "./reports/ReportsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<DashboardC />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/inbox" element={<InboxLayout />} />
        <Route path="/reports" element={<ReportsPage />} />{/* Add this route */}

      </Routes>
    </Router>
  );
}

export default App;
