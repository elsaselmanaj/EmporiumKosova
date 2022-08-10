import React from "react";
import "./styles/ordersComponent.scss";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { listOrders } from "../../../store/actions/orderAction";

const OrdersComponent = () => {

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  return (
    <div className="orders-component-container">
      <h1>ORDERS</h1>

      <div className="wrapper">
        <div className="table">
          <div className="table-header">
            <h5 className="title title1">Name</h5>
            <h5 className="title title2">Email</h5>
            <h5 className="title title3">Total</h5>
            <h5 className="title title4">Paid</h5>
            <h5 className="title title5">Date</h5>
            <h5 className="title title6">Status</h5>
            <h5 className="title title7">Action</h5>
          </div>

          <div className="table-body">
            {orders.map((order) => (
              <div className="data" key={order._id}>
                <div className="name">{order.name}</div>
                <div className="email">{order.user.name}</div>
                <div className="total">{order.totalPrice} EUR</div>
                <div className="paid">
                  {order.isPaid ? (
                    <span className="success">
                      Paid At {moment(order.paidAt).format("MMM Do YY")}
                    </span>
                  ) : (
                    <span className="danger">Not Paid</span>
                  )}
                </div>
                <div className="date">{moment(order.createdAt).format("MMM Do YY")}</div>
                <div className="status">
                  {order.isDelivered ? (
                    <span className="btn-success">Delivered</span>
                  ) : (
                    <span className="btn-danger">Not Delivered</span>
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
