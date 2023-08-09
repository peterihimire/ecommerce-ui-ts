import React from "react";
import { Check, CheckBox } from "@mui/icons-material";
import contactPix from "../../../../assets/images/contact-us.png";
import Form from "../contactForm/form";
import "./styles.scss";

const ContactUs = () => {
  return (
    <section className={`contactUs`}>
      <div className="wrapper">
        <div className={`title`}>
          <h2>Contact Us</h2>
        </div>
        <div className={`container`}>
          <div className={`left`}>
            <img src={contactPix} alt="" />
          </div>
          <div className={`right`}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
