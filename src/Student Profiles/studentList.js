import React, { useState } from "react";
import "./studentList.css";
import ImageContainer from "../imageContainer";
import ContentContainer from "../contentContainer";
import TestPercentage from "./testPercentages";
import IconContainer from "../iconContainer";

const StudentList = (props) => {
  const { studentData } = props;
  const [Visible, setVisible] = useState(false);

  const handleIconChange = () => {
    let iconClass = "fa fa-2x plus fa-";
    iconClass += Visible ? "minus" : "plus";
    return iconClass;
  };

  const handleSwitch = () => {
    setVisible(!Visible);
  };

  const displayList = () => {
    if (studentData.length > 0) {
      return studentData.map((student, index) => {
        return (
          <div key={student.id} className="Container">
            <div className="imageContainer">
              <ImageContainer studentData={student} />
            </div>
            <div className="contentContainer">
              <ContentContainer studentData={student} />
              <div className="percentageContainer">
                {Visible && <TestPercentage studentData={student.grades} />}
              </div>
            </div>
            <div className="iconContainer">
              <IconContainer
                onSwitch={handleSwitch}
                onIconChange={handleIconChange()}
              />
            </div>
          </div>
        );
      });
    } else {
      return <h3>No Students available</h3>;
    }
  };

  return <div>{displayList()}</div>;
};

export default StudentList;
