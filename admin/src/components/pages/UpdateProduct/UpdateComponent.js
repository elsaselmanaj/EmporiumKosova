import React, { useState, useEffect } from "react";
import "./styles/updateComponent.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "../../../store/actions/productAction";
import { PRODUCT_UPDATE_RESET } from "../../../store/constants/ProductConstants";
import {FormattedMessage} from 'react-intl'

const UpdateComponent = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      // toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.name || product._id !== id) {
        dispatch(editProduct(id));
      } else {
        setName(product.name);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setImage(product.image);
        setPrice(product.price);
      }
    }
  }, [product, dispatch, id, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: id,
        name,
        price,
        description,
        image,
        countInStock,
      })
    );
    alert("The product was successfully updated!")
  };

  return (
    <div className="update-product-container">
      <form onSubmit={submitHandler}>
        <h1><FormattedMessage id="update-product-title"/></h1>

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
            <FormattedMessage id="update-link"/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateComponent;
