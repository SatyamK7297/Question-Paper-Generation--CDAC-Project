import httpClient from "../http-common";

const evalQuiz = (questionPaper_id, user_id, questions) => {
  return httpClient.post(
    `course/subject/questionPaper/result/eval-quiz/${questionPaper_id}/${user_id}`,
    questions
  );
};

const getResultsForUser = (user_id) => {
  return httpClient.get(`course/subject/questionPaper/result/${user_id}`);
};

export default {
  evalQuiz,
  getResultsForUser,
};
