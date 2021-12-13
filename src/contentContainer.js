import React from "react";

const contentContainer = (props) => {
  const { studentData } = props;
  return (
    <React.Fragment>
      <div className="textStyle">
        
        <h4>
          {studentData.firstName.toUpperCase()}{" "}
          {studentData.lastName.toUpperCase()}
        </h4>
        <div className="m-3">
          <p>Email: {studentData.email}</p>
          <p>Company: {studentData.company}</p>
          <p>Skill: {studentData.skill}</p>
          <p>
            Average:
            {studentData.grades.reduce((acc, val) => acc + parseInt(val), 0) /
              studentData.grades.length}
            %
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contentContainer;
