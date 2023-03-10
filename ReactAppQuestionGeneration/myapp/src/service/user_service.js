import httpClient from "../http-common";

const registerUser = (course_id, user) => {
  return httpClient.post(`/user/signup/${course_id}`, user);
};

const authenticateUser = (user) => {
  return httpClient.post("/user/signin", user);
};

const getUser = (user_id) => {
  return httpClient.get(`/user/${user_id}`);
};

export default { registerUser, authenticateUser ,getUser};
