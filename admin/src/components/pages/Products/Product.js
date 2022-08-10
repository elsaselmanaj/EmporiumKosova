import React from "react";
import "./styles/productsComponent.scss";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { deleteProduct } from "../../../store/actions/productAction";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="product-container">
      <div className="data">
        <div className="id">{product._id}</div>

        <div className="product">
          {/* <div className="img" style={{ content: `url(${product.image})` }}></div> */}
          <p className="name">{product.name}</p>
        </div>

        <div className="stock">
          {" "}
          {product.countInStock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
        </div>

        <div className="price">{product.price} EUR</div>

        <div className="action">
          <Link to={`/UpdateProduct/${product._id}/edit`}>Edit</Link>

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
