import React from "react";
import "./ShortButton.css";
import { VscAdd } from "react-icons/vsc";

export const ShortButton = () => {
  return (
    <button className="short-button">
      <VscAdd className="add-icon" />
    </button>
  );
};
