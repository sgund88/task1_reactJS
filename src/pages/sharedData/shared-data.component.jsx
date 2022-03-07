import React from "react";
import FilterExpansionPanel from "../../Component/FilterExpansionPanel/filter-expansion-panel.component";
import MainSearch from "../../Component/MainSearch/main-search.component";
import Tabs from "../../Component/Tabs/tabs.component";
import "./shared-data.styles.css";
import lessthan from "../../assets/lessthan.svg";
import dropdown from "../../assets/dropdown.svg";
import chevronLeft from "../../assets/chevron_left-24px.svg";
import chevronRight from "../../assets/chevron_right-24px.svg";
import firstPage from "../../assets/first_page-24px.svg";
import lastPage from "../../assets/last_page-24px.svg";
import { BsArrowUp } from "react-icons/bs";

export default function SharedData() {
  return (
    <div>
      <Tabs />
      <MainSearch title="Pharmacies" />
      <FilterExpansionPanel />
      <div className="row">
        <div className="content">
          <table id="table">
            <thead>
              <tr className="tr">
                <th>
                  Pharmacies <BsArrowUp />
                </th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pharmacy 1</td>
                <td>2001 West Ave. Cary, NC 27513</td>
                <td>
                  <img src={lessthan} alt="" />
                </td>
              </tr>
              <tr>
                <td>Pharmacy 2</td>
                <td>2001 West Ave. Cary, NC 27513</td>
                <td>
                  <img src={lessthan} alt="" />
                </td>
              </tr>
              <tr>
                <td>Pharmacy 3</td>
                <td>2001 West Ave. Cary, NC 27513</td>
                <td>
                  <img src={lessthan} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
          <div id="content-child">
            Item per page &nbsp;&nbsp;&nbsp;
            <img src={dropdown} alt="" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1-10 of 10
            &nbsp;&nbsp;&nbsp;
            <img src={firstPage} alt="" />
            &nbsp;&nbsp;&nbsp;
            <img src={chevronLeft} alt="" />
            &nbsp;&nbsp;&nbsp;
            <img src={chevronRight} alt="" />
            &nbsp;&nbsp;&nbsp;
            <img src={lastPage} alt="" />
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}
