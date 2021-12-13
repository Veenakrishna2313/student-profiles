import React from "react";
import "../Student Profiles/studentList.css";

const ButtonBox = (props) => {
  const { tags } = props;
 

  const displayButton = () => {
    if (tags !== undefined) {
      return tags.map((tag, i) => {
        return (
          <button className="btn btn-light" key={i}>
            {tag}
          </button>
        );
      });
    }
  };

  return <React.Fragment>{displayButton()}</React.Fragment>;
};

export default ButtonBox;
