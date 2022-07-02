import React from "react";
import "./styles/banner.scss";
import styled from "styled-components";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Arrow = styled.div`
  width: max(40px, 2.5vw);
  height: max(40px, 2.5vw);
  font-size: max(18px, 1.55vw);
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Banner = () => {
  return (
    <div className="banner-container">
      <Arrow direction="left">
        <MdArrowLeft />
      </Arrow>

      <div className="wrapper">

      </div>

      <Arrow direction="right">
        <MdArrowRight />
      </Arrow>
    </div>
  );
};

export default Banner;
