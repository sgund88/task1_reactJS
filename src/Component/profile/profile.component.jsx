import React, { useState } from "react";
import "./profile.styles.css";

export default function Profile() {
  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };
  return (
    <>
      <div className="outer-box">
        <h6>Gandalf Grey</h6>
        <div className="profile-container">
          <span className="profile-name">GG</span>
          {/* {open && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile Setting</li>
                <li>Help</li>
                <li>Logout</li>
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
