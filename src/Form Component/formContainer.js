import React from "react";
import SearchComponent from "../Search Component/searchBox";


const FormBox = (props) => {
  const { onSubmit, onChanges } = props;
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <SearchComponent displayName="Add a tag" onChanges={onChanges} />
      </form>
    </React.Fragment>
  );
};

export default FormBox;
