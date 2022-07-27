import React, { useEffect, useState } from "react";
import "./styles/cart.scss";
import { Link, useParams, useLocation, useNavigate} from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart} from "../../../store/actions/cartAction";

const Cart = () => {
  let { id } = useParams();
  const history = useNavigate();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const checkOutHandler = () => {
    history("/Login?redirect=/Shipping");
  };

  const removeFromCartHandle = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="shopping-cart-container">
        {cartItems.length === 0 ? (
          <div className="top">
            <div className="empty">
              Your Cart is Empty
              <Link to="/ProductsCatalog" className="hover-button">
                Shop Now <MdOutlineKeyboardArrowRight />
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="top">
              <div className="cart-products-nr">
                Shopping Cart
                <Link to="/ShoppingCart">({cartItems.length})</Link>
              </div>
              <div className="wishlist">Wishlist (0)</div>
            </div>

            {cartItems.map((item) => (
              <div className="product-in-cart">
                <div className="img-container">
                  <div onClick={() => removeFromCartHandle(item.product)} className="delete">
                    <FaTimes />
                  </div>
                  <div
                    className="img"
                    style={{ content: `url(${item.image})` }}
                  ></div>
                </div>

                <div className="infos">
                  <div className="inline">
                    <h5>Product:</h5>
                    <Link to={`/ProductPage/${item.product}`}>
                      <p>{item.name}</p>
                    </Link>
                  </div>
                </div>

                <div className="size">
                  <div className="inline">
                    <h5>Size:</h5>
                  </div>
                </div>

                <div className="quantity">
                  <h5>Quantity:</h5>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="subtotal">
                  <h5>Price:</h5>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}

            <div className="total">
              <h5>Total:</h5>
              <h6>{total} EUR</h6>
            </div>

            <div className="line"></div>

            <div className="bottom">
              <Link to="/ProductsCatalog" className="hover-button">
                <FormattedMessage
                  id="continue-shopping"
                  defaultMessage="Continue Shopping"
                />
                <MdOutlineKeyboardArrowRight />
              </Link>

              {total > 0 && (
                <button onClick={checkOutHandler} className="hover-button">
                  <FormattedMessage
                    id="checkout-now"
                    defaultMessage="Checkout Now"
                  />
                  <MdOutlineKeyboardArrowRight />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
