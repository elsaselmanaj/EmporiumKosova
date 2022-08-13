import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import ThemeSwitcher from "../../Footer/ThemeSwitcher";
import {
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaPhoneSquareAlt,
  FaPenSquare,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { logout } from "../../../../store/actions/userAction";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
        </Link>
        <button onClick={props.click}>
          <CgClose />{" "}
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <FaHome />
            <FormattedMessage id="navbar-main-link1" defaultMessage="Home" />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/ProductsCatalog" className="nav-anchor">
            <FaShoppingBag />
            <FormattedMessage
              id="navbar-main-link2"
              defaultMessage="Products"
            />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/AboutUs" className="nav-anchor">
            <FaInfoCircle />
            <FormattedMessage id="navbar-main-link3" defaultMessage="About" />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/ContactUs" className="nav-anchor">
            <FaPhoneSquareAlt />
            <FormattedMessage id="navbar-main-link4" defaultMessage="Contact" />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/Blog" className="nav-anchor">
            <FaPenSquare />
            <FormattedMessage id="navbar-main-link5" defaultMessage="Blog" />
          </Link>
        </div>
      </div>

      {userInfo ? (
        <div className="sidebar-auth">
          <Link to="/Profile" className="link1">
            <FormattedMessage id="profile" defaultMessage="Profile" />
          </Link>
          <Link to="/Logout" className="link2" onClick={logoutHandler}>
            <FormattedMessage id="logout" defaultMessage="Logout" />
          </Link>
        </div>
      ) : (
        <div className="sidebar-auth">
          <Link to="/Login" className="link1">
            <FormattedMessage id="log-in" defaultMessage="Log In" />
          </Link>
          <Link
            to="/Signup
        
        "
            className="link2"
          >
            <FormattedMessage id="sign-up" defaultMessage="Sign Up" />
          </Link>
        </div>
      )}

      <div className="icons">
        <div className="sidebar-mode-switcher">
          <ThemeSwitcher />
        </div>

        <div className="sidebar-icon heart">
          <BiHeart />
        </div>

        <div className="sidebar-icon cart">
          <Link to="/ShoppingCart/:id">
            <MdShoppingCart />
          </Link>
          <span className="badge">{cartItems.length}</span>
        </div>

        <div className="space"></div>
      </div>
    </div>
  );
};

export default Sidebar;
