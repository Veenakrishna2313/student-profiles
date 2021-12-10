import React from "react";

const testPercentages = (props) => {
  const { studentData } = props;

  const percentageList = () => {
    if (studentData.icon === true) {
      return studentData.grades.map((grade, i) => {
        return (
          <div key={i}>
            <p>
              Test {i + 1} : {studentData.grades[i]} %
            </p>
          </div>
        );
      });
    } else {
      <h1>No datd</h1>;
    }
  };

  return <div>{percentageList()}</div>;
};

export default testPercentages;
