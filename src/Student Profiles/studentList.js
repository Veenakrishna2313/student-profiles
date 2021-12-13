import React from "react";
import "./studentList.css";
import ImageContainer from "../imageContainer";
import ContentContainer from "../contentContainer";
import TestPercentage from "./testPercentages";
import IconContainer from "../iconContainer";
import FormContainer from "../Form Component/formContainer";
import ButtonBox from "../Button Component/ButtonBox";

const StudentList = (props) => {
  const {
    studentData,
    handleSwitch,
    searchByName,
    searchByTag,
    onSubmit,
    onChanges,
  } = props;

  const displayList = () => {
    if (studentData.length > 0) {
      let filteredStudents = [];

      if (searchByName.length === 0 && searchByTag.length === 0) {
        //if both Name and Tag searchs are empty, then display the entire student list
        filteredStudents = studentData;
      } else if (searchByName.length > 0) {
        // There is a Name to search
        filteredStudents = studentData.filter((student) =>
          `${student.firstName}${student.lastName}`
            .toLowerCase()
            .includes(searchByName.toLowerCase())
        );
      } else if (searchByTag.length > 0) {
        // There is a tag to search
        filteredStudents = studentData.filter((student) => {
          let selectStudent = false;
          if (student.hasOwnProperty("tags")) {
            student.tags.forEach((tag) => {
              if (tag.includes(searchByTag)) {
                // Select this student.
                selectStudent = true;
              }
            });
          }
          return selectStudent;
        });
      }

      return filteredStudents.map((student, index) => {
        return (
          <div key={student.id} className=" Container p-2">
            <div className="imageContainer">
              <ImageContainer studentData={student} />
            </div>

            <div className="m-3 contentContainer">
              <ContentContainer studentData={student} />
              <div className="percentageContainer m-3">
                <TestPercentage studentData={student} />
                <div className=" m-2">
                  <ButtonBox tags={student.tags} />
                </div>               
                <div className="formContainer">
                  <FormContainer
                    tags={student.tags}
                    onChanges={onChanges}
                    onSubmit={onSubmit(student)}
                  />
                </div>
              </div>
            </div>

            <div className="iconContainer p-2">
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
