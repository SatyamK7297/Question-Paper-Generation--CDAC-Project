import subjectService from "../service/subject_service";
import { useEffect, useState } from "react";
import React from "react";
import QuestionDisplay from "./question";

const SubjectDetails = (props) => {
  const [subjectId, setSubjectId] = useState();
  const [subject, setSubject] = useState([]);
  console.log(props.courseId);
  const init = () => {
    subjectService
      .getAllSubjectByCourse(props.courseId)
      .then((response) => {
        setSubject(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong in subject", error);
      });
  };

  useEffect(() => {
    init();
  }, [props.courseId]);

  const handleSubjectChange = (e) => {
    setSubjectId(e.target.value);
    props.onSubjectIdChange(e.target.value);


  };

   return (
    <div key={props.courseId}>
      <label htmlFor="course-select">Subject : </label>
      <select
        id="course-select"
        value={subjectId}
        onChange={handleSubjectChange}
      >
        <option key={-1} value="">
          Select a Subject
        </option>
        {subject.map((value, index) => (
          <option key={index} value={value.id}>
            {value.subjectName}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default SubjectDetails;
