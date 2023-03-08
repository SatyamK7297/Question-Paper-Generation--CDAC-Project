import httpClient from "../http-common";

const getAllQuestionBySubject = (subject_id) => {
  return httpClient.get(`/course/subject/question/${subject_id}`);
};

const addQuestion = (question, subject_id) => {
  return httpClient.post(`/course/subject/question/${subject_id}`, question);
};

const limitedQuestion = (subject_id) => {
  return httpClient.get(`/course/subject/question/limit/${subject_id}`);
};

export default { getAllQuestionBySubject, addQuestion, limitedQuestion };
