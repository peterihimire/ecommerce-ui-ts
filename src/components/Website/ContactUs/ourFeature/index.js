import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const OurContact = () => {
  return (
    <section className={`feature-our`}>
      <div className="wrapper">
        <div className={`choose-head`}>
          <div>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className={`contact-icon`}
            />
            <h5>Location</h5>
            <p>22 Baker Street,London, United Kingdom, W1U 3BW</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className={`contact-icon`} />
            <h5>Phone</h5>
            <p>08060958134</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className={`contact-icon`}
            />
            <h5>Email</h5>
            <p>support@benkih.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContact;
