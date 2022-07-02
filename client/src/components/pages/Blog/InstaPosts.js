import React from "react";
import "./styles/instaPosts.scss";
import { FormattedMessage } from "react-intl";
import { Data3 } from "./data";
import {BsInstagram} from 'react-icons/bs'

const InstaPosts = () => {
  return (
    <div className="insta-posts-container">
      <h2>
        <FormattedMessage
          id="insta-posts-title"
          defaultMessage="Instagram Posts"
        />
      </h2>
      
      <div className="posts">
        {Data3.map((props) => {
            return (
                <div className="post">
                    <div className="img" style={{backgroundImage: `url(${props.image})`}}></div>
                    <div className="top-item">
                        <BsInstagram />
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default InstaPosts;
