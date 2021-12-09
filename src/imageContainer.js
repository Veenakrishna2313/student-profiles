import React from "react";

const imageContainer = (props) => {
  const { studentData } = props;
  console.log(
    "Student Data is in image" + studentData + " type is " + typeof studentData
  );

  return (
    <React.Fragment>
      <img className="images" src={studentData.pic} alt="Student profile" />
    </React.Fragment>
  );
};

export default imageContainer;
