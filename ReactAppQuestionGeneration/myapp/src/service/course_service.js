import httpClient from "../http-common";

const getAllCourses = () => {
  return httpClient.get("/course");
};

const addCourse = (course) => {
  return httpClient.post("/course", course);
};

export default { getAllCourses, addCourse };
