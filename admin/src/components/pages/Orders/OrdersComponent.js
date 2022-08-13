import React from "react";
import "./styles/ordersComponent.scss";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { listOrders } from "../../../store/actions/orderAction";
import { FormattedMessage } from "react-intl";

const OrdersComponent = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  return (
    <div className="orders-component-container">
      <h1>
        <FormattedMessage id="orders-title" />
      </h1>

      <div className="wrapper">
        <div className="table">
          <div className="table-header">
            <h5 className="title title1">
              <FormattedMessage id="user-name" />
            </h5>
            <h5 className="title title2">Email</h5>
            <h5 className="title title3">
              <FormattedMessage id="total" />
            </h5>
            <h5 className="title title4">
              <FormattedMessage id="paid" />
            </h5>
            <h5 className="title title5">
              <FormattedMessage id="date" />
            </h5>
            <h5 className="title title6">
              <FormattedMessage id="status" />
            </h5>
            <h5 className="title title7">
              <FormattedMessage id="action" />
            </h5>
          </div>

          <div className="table-body">
            {orders?.map((order) => (
              <div className="data" key={order._id}>
                <div className="name">{order.user.name}</div>
                <div className="email">{order.user.email}</div>
                <div className="total">{order.totalPrice} EUR</div>
                <div className="paid">
                  {order.isPaid ? (
                    <span className="success">
                     <FormattedMessage id="paid-at"/> {moment(order.paidAt).format("MMM Do YY")}
                    </span>
                  ) : (
                    <span className="danger"><FormattedMessage id="not-paid"/></span>
                  )}
                </div>
                <div className="date">
                  {moment(order.createdAt).format("MMM Do YY")}
                </div>
                <div className="status">
                  {order.isDelivered ? (
                    <span className="success"><FormattedMessage id="delivered"/></span>
                  ) : (
                    <span className="danger"><FormattedMessage id="not-delivered"/></span>
                  )}
                </div>
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
    </div>
  );
};

export default OrdersComponent;
