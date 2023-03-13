import subjectService from "../../service/subject_service";
import { useEffect, useState } from "react";
import React from "react";
import credential from "../../script/credential";
import { useNavigate, Link } from "react-router-dom";
import "./studentSubjectList.css";

const StudentSubjectList = () => {
  const [subjectId, setSubjectId] = useState();
  const [subject, setSubject] = useState([]);
  const navigate = useNavigate();

  const init = () => {
    let user_id = -1;
    if ((user_id = credential.IsLoggedIn())) {
      const course_id = JSON.parse(sessionStorage.getItem(user_id)).course.id;
      subjectService
        .getAllSubjectByCourse(course_id)
        .then((response) => {
          setSubject(response.data);
        })
        .catch((error) => {
          console.log("Something went wrong in subject", error);
        });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    init();
  }, []);

  const handleSubjectClick = (subjectId) => {
    navigate(`/student/subject-question-paper/${subjectId}`);
  };

  return (
    <div className="subject-list-container">
      <h2>PG-DAC SUBJECTS</h2>
      <div className="subject-cards">
        {subject.map((value, index) => (
          <Link
            key={index}
            to={`/student/subject-question-paper/${value.id}`}
            className={`subject-card ${
              value.id === subjectId ? "selected" : ""
            }`}
            onClick={() => handleSubjectClick(value.id)}
          >
            <h3>{value.subjectName}</h3>

            <div className="appear-for-exam">Appear for Exam</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentSubjectList;
