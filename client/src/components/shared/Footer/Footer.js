import React from "react";
import { FormattedMessage } from "react-intl";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import ThemeSwitcher from "./ThemeSwitcher";
import "./footer.scss";
import { Link } from "react-router-dom";
import { FooterData, Info, SocialMedias, Cards } from "./data";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="top">
        <Link to="/" className="footer-logo">
          <div className="logo-container"></div>
        </Link>

        <div className="top-right">
          <p>
            <FormattedMessage id="get-our-app" defaultMessage="Get our app:" />
          </p>

          <div className="buttons">
            <button className="button">
              <div className="icon icon1"></div>

              <div className="block">
                <small>GET IT ON</small>
                <span>Google Play</span>
              </div>
            </button>

            <button type="button">
              <div className="icon icon2"></div>
              <div className="block">
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="first-row">
        <div className="left">
          {FooterData.map((props) => {
            return (
              <div className="footer-list">
                <h6>{props.category}</h6>
                <div className="links">
                  {props.links.map((l) => {
                    return (
                      <Link key={l.to} to={l.to} className="footer-item">
                        {l.link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="right">
          {Info.map((props) => {
            return (
              <div className="info-list">
                <h6>{props.category}</h6>
                <div className="infos">
                  {props.infos.map((l) => {
                    return (
                      <div className="inline">
                        <div className="icon">{l.icon}</div>
                        <div className="info">{l.info}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="second-row">
        <div className="social-medias">
          {SocialMedias.map((props) => {
            return (
              <div>
                <Link to={props.to} className={props.cls}>
                  {props.icon}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="cards">
          {Cards.map((props) => {
            return (
              <div
                className="logo"
                style={{ content: `url(${props.logo})` }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="horizontal-line"></div>

      <div className="bottom">
        <div className="left">
          <p>&#9400; <FormattedMessage id="copyright" defaultMessage="Copyright all rights reserved by EmporiumKosova"/> </p>
          <div className="row">
            <span>|</span>
            <Link to="/"><FormattedMessage id="footer-bottom-1" defaultMessage="Privacy"/></Link>
            <span>|</span>
            <Link to="/"><FormattedMessage id="footer-bottom-2" defaultMessage="Terms of Use"/></Link>
            <span>|</span>
            <Link to="/"><FormattedMessage id="footer-bottom-3" defaultMessage="Cookie Preferences"/></Link>
            <span>|</span>
            <Link to="/"><FormattedMessage id="footer-bottom-4" defaultMessage="Ads Preferences"/></Link>
          </div>
        </div>

        <div className="right">
          <ThemeSwitcher />

          <SelectLanguage
            setLanguage={props.setLanguage}
            language={props.language}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
