import React, { useState } from "react";
import { IoMdLink } from "react-icons/io";
import "./links.styles.css";
export default function Links() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="link ">
      <IoMdLink className="md-link" onClick={handleClick} />
      {open && (
        <div className="dropdown">
          <ul id="dropdown-items">
            <li>Apponintments Dashboard</li>
            <li>Form Builder</li>
            <li>Patient Self-Scheduling</li>
            <li>Practice Portal</li>
            <li>Virtual Visists</li>
          </ul>
        </div>
      )}
    </div>
  );
}
