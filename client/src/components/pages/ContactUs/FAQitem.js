import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./styles/questions.scss";

const FAQitem = (props) => {
  const [answer, setAnswer] = useState(false);
  const showAnswer = () => {
    setAnswer(!answer);
  };

  return (
    <div className="faq">
      <div className="faq1"></div>
      <div className="single">
        <div className="text" onClick={showAnswer}>
          <h4>{props.title}</h4>
          <button type="button" className="ob-btn">
            {answer ? (
              <AiOutlinePlusCircle className="up" />
            ) : (
              <AiOutlinePlusCircle />
            )}
          </button>
        </div>
      </div>

      <div className="ans">
        <div className="answer" style={{ display: answer ? "block" : "none" }}>
          <div className="faq-line"></div>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQitem;
