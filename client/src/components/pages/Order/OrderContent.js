import React, { useEffect, useState } from "react";
import "./styles/orderContent.scss";
import { FaUserAlt, FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../../../store/actions/orderAction";
import  moment  from "moment";
import { ORDER_PAY_RESET } from "../../../store/constants/orderConstants";
import axios from "axios";
import Loading from "../../shared/Loading/Loading";

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
      const { data: clientId } = await axios.get("/api/config/paypal");
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
                <p>Shipping: {order.shippingAddress.country} </p>
                <p>Payment method: {order.paymentMethod}</p>
                {order.isPaid ? (
                  <div className="blue-box">
                    <p>Paid on {moment(order.paidAt).calendar()}</p>
                  </div>
                ) : (
                  <div className="red-box">
                    <p>Not Paid</p>
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="circle">
                <FaMapMarkerAlt />
              </div>

              <div className="info">
                <h6>Deliver to</h6>
                <p>
                  Address: {order.shippingAddress.city},{" "}
                  {order.shippingAddress.address},{" "}
                  {order.shippingAddress.postalCode}
                </p>
                {order.isDelivered ? (
                  <div className="blue-box">
                    <p>Delivered on {moment(order.deliveredAt).calendar()}</p>
                  </div>
                ) : (
                  <div className="red-box">
                    <p>Not Delivered</p>
                  </div>
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
                        <Link to={`/ProductPage/${item.product}`}>
                          <h5>{item.name}</h5>
                        </Link>
                      </div>

                      <div className="info">
                        <h5>Quantity</h5>
                        <p>{item.qty}</p>
                      </div>

                      <div className="info">
                        <h5>Subtotal</h5>
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
                  <h5>Product:</h5>
                  <p>{order.itemsPrice} EUR</p>
                </div>
                <div className="line">
                  <h5>Shipping:</h5>
                  <p>0.00 EUR</p>
                </div>
                <div className="line">
                  <h5>Total:</h5>
                  <p>{order.totalPrice} EUR</p>
                </div>
              </div>
              {!order.isPaid && (
                <div className="">
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
