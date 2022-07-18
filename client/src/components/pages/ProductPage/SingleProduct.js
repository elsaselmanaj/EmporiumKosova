import React from "react";
import "./styles/singleProduct.scss";
import Rating from "../../shared/Products/Rating";
import { FormattedMessage } from "react-intl";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleProduct = ({ match }) => {
  return (
    <div className="single-product-container">
      <div className="row">
        <div className="img-container">
          <div className="img"></div>
        </div>

        <div className="content">
          <h1>Satin Corsetry-Inspired Top</h1>
          <p>
            Top featuring a sweetheart neckline and exposed shoulders.Fastens at
            the front with metal hooks.
          </p>
          <h5>22.95 EUR</h5>

          <div className="inline">
            <h6>
              <FormattedMessage id="reviews" defaultMessage="Reviews:" />
            </h6>
            <div className="reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>
                {" "}
                5{" "}
                <FormattedMessage
                  id="new-arrivals-reviews"
                  defaultMessage="reviews"
                />
              </span>
            </div>
          </div>

          <div className="inline">
            <h6>
              <FormattedMessage id="status" defaultMessage="Status:" />
            </h6>
            <p>In Stock</p>
          </div>

          <div className="inline">
            <h6>
              <FormattedMessage id="size" defaultMessage="Size:" />
            </h6>
            <select name="size">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>

          <div className="inline">
          <select name="quantity">
              <option disabled selected>
                1
              </option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>

            <Link to='/'className="hover-button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
