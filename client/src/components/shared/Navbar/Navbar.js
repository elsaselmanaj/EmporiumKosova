import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import "./navbar.scss";
import { FormattedMessage } from "react-intl";
import ThemeSwitcher from "../Footer/ThemeSwitcher";
import { BiHeart } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import MobileNav from "../MobileNav/MobileNav";
import { logout } from "../../../store/actions/userAction";

const Navbar = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <div
      id="navbar"
      className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")}
    >
      <Link to="/" className="nav-logo">
        <div className="logo-container"></div>
      </Link>

      <div className="nav-links">
        <div className="nav-link home-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="navbar-main-link1" defaultMessage="Home" />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link products-link">
          <Link to="/ProductsCatalog" className="inner-nav-link">
            <FormattedMessage
              id="navbar-main-link2"
              defaultMessage="Products"
            />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link about-link">
          <Link to="/AboutUs" className="inner-nav-link">
            <FormattedMessage id="navbar-main-link3" defaultMessage="About" />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link contact-link">
          <Link to="/ContactUs" className="inner-nav-link">
            <FormattedMessage id="navbar-main-link4" defaultMessage="Contact" />
          </Link>
          <div className="line"></div>
        </div>

        <div className="nav-link blog-link">
          <Link to="/Blog" className="inner-nav-link">
            <FormattedMessage id="navbar-main-link5" defaultMessage="Blog" />
          </Link>
          <div className="line"></div>
        </div>
      </div>

      <div className="right-nav">
        <ThemeSwitcher />

        <div className="nav-icon heart">
          <BiHeart />
        </div>

        {userInfo ? (
          <div className="nav-auth">
            <Link to="/Profile" className="link1">
              <FormattedMessage id="profile" defaultMessage="Profile" />
            </Link>
            <Link to="/Logout" className="link2" onClick={logoutHandler}>
              <FormattedMessage id="logout" defaultMessage="Logout" />
            </Link>
          </div>
        ) : (
          <div className="nav-auth">
            <Link to="/Login" className="link1">
              <FormattedMessage id="log-in" defaultMessage="Log In" />
            </Link>
            <Link to="/Signup" className="link2">
              <FormattedMessage id="sign-up" defaultMessage="Sign Up" />
            </Link>
          </div>
        )}

        <div className="nav-icon cart">
          <Link to='/ShoppingCart/:id'><MdShoppingCart /></Link>
          <span className="badge">{cartItems.length}</span>
        </div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Navbar;
