import React from "react";
import { VscClose } from "react-icons/vsc";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const AppointmentModal = () => {
  const []
  return (
    <div className="appointment-modal">
      <div className="appointment-modal-header">
        <h3>Add New Appointment</h3>
        <VscClose className="close-icon" />
      </div>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="events" aria-label="events">
          Events
        </ToggleButton>
        <ToggleButton value="reminders" aria-label="reminders">
          Reminders
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
