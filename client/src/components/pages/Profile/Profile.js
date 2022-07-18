import React from "react";
import './styles/profile.scss'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="wrapper">
        <div className="user-card">
          <div className="cover"></div>
          <div className="row">
            <div className="user-profile">
              <div className="img-profile"></div>
            </div>
            <div className="details">
              <h5>Name</h5>
              <p>Joined</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Profile;
