import React, { useEffect } from "react";
import "./styles/orderDetails.scss";
import {
  FaUserAlt,
  FaTruck,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, deliverOrder } from "../../../store/actions/orderAction";
import moment from "moment";
import Loading from "../../shared/Loading/Loading";

const OrderDetailsComponent = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;
  
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  if (!loading) {
    // Calculate Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch, id, successDelivered]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  return (
    <div className="order-details-component-container">
      {loading ? (
        <Loading />
      ) : error ? (
        <p>ERROR</p>
      ) : (
        <>
          <div className="top-center">
            <h6>
              <FaCalendarAlt /> {moment(order.createdAt).format("llll")}
            </h6>
            <p>Order ID: {order._id}</p>
          </div>

          <div className="top">
            <div className="row">
              <div className="circle">
                <FaUserAlt />
              </div>

              <div className="info">
                <h6>Customer</h6>
                <p>{order.user.name}</p>
                <p>
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="circle">
                <FaTruck />
              </div>

              <div className="info">
                <h6>Order Info</h6>
                <p>Shipping: {order.shippingAddress.country}</p>
                <p>Payment method: {order.paymentMethod}</p>
              </div>
            </div>

            <div className="row">
              <div className="circle">
                <FaMapMarkerAlt />
              </div>

              <div className="info">
                <h6>Deliver to</h6>
                <p>
                  Address: {order.shippingAddress.city}
                  <br />
                  {order.shippingAddress.address}
                  <br /> {order.shippingAddress.postalCode}
                </p>
              </div>
            </div>
          </div>

          <div className="table">
            <div className="table-header">
              <h5 className="title title1">Product</h5>
              <h5 className="title title2">Unit Price</h5>
              <h5 className="title title3">Quantity</h5>
              <h5 className="title title4">Total</h5>
            </div>

            <div className="table-body">
              {order.orderItems.map((item, index) => (
                <div className="data" key={index}>
                  <div className="product">
                    <div className="img"></div>
                    <h6>{item.name}</h6>
                  </div>
                  <div className="unit-price">{item.price} EUR</div>
                  <div className="quantity">{item.qty}</div>
                  <div className="total">{item.qty * item.price} EUR</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bottom-center">
            <div className="payment">
              <p>Grand Total: {order.totalPrice} EUR</p>
              <h6>Price EUR</h6>
            </div>

            <div className="status">
              <p>Status:</p>
              {order.isPaid ? (
                <span className="success">Payment Done</span>
              ) : (
                <span className="danger">Not Paid</span>
              )}
            </div>
          </div>

          <div className="links">
            <Link to="/Orders" className="hover-button">
              Back to Orders
            </Link>
            <div className="button">
              {order.isDelivered ? (
                <button className="hover-button">
                  Delivered at ({moment(order.isDeliveredAt).format("MMM Do YY")})
                </button>
              ) : (
                <>
                {loadingDelivered && <Loading />}
                <button
                        onClick={deliverHandler}
                        className="hover-button"
                      >
                        Mark as Delivered
                      </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetailsComponent;
