import React from "react";
import "./styles/relatedProducts.scss";
import { FormattedMessage } from "react-intl";
import Carousel from "react-elastic-carousel";
import { AiFillStar } from "react-icons/ai";
import { Data } from "./data";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
];

const RelatedProducts = () => {
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
    <div className="related-products-container">
        
      <h2>
        <FormattedMessage id="related-products-title" />
      </h2>

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
              <div className="inner">
                <div className="img-container">
                  <div
                    className="img"
                    style={{ content: `url(${props.image})` }}
                  ></div>
                </div>

                <h5>{props.name}</h5>

                <div className="inline">
                  <div className="stars">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <p>5/5</p>
                </div>

                <p>{props.price}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
