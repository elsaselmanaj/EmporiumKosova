import React from "react";
import "./styles/present.scss";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Present = () => {
  return (
    <div className="present-container">
      <div className="inner-row">
        <div className="img-container">
          <div className="inner-img">
            <div className="img"></div>
          </div>
        </div>

        <h1 data-aos="zoom-in-up">
          <FormattedMessage
            id="present-title"
            defaultMessage="Present your style in a new way!"
          />
        </h1>

        <Link to="/">
          <FormattedMessage id="present-link" defaultMessage="Get Started" />
        </Link>
      </div>

      <div className="bg"></div>
    </div>
  );
};

export default Present;
