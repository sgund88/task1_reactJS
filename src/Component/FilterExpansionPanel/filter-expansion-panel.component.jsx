import React from "react";
import CustomButton from "../CustomButton/custom-button.component";
import SelectBar from "../SelectBar/select-bar.component";
import "./filter-expansion-panel.styles.css";

export default function FilterExpansionPanel() {
  return (
    <div className="filter-panel">
      <div className="filter-panel">
        <SelectBar title="Practice" name="" />
        <SelectBar title="Location" name="" />
      </div>
      <div className="filter-panel">
        <div className="filter-panel-child"></div>
        <div className="filter-panel-child">
          <div></div>
          <div></div>
          <div>
            <CustomButton title=" CLEAR " buttonEnable></CustomButton>
          </div>
          <div>
            <CustomButton title=" APPLY " buttonEnable></CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
