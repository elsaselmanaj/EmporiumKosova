import React, { useState } from "react";
import "./styles/form.scss";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { RiLock2Fill } from "react-icons/ri";
import { FormattedMessage } from "react-intl";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <form action="">
        <h1>
          <FormattedMessage id="signup-title" defaultMessage="Sign Up" />
        </h1>

        <p>
          <FormattedMessage
            id="signup-text"
            defaultMessage="Already have an account?"
          />
          <Link to="/Login">
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
      </form>
    </div>
  );
};

export default SignupForm;
