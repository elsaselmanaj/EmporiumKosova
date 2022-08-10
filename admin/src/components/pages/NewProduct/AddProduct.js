import React, { useState, useEffect } from "react";
import "./styles/addProduct.scss";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {createProduct} from '../../../store/actions/productAction'
import { PRODUCT_CREATE_RESET } from "../../../store/constants/ProductConstants";

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
        <div className="top">
          <Link to="/Products" className="hover-button">
            Go to Products
          </Link>
          <h1>ADD NEW PRODUCT</h1>
          <button type="submit" className="hover-button">Create</button>
        </div>

        <div className="wrapper">
          <div className="input-content">
          <h6>Product Name</h6>
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
          <h6>Price</h6>
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
          <h6>Stock</h6>
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
          <h6>Description</h6>
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
          <h6>Image</h6>
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
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
