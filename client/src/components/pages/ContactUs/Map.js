import React from "react";
import "./styles/map.scss";
import { FormattedMessage } from "react-intl";

const Map = () => {
  return (
    <div className="map-container">
      <h2>
        <FormattedMessage id="map-title" />
      </h2>

      <div className="google-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.341555909792!2d21.14974825174162!3d42.632918579067365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ffe637b0dd7%3A0x4594c50f0099efc5!2sAlbi%20Mall!5e0!3m2!1sen!2s!4v1656707164017!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
