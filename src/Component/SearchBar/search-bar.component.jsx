import React from "react";
import "./search-bar.styles.css";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="input">
      <IoIosSearch className="icon" />
      <input type="text" name="search" placeholder="Search" />
    </div>
  );
}
