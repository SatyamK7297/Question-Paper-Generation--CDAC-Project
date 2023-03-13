import courseService from "../service/course_service";
import { useEffect, useState } from "react";
import userService from "../service/user_service";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState();
  const [courses, SetCourses] = useState([]);
  const [errorFlag, setErrorFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
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
        navigate("/signin");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
        setErrorFlag(true);
        console.log(error.response.data.password);
        setErrorMessage(error.response.data.password);
        if (error.response.data.errorDetails !== undefined) {
          setErrorMessage("please enter unique password and email");
        }
      });
  };

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Hello!</p>
          <h1 className="hero-heading">Explore The Pariksha World</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="h3">
                FirstName:
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onClick={() => {
                  setErrorFlag(false);
                  setErrorMessage(null);
                }}
                required
                minLength={2}
                maxLength={20}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className="h3">
                LastName:
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onClick={() => {
                  setErrorFlag(false);
                  setErrorMessage(null);
                }}
                required
                minLength={2}
                maxLength={20}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="h3">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={() => {
                  setErrorFlag(false);
                  setErrorMessage(null);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="h3">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onClick={() => {
                  setErrorFlag(false);
                  setErrorMessage(null);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="h3">
                Phone:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onClick={() => {
                  setErrorFlag(false);
                  setErrorMessage(null);
                }}
                required
                pattern={"[1-9]{1}[0-9]{9}"}
                title="please enter 10 digit mobile number only"
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
              required
            >
              <option value="">Select a Course</option>
              {courses.map((value, index) => (
                <option key={index} value={value.id}>
                  {value.courseName}
                </option>
              ))}
            </select>

            <button type="submit" className="signbtn btn-primary">
              Sign Up
            </button>
            {errorFlag && <div style={{ color: "red" }}>{errorMessage}</div>}
          </form>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src="../../images/signup.svg" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
padding: 4rem 0;
.section-hero-data { 
    display: flex;
    flex-direction: column;
     justify-content: center;
    
}
.btn {
    max-width: 16rem;
}
    .hero-top-data { text-transform: uppercase;
    font-weight: 500; font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    }
   .hero-heading {
    text-transform: uppercase;
    font-size: 2.4rem;
}
.hero-para{
    margin-top:1.5rem;
    margin-bottom:3.4rem;
    max-width:60rem;
}
.section-hero-image{
    display:flex;
    justify-content:center;
    align-item:center;
}
picture{
    text-align:center;
}
.her0-img{
    max-width: 80%;
}
.form{
  width:50rem,
  align-item:center;
}
.signbtn{
text-decoration: none;
max-width: auto;
background-color: #1a1833;
color: #f3f3f3;
padding: 1.4rem 2.4rem;
border: none;
text-transform: uppercase;
text-align: center;
}
`;

export default SignUp;
