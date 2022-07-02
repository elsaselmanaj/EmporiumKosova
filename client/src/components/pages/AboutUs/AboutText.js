import React from "react";
import "./styles/aboutText.scss";
import { FormattedMessage } from "react-intl";

const AboutText = () => {
  return (
    <div className="about-text-container">
      <div className="left">
        <div className="img"></div>
      </div>

      <div className="right">
        <div className="text">
          <span>EmporiumKosova App</span>
          <h1>
            <FormattedMessage
              id="about-text-title"
              defaultMessage="About EmporiumKosova"
            />
          </h1>
          <p>
            <FormattedMessage
              id="about-text-p"
              defaultMessage="At EmporiumKosova we're dedicated to giving you the very best of clothes,with a focus on dependability, customer service and uniqueness.
We believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you."
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
