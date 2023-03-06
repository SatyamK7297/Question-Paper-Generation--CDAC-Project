import courseService from "../service/course_service";
import { useEffect, useState } from "react";
import userService from "../service/user_service";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [courseId, setCourseId] = useState();
  const [courses, SetCourses] = useState([]);
  const init = () => {
    courseService
      .getAllCourses()
      .then((response) => {
        SetCourses(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    console.log(newUser);
    userService
   
      .registerUser(courseId, newUser)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">FirstName:</label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">LastName:</label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <label htmlFor="course-select" className="h3">
        Select Course
      </label>
      <select
        className="form-select form-select-lg mb-3"
        id="course-select"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      >
        <option value="">Select a Course</option>
        {courses.map((value, index) => (
          <option key={index} value={value.id}>
            {value.courseName}
          </option>
        ))}
      </select>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
