import React from "react";
import "./styles/userOrders.scss";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../../shared/Loading/Loading";

const UserOrders = (props) => {
  const { loading, error, orders } = props;

  return (
    <div className="user-orders-container">
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          {orders.length === 0 ? (
            <div className="no-orders">
              <p>No Orders</p>
              <Link to="/" className="hover-button">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      className={`${
                        order.isPaid ? "alert-success" : "alert-danger"
                      }`}
                      key={order._id}
                    >
                      <td>
                        <a href={`/Order/${order._id}`} className="link">
                          {order._id}
                        </a>
                      </td>
                      <td>{order.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                      <td>
                        {order.isPaid
                          ? moment(order.paidAt).calendar()
                          : moment(order.createdAt).calendar()}
                      </td>
                      <td>${order.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserOrders;
