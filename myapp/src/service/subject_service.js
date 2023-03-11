import httpClient from "../http-common";

const getAllSubjectByCourse = (course_id) => {
  return httpClient.get(`/course/subject/${course_id}`);
};

const addSubject = (course_id, subject) => {
  return httpClient.post(`/course/subject/${course_id}`, subject);
};

export default { getAllSubjectByCourse, addSubject };
