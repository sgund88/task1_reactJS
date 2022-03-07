import React from "react";
import "./select-bar.styles.css";

export default function SelectBar(props) {
  return (
    <div>
      <h6>{props.title}</h6>
      <select name={props.name}>
        <option>Search/Select</option>
        <option>Menu Item</option>
        <option>Menu Item</option>
        <option>Menu Item</option>
        <option>Menu Item</option>
      </select>
    </div>
  );
}
