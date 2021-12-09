
import React from "react";
import "../Student Profiles/studentList.css";
import TestPercentage from './testPercentages';

const StudentList = (props) => {
  const { studentData } = props;

  const displayList = () => {
    if (studentData.length > 0) {
      return studentData.map((student, index) => {
        return (
          <div key={student.id} className="Container">
            <div className="imageContainer">
              <img className="images" src={student.pic} alt="Student profile" />
            </div>
            <div className="contentContainer">
              <h5>
                {student.firstName} {student.lastName}
              </h5>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>
                Average:
                {student.grades.reduce((acc, val) => acc + parseInt(val), 0) /
                  student.grades.length}
                %
              </p>
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
