import React from "react";
import "./styles/info.scss";
import { Data2 } from "./data";

const Info = () => {
  return (
    <div className="info-container">
      {Data2.map((props) => {
        return (
          <div className="item">
            <div
              className="icon"
              style={{ content: `url(${props.icon})` }}
            ></div>
            <div className="block">
              <h6>{props.title}</h6>
              <p>{props.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
