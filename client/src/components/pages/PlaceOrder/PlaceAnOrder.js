import React, { useEffect } from "react";
import "./styles/placeAnOrder.scss";
import { FaUserAlt, FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_CREATE_RESET } from "../../../store/constants/orderConstants";
import { createOrder } from "../../../store/actions/orderAction";

const PlaceAnOrder = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Calculate Price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );


  cart.totalPrice = (
    Number(cart.itemsPrice)).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate)
  const {order, success, error} = orderCreate

  useEffect(() => {
    if(success) {
      history(`/order/${order._id}`)
      dispatch({type: ORDER_CREATE_RESET})
    }
  }, [history, dispatch, success, order])


  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        totalPrice: cart.totalPrice,
      })
    )
  };


  return (
    <div className="place-an-order-container">
      <div className="top">
        <div className="row">
          <div className="circle">
            <FaUserAlt />
          </div>

          <div className="info">
            <h6>Customer</h6>
            <p>{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
        </div>

        <div className="row">
          <div className="circle">
            <FaTruck />
          </div>

          <div className="info">
            <h6>Order Info</h6>
            <p>Shipping: {cart.shippingAddress.country}</p>
            <p>Payment method: {cart.paymentMethod}</p>
          </div>
        </div>

        <div className="row">
          <div className="circle">
            <FaMapMarkerAlt />
          </div>

          <div className="info">
            <h6>Deliver to</h6>
            <p>
              Address: {cart.shippingAddress.city},{" "}
              {cart.shippingAddress.address}, {cart.shippingAddress.postalCode}
            </p>
          </div>
        </div>
      </div>

      <div className="center">
        {cart.cartItems.length === 0 ? (
          <div className="empty"><h5>Your cart is Empty</h5></div>
        ) : (
          <>
            {cart.cartItems.map((item, index) => (
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

        <div className="table-container">
          <div className="table">
            <div className="line">
              <h5>Product:</h5>
              <p>{cart.itemsPrice} EUR</p>
            </div>
            <div className="line">
              <h5>Estimated Shipping:</h5>
              <p>4.50 EUR</p>
            </div>
            <div className="line">
              <h5>Shipping Discount:</h5>
              <p>-4.50 EUR</p>
            </div>
            <div className="line">
              <h5>Total:</h5>
              <p>{cart.totalPrice} EUR</p>
            </div>
          </div>
          {cart.cartItems.length === 0 ? null : (
            <button
              type="submit"
              onClick={placeOrderHandler} 
              className="hover-button"
            >
              Place Order
            </button>
          )}{" "}
          
        </div>
      </div>
    </div>
  );
};

export default PlaceAnOrder;
