import React from "react";
import "./styles/trendingProducts.scss";
import { FormattedMessage } from "react-intl";
import { Data1 } from "./data";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
];

const TrendingProducts = () => {
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
    <div className="trending-products-container">
      <h2>
        <FormattedMessage
          id="trending-products-title"
          defaultMessage="Trending Products"
        />
      </h2>

      <Carousel
        className="slider"
        breakPoints={breakPoints}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {Data1.map((props) => {
          return (
            <div className="slider-item">
              <div className="inner">
                <div className="img-container">
                  <div
                    className="img"
                    style={{ content: `url(${props.image})` }}
                  ></div>
                </div>

                <p>{props.text}</p>

                <Link to="/">
                  <FormattedMessage
                    id="trending-products-link"
                    defaultMessage="Discover Now"
                  />{" "}
                  <MdOutlineKeyboardArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TrendingProducts;
