import React, { useEffect } from "react";
import "./styles/usersComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../../store/actions/userAction";

const UsersComponent = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const {users } = userList;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);

  return (
    <div className="users-component-container">
      <h1>USERS</h1>

      <div className="wrapper">
        <div className="cards">
          {users?.map((user) => (
            <div className="card-container" key={user._id}>
              <div className="card">
                <div className="card-header">
                  <div className="img"></div>
                </div>
                <div className="card-body">
                  <h5>{user.name}</h5>
                  {user.isAdmin === true ? <p>Admin</p> : <>Customer</>}
                  <p>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
