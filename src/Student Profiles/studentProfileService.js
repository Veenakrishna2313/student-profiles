import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./studentList";

const StudentProfileService = () => {
  const [studentData, setStudentData] = useState("");
   const handleSwitch = (student) => {
     console.log("inside handleSwitch", student);
     const students = [...studentData];
     console.log("new Students array", students);
     const index = students.indexOf(student);
     console.log("index is", index);
     console.log("index is", students[index]);
     students[index] = { ...students[index] };
     console.log("this", students[index]);
     students[index].icon = !students[index].icon;
     console.log("new Students array", students[index]);
     console.log("new Students array", students);
    setStudentData(students);
   };

  const url = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allStudents = response.data.students;
        setStudentData(allStudents);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div>
      <StudentList studentData={studentData} handleSwitch={handleSwitch} />
    </div>
  );
};

export default StudentProfileService;
