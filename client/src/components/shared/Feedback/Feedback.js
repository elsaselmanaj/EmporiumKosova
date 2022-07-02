import React from "react";
import "./feedback.scss";
import { FaHeart } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import Carousel from "react-elastic-carousel";
import { RiDoubleQuotesL } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { Data } from "./data";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
];

const Feedback = () => {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo("single-slide".length);
    }
  };

  return (
    <div className="feedback-container">
      <div className="heart">
        <FaHeart />
      </div>

      <h2>
        <FormattedMessage
          id="feedback-title"
          defaultMessage="Loved By Every Client"
        />
      </h2>

      <div className="slider-container">
        <Carousel
          className="slider"
          breakPoints={breakPoints}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {Data.map((props) => {
            return (
              <div className="slider-item">
                <div className="shadow"></div>

                <div className="inner">
                  <div className="quotes">
                    <RiDoubleQuotesL />
                  </div>
                  <p className="comment">{props.comment}</p>

                  <div className="bottom">
                    <div className="inline">
                      <div
                        className="profile"
                        style={{ content: `url(${props.profile})` }}
                      ></div>
                      <h6>{props.name}</h6>
                    </div>

                    <div className="reviews">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <span>5/5</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
