import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './styles/updateForm.scss'
import {updateUserProfile} from '../../../store/actions/userAction'

const ProfileTabs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert("Passwords do not match!")
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
      alert("Profile Updated Succesfully")
    }
  }

  return (
    <div className="profile-details-container">
      <form onSubmit={submitHandler}>
        <div className="input-content">
        <p>Username</p>
          <div className="inner-input-content">
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="User"
            />
          </div>
        </div>

        <div className="input-content">
        <p>Email Address</p>
          <div className="inner-input-content">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
        </div>

        <div className="input-content">
        <p>New Password</p>
          <div className="inner-input-content">
            <input
              type="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="input-content">
        <p>Confirm Password</p>
          <div className="inner-input-content">
            <input
              type="password"
              name="confirm-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
          </div>
        </div>

        <button className="hover-button">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileTabs;
