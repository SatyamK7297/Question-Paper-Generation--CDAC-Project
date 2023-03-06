import httpClient from "../http-common";

const registerUser = (course_id, user) => {
  return httpClient.post(`/user/signup/${course_id}`, user);
};

const authenticateUser = (user) => {
  return httpClient.post("/user/signin", user);
};

export default { registerUser, authenticateUser };
