import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../../../shared/productcard";
import Checkbox from "../../../shared/customCheckbox";
import Accordion from "../../../shared/accordion";
import { products } from "../../../../data-list";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ArrowDownward, PersonOutline } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { RootState } from "../../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";

// import { Slider } from "@material-ui/core";

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

// Money Formatter

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

// Week Formatter

const scale2 = (value: number) => {
  const previousMarkIndex = Math.floor(value / 30);
  const previousMark = timeline[previousMarkIndex];
  const remainder = value % 30;

  if (remainder === 0) {
    return previousMark.scaledValue;
  }

  const nextMark = timeline[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 30;
  return remainder * increment + previousMark.scaledValue;
};

function numFormatter2(num: number) {
  if (num > 0 && num <= 12) {
    return (num / 1).toFixed(0) + "m+";
  } else if (num < 1) {
    return (num / 1 + 1).toFixed(0) + "wk+";
  }
}

const Latest: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const [budgetValue, setBudgetValue] = React.useState(0);
  const [budgetForm, setBudgetForm] = React.useState("");
  const [timelineValue, setTimelineValue] = React.useState(0);
  const [timelineForm, setTimelineForm] = React.useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [doc, setDoc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [checks, setChecks] = useState({
    frontend: false,
    backend: false,
    uiux: false,
  });
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const profileRef = useRef<HTMLDivElement>(null); // Proper initialization
  const menuRef = useRef<HTMLDivElement>(null); // Proper initialization

  const addProductHandler = () => {
    console.log("Add handler...");
    setOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const openModalHandler = () => {
    console.log("Modal opened...");
    setShowModal(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const closeModalHandler = () => {
    console.log("Modal closed...");
    setShowModal(false);
    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  };

  const handleBudgetChange = (event: any, newValue: number) => {
    setBudgetValue(newValue);
  };

  const handleTimelineChange = (event: any, newValue: number) => {
    setTimelineValue(newValue);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  // const handleCheckChange = (e) => {
  //   const { name, checked } = e.target;

  //   setChecks({
  //     ...checks,
  //     [name]: checked,
  //   });
  // };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );
  console.log("This is current product listings ...", productsList);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.latestTitle}`}>
          <h3>Latest product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div> */}

        {/* <Accordion title={"My title"} content={"Hello mr"} focus={1} />
        <Accordion
          title={"My title"}
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
        /> */}

        <div className={`${styles.collectionDiv}`}>
          <div className={`${styles.filterDiv}`}>
            <div className={`${styles.filterContainer}`}>
              {/* <div className={`${styles.filterHeading}`}>
                <h4>Filter Products</h4>
              </div> */}

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
              {/* <h5>Price</h5>
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
              <h6>Brand</h6>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"Samsung"}
                  htmlFor="brand"
                  name="samsung"
                  checked={true}
                  // onChange={handleCheckChange}
                />
              </div>
              <div className={`${styles.checkboxGroup}`}>
                <Checkbox
                  checkText={"LG"}
                  htmlFor="brand"
                  name="lg"
                  // onChange={handleCheckChange}
                />
              </div>
              <h6>Size</h6>
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
              <h6>Category</h6>
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
              <h6>Color</h6>
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
              </div> */}

              {/* <div className={`${styles.filterBtnGroup}`}>
                <button className="btn-block btn-small">Apply Filter</button>
                <button className="btn-block btn-small-sec ">
                  Reset Filter
                </button>
              </div> */}
            </div>
          </div>
          <div className={`${styles.productDiv}`}>
            <div className={`${styles.sortBar}`}>
              <div
                className={`${styles.dropdown}`}
                onClick={() => setOpen(!open)}
                ref={profileRef}
              >
                <p>default sorting</p>
                {open ? (
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={`${styles.chevdown}`}
                    />
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.chevdown}`}
                    />
                  </span>
                )}
              </div>
              {open && (
                <div ref={menuRef} className={`${styles.profileContainer}`}>
                  <ul className={`${styles.profileDropdown}`}>
                    <li onClick={() => setOpen(false)}>
                      <div className={`${styles.forDrop}`}>
                        sort by popularity
                      </div>
                    </li>
                    <li onClick={() => setOpen(false)}>
                      <div className={`${styles.forDrop}`}>
                        sort by average rating
                      </div>
                    </li>
                    <li onClick={() => setOpen(false)}>
                      <div className={`${styles.forDrop}`}>sort by latest</div>
                    </li>
                    <li onClick={() => setOpen(false)}>
                      <div className={`${styles.forDrop}`}>
                        sort by price: low to high
                      </div>
                    </li>
                    <li>
                      <div className={`${styles.forDrop}`}>
                        sort by price: high to low
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={`${styles.productList}`}>
              {productsList.slice(0, 11).map((product) => {
                return (
                  <ProductCard
                    key={product.uuid}
                    id={product.uuid}
                    title={product.title}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    image={`http://localhost:4040/${product.images[0]}`}
                    infoProd={product.uuid}
                    addProd={addProductHandler}
                    // likeProd={likeProductHandler}
                    // infoProd={openModalHandler}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
