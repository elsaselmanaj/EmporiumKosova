import React, { useState } from "react";
import Products from "../../shared/Products/Products";
import "./styles/productList.scss";
import { FormattedMessage } from "react-intl";

const ProductsList = () => {
 

  return (
    <div className="products-list-container">
      <div className="top">
        <div className="row1">
          <span>
            <FormattedMessage
              id="filter-products"
              defaultMessage="Filter Products:"
            />
          </span>
          <select name="color">
            <option disabled selected>
              Color
            </option>
            <option>white</option>
            <option>black</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>

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

        <div className="search-container">
          <input type="search" id="search" name="search" placeholder="Search" />
          <button type="search" className="hvr-push">
            <FormattedMessage id="search-btn" defaultMessage="Search" />
          </button>
        </div>

        <div className="row2">
          <span>
            <FormattedMessage
              id="sort-products"
              defaultMessage="Sort Products:"
            />
          </span>
          <select>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductsList;
