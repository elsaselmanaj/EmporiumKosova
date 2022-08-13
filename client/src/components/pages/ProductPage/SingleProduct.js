import React, { useEffect, useState } from "react";
import "./styles/singleProduct.scss";
import Rating from "../../shared/Products/Rating";
import RelatedProducts from "./RelatedProducts";
import { FormattedMessage } from "react-intl";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../../../store/actions/productAction";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../store/constants/ProductConstants";
import Loading from "../../shared/Loading/Loading";
import moment from "moment";

const SingleProduct = () => {
  let { id } = useParams();
  let history = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
  }, [dispatch, id, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history(`/ShoppingCart/${id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(id, {
        rating,
        comment,
      })
    );
  };

  return (
    <div className="single-product-container">
      <div className="row">
        <div className="img-container">
          <div
            className="img"
            style={{ content: `url(${product.image})` }}
          ></div>
        </div>

        <div className="content">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h5>{product.price} EUR</h5>

          <div className="inline">
            <h6 className="reviews">
              <FormattedMessage id="reviews" defaultMessage="Reviews:" />
            </h6>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>

          <div className="inline">
            <h6 className="status">
              <FormattedMessage id="status" defaultMessage="Status:" />
            </h6>
            {product.countInStock > 0 ? <p>In Stock</p> : <p>Out of Stock</p>}
          </div>

          {product.countInStock > 0 ? (
            <>
              <div className="inline-bottom">
                <select
                  name="quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>

                <button onClick={AddToCartHandle} className="hover-button">
                  Add to Cart
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="reviews-container">
        <div className="left">
          <h6>
            <FormattedMessage
              id="single-product-reviews"
              defaultMessage="Reviews"
            />
          </h6>
          {product.reviews.length === 0 && <div className="no-rw"><FormattedMessage id="no-rw"/></div>}
          {product.reviews.map((review) => (
            <div className="review-wrapper" key={review._id}>
              <h5>{review.name}</h5>
              <Rating value={review.rating} />
              <p>{moment(review.createdAt).calendar()}</p>
              <div className="comment">{review.comment}</div>
            </div>
          ))}
        </div>

        <div className="right">
          <h6><FormattedMessage id="customer-rw"/></h6>
          <div className="row1">
            {loadingCreateReview && <Loading />}
            {errorCreateReview && <div>{errorCreateReview}</div>}
          </div>

          {userInfo ? (
             <form onSubmit={submitHandler}>
             <div className="row1">
               <h5>Rating</h5>
               <select value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                 <option value="">Select...</option>
                 <option value="1">1 - Poor</option>
                 <option value="2">2 - Fair</option>
                 <option value="3">3 - Good</option>
                 <option value="4">4 - Very Good</option>
                 <option value="5">5 - Excellent</option>
               </select>
             </div>
             <div className="row1">
               <h5>Comment</h5>
               <textarea row="3" value={comment}
                        onChange={(e) => setComment(e.target.value)}></textarea>
             </div>
             <div className="row2">
               <button className="hover-button" disabled={loadingCreateReview}>Submit</button>
             </div>
           </form>
          ) : (
            <div className="row2">
              <div className="login-first">
                <FormattedMessage id="please"/> <Link to='/Login'> " <strong><FormattedMessage id="log-in"/></strong>" </Link> <FormattedMessage id="write-rw"/>
              </div>
            </div>
          )}
        </div>
      </div>

      <RelatedProducts />
    </div>
  );
};

export default SingleProduct;
