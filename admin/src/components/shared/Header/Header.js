import React, { useEffect } from "react";
import "./header.scss";
import { FiMoon } from "react-icons/fi";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/actions/userAction";

const Header = () => {

  const dispatch = useDispatch();
    
  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header-container">
      <div className="content">
        <div className="icon">
          <FiMoon />
        </div>
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
