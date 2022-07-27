import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/profile.scss";
import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import ProfileTabs from "./ProfileTabs";
import UserOrders from "./UserOrders"
import {getUserDetails} from "../../../store/actions/userAction"
import {listMyOrders } from "../../../store/actions/orderAction"
import moment from 'moment'

const Profile = () => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading, error, orders } = orderListMy;

  useEffect(() => {
    dispatch(listMyOrders())
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  return (
    <div className="profile-container">
      <Tabs className="wrapper">
        <div className="user-card">
          <div className="cover"></div>
          <div className="img-container">
            <div className="inner-img">
              <div className="img"></div>
            </div>
          </div>
          <div className="infos">
            <h5>{userInfo.name}</h5>
            <p>Joined: {moment(userInfo.createdAt).format("LL")} </p>
          </div>

          <TabList>
            <Tab>Profile Settings</Tab>
            <Tab>Orders <span className="badge">{orders ? orders.length : 0}</span></Tab>
          </TabList>
        </div>

        <div className="panel">
          <TabPanel><ProfileTabs /></TabPanel>

          <TabPanel><UserOrders orders={orders} loading={loading} error={error} /></TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Profile;
