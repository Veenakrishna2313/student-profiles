import React from "react";
import "./studentList.css";

const StudentList = (props) => {
  const { studentData } = props;

  const displayList = () => {
    if (studentData.length > 0) {
      return studentData.map((student, index) => {
        return (
          <div className="font-link" key={student.id}>
            <img src={student.pic} alt="Student profile" />
            <h5>
              {student.firstName} {student.lastName}
            </h5>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>
              Average:
              {student.grades.reduce((a, b) => a + parseInt(b), 0) /
                student.grades.length}
              %
            </p>
          </div>
        );
      });
    } else {
      return <h3>No Students available</h3>;
    }
  };

  return <div>{displayList(props)}</div>;
};

export default StudentList;
