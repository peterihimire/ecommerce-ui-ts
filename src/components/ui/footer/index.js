import React from "react";
// import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/images/instagram.svg";
import { ReactComponent as Youtube } from "../../../assets/images/youtube.svg";
import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";
import Input from "../footerInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className="wrapper">
        <div className={`first`}>
          <div className={`logo`}>
            <Link to="/">
              BRID<span>GET</span>
              {/* <img src={logo} alt='' /> */}
            </Link>
          </div>

          <div className={`social-list`}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {/* <Facebook width="9px" /> */}
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {/* <Youtube width="17px" /> */}
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
              {/* <Twitter width="17px" /> */}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {/* <Instagram width="17px" /> */}
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          {/* <div className={`newsletter`}>
            <p>
              Subscribe to our weekly newsletter, by entering your email below.
            </p>
            <form className={`form`}>
              <div className={`formGroup`}>
                <Input
                  type="email"
                  id="email"
                  // required
                  name="email"
                  placeholder="Enter your email..."
                  src="/images/send-icon.svg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </form>
          </div> */}
        </div>
        <div className={`second`}>
          <div className={`quick-links-wrapper`}>
            <h3>Company</h3>
            <ul className={`quick-links`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products-services">About Us</Link>
              </li>
              <li>
                <Link to="/our-process">Our Process</Link>
              </li>
            </ul>
          </div>

          <div className={`location-wrapper`}>
            <h3>Legal</h3>
            <ul className={`quick-links`}>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/products-services">Terms of Use</Link>
              </li>
            </ul>
          </div>

          <div className={`location-wrapper`}>
            <h3>Platform</h3>
            <ul className={`quick-links`}>
              <li>
                <Link to="/products-services">Help Center</Link>
              </li>
              <li>
                <Link to="/our-process">Site Map</Link>
              </li>
              <li>
                <Link to="/contact-us">IP Whitelist</Link>
              </li>
            </ul>
          </div>

          <div className={`social-wrapper`}>
            <h3>Support</h3>

            <ul className={`quick-links`}>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/products-services">Help Center</Link>
              </li>
              <li>
                <Link to="/our-process">Site Map</Link>
              </li>
            </ul>
            {/* <p>we are welcoming some new faces at Benkih to give you</p> */}
            {/* <div className={`social-list`}>
              <a
                href="https://www.facebook.com/omniswift"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/company/omniswift/?originalSubdomain=ng"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Youtube />
              </a>
              <a
                href="https://twitter.com/omniswift"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/omniswiftltd/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Instagram />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className={`outro wrapper`}>
        <div className="copyright">
          <p>Copyright © 2023 — Benkih Limited. All Rights Reserved.</p>
        </div>
        <div className={`policy-terms`}>
          <div className="policy">
            <Link to="/privacy-policy">— Privacy Policy</Link>
          </div>
          <div className="terms">
            <Link to="/terms-and-conditions">— Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
