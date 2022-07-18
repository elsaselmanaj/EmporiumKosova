import React from "react";
import "./styles/newArrivals.scss";
import { FormattedMessage } from "react-intl";
import { Data3 } from "./data";
import { AiFillStar } from "react-icons/ai";
import {MdShoppingCart, MdRemoveRedEye} from 'react-icons/md'
import {IoMdHeart} from 'react-icons/io'
import Products from '../../shared/Products/Products'

const NewArrivals = () => {
  return (
    <div className="new-arrivals-container">
      <h2>
        <FormattedMessage
          id="new-arrivals-title"
          defaultMessage="New Arrivals"
        />
      </h2>

      <Products />

      {/*<div className="items">
        {Data3.map((props) => {
          return (
            <div className="item">
              <div className="img-container">
                <div
                  className="img"
                  style={{ content: `url(${props.image})` }}
                ></div>
                <span>
                  <FormattedMessage
                    id="new-arrivals-span"
                    defaultMessage="NEW"
                  />
                </span>

                <div className="icons">
                    <div className="icon"><MdShoppingCart /></div>
                    <div className="icon"><MdRemoveRedEye /></div>
                    <div className="icon"><IoMdHeart /></div>
                </div>
          

              </div>
              <div className="content">
                <h5>{props.name}</h5>
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
                <p>{props.price}</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default NewArrivals;
