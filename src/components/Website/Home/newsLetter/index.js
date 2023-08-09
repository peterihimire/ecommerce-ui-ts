import React from "react";
import Input from "../../../ui/footerInput";

import "./styles.scss";

const NewsLetter = () => {
  return (
    <section className={`newsletter`}>
      <div className="wrapper">
        <div className={`newsletter-head`}>
          <h3>Subscribe To Our Newsletter </h3>
        </div>

        <div className={`newsletter-wrapper`}>
          <p>
            Provide your email address below and we will always send your
            exciting and innnovate messages that keep you ahead of others
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
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
