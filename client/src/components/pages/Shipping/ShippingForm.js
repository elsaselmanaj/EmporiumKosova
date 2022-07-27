import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/shippingForm.scss";
import { FormattedMessage } from "react-intl";
import { saveShippingAddress } from "../../../store/actions/cartAction";

const ShippingForm = () => {
  const history = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history("/Payment");
  };

  return (
    <div className="shipping-form-container">
      <form onSubmit={submitHandler}>
        <h5>
          <FormattedMessage
            id="shipping-title"
            defaultMessage="Delivery Address"
          />
        </h5>

        <div className="input-content">
          <div className="inner-input-content">
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
            />
          </div>
        </div>

        <div className="input-content">
          <div className="inner-input-content">
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
            />
          </div>
        </div>

        <div className="input-content">
          <div className="inner-input-content">
            <input
              type="text"
              name="postalcode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Enter Postal Code"
            />
          </div>
        </div>

        <div className="input-content">
          <div className="inner-input-content">
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter Country"
            />
          </div>
        </div>

        <button type="submit" className="hover-button">
          <FormattedMessage id="continue" defaultMessage="Continue" />
        </button>
      </form>
    </div>
  );
};

export default ShippingForm;
