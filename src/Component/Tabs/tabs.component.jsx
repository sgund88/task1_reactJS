import React from "react";
import "./tabs.styles.css";
import { MdCloudUpload } from "react-icons/md";
function Tabs() {
  return (
    <div className="SharedData-container">
      <div className="Container">
        <div id="Cloud">
          <MdCloudUpload id="Cloud1" />
        </div>
        <div id="Shared_Data">
          <h1>Shared Data</h1>
        </div>
      </div>
      <div className="Menu-items">
        <nav>
          <a href="/">APPOINTMETNT TYPES</a>
          <a href="/">BRANDING</a>
          <a href="/">INSURANCES</a>
          <a href="/">LOCATIOS</a>
          <a className="active" href="/">
            PHARMACIES
          </a>
          <a href="/">RESOURCES</a>
        </nav>
      </div>
    </div>
  );
}

export default Tabs;
