import httpClient from "../http-common";

const getAllQuestionBySubject = (subject_id) => {
  return httpClient.get(`/course/subject/question/${subject_id}`);
};

const addQuestion = (subject_id, question) => {
  return httpClient.post(`/course/subject/question/${subject_id}`, question);
};

export default { getAllQuestionBySubject, addQuestion };
