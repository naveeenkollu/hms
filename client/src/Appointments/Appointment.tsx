import React from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

export const Appointment = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="appointment">
        <Sidebar />
        <div className="appointment-info"></div>
      </div>
    </React.Fragment>
  );
};
