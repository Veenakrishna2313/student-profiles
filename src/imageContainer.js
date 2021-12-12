import React from "react";

const imageContainer = (props) => {
  const { studentData } = props;

  return (
    <React.Fragment>
      <img className="images" src={studentData.pic} alt="Student profile" />
    </React.Fragment>
  );
};

export default imageContainer;
