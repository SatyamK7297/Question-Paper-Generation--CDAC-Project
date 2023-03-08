import httpClient from "../http-common";

const getAllQuestionPaperBySubject = (subject_id) => {
  return httpClient.get(`/course/subject/questionPaper/${subject_id}`);
};

const addQuestionPaperAuto = (subject_id, questionPaper) => {
  return httpClient.post(
    `/course/subject/questionPaper/auto/${subject_id}`,
    questionPaper
  );
};

const addQuestionPaperManually = (subject_id, questionPaper) => {
  return httpClient.post(
    `/course/subject/questionPaper/manual/${subject_id}`,
    questionPaper
  );
};

const deleteQuestionPaper = (questionPaper_id) => {
  httpClient.delete(`/course/subject/questionPaper/${questionPaper_id}`);
};

export default {
  getAllQuestionPaperBySubject,
  addQuestionPaperAuto,
  addQuestionPaperManually,
  deleteQuestionPaper,
};
