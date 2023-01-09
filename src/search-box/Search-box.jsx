import React from "react";
import "./Search-box.css"

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Rechercher ..."
        onChange={props.onChildSearchChange}
      />
    </div>
  );
};

export default SearchBox;
