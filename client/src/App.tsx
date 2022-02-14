import React from "react";
import "./App.css";
import { Appointment } from "./Appointments/Appointment";
import { ShortButton } from "./components/Button/ShortButton";
import { AppointmentModal } from "./components/Modal/AppointmentModal";
import { Dashboard } from "./Dashboard/Dashboard";
import { PatientList } from "./Patients/PatientList";

function App() {
  return (
    <div className="App">
      {/* <PatientList /> */}
      {/* <Appointment />
      <ShortButton /> */}
      <AppointmentModal />
    </div>
  );
}

export default App;
