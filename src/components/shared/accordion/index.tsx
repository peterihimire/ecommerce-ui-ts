import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { AccordionProps } from "../../../types/types";
import styles from "./styles.module.scss";

const Accordion: React.FC<AccordionProps> = ({ title, content, focus }) => {
  console.log(typeof focus);
  // const [clicked, setClicked] = useState({ focus });
  const [clicked, setClicked] = useState<{ focus: number | null }>({
    focus: focus,
  });
  console.log(clicked);

  const toggler = (num: number) => {
    if (clicked.focus === num) {
      console.log(clicked.focus === num);
      setClicked({ focus: null });
    } else {
      setClicked({ focus: num });
    }
  };

  return (
    <li className={`${styles.accordionList}`}>
      <button onClick={() => toggler(focus)}>
        <div className={`${styles.headInfo}`}>
          <h4>{title}</h4>
        </div>
        <div className={`${styles.rotate}`}>
          {clicked.focus === focus ? (
            <KeyboardArrowDown />
          ) : (
            <KeyboardArrowRight />
          )}
        </div>
      </button>

      <div
        className={`${styles.content} ${
          clicked.focus === focus && styles.show
        }`}
      >
        <div className={`${styles.subHead}`}>{content}</div>
      </div>
    </li>
  );
};

export default Accordion;
