import React from "react";
import "./styles/articles.scss";
import { Data2 } from "./data";
import { AiOutlineMinus, AiOutlineCalendar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { FormattedMessage } from "react-intl";

const PopularArticles = () => {
  return (
    <div className="popular-articles-container">
      <h2>
        <FormattedMessage
          id="popular-articles-title"
          defaultMessage="Popular Articles"
        />
      </h2>
      <div className="items">
        {Data2.map((props) => {
          return (
            <div className="item">
              <div className="img-container">
                <div
                  className="img"
                  style={{ content: `url(${props.image})` }}
                ></div>
              </div>
              <div className="content">
                <h5>
                  <AiOutlineMinus /> {props.title}
                </h5>

                <div className="bottom">
                  <div className="inline">
                    <div
                      className="profile"
                      style={{ content: `url(${props.profile})` }}
                    ></div>
                    <h6>{props.user}</h6>
                  </div>
                  <small className="date-time">
                    <div className="small1">
                      <AiOutlineCalendar /> {props.date}{" "}
                      <BsDot className="dot" />
                    </div>
                    <div className="small2">
                      <BiTimeFive /> {props.time}
                    </div>
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularArticles;
