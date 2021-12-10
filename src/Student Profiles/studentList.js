import React from "react";
import "./studentList.css";
import ImageContainer from "../imageContainer";
import ContentContainer from "../contentContainer";
import TestPercentage from "./testPercentages";
import IconContainer from "../iconContainer";

const StudentList = (props) => {
  const { studentData, handleSwitch, search } = props;

  const displayList = () => {
    if (studentData.length > 0) {
      const filteredStudents =
        search.length === 0
          ? studentData
          : studentData.filter((student) =>
              `${student.firstName}${student.lastName}`
                .toLowerCase()
                .includes(search.toLowerCase())
            );

      return filteredStudents.map((student, index) => {
        return (
          <div key={student.id} className="Container">
            <div className="imageContainer">
              <ImageContainer studentData={student} />
            </div>
            <div className="contentContainer">
              <ContentContainer studentData={student} />
              <div className="percentageContainer">
                <TestPercentage studentData={student} Visible="false" />
              </div>
            </div>
            <div className="iconContainer">
              <IconContainer
                icon={student.icon}
                onSwitch={() => handleSwitch(student)}
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
