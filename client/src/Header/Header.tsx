import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      {/* Header Logo */}
      <div className="logo">
        <img src="/assets/logo.png" alt="origin-logo" />
      </div>
      {/* Search Bar */}
      <div className="search-bar">
        <input type="search" placeholder="Search Patients" className="search" />
      </div>
      <div className="btn-add">
        <button className="add-patient">Add Patient</button>
      </div>
      <div className="notification">
        <svg
          width="24"
          height="24"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 33.5312C20.1958 33.5312 21.5833 32.1437 21.5833 30.4479H15.4167C15.4167 32.1437 16.8042 33.5312 18.5 33.5312ZM27.75 24.2812V16.5729C27.75 11.84 25.2371 7.87792 20.8125 6.82958V5.78125C20.8125 4.50167 19.7796 3.46875 18.5 3.46875C17.2204 3.46875 16.1875 4.50167 16.1875 5.78125V6.82958C11.7783 7.87792 9.24999 11.8246 9.24999 16.5729V24.2812L6.16666 27.3646V28.9062H30.8333V27.3646L27.75 24.2812ZM24.6667 25.8229H12.3333V16.5729C12.3333 12.7496 14.6612 9.63542 18.5 9.63542C22.3387 9.63542 24.6667 12.7496 24.6667 16.5729V25.8229ZM11.6858 5.90458L9.48124 3.7C5.78124 6.52125 3.34541 10.8687 3.12958 15.8021H6.21291C6.44416 11.7167 8.54083 8.14 11.6858 5.90458ZM30.7871 15.8021H33.8704C33.6392 10.8687 31.2033 6.52125 27.5187 3.7L25.3296 5.90458C28.4437 8.14 30.5558 11.7167 30.7871 15.8021Z"
            fill="#21005D"
          />
        </svg>
      </div>
      <div className="avatar"></div>
    </div>
  );
}
