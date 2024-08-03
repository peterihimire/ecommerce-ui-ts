import React, { useState } from "react";
import Modal from "react-modal";
import { LightboxProps } from "../../../types/types";
import Checkbox from "../../shared/customCheckbox";
import Accordion from "../../shared/accordion";
import Pagination from "../../shared/pagination";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

const timeline = [
  {
    value: 0,
    scaledValue: 0,
    label: "0",
  },

  {
    value: 30,
    scaledValue: 3,
    label: "3+ M",
  },

  {
    value: 60,
    scaledValue: 6,
    label: "6+ M",
  },

  {
    value: 90,
    scaledValue: 9,
    label: "9+ M",
  },
  {
    value: 120,
    scaledValue: 12,
    label: "12+ M",
  },
];

const budget = [
  {
    value: 0,
    scaledValue: 0,
    label: "₦0",
  },
  {
    value: 25,
    scaledValue: 1000,
    label: "₦1k",
  },
  {
    value: 50,
    scaledValue: 10000,
    label: "₦10k",
  },
  {
    value: 75,
    scaledValue: 100000,
    label: "₦100k",
  },
  {
    value: 100,
    scaledValue: 1000000,
    label: "₦100k+",
  },
];

// const ProductLightbox = ({ images }) => {
const FilterSlider: React.FC = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const scale = (value: number) => {
    const previousMarkIndex = Math.floor(value / 25);
    const previousMark = budget[previousMarkIndex];
    const remainder = value % 25;
    if (remainder === 0) {
      return previousMark.scaledValue;
    }

    const nextMark = budget[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
    return remainder * increment + previousMark.scaledValue;
  };

  function numFormatter(num: number) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
    } else if (num < 1000) {
      return "₦" + ((num / 100) * 100).toFixed(0); //  convert to H for number if value < 1000,
    }
  }
  return (
    <div className={`${styles.filterDiv}`}>
      <div className={`${styles.filterContainer}`}>
        <Accordion
          title={"Category"}
          content={
            <div className={`${styles.filterCategory}`}>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"Non Smart tv"}
                  htmlFor="tv"
                  name="non-smart"
                  // onChange={handleCheckChange}
                />
              </div>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"Smart tv"}
                  htmlFor="tv"
                  name="smart tv"
                  // onChange={handleCheckChange}
                />
              </div>
            </div>
          }
          focus={1}
        />
        <Accordion
          title={"Price"}
          content={
            <Slider
              aria-label="Temperature"
              // defaultValue will not work because, this is a controlled component in the sense that it is controlled by react . it's value is stored in a [state]
              defaultValue={100}
              step={1}
              // marks={budget}
              valueLabelDisplay="on"
              // valueLabelDisplay="auto"
              // Added this with the new scaling
              // value={budgetValue}
              value={value}
              min={0}
              max={100}
              valueLabelFormat={numFormatter}
              scale={scale}
              // onChange={handleBudgetChange}
            />
          }
          focus={1}
        />

        <Accordion
          title={"Color"}
          content={
            <div>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"Black"}
                  htmlFor="color"
                  name="black"
                  // onChange={handleCheckChange}
                />
              </div>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"Silver"}
                  htmlFor="color"
                  name="silver"
                  // onChange={handleCheckChange}
                />
              </div>
            </div>
          }
          focus={1}
        />

        <Accordion
          title={"Size"}
          content={
            <div>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"32 inches"}
                  htmlFor="size"
                  name="32"
                  // onChange={handleCheckChange}
                />
              </div>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"43 inches"}
                  htmlFor="size"
                  name="43"
                  // onChange={handleCheckChange}
                />
              </div>
            </div>
          }
          focus={1}
        />

        <div className={`${styles.filterBtnGroup}`}>
          <button className="btn-block btn-small">Apply Filter</button>
          <button className="btn-block btn-small-sec ">Reset Filter</button>
        </div>
      </div>
    </div>
  );
};
export default FilterSlider;
