import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductCard from "../../../shared/productcard";
import Checkbox from "../../../shared/customCheckbox";
import Accordion from "../../../shared/accordion";
import Pagination from "../../../shared/pagination";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowDownward, PersonOutline } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { RootState } from "../../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import { getProductsFilter } from "../../../../redux/features/products/productSlice";
import FilterNav from "../../../shared/filterNav";
import FilterSlider from "../../../shared/filterSlider";
import BackdropCart from "../../../shared/backdropcart";
import styles from "./styles.module.scss";

interface GetProductsFilterArg {
  page?: number;
  limit?: number;
  filter?: {
    brand?: string;
    size?: string;
    price?: string;
    categories?: string[];
    color?: string;
    minPrice?: number;
    maxPrice?: number;
  };
}

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
  const [openFilter, setOpenFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [prodList, setProdList] = useState<any[]>([]); // Initialize as an empty array
  const [budgetValue, setBudgetValue] = React.useState(0);
  const [budgetForm, setBudgetForm] = React.useState("");
  const [timelineValue, setTimelineValue] = React.useState(0);
  const [timelineForm, setTimelineForm] = React.useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [doc, setDoc] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [checks, setChecks] = useState({
    frontend: false,
    backend: false,
    uiux: false,
  });
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  console.log("Hello this sis current page: ", currentPage);

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

  const searchedProds = useAppSelector(
    (state: RootState) => state.product.searchedItems
  );
  console.log(" searched ...", searchedProds);
  // const prodList = searchedProds?.productRecords;
  const totalItemsCount = searchedProds?.totalItems;
  console.log("Product list ...", prodList);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchProducts = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        const params: GetProductsFilterArg = { page };
        const response = await dispatch(getProductsFilter(params)).unwrap();
        setCurrentPage(response.currentPage);
        setTotalPages(response.totalPages);
        setTotalItems(response.totalItems);
        setProdList(response.productRecords);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  // const fetchProducts = async (page: number) => {
  //   setLoading(true);
  //   try {
  //     const params: GetProductsFilterArg = { page };
  //     const response = await dispatch(getProductsFilter(params)).unwrap();
  //     setCurrentPage(response.currentPage);
  //     setTotalPages(response.totalPages);
  //     setTotalItems(response.totalItems);
  //     setProdList(response.productRecords);
  //   } catch (error: any) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // FOR THE SCROLL TO TOP BUTTON
  // useEffect(() => {
  //   const changeVisibility = () => {
  //     if (window.scrollY >= 540) {
  //       setVisibility(true);
  //     } else {
  //       setVisibility(false);
  //     }
  //   };

  //   window.addEventListener("scroll", changeVisibility);

  //   return () => {
  //     window.removeEventListener("scroll", changeVisibility);
  //   };
  // }, []);
  // console.log(visibility);

  const openFilterHandler = () => {
    console.log("Add handler...");
    setOpenFilter(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [fetchProducts, currentPage]);

  // Calculate start and end indices for the displayed products
  const startIdx = (currentPage - 1) * (prodList?.length ?? 0) + 1;
  const endIdx = Math.min(
    currentPage * (prodList?.length ?? 0),
    totalItems ?? 0
  );

  // const filterSlider = (
  //   <div className={`${styles.filterDiv}`}>
  //     <div className={`${styles.filterContainer}`}>
  //       <Accordion
  //         title={"Category"}
  //         content={
  //           <div className={`${styles.filterCategory}`}>
  //             <div className={`${styles.checkboxGroup}`}>
  //               <Checkbox
  //                 checkText={"Non Smart tv"}
  //                 htmlFor="tv"
  //                 name="non-smart"
  //                 // onChange={handleCheckChange}
  //               />
  //             </div>
  //             <div className={`${styles.checkboxGroup}`}>
  //               <Checkbox
  //                 checkText={"Smart tv"}
  //                 htmlFor="tv"
  //                 name="smart tv"
  //                 // onChange={handleCheckChange}
  //               />
  //             </div>
  //           </div>
  //         }
  //         focus={1}
  //       />
  //       <Accordion
  //         title={"Price"}
  //         content={
  //           <Slider
  //             aria-label="Temperature"
  //             // defaultValue will not work because, this is a controlled component in the sense that it is controlled by react . it's value is stored in a [state]
  //             defaultValue={100}
  //             step={1}
  //             // marks={budget}
  //             valueLabelDisplay="on"
  //             // valueLabelDisplay="auto"
  //             // Added this with the new scaling
  //             // value={budgetValue}
  //             value={value}
  //             min={0}
  //             max={100}
  //             valueLabelFormat={numFormatter}
  //             scale={scale}
  //             // onChange={handleBudgetChange}
  //           />
  //         }
  //         focus={1}
  //       />

  //       <Accordion
  //         title={"Color"}
  //         content={
  //           <div>
  //             <div className={`${styles.checkboxGroup}`}>
  //               <Checkbox
  //                 checkText={"Black"}
  //                 htmlFor="color"
  //                 name="black"
  //                 // onChange={handleCheckChange}
  //               />
  //             </div>
  //             <div className={`${styles.checkboxGroup}`}>
  //               <Checkbox
  //                 checkText={"Silver"}
  //                 htmlFor="color"
  //                 name="silver"
  //                 // onChange={handleCheckChange}
  //               />
  //             </div>
  //           </div>
  //         }
  //         focus={1}
  //       />

  //       <Accordion
  //         title={"Size"}
  //         content={
  //           <div>
  //             <div className={`${styles.checkboxGroup}`}>
  //               <Checkbox
  //                 checkText={"32 inches"}
  //                 htmlFor="size"
  //                 name="32"
  //                 // onChange={handleCheckChange}
  //               />
  //             </div>
  //             <div className={`${styles.checkboxGroup}`}>
  //               <Checkbox
  //                 checkText={"43 inches"}
  //                 htmlFor="size"
  //                 name="43"
  //                 // onChange={handleCheckChange}
  //               />
  //             </div>
  //           </div>
  //         }
  //         focus={1}
  //       />

  //       <div className={`${styles.filterBtnGroup}`}>
  //         <button className="btn-block btn-small">Apply Filter</button>
  //         <button className="btn-block btn-small-sec ">Reset Filter</button>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const startIdx = (currentPage - 1) * (prodList?.length ?? 0) + 1;
  // const endIdx = Math.min(startIdx + prodList.length - 1, totalItems);

  // const endIdx = startIdx + (prodList?.length ?? 0) - 1;

  return (
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.collectionDiv}`}>
          <div className={`${styles.filter}`}>
            <FilterSlider />
          </div>

          <div className={`${styles.productDiv}`}>
            <div className={`${styles.sortBar}`}>
              <div className={`${styles.showItemNum}`}>
                <p>{`Showing ${startIdx} - ${endIdx} of ${
                  totalItems ?? 0
                } results`}</p>
              </div>
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
                      <div className={`${styles.forDrop}`}>default sorting</div>
                    </li>
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
              {prodList?.slice(0, 11).map((product) => {
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
            <Pagination
              page={currentPage}
              pages={totalPages}
              changePage={changePage}
            />
          </div>
        </div>
      </div>

      {
        <button
          onClick={() => openFilterHandler()}
          className={`${styles.scrollTop} ${styles.topBtn}`}
        >
          <FontAwesomeIcon icon={faSliders} className={`${styles.sliders}`} />
        </button>
      }

      <FilterNav
        isOpen={openFilter}
        clicked={() => {
          setOpenFilter(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
        children={<FilterSlider />}
      />
      <BackdropCart
        open={openFilter}
        clicked={() => {
          setOpenFilter(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
    </section>
  );
};

export default Latest;
