import httpClient from "../http-common";

const getAllQuestionPaperBySubjectForAdmin = (subject_id) => {
  return httpClient.get(`/course/subject/questionPaper/admin/${subject_id}`);
};

const getAllQuestionPaperBySubjectForUser = (subject_id,user_id) => {
  return httpClient.get(`/course/subject/questionPaper/user/${subject_id}/${user_id}`);
};

const addQuestionPaperAuto = (subject_id, questionPaper) => {
  return httpClient.post(
    `/course/subject/questionPaper/admin/auto/${subject_id}`,
    questionPaper
  );
};

const addQuestionPaperManually = (subject_id, questionPaper) => {
  return httpClient.post(
    `/course/subject/questionPaper/admin/manual/${subject_id}`,
    questionPaper
  );
};

const isActive = (questionPaper_id) => {
  return httpClient.put(
    `/course/subject/questionPaper/admin/${questionPaper_id}`
  );
};

const paperExpiry = (questionPaper_id) => {
  return httpClient.delete(
    `/course/subject/questionPaper/admin/${questionPaper_id}`
  );
};

const getQuestionPaperDetails = (questionPaper_id) => {
  return httpClient.get(
    `/course/subject/questionPaper/paper/${questionPaper_id}`
  );
};

const evalQuiz = (questionPaper_id, user_id, questions) => {
  return httpClient.post(
    `course/subject/questionPaper/eval-quiz/${questionPaper_id}/${user_id}`,
    questions
  );
};

export default {
  getAllQuestionPaperBySubjectForAdmin,
  getAllQuestionPaperBySubjectForUser,
  addQuestionPaperAuto,
  addQuestionPaperManually,
  isActive,
  paperExpiry,
  getQuestionPaperDetails,
  evalQuiz,
};
