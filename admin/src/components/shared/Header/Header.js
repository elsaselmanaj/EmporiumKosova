import React from "react";
import "./header.scss";
import { AiOutlineBell, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/userAction";
import ThemeSwitcher from "./ThemeSwitcher";
import SelectLanguage from "../SelectLanguage/SelectLanguage";


const Header = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header-container">
      <div className="content">
        <SelectLanguage
          setLanguage={props.setLanguage}
          language={props.language}
        />

        <ThemeSwitcher />

        <div className="icon">
          <AiOutlineBell />
        </div>
        <div className="icon">
          <MdSettings />
        </div>

        <Link to="/" onClick={logoutHandler}>
          <div className="icon">
            <AiOutlineLogout />
          </div>
        </Link>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Header;
