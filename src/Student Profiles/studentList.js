import React from "react";
import "../Student Profiles/studentList.css";
import ImageContainer from "../imageContainer";
import ContentContainer from "../contentContainer";
import TestPercentage from "./testPercentages";

const StudentList = (props) => {
  const { studentData } = props;

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
                <TestPercentage studentData={student.grades} />
              </div>
            </div>
            <div className="iconContainer">
              <i className="fa fa-plus fa-2x plus" aria-hidden="true"></i>
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
