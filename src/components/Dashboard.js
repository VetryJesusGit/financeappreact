// Dashboard.js
import React from "react";
import "./Dashboard.css"; // For styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        <div className="card yellow">
          <h2>13</h2>
          <p>Active Loans</p>
        </div>
        <div className="card red">
          <h2>0</h2>
          <p>Closed Loans</p>
        </div>
        <div className="card cyan">
          <h2>9</h2>
          <p>Groups</p>
        </div>
        <div className="card pink">
          <h2>388000</h2>
          <p>Principal Balance</p>
        </div>
        <div className="card orange">
          <h2>29700</h2>
          <p>Cash in Hand</p>
        </div>
        <div className="card green">
          <h2>290000</h2>
          <p>Loan Amount</p>
        </div>
        <div className="card purple">
          <h2>0/1</h2>
          <p>Centers</p>
        </div>
        <div className="card dark-green">
          <h2>/12550</h2>
          <p>Amount</p>
        </div>
      </div>
      <div className="chart-section">
        <h3>Loan & Collection Report</h3>
        <p>Chart Component Placeholder</p>
      </div>
    </div>
  );
};

export default Dashboard;
