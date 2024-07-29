import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDropbox } from "@fortawesome/free-brands-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faWpexplorer } from "@fortawesome/free-brands-svg-icons";
import { faKeybase } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

// import logo from "../../../assets/images/logo.svg";
// import { ReactComponent as Facebook } from "../../../assets/images/facebook.svg";
// import { ReactComponent as Instagram } from "../../../assets/images/instagram.svg";
// import { ReactComponent as Youtube } from "../../../assets/images/youtube.svg";
// import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";
// import Input from "../footerInput";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.intro} `}>
        <div className={`wrapper`}>
          <div className={`${styles.introGrid}`}>
            <div className={`${styles.feat}`}>
              <FontAwesomeIcon
                icon={faShopify}
                className={`${styles.customIcon}`}
              />
              <div className={`${styles.customText}`}>
                <h4>Free Shipping</h4>
                <p>Support worldwide shipping</p>
              </div>
            </div>
            <div className={`${styles.feat}`}>
              <FontAwesomeIcon
                icon={faDropbox}
                className={`${styles.customIcon}`}
              />
              <div className={`${styles.customText}`}>
                <h4>Free Shipping</h4>
                <p>30 days money back guarantee</p>
              </div>
            </div>
            <div className={`${styles.feat}`}>
              <FontAwesomeIcon
                icon={faWpexplorer}
                className={`${styles.customIcon}`}
              />
              <div className={`${styles.customText}`}>
                <h4>Free Shipping</h4>
                <p>On all orders above N500</p>
              </div>
            </div>
            <div className={`${styles.feat}`}>
              <FontAwesomeIcon
                icon={faKeybase}
                className={`${styles.customIcon}`}
              />
              <div className={`${styles.customText}`}>
                <h4>Free Shipping</h4>
                <p>100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.first}`}>
          <div className={`${styles.logo}`}>
            <Link to="/">
              BEN<span>KIH</span>
              {/* <img src={logo} alt='' /> */}
            </Link>
          </div>
          <div className={`${styles.companyInfo}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className={`${styles.socialList}`}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={`${styles.socialLink}`}
            >
              {/* <Facebook width="9px" /> */}
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={`${styles.socialLink}`}
            >
              {/* <Youtube width="17px" /> */}
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={`${styles.socialLink}`}
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
              {/* <Twitter width="17px" /> */}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={`${styles.socialLink}`}
            >
              {/* <Instagram width="17px" /> */}
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className={`${styles.second}`}>
          <div className={`${styles.quickLinksWrapper}`}>
            <h3>Company</h3>
            <ul className={`${styles.quickLinks}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/collections">Collections</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.locationWrapper}`}>
            <h3>Legal</h3>
            <ul className={`${styles.quickLinks}`}>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cook-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/products-services">Terms of Use</Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.locationWrapper}`}>
            <h3>Platform</h3>
            <ul className={`${styles.quickLinks}`}>
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
          <div className={`${styles.locationWrapper}`}>
            <h3>Platform</h3>
            <ul className={`${styles.quickLinks}`}>
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
        </div>
      </div>
      <div className={`${styles.outro} `}>
        <div className={` ${styles.wrapper}`}>
          <div className="copyright">
            <p>Copyright © 2023 — Benkih Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
