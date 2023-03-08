import React, { useEffect, useState } from "react";
import CourseDetails from "./course";
import SubjectDetails from "./subject";
import QuestionPaperManual from "./questionPaperManual";
const AutoPaperGeneration = () => {
  const [courseId, setCourseId] = useState();
  const [subjectId, setSubjectId] = useState();
  const [renderSubject, setRenderSubject] = useState(false);
  const [renderQuestion, setRenderQuestion] = useState(false);

  let HandleCourseId = (newCourseID) => {
    console.log(
      "Course ID came From Course in Generate Question Paper " + newCourseID
    );
    setCourseId(newCourseID);
  };
  let HandleSubjectId = (newSubjectId) => {
    setSubjectId(newSubjectId);
  };

  useEffect(() => {
    setRenderSubject(true);
  }, [courseId]);
  useEffect(() => {
    setRenderQuestion(true);
  }, [subjectId]);

  return (
    <div>
      <h4>Question Paper Manual Generation</h4>
      <CourseDetails onCourseIDChange={HandleCourseId} />
      {renderSubject && (
        <SubjectDetails
          courseId={courseId}
          onSubjectIdChange={HandleSubjectId}
        />
      )}
      {renderQuestion && <QuestionPaperManual subjectId={subjectId} />}
    </div>
  );
};

export default AutoPaperGeneration;
