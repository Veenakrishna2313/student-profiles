import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "../Student Profiles/studentList";

const StudentProfileService = () => {
  const [studentData, setStudentData] = useState("");

  const url = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    getAllStudents();
  },[]);

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
      <StudentList studentData={studentData} />
     
    </div>
  );
};

export default StudentProfileService;
