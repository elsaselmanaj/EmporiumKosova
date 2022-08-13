import React, { useState } from "react";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiFillHome, AiFillShopping } from "react-icons/ai";
import {
  MdAddShoppingCart,
  MdShoppingBasket,
  MdMoney,
  MdAnalytics,
} from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import {FormattedMessage} from 'react-intl'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="aside">
        <div className="aside-top">
          <Link to="/" className="logo">
            <div className="logo-container"></div>
          </Link>

          <div className="menu-icon">
            <AiOutlineMenu />
          </div>
        </div>

        <div className="content">
          <Link to="/" className="sidebar-link">
            <AiFillHome />
            <h5><FormattedMessage id="dashboard"/></h5>
          </Link>

          <Link to="/Products" className="sidebar-link">
            <AiFillShopping />
            <h5><FormattedMessage id="products"/></h5>
          </Link>

          <Link to="/NewProduct" className="sidebar-link">
            <MdAddShoppingCart />
            <h5><FormattedMessage id="new-product"/></h5>
          </Link>

          <Link to="/Orders" className="sidebar-link">
            <MdShoppingBasket />
            <h5><FormattedMessage id="orders"/></h5>
          </Link>

          <Link to="/Users" className="sidebar-link">
            <FaUserFriends />
            <h5><FormattedMessage id="users"/></h5>
          </Link>

          <Link to="/" className="sidebar-link">
            <MdMoney />
            <h5><FormattedMessage id="transactions"/></h5>
          </Link>

          <Link to="/" className="sidebar-link">
            <IoAnalyticsOutline />
            <h5><FormattedMessage id="analytics"/></h5>
          </Link>

          <Link to="/" className="sidebar-link">
            <MdAnalytics />
            <h5><FormattedMessage id="reports"/></h5>
          </Link>
        </div>
      </div>

      <div className="aside-mini">
        <div className="mini-top">
          <Link to="/" className="logo">
            <div className="logo-container"></div>
          </Link>
        </div>

        <div className="content-mini">
          <Link to="/" className="mini-sidebar-link">
            <AiFillHome />
          </Link>

          <Link to="/Products" className="mini-sidebar-link">
            <AiFillShopping />
          </Link>

          <Link to="/NewProduct" className="mini-sidebar-link">
            <MdAddShoppingCart />
          </Link>

          <Link to="/Orders" className="mini-sidebar-link">
            <MdShoppingBasket />
          </Link>

          <Link to="/Users" className="mini-sidebar-link">
            <FaUserFriends />
          </Link>

          <Link to="/" className="mini-sidebar-link">
            <MdMoney />
          </Link>

          <Link to="/" className="mini-sidebar-link">
            <IoAnalyticsOutline />
          </Link>

          <Link to="/" className="mini-sidebar-link">
            <MdAnalytics />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
