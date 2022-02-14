import React from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Sidebar />
        <div className="dash-info">
          <div className="welcome-header">
            <p>Welcome, Alexandra</p>
          </div>
          <div className="stat-cards">
            <div>Today's Patients</div>
            <div>No. of Doctors</div>
            <div>No. of Beds</div>
            <div>Today's Operation</div>
            <div>No. of Appointments</div>
          </div>

          <div className="dash-row-2">
            <p>Patient History</p>
            <div className="p-history"></div>
          </div>

          <div className="dash-row-3">
            <div className="col-1">
              <p>Daily Patients</p>
              <div className="d-patients"></div>
            </div>
            <div className="col-2">
              <p>Top Doctors</p>
              <div className="t-doctors"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
