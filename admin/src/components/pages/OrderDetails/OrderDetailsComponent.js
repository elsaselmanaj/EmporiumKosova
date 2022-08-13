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
import {
  getOrderDetails,
  deliverOrder,
} from "../../../store/actions/orderAction";
import moment from "moment";
import Loading from "../../shared/Loading/Loading";
import {FormattedMessage} from 'react-intl'

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
    if(!order.isPaid) {
      window.alert("You should pay first!");
    } else {
      dispatch(deliverOrder(order));
    }
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
            <p><FormattedMessage id="order-id"/>: {order._id}</p>
          </div>

          <div className="top">
            <div className="row">
              <div className="circle">
                <FaUserAlt />
              </div>

              <div className="info">
                <h6><FormattedMessage id="customer"/></h6>
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
                <h6><FormattedMessage id="order-info"/></h6>
                <p><FormattedMessage id="shipping"/> {order.shippingAddress.country}</p>
                <p><FormattedMessage id="payment-method"/> {order.paymentMethod}</p>
              </div>
            </div>

            <div className="row">
              <div className="circle">
                <FaMapMarkerAlt />
              </div>

              <div className="info">
                <h6><FormattedMessage id="deliver-to"/></h6>
                <p>
                  <FormattedMessage id="address"/> {order.shippingAddress.city}
                  <br />
                  {order.shippingAddress.address}
                  <br /> {order.shippingAddress.postalCode}
                </p>
              </div>
            </div>
          </div>

          <div className="center">
            {order.orderItems.map((item, index) => (
              <div className="order" key={index}>
                <div className="img-container">
                  <div
                    className="img"
                    style={{ content: `url(${item.image})` }}
                  ></div>
                </div>

                <div className="info i1">
                  <h5><FormattedMessage id="product"/></h5>
                  <p>{item.name}</p>
                </div>

                <div className="info i2">
                  <h5><FormattedMessage id="unit-price"/></h5>
                  <p>{item.price} EUR</p>
                </div>

                <div className="info i3">
                  <h5><FormattedMessage id="quantity"/></h5>
                  <p>{item.qty}</p>
                </div>

                <div className="info i4">
                  <h5><FormattedMessage id="total"/></h5>
                  <p>{item.qty * item.price} EUR</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-center">
          <p><FormattedMessage id="grand-total"/> {order.totalPrice} EUR</p>

            <div className="status">
              <p><FormattedMessage id="status"/>:</p>
              {order.isPaid ? (
                <span className="success"><FormattedMessage id="paid"/></span>
              ) : (
                <span className="danger"><FormattedMessage id="not-paid"/></span>
              )}
            </div>
          </div>

          <div className="links">
            <Link to="/Orders" className="hover-button">
              <FormattedMessage id="back-to-orders"/>
            </Link>
            <div className="button">
              {order.isDelivered ? (
                <button className="hover-button">
                  <FormattedMessage id="delivered-at"/> (
                  {moment(order.isDeliveredAt).format("MMM Do YY")})
                </button>
              ) : (
                <>
                  {loadingDelivered && <Loading />}
                  <button onClick={deliverHandler} className="hover-button">
                    <FormattedMessage id="mark"/>
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
