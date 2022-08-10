import React from "react";
import "./styles/banner.scss";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="text">
        <h5>
          <FormattedMessage id="home-banner-small" defaultMessage="NEW TREND" />
        </h5>
        <h1>
          <FormattedMessage
            id="home-banner-title"
            defaultMessage="BOOST YOUR STYLE SENSE"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="Experiment,mix and showcase colors,textures and styles!
Be yourself and impress others!"
          />
        </p>

        <Link to="/ProductsCatalog" className="hover-button">
          <FormattedMessage id="home-banner-link" defaultMessage="Discover" />{" "}
          <MdOutlineKeyboardArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
