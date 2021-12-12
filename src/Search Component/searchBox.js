import React from "react";
import "../Student Profiles/studentList.css";

const SearchBox = (props) => {
  const { search, onChanges, displayName } = props;

  return (
    <React.Fragment>
      <input
        type="text"
        name="query"
        className="inputStyle"
        placeholder={displayName}
        value={search}
        onChange={onChanges}
      />
    </React.Fragment>
  );
};

export default SearchBox;
