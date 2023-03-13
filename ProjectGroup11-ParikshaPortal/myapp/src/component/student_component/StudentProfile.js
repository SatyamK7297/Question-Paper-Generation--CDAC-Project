import { useEffect, useState } from "react";
import React from "react";
import credential from "../../script/credential";
import { useNavigate } from "react-router-dom";
import "./studentProfile.css";

const StudentProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const init = () => {
    let user_id = -1;
    if ((user_id = credential.IsLoggedIn())) {
      const user_details = JSON.parse(sessionStorage.getItem(user_id));
      setUserDetails(user_details);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    init();
  }, []);

  return userDetails ? (
    <div className="profile-container">
      <h1 className="profile-header">Student Profile</h1>
      <div className="profile-details">
        <div className="profile-row">
          <span className="profile-label">Name:</span>
          <span className="profile-value">
            {userDetails.firstName} {userDetails.lastName}
          </span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Email:</span>
          <span className="profile-value">{userDetails.email}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Phone:</span>
          <span className="profile-value">{userDetails.phone}</span>
        </div>
        <div className="profile-row">
          <span className="profile-label">Course:</span>
          <span className="profile-value">{userDetails.course.courseName}</span>
        </div>
      </div>
    </div>
  ) : null;
};

export default StudentProfile;
