import React from "react";
import "../App.css";

export default function SearchBox(props) {
  return (
    <div className="d-right">
      <input
        className="form-control"
        placeholder="Type to search"
        value={props.value}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      ></input>
    </div>
  );
}
