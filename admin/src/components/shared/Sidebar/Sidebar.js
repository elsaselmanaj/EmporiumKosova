import React from "react";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import {AiOutlineMenu, AiFillHome, AiFillShopping} from 'react-icons/ai'
import {MdAddShoppingCart, MdShoppingBasket, MdMoney, MdAnalytics} from 'react-icons/md'
import {FaUserFriends} from 'react-icons/fa'
import {IoAnalyticsOutline} from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="logo">
            <div className="logo-container"></div>
          </Link>
          <button className="btn btn-icon btn-aside-minimize"><AiOutlineMenu /></button>
        </div>

        <div className="sidebar-links-container">
          <div className="sidebar-link">
            <Link to='/'>
              <AiFillHome />
              <h5>Dashboard</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/Products'>
              <AiFillShopping />
              <h5>Products</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/NewProduct'>
              <MdAddShoppingCart/>
              <h5>New Product</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/Orders'>
              <MdShoppingBasket/>
              <h5>Orders</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/Users'>
              <FaUserFriends/>
              <h5>Users</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/'>
              <MdMoney/>
              <h5>Transactions</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/'>
              <IoAnalyticsOutline/>
              <h5>Analytics</h5>
            </Link>
          </div>
          <div className="sidebar-link">
            <Link to='/'>
              <MdAnalytics/>
              <h5>Reports</h5>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
