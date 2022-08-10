import React, { useEffect } from "react";
import "./styles/productsComponent.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, deleteProduct } from "../../../store/actions/productAction";
import Product from "./Product";

const ProductsComponent = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);


  return (
    <div className="products-component-container">
      <h1>PRODUCTS</h1>

      <div className="wrapper">
        <div className="table">
          <div className="table-header">
            <h5 className="title title1">ID</h5>
            <h5 className="title title2">Product</h5>
            <h5 className="title title3">Stock</h5>
            <h5 className="title title4">Price</h5>
            <h5 className="title title5">Action</h5>
          </div>
          <div className="table-body">
            {products.map((product) => (
              <Product  product={product} key={product._id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
