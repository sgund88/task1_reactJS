import React from "react";
import {
  MdSettingsApplications,
  MdOutlineMenuBook,
  MdShowChart,
} from "react-icons/md";
import {
  BsFillCloudArrowUpFill,
  BsFillLightbulbFill,
  BsFileCodeFill,
} from "react-icons/bs";
import { IoPeopleCircle } from "react-icons/io5";
import { BiArrowToTop } from "react-icons/bi";
import { HiChartSquareBar } from "react-icons/hi";

import "./Side-Nav.styles.css";

const SideNav = ({ active }) => {
  return (
    <div className="side-nav">
      <a href="/" title="Client Directory">
        <div className="side-nav-item">
          <MdOutlineMenuBook className="icon" />
        </div>
      </a>
      <a href="/" title="Command Center Users">
        <div className="side-nav-item">
          <MdShowChart className="icon" />
        </div>
      </a>
      <a href="/" title="Platform Analytics">
        <div className="side-nav-item">
          <IoPeopleCircle className="icon" />
        </div>
      </a>
      <a href="/" title="Platform Admin">
        <div className="side-nav-item">
          <BsFileCodeFill className="icon" />
        </div>
      </a>
      <a href="/" title="Import Center">
        <div className="side-nav-item">
          <BiArrowToTop className="icon" />
        </div>
      </a>
      <a href="/" title="General Settings">
        <div className="side-nav-item">
          <MdSettingsApplications className="icon" />
        </div>
      </a>
      <a href="/">
        <div className="side-nav-item">
          <BsFillCloudArrowUpFill
            className={`icon ${active ? "active" : ""}`}
          />
        </div>
      </a>
      <a href="/" title="Solutions">
        <div className="side-nav-item">
          <BsFillLightbulbFill className="icon" />
        </div>
      </a>
      <a href="/" title="Reporting">
        <div className="side-nav-item">
          <HiChartSquareBar className="icon" />
        </div>
      </a>
    </div>
  );
};

export default SideNav;
