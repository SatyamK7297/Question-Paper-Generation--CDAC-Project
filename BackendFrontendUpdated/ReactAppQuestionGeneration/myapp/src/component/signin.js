import React, { useState } from "react";
import userService from "../service/user_service";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
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
  );
};
export default SignIn;
