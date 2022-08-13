import React from "react";
import "./styles/latestOrders.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import {FormattedMessage} from 'react-intl'

const LatestOrders = (props) => {
  const { orders } = props;

  return (
    <div className="latest-orders-container">
      <h3><FormattedMessage id='dashboard-latest-orders-title'/></h3>

      <div className="wrapper">
        <div className="datas">
          {orders?.slice(0, 5).map((order) => (
            <div className="data" key={order._id}>
              <div className="name">{order.user.name}</div>
              <div className="email">{order.user.email}</div>
              <div className="price">{order.totalPrice} EUR</div>
              <div className="paid">
                {order.isPaid ? (
                  <span className="success">
                    <FormattedMessage id='paid-at'/> {moment(order.paidAt).format("MMM Do YY")}
                  </span>
                ) : (
                  <span className="danger"><FormattedMessage id='not-paid'/></span>
                )}
              </div>
              <div className="date">{moment(order.createdAt).calendar()}</div>
              <div className="action">
                <Link to={`/OrderDetails/${order._id}`}>
                  <AiFillEye />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestOrders;
