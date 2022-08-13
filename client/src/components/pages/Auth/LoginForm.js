import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import "./styles/form.scss";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { RiLock2Fill } from "react-icons/ri";
import { FormattedMessage } from "react-intl";
import {login} from '../../../store/actions/userAction'

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return <div className="form-container">
    <form onSubmit={submitHandler}>

        <h1><FormattedMessage id="login-title" defaultMessage="Log In"/></h1>

        <p><FormattedMessage id="login-text" defaultMessage="New to EmporiumKosova?"/><Link to={redirect ? `/Signup?redirect=${redirect}`:"/Signup"}><FormattedMessage id="login-signup" defaultMessage="Sign Up"/></Link></p>

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

        <div className="remember-me-row">
            <div className="inner-row">
                <input type='checkbox' name='remember-me' id='remember-me'/>
                <label htmlFor="remember-me" className="form-label-checkbox"><FormattedMessage id="login-remember-me" defaultMessage="Remember me"/></label>
            </div>

            <Link to='/' className='forgot-pwd'><FormattedMessage id="login-forgot-pwd" defaultMessage="Forgot Password?"/></Link>
        </div>

        <button type="submit" className="hover-button">Login</button>
    </form>
  </div>;
};

export default LoginForm;
