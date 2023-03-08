import React, { useState } from "react";
import userService from "../service/user_service";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData,setUserData]=useState([]);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };
    userService
      .authenticateUser(user)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data.role);
        if(response.data.role==="ROLE_ADMIN"){
          navigate('/admin');
        }else if( response.data.role==="ROLE_STUDENT"){
          navigate("/student");
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <Wrapper>
    <div className="container grid grid-two-column">
      <div className="section-hero-data">
        <p className="hero-top-data">Hi</p>
        <h1 className="hero-heading">Welcome To Pariksha World</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
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
export default SignIn;