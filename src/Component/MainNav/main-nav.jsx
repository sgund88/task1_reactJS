import React from "react";
import "./main-nav.styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import SelectBar from "../SelectBar/select-bar.component";
import Links from "../links/links.component";
import Profile from "../profile/profile.component";

export default function MainNav() {
  return (
    <nav className="main-nav">
      <div id="hamburger-container">
        <GiHamburgerMenu className="hamburger-menu" />
      </div>
      <div className="select-bar">
        <SelectBar />
      </div>
      <Links />
      <Profile />
    </nav>
  );
}
