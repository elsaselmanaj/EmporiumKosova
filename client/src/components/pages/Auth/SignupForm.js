import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { RiLock2Fill } from "react-icons/ri";
import { FormattedMessage } from "react-intl";
import {register} from '../../../store/actions/userAction'

const SignupForm = (location) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <h1>
          <FormattedMessage id="signup-title" defaultMessage="Sign Up" />
        </h1>

        <p>
          <FormattedMessage
            id="signup-text"
            defaultMessage="Already have an account?"
          />
          <Link to={redirect ? `/Login?redirect=${redirect}` : "/Login"}>
            <FormattedMessage id="signup-login" defaultMessage="Log in" />
          </Link>
        </p>

        <div className="input-content">
            <div className="inner-input-content">
                <span><FaUserAlt /></span>
                <input 
                type='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                />
            </div>
        </div>

        <div className="input-content">
            <div className="inner-input-content">
                <span><BsEnvelope /></span>
                <input 
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
                />
            </div>
        </div>

        <div className="input-content">
            <div className="inner-input-content">
                <span><RiLock2Fill /></span>
                <input 
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                />
            </div>
        </div>

        
        <div className="agree-terms-row">
          <div className="inner-row">
            <label className="form-label-checkbox">
            <FormattedMessage id='agree-terms' defaultMessage="By proceeding, you agree to the"/>
              <Link to="/">  <FormattedMessage id='agree-terms-row-text' defaultMessage="Terms and Conditions"/> </Link>
            </label>
          </div>
        </div>

        <button type="submit" className="hover-button">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
