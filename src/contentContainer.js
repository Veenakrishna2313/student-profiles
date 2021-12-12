import React from 'react';


const contentContainer = (props) => {

   const { studentData } = props;
  return (
    <React.Fragment>
      <h1>
        {studentData.firstName} {studentData.lastName}
      </h1>
      <p>Email: {studentData.email}</p>
      <p>Company: {studentData.company}</p>
      <p>Skill: {studentData.skill}</p>
      <p>
        Average:
        {studentData.grades.reduce((acc, val) => acc + parseInt(val), 0) /
          studentData.grades.length}
        %
      </p>
      
    </React.Fragment>
  );
}
 
export default contentContainer;
