import React from "react";
import "./styles/userOrders.scss";
import {FormattedMessage} from 'react-intl'
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
              <div className="table">
                <div className="table-header">
                  <h5 className="title title1">ID</h5>
                  <h5 className="title title2"><FormattedMessage id="user-orders-status"/></h5>
                  <h5 className="title title3"><FormattedMessage id="user-orders-date"/></h5>
                  <h5 className="title title4"><FormattedMessage id="user-orders-total"/></h5>
                </div>
                <div className="table-body">
                  {orders.map((order) => (
                    <div
                      className={`${
                        order.isPaid ? "data" : "data"
                      }`}
                      key={order._id}
                    >
                      <div className="id">
                        <a href={`/Order/${order._id}`} className="link">
                          {order._id}
                        </a>
                      </div>
                      <div className="status">
                        {order.isPaid ? <p className="success"><FormattedMessage id="user-orders-paid"/></p> : <p className="danger"><FormattedMessage id="user-orders-not-paid"/></p>}
                      </div>
                      <div className="date">
                        {order.isPaid
                          ? moment(order.paidAt).calendar()
                          : moment(order.createdAt).calendar()}
                      </div>
                      <div className="total">{order.totalPrice} EUR</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserOrders;
