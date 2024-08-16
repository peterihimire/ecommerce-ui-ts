import React, { useState, useEffect } from "react";
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
import { RootState } from "../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { getProducts } from "../../../redux/features/products/productSlice";
import { getCart } from "../../../redux/features/cart/cartSlice";
import { Product } from "../../../types/types";

import styles from "./styles.module.scss";

// const budget = [
//   {
//     value: 0,
//     scaledValue: 0,
//     label: "₦0",
//   },
//   {
//     value: 25,
//     scaledValue: 1000,
//     label: "₦1k",
//   },
//   {
//     value: 50,
//     scaledValue: 10000,
//     label: "₦10k",
//   },
//   {
//     value: 75,
//     scaledValue: 100000,
//     label: "₦100k",
//   },
//   {
//     value: 100,
//     scaledValue: 1000000,
//     label: "₦100k+",
//   },
// ];

const createBudget = (priceRange: [number, number]) => {
  const [minPrice, maxPrice] = priceRange;

  console.log("This is shocking price....min", minPrice);
  console.log("This is shocking price....max", maxPrice);

  // const budget = [
  //   {
  //     value: { minPrice },
  //     scaledValue: minPrice,
  //     label: `₦${minPrice}`,
  //   },
  //   {
  //     value: Math.round((minPrice + maxPrice) / 4),
  //     scaledValue: Math.round((minPrice + maxPrice) / 4),
  //     label: `₦${Math.round((minPrice + maxPrice) / 4)}`,
  //   },
  //   {
  //     value: Math.round((minPrice + maxPrice) / 2),
  //     scaledValue: Math.round((minPrice + maxPrice) / 2),
  //     label: `₦${Math.round((minPrice + maxPrice) / 2)}`,
  //   },
  //   {
  //     value: Math.round((3 * maxPrice + minPrice) / 4),
  //     scaledValue: Math.round((3 * maxPrice + minPrice) / 4),
  //     label: `₦${Math.round((3 * maxPrice + minPrice) / 4)}`,
  //   },
  //   {
  //     value: { maxPrice },
  //     scaledValue: maxPrice,
  //     label: `₦${maxPrice}`,
  //   },
  // ];

  // const budget = Array.from({ length: 11 }, (_, i) => {
  //   const value = Math.round(minPrice + (i * (maxPrice - minPrice)) / 10);
  //   return {
  //     value,
  //     scaledValue: value,
  //     label: `₦${value}`,
  //   };
  // });

  const budget = Array.from({ length: 11 }, (_, i) => {
    const value = Math.round(minPrice + (i * (maxPrice - minPrice)) / 10);
    return {
      value,
      scaledValue: value,
      label: `₦${value}`,
    };
  });


  // const budget = Array.from({ length: 11 }, (_, index) => {
  //   const value = index * 10; // 0, 10, 20, ... 100
  //   const scaledValue = Math.round(
  //     minPrice + ((maxPrice - minPrice) * value) / 100
  //   );
  //   return {
  //     value,
  //     scaledValue,
  //     label: `₦${scaledValue}`,
  //   };
  // });

  return budget;
};

// Example usage

// const ProductLightbox = ({ images }) => {
const FilterSlider: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<number[]>([20, 60]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [error, setError] = useState("");

  const loadFromLocalStorage = (key: any) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log("This is event...", event);
    console.log("These are new values...", newValue);
    setValue(newValue as number[]);
  };

  const scale = (value: number) => {
    const previousMarkIndex = Math.floor(value / 10);
    const previousMark = budget[previousMarkIndex];
    const remainder = value % 10;
    if (remainder === 0) {
      return previousMark.scaledValue;
    }

    const nextMark = budget[previousMarkIndex + 1];
    const increment = (nextMark.scaledValue - previousMark.scaledValue) / 10;
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

  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // const response = await axios.get("/api/products");
        const response = await dispatch(getProducts()).unwrap();
        const cartresponse = await dispatch(getCart()).unwrap();
        console.log("This res from home call from products...", response.data);
        console.log("This res from home cart...", cartresponse.data);

        // saveToLocalStorage("ecommerce_products", response.data);
        // setProducts(response);
      } catch (error: any) {
        console.log("This error from products...", error);
        setError(error.message);
      } finally {
        // dispatch(setLoading(false));
        setLoading(false);
      }
    };

    const localProducts = loadFromLocalStorage("ecommerce_products");
    console.log("This local products...", localProducts);
    if (localProducts) {
      setProducts(localProducts);
    } else {
      fetchProducts();
    }
  }, [dispatch]);

  console.log("Product list from filter component slider", productsList);

  const productsArr: Product[] = productsList;
  console.log("Products array..", productsArr);

  const extractFilters = (products: Product[]) => {
    let minPrice = Number.MAX_VALUE;
    let maxPrice = Number.MIN_VALUE;
    const colorSet = new Set<string>();
    const sizeSet = new Set<string>();
    const categorySet = new Set<string>();

    products.forEach((product) => {
      const { price, color, size, categories } = product;

      // Calculate min and max prices
      if (price < minPrice) {
        minPrice = price;
      }
      if (price > maxPrice) {
        maxPrice = price;
      }

      // Add color to the set
      if (color) {
        colorSet.add(color);
      }

      // Add size to the set
      if (size) {
        sizeSet.add(size);
      }

      // Add categories to the set
      if (categories) {
        categories.forEach((category) => categorySet.add(category));
      }
    });

    // Convert sets to arrays and sort them
    const colors = Array.from(colorSet).sort();
    const sizes = Array.from(sizeSet).sort();
    const categories = Array.from(categorySet).sort();

    return {
      priceRange: [minPrice, maxPrice],
      colors,
      sizes,
      categories,
    };
  };

  const filters = extractFilters(productsArr);

  const priceArray: number[] = filters.priceRange;
  const priceRange: [number, number] = [priceArray[0], priceArray[1]];
  const budget = createBudget(priceRange);

  console.log("Here are the filters mhen...", filters);
  console.log("Here are the filters price range...", filters.priceRange);
  return (
    <div className={`${styles.filterDiv}`}>
      <div className={`${styles.filterContainer}`}>
        <Accordion
          title={"Category"}
          content={
            <div className={`${styles.filterCategory}`}>
              {filters.categories.map((category) => {
                return (
                  <div className={`${styles.checkboxGroup}`}>
                    <Checkbox
                      checkText={category}
                      htmlFor={category}
                      name={category}
                      // onChange={handleCheckChange}
                    />
                  </div>
                );
              })}
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
              value={value}
              // value={filters.priceRange}
              min={0}
              max={100}
              // min={filters?.priceRange[0]}
              // max={filters?.priceRange[1]}
              valueLabelFormat={numFormatter}
              scale={scale}
              onChange={handleChange}
            />
          }
          focus={1}
        />

        <Accordion
          title={"Color"}
          content={
            <div>
              {filters.colors.map((color) => {
                return (
                  <div className={`${styles.checkboxGroup}`}>
                    <Checkbox
                      checkText={color}
                      htmlFor="color"
                      name={color}
                      // onChange={handleCheckChange}
                    />
                  </div>
                );
              })}
            </div>
          }
          focus={1}
        />

        <Accordion
          title={"Size"}
          content={
            <div>
              {filters.sizes.map((size) => {
                return (
                  <div className={`${styles.checkboxGroup}`}>
                    <Checkbox
                      checkText={size}
                      htmlFor="size"
                      name="32"
                      // onChange={handleCheckChange}
                    />
                  </div>
                );
              })}
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
