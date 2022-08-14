import React, { useState } from "react";
import Products from "../../shared/Products/Products";
import "./styles/productList.scss";
import { FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";

const ProductsList = () => {
  const [keyword, setKeyword] = useState();

  let history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history(`/Search/${keyword}`);
    } else {
      history("/");
    }
  };
  return (
    <div className="products-list-container">
      <div className="top">
        <div className="search-container">
          <form onSubmit={submitHandler}>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" className="hvr-push">
              <FormattedMessage id="search-btn" defaultMessage="Search" />
            </button>
          </form>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductsList;
