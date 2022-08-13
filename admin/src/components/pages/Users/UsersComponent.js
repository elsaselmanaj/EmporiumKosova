import React, { useEffect } from "react";
import "./styles/usersComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../../store/actions/userAction";
import {FormattedMessage} from 'react-intl'

const UsersComponent = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);

  return (
    <div className="users-component-container">
      <h1><FormattedMessage id="users-title"/></h1>

      <div className="wrapper">
        <div className="cards">
          {users?.map((user) => (
            <div className="card-container" key={user._id}>
              <div className="card">
                
                <div className="inline">
                  <div className="profile"></div>
                  <h5>{user.name}</h5>
                </div>

                {user.isAdmin === true ? <p><FormattedMessage id="role"/> Admin</p> : <> <FormattedMessage id="role"/> <FormattedMessage id="client"/></>}
                <p>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
