import React from "react";
import { MdShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import Rating from "./Rating";
import "./product.scss";
import { FormattedMessage } from "react-intl";

const Product = ({ item }) => {
  return (
    <div className="product-container">
      <div className="img-container">
        <div className="img" style={{ content: `url(${item.img})` }}></div>
        <span>
          <FormattedMessage id="new-arrivals-span" defaultMessage="NEW" />
        </span>
        <div className="icons">
          <div className="icon">
            <MdShoppingCart />
          </div>
          <div className="icon">
            <MdRemoveRedEye />
          </div>
          <div className="icon">
            <IoMdHeart />
          </div>
        </div>
      </div>

      <div className="content">
        <h5>{item.name}</h5>
        <Rating value={item.rating} text={`${item.numReviews} reviews`} />
        <p>{item.price} EUR</p>
      </div>
    </div>
  );
};

export default Product;
