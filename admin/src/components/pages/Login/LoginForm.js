import React, { useEffect,useState } from "react";
import "./styles/form.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";
import { RiLock2Fill } from "react-icons/ri";
import { login } from "../../../store/actions/userAction";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error: errorLogin, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="form-container">
      {errorLogin && <div className="error">{errorLogin}</div>}
      <form onSubmit={submitHandler}>
        <h1>Log In</h1>

        <div className="input-content">
          <div className="inner-input-content">
            <span>
              <BsEnvelope />
            </span>
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
          <div className="inner-input-content">
            <span>
              <RiLock2Fill />
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>

        <button type="submit" className="hover-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
