import React, { useState, useEffect, useCallback } from "react";
import Modal from "react-modal";
import { LightboxProps } from "../../../types/types";
import Checkbox from "../../shared/customCheckbox";
import Accordion from "../../shared/accordion";
import { useLocation, useNavigate } from "react-router-dom";
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
import {
  getProducts,
  getProductsFilter,
} from "../../../redux/features/products/productSlice";
import { getCart } from "../../../redux/features/cart/cartSlice";
import { Product } from "../../../types/types";

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

interface Filter {
  brand?: string;
  size?: string;
  price?: string;
  categories?: string[];
  color?: string;
  minPrice?: number;
  maxPrice?: number;
}

const createBudget = (priceRange: [number, number]) => {
  const [minPrice, maxPrice] = priceRange;

  console.log("This is shocking price....min", minPrice);
  console.log("This is shocking price....max", maxPrice);

  const budget = Array.from({ length: 11 }, (_, i) => {
    const value = Math.round(minPrice + (i * (maxPrice - minPrice)) / 10);
    return {
      value,
      scaledValue: value,
      label: `₦${value}`,
    };
  });

  return budget;
};

const FilterSlider: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page") || "1", 10);
  const limit = parseInt(params.get("limit") || "3", 10);
  // const [value, setValue] = React.useState<number[]>([20, 60]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [prodList, setProdList] = useState<any[]>([]);

  const loadFromLocalStorage = (key: any) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  function numFormatter(num: number) {
    if (num > 999 && num < 1000000) {
      return "₦" + (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num >= 1000000) {
      return "₦" + (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
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
    const brandSet = new Set<string>();
    const categorySet = new Set<string>();

    products.forEach((product) => {
      const { price, color, size, brand, categories } = product;

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

      if (brand) {
        brandSet.add(brand);
      }

      // Add categories to the set
      if (categories) {
        categories.forEach((category) => categorySet.add(category));
      }
    });

    // Convert sets to arrays and sort them
    const colors = Array.from(colorSet).sort();
    const sizes = Array.from(sizeSet).sort();
    const brands = Array.from(brandSet).sort();
    const categories = Array.from(categorySet).sort();

    return {
      priceRange: [minPrice, maxPrice],
      colors,
      sizes,
      brands,
      categories,
    };
  };

  const filters = extractFilters(productsArr);

  const priceArray: number[] = filters.priceRange;
  const priceRange: [number, number] = [priceArray[0], priceArray[1]];
  const budget = createBudget(priceRange);

  const [value, setValue] = React.useState<number[]>([
    priceArray[0],
    priceArray[1],
  ]);
  // const [checks, setChecks] = useState({});
  const [checks, setChecks] = useState<{
    categories: string[];
    brands: string[];
    colors: string[];
    sizes: string[];
  }>({
    categories: [],
    brands: [],
    colors: [],
    sizes: [],
  });

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log("This is event...", event);
    console.log("These are new values...", newValue);
    setValue(newValue as number[]);
  };

  // const handleCheckChange = (e: any) => {
  //   const { name, checked } = e.target;

  //   setChecks({
  //     ...checks,
  //     [name]: checked,
  //   });
  // };

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = e.target;

    setChecks((prevChecks) => {
      const selectedFilterType = name as keyof typeof checks;

      const updatedFilterList = checked
        ? [...prevChecks[selectedFilterType], value]
        : prevChecks[selectedFilterType].filter((item) => item !== value);

      return {
        ...prevChecks,
        [selectedFilterType]: updatedFilterList,
      };
    });
  };

  const updateQueryParams = (newParams: Partial<GetProductsFilterArg>) => {
    const params = new URLSearchParams(location.search);
    const { page, limit, filter } = newParams;

    if (page !== undefined) params.set("page", page.toString());
    if (limit !== undefined) params.set("limit", limit.toString());
    if (filter) {
      Object.entries(filter).forEach(([key, value]) => {
        const filterKey = key as keyof Filter; // Assert type to keyof Filter
        if (Array.isArray(value)) {
          value.forEach((val) => params.append(`filter[${filterKey}]`, val));
        } else {
          params.set(`filter[${filterKey}]`, value as string); // Assert type to string
        }
      });
    }

    navigate({ search: params.toString() });
  };

  const fetchProducts = useCallback(
    async (page: number, filter?: Filter) => {
      setLoading(true);
      try {
        const params: GetProductsFilterArg = { page, filter };
        const response = await dispatch(getProductsFilter(params)).unwrap();
        console.log("Response from filter, okay...", response);
        setCurrentPage(response.currentPage);
        setTotalPages(response.totalPages);
        setTotalItems(response.totalItems);
        setProdList(response.productRecords);
        updateQueryParams({ page });
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  const parseQueryParams = () => {
    const filter: Partial<Filter> = {};

    params.forEach((value, key) => {
      if (key.startsWith("filter[")) {
        const filterKey = key.slice(7, -1) as keyof Filter;

        if (filterKey === "categories") {
          if (!filter[filterKey]) {
            filter[filterKey] = [];
          }
          (filter[filterKey] as string[]).push(value);
        } else {
          // Check if the value needs conversion to number
          if (filterKey === "minPrice" || filterKey === "maxPrice") {
            filter[filterKey] = Number(value) as Filter[typeof filterKey];
          } else {
            filter[filterKey] = value as Filter[typeof filterKey];
          }
        }
      }
    });

    return { page, limit, filter };
  };

  const handleFilterChange = (
    newFilter: Partial<GetProductsFilterArg["filter"]>
  ) => {
    updateQueryParams({
      filter: { ...parseQueryParams().filter, ...newFilter },
    });
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, [fetchProducts, currentPage]);

  //  useEffect(() => {
  //   if (filters.priceRange) {
  //     setValue(filters.priceRange);
  //   }
  //  }, [filters.priceRange]);

  const applyFilters = () => {
    const appliedFilters: Filter = {
      minPrice: value[0],
      maxPrice: value[1],
      categories: checks.categories,
      // brands: checks.brands,
      // colors: checks.colors,
      // sizes: checks.sizes,
    };

    fetchProducts(currentPage, appliedFilters);
  };

  console.log("Here are the filters mhen...", filters);
  console.log("Here are the filters price range...", filters.priceRange);
  console.log("Here is the value...", value);
  console.log("Here are the values of checked...", checks);

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
                      htmlFor={"category"}
                      name={category}
                      onChange={handleCheckChange}
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
              aria-label="Price Range"
              // defaultValue will not work because, this is a controlled component in the sense that it is controlled by react . it's value is stored in a [state]
              // defaultValue={100}
              step={1}
              // marks={budget}
              valueLabelDisplay="on"
              // valueLabelDisplay="auto"
              // Added this with the new scaling
              value={value}
              // value={[filters.priceRange[0], filters.priceRange[1]]}
              // min={0}
              // max={100}
              min={priceArray[0]}
              max={priceArray[1]}
              valueLabelFormat={numFormatter}
              // scale={scale}
              onChange={handleChange}
            />
          }
          focus={1}
        />

        <Accordion
          title={"Brand"}
          content={
            <div>
              {filters.brands.map((brand) => {
                return (
                  <div className={`${styles.checkboxGroup}`}>
                    <Checkbox
                      checkText={brand}
                      htmlFor={"brand"}
                      name={brand}
                      onChange={handleCheckChange}
                    />
                  </div>
                );
              })}
            </div>
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
                      htmlFor={"color"}
                      name={color}
                      onChange={handleCheckChange}
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
                      name={size}
                      onChange={handleCheckChange}
                    />
                  </div>
                );
              })}
            </div>
          }
          focus={1}
        />

        <div className={`${styles.filterBtnGroup}`}>
          <button className="btn-block btn-small" onClick={applyFilters}>
            Apply Filter
          </button>
          <button
            className="btn-block btn-small-sec "
            onClick={() => {
              setValue(filters.priceRange);
              setChecks({
                categories: [],
                brands: [],
                colors: [],
                sizes: [],
              });
              fetchProducts(1); // Reset to the first page
            }}
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};
export default FilterSlider;

// const handleChange = (event: Event, newValue: number | number[]) => {
//   console.log("This is event...", event);
//   console.log("These are new values...", newValue);
//   setValue(newValue as number[]);
// };

// const scale = (value: number) => {
//   const previousMarkIndex = Math.floor(value / 10);
//   const previousMark = budget[previousMarkIndex];
//   const remainder = value % 10;
//   if (remainder === 0) {
//     return previousMark.scaledValue;
//   }

//   const nextMark = budget[previousMarkIndex + 1];
//   const increment = (nextMark.scaledValue - previousMark.scaledValue) / 10;
//   return remainder * increment + previousMark.scaledValue;
// };

// const scale = (value: number) => {
//   const minPrice = 300; // Your actual min price
//   const maxPrice = 600100; // Your actual max price

//   // Calculate the corresponding price using linear interpolation
//   return minPrice + (value / 100) * (maxPrice - minPrice);
// };

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
// const scale = (value: number) => {
//   const minPrice = 300; // Your actual min price
//   const maxPrice = 600100; // Your actual max price

//   // Calculate the corresponding price using linear interpolation
//   return minPrice + (value / 100) * (maxPrice - minPrice);
// };
// This is the mininmum of the things that  i need, so lets set this thing to  be going. This is the only things thats the thing+
// well this is something i lovvvv