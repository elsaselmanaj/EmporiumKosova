import React from "react";
import "./styles/shoppingExperience.scss";
import { Data } from "./data";
import { FormattedMessage } from "react-intl";

const ShoppingExperience = () => {
  return (
    <div className="shopping-experience-container">
      <h2>
        <FormattedMessage
          id="shopping-experience-title"
          defaultMessage="Get The Shopping Experience You Deserve"
        />
      </h2>

      <div className="wrapper">
        {Data.map((props) => {
          return (
            <div
              className={`item ${props.item}`}
              style={{ background: `${props.bg}` }}
              data-aos={props.aos}
            >
              <h1>{props.title}</h1>
              <p>{props.text}</p>
            </div>
          );
        })}

        <div className="images" data-aos="flip-up">
          <div className="img img1"></div>
          <div className="img img2"></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingExperience;
