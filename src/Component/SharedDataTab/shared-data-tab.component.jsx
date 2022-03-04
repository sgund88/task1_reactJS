import React from "react";
import { MdCloudUpload } from "react-icons/md";
import './shared-data-tab.styles.css';

function SharedDataTab() {
  return (
    <>
      {/* <div className='Shared_Data'>
     <span id='Cloudicon'><MdCloudUpload/></span>  Shared Data
    </div> */}

      <div className="Container">
        <div id="Cloud">
          <MdCloudUpload id="Cloud1"/>
        </div>
        <div id="Shared_Data">
          <h1>Shared Data</h1>
        </div>
        <div className="Menu-items">
        <nav >
          <a href="/">APPOINTMETNT TYPES</a>
          <a href="/">BRANDING</a>
          <a href="/">INSURANCES</a>
          <a href="/">LOCATIOS</a>
          <a href="/">PHARMACIES</a>
          <a href="/">RESOURCES</a>
        </nav>
      </div>
      </div>

      
    </>
  );
}

export default SharedDataTab;
