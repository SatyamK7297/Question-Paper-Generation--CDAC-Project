import subjectService from "../service/subject_service";
import { useEffect, useState } from "react";
import React from "react";
import QuestionDetails from "./question";

const SubjectDetails = (props) => {
  const [subjectId, setSubjectId] = useState(0);
  const [subject, setSubject] = useState([]);
  const init = () => {
    subjectService
      .getAllSubjectByCourse(props.courseId)
      .then((response) => {
        setSubject(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, [props.courseId]);

  const handleSubjectChange = (event) => {
    setSubjectId(event.target.value);
  };

  return (
    <div key={props.courseId}>
      <label htmlFor="course-select" className="h3">
        Select Subject
      </label>
      <select
        className="form-select form-select-lg mb-3"
        id="course-select"
        value={subjectId}
        onChange={handleSubjectChange}
      >
        <option value="">Select a Subject</option>
        {subject.map((value, index) => (
          <option key={index} value={value.id}>
            {value.subjectName}
          </option>
        ))}
      </select>
      <QuestionDetails subjectId={subjectId} />
    </div>
  );
};

export default SubjectDetails;
