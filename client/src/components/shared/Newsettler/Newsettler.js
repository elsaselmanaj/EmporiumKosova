import React, { useState } from "react";
import "./newsettler.scss";
import { FormattedMessage } from "react-intl";
import { BiEnvelope } from "react-icons/bi";

const Newsettler = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="newsettler-container">
      <div className="newsettler">
        <h1>
          <FormattedMessage
            id="newsettler-title"
            defaultMessage="Subscribe our Newsettler"
          />
        </h1>

        <p>
          <FormattedMessage
            id="newsettler-text"
            defaultMessage="Enter your email address to subscribe our notification of our new post & features by email."
          />
        </p>

        <div className="email-container">
          <span>
            <BiEnvelope />
          </span>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button type="submit" className="hvr-push">
            <FormattedMessage id="newsettler-btn" defaultMessage="Subscribe" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsettler;
