import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.scss";

const ProcessCard = ({ id, image, title, content, icon }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div
      // data-aos="zoom-in"
      className={`process-card`}
      key={id}
    >
      <div className={`process-icon`}>{icon}</div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default ProcessCard;
