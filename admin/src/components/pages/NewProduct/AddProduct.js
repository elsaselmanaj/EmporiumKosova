import React, { useState, useEffect } from "react";
import "./styles/addProduct.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../store/actions/productAction";
import { PRODUCT_CREATE_RESET } from "../../../store/constants/ProductConstants";
import {FormattedMessage} from 'react-intl'

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  useEffect(() => {
    if (product) {
      // toast.success("Product Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setName("");
      setDescription("");
      setCountInStock(0);
      setImage("");
      setPrice(0);
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct(name, price, description, image, countInStock));
  };

  return (
    <div className="new-product-container">
      <form onSubmit={submitHandler}>
        <h1><FormattedMessage id="new-product-title"/></h1>

        <div className="input-content">
        <h6><FormattedMessage id="product-name"/></h6>
          <div className="inner-input-content">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="input-content">
        <h6><FormattedMessage id="product-price"/></h6>
          <div className="inner-input-content">
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="input-content">
        <h6><FormattedMessage id="product-stock"/></h6>
          <div className="inner-input-content">
            <input
              type="number"
              name="stock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="input-content">
        <h6><FormattedMessage id="product-description"/></h6>
          <div className="inner-input-content">
            <textarea
              placeholder="Type here"
              name="description"
              rows="7"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="input-content">
        <h6><FormattedMessage id="product-image"/></h6>
          <div className="inner-input-content">
            <input
              type="text"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter Image URL"
            />
          </div>
        </div>

        <div className="links">
          <Link to="/Products" className="hover-button">
          <FormattedMessage id="go-to-products-link"/>
          </Link>
          <button type="submit" className="hover-button">
            <FormattedMessage id="create-product"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
