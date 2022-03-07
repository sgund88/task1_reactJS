import React from "react";
import "./main-search.styles.css";
import group2921 from "../../assets/group2921.svg";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinusCircle } from "react-icons/ai";
import { RiFilterFill } from "react-icons/ri";
import CustomButton from "../CustomButton/custom-button.component";
import SearchBar from "../SearchBar/search-bar.component";

export default function MainSearch(props) {
  return (
    <div>
      <div className="grid-container-element">
        <div className="grid-child-element">
          <h3 className="title">{props.title}</h3>
        </div>
        <div className="grid-child-element">
          <p className="activity-history">
            <CustomButton title="Activity History">
              <img src={group2921} alt="" />
            </CustomButton>
          </p>
        </div>
      </div>

      <div>
        <p className="discription">
          This list reflects all pharmacies available in your organization. To
          configure for a specific solution, visit the solutions page.
        </p>
      </div>
      <div className="search-div">
        <div className="search-container-left">
          <SearchBar />
          <CustomButton title=" HIDE FILTERS" buttonEnable>
            <RiFilterFill />
          </CustomButton>
        </div>
        <div className="search-container-right">
          <CustomButton title=" REMOVE" buttonDisable>
            <AiOutlineMinusCircle />
          </CustomButton>
          <CustomButton title=" EXPORT" buttonDisable>
            <BiArrowToBottom />
          </CustomButton>
          <CustomButton title=" IMPORT" buttonEnable>
            <BiArrowToTop />
          </CustomButton>
          <CustomButton title=" NEW" buttonEnable>
            <AiOutlinePlus />
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
