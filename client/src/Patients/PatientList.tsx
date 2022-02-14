import React from "react";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import "./PatientList.css";

export const PatientList = () => {
  const data = [
    {
      id: 1001,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1002,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1003,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1004,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1005,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1006,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1007,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1008,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 1009,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 2001,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 2002,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 2003,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
    {
      id: 2004,
      name: "Leonardo DeCaprio",
      date: "01 Feb 2022",
      assignedTo: "Dr. Rajnikanth",
      compliant: "Cold & Cough",
      status: "New Patient",
      room: "D-121",
    },
  ];

  const PatientData = data.map((patient) => (
    <div className="row-head">
      <tr key={patient.id}>
        <td>
          <input type="checkbox" />
        </td>
        <td>{patient.id}</td>
        <td>{patient.name}</td>
        <td>{patient.date}</td>
        <td>{patient.assignedTo}</td>
        <td>{patient.compliant}</td>
        <td>{patient.status}</td>
        <td>{patient.room}</td>
      </tr>
    </div>
  ));
  return (
    <React.Fragment>
      <Header />
      <div className="patient-list">
        <Sidebar />
        <div className="list-container">
          <h2 className="list-container-head">Patient List</h2>

          <table className="patient-table">
            <div className="table-flow">
              <div className="row-head">
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Check-in Date</th>
                  <th>Doctor Assigned</th>
                  <th>Compliant</th>
                  <th>Status</th>
                  <th>Room No</th>
                </tr>
              </div>
              {PatientData}
            </div>
          </table>
          <div className="rows-count">
            <h5>Showing {} from 222 rows</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
