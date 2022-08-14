import React from "react";
import "./styles/productsComponent.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../store/actions/productAction";
import {FormattedMessage} from 'react-intl'

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteProduct(id));
      alert("The product was successfully deleted!")
    }
  };

  return (
    <div className="product-container">
      <div className="data">
        <div className="id">{product._id}</div>

        <div className="product">{product.name}</div>

        <div className="stock">
          {" "}
          {product.countInStock > 0 ? (
            <p className="success"><FormattedMessage id="in-stock"/></p>
          ) : (
            <p className="danger"><FormattedMessage id="out-of-stock"/></p>
          )}
        </div>

        <div className="price">{product.price} EUR</div>

        <div className="action">
          <Link to={`/UpdateProduct/${product._id}/edit`}>EDIT</Link>

          <Link
            to="/Products"
            className="delete"
            onClick={() => deletehandler(product._id)}
          >
            <span className="badge">X</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
