import React from "react";

const testPercentages = (props) => {
  const { studentData } = props;

  console.log(
    "Student Data is " + studentData + " type is " + typeof studentData
  );

  const percentageList = () => {
    return studentData.map(({ grade }, i) => {
      return (
        <div key={i}>
          <p>
            Test {i + 1} : {studentData[i]} %
          </p>
        </div>
      );
    });
  };

  return <div>{percentageList()}</div>;
};

export default testPercentages;
