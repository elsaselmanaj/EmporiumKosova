import React, { useEffect, useState } from "react";
import "./styles/orderContent.scss";
import { FormattedMessage } from "react-intl";
import { FaUserAlt, FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../../../store/actions/orderAction";
import  moment  from "moment";
import { ORDER_PAY_RESET } from "../../../store/constants/orderConstants";
import axios from "axios";
import Loading from "../../shared/Loading/Loading";
import URL from "../../../store/Url";

const OrderContent = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(`${URL}/api/config/paypal`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, id, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult); 
    dispatch(payOrder(id, paymentResult));
    alert("Successful Payment!")
  };

  return (
    <div className="order-container">
      {loading ? (
        <div></div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <div className="top">
            <div className="row">
              <div className="circle">
                <FaUserAlt />
              </div>

              <div className="info">
              <h6><FormattedMessage id="place-order-customer"/></h6>
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
              <h6><FormattedMessage id="place-order-info"/></h6>
                <p><FormattedMessage id="place-order-shipping"/> {order.shippingAddress.country} </p>
                <p><FormattedMessage id="place-order-payment-method"/> {order.paymentMethod}</p>
                {order.isPaid ? (
                    <p className="success">Paid on {moment(order.paidAt).calendar()}</p>
                ) : (
                    <p className="danger">Not Paid</p>
                )}
              </div>
            </div>

            <div className="row">
              <div className="circle">
                <FaMapMarkerAlt />
              </div>

              <div className="info">
              <h6><FormattedMessage id="place-order-deliver"/></h6>
                <p>
                <FormattedMessage id="place-order-address"/> {order.shippingAddress.city},{" "}
                  {order.shippingAddress.address},{" "}
                  {order.shippingAddress.postalCode}
                </p>
                {order.isDelivered ? (
                    <p className="success">Delivered on {moment(order.deliveredAt).calendar()}</p>
                ) : (
                    <p className="danger">Not Delivered</p>
                )}
              </div>
            </div>
          </div>

          <div className="center">
            <>
              {order.orderItems.length === 0 ? (
                <div className="empty">
                  <h5>Your cart is Empty</h5>
                </div>
              ) : (
                <>
                  {order.orderItems.map((item, index) => (
                    <div className="order" key={index}>
                      <div className="img-container">
                        <div
                          className="img"
                          style={{ content: `url(${item.image})` }}
                        ></div>
                      </div>

                      <div className="info">
                      <h5><FormattedMessage id="shopping-cart-product"/></h5>
                        <Link to={`/ProductPage/${item.product}`}>
                          <h5>{item.name}</h5>
                        </Link>
                      </div>

                      <div className="info">
                      <h5><FormattedMessage id="shopping-cart-quantity"/></h5>
                        <p>{item.qty}</p>
                      </div>

                      <div className="info">
                      <h5><FormattedMessage id="place-order-subtotal"/></h5>
                        <p>{item.qty * item.price} EUR</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>

            <div className="table-container">
              <div className="table">
                <div className="line">
                <h5><FormattedMessage id="shopping-cart-product"/></h5>
                  <p>{order.itemsPrice} EUR</p>
                </div>
                <div className="line">
                  <h5><FormattedMessage id="place-order-shipping"/></h5>
                  <p>0.00 EUR</p>
                </div>
                <div className="line">
                  <h5><FormattedMessage id="shopping-cart-total"/></h5>
                  <p>{order.totalPrice} EUR</p>
                </div>
              </div>
              {!order.isPaid && (
                <div className="payment-button">
                  {loadingPay && <Loading />}
                  {!sdkReady ? (
                    <Loading />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderContent;
