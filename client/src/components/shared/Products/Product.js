import React from "react";
import { MdShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import Rating from "./Rating";
import "./product.scss";
import { FormattedMessage } from "react-intl";
import {Link} from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="img-container">
        <div className="img" style={{ content: `url(${product.image})` }}></div>
        <span>
          <FormattedMessage id="new-arrivals-span" defaultMessage="NEW" />
        </span>
        <div className="icons">
          <div className="icon">
            <MdShoppingCart />
          </div>
          <div className="icon">
            <Link to={`/ProductPage/${product._id}`}>
            <MdRemoveRedEye />
            </Link>
          </div>
          <div className="icon">
            <IoMdHeart />
          </div>
        </div>
      </div>

      <div className="content">
        <h5>{product.name}</h5>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <p>{product.price} EUR</p>
      </div>
    </div>
  );
};

export default Product;
