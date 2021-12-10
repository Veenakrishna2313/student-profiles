import React, {useState} from "react";
import "../Student Profiles/studentList.css";

const SearchBox = (props) => {

  const {search, onChange}=props;

  return (
    <React.Fragment>
      <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="Search by name"
        value={search}
       onChange= {onChange}
      />
    </React.Fragment>
  );
};

export default SearchBox;
