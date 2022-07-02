import React, { useState } from "react";
import FAQitem from "./FAQitem";
import { FAQdata } from "./data";
import { FormattedMessage } from "react-intl";

const Questions = () => {
  const [faqs, setFaqs] = useState(false);
  const showFaqs = () => {
    setFaqs(!faqs);
  };

  return (
    <div className="questions-container">
      <h2>
        <FormattedMessage id="questions-title" defaultMessage="FAQ" />
      </h2>
      <p>
        <FormattedMessage
          id="questions-text"
          defaultMessage="Have a question? We are here for you."
        />
      </p>

      <div className="wrapper">
        <div className="all-faqs">
          <div className="other-faqs" data-aos="zoom-in">
            {FAQdata.map((props) => {
              return <FAQitem title={props.title} answer={props.answer} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
