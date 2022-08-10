import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import "./styles/paymentForm.scss";
import { FormattedMessage } from "react-intl";
import {savePaymentMethod} from '../../../store/actions/cartAction'

const PaymentForm = () => {
  const history = useNavigate()
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress) {
    history("/Shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history("/PlaceOrder")
  };
  
  return (
    <div className="payment-form-container">
      <form onSubmit={submitHandler}>
        <h5>
          <FormattedMessage
            id="payment-title"
            defaultMessage="Select Payment Method"
          />
        </h5>

        <div className="input-content">
          <div className="inner-input-content">
            <input
              type="radio"
              name="paymentmethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label"><FormattedMessage id="choose-payment"/></label>
          </div>
        </div>

        <button type="submit" className="hover-button">
          Continue
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
