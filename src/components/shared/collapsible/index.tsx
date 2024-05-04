import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { CollapsibleProps } from "../../../types/types";
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
import { ReactComponent as Minus } from "../../../assets/images/minus.svg";
import styles from "./styles.module.scss";

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  content,
  id,
  index,
}) => {
  const [clicked, setClicked] = useState<number | null>(4);
  console.log("This is the initial state clicked...", clicked);

  const toggler = (index: number) => {
    console.log("This is clicked", clicked, typeof clicked);
    console.log("This is index", index, typeof index);
    if (clicked === index) {
      console.log("is clicked = index?", clicked === index);
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <li className={`${styles.collapse}`} key={index}>
      <button onClick={() => toggler(id)}>
        <div className={`${styles.headInfo}`}>
          <span>{title}</span>
        </div>
        <div className={`${styles.rotate}`}>
          {clicked === id ? <Minus /> : <Plus />}
        </div>
      </button>

      <div className={`${styles.content} ${clicked === id && styles.show}`}>
        <p className={`${styles.subHead}`}>{content}</p>
      </div>
    </li>
  );
};

export default Collapsible;
