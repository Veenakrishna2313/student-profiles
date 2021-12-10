import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./studentList";
import SearchComponent from "../Search Component/searchBox";

const StudentProfileService = () => {
  const [studentData, setStudentData] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSwitch = (student) => {
    const students = [...studentData];
    const index = students.indexOf(student);
    students[index] = { ...students[index] };
    students[index].icon = !students[index].icon;
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
      <SearchComponent onChange={handleSearch} />
      <StudentList studentData={studentData} handleSwitch={handleSwitch} search={search} />
    </div>
  );
};

export default StudentProfileService;
