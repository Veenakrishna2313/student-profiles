import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./studentList";
import SearchComponent from "../Search Component/searchBox";

const StudentProfileService = () => {
  const [studentData, setStudentData] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [searchByTag, setSearchByTag] = useState("");
  const [addedTag, setAddTag] = useState("");

  const handleSearchByName = (e) => {
    setSearchByName(e.target.value);
  };

  const handleSearchByTag = (e) => {
    setSearchByTag(e.target.value);
    console.log("tag data", e.target.value);
  };

  const handleTagName = (e) => {
    setAddTag(e.target.value);
  };

  const handleSubmit = (student) => {
    return (event) => {
      event.preventDefault();
      event.target.reset();

      const students = [...studentData];

      const index = students.indexOf(student);

      students[index] = { ...students[index] };
      if (!students[index].hasOwnProperty("tags")) {
        students[index].tags = [];
        if (!students[index].tags.includes(addedTag))
          students[index].tags.push(addedTag);
      } else {
        if (!students[index].tags.includes(addedTag))
          students[index].tags.push(addedTag);
      }

      setStudentData(students);
    };
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
      <SearchComponent
        onChanges={handleSearchByName}
        search={searchByName}
        displayName="Search by name"
      />
      <SearchComponent
        displayName="Search by tag"
        search={searchByTag}
        onChanges={handleSearchByTag}
      />
      <StudentList
        studentData={studentData}
        handleSwitch={handleSwitch}
        searchByName={searchByName}
        onSubmit={handleSubmit}
        onChanges={handleTagName}
      />
    </div>
  );
};

export default StudentProfileService;
