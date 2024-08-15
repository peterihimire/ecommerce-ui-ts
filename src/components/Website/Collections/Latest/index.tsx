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
import { useLocation, useNavigate } from "react-router-dom";
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

interface Filter {
  brand?: string;
  size?: string;
  price?: string;
  categories?: string[];
  color?: string;
  minPrice?: number;
  maxPrice?: number;
}

const Latest: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page") || "1", 10);
  const limit = parseInt(params.get("limit") || "3", 10);

  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  // const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [prodList, setProdList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const profileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const parseQueryParams = () => {
    // const params = new URLSearchParams(location.search);
    // const page = parseInt(params.get("page") || "1", 10);
    // const limit = parseInt(params.get("limit") || "3", 10);
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
    async (page: number) => {
      setLoading(true);
      try {
        const params: GetProductsFilterArg = { page };
        const response = await dispatch(getProductsFilter(params)).unwrap();
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateQueryParams({ page });
  };

  const handleFilterChange = (
    newFilter: Partial<GetProductsFilterArg["filter"]>
  ) => {
    updateQueryParams({
      filter: { ...parseQueryParams().filter, ...newFilter },
    });
  };

  const openFilterHandler = () => {
    setOpenFilter(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const addProductHandler = () => {
    setOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

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

  useEffect(() => {
    fetchProducts(currentPage);
  }, [fetchProducts, currentPage]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // // Calculate start and end indices for the displayed products
  const itemsPerPage = 4; // Number of items displayed per page

  const startIdx = (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, totalItems);

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
                {/* <p>{`Showing ${endIdx} items of ${totalItems ?? 0} results`}</p> */}
                <p>{`Showing ${startIdx} - ${endIdx} of ${totalItems} results`}</p>
              </div>
              <div
                className={`${styles.dropdown}`}
                onClick={() => setOpen(!open)}
                ref={profileRef}
              >
                <p>default sorting</p>
                <FontAwesomeIcon
                  icon={open ? faChevronUp : faChevronDown}
                  className={`${styles.chevdown}`}
                />
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
              {prodList.slice(0, 11).map((product) => (
                <ProductCard
                  key={product.uuid}
                  id={product.uuid}
                  title={product.title}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  image={`http://localhost:4040/${product.images[0]}`}
                  infoProd={product.uuid}
                  addProd={addProductHandler}
                />
              ))}
            </div>
            <Pagination
              page={currentPage}
              pages={totalPages}
              changePage={handlePageChange}
            />
          </div>
        </div>
      </div>

      <button
        onClick={openFilterHandler}
        className={`${styles.scrollTop} ${styles.topBtn}`}
      >
        <FontAwesomeIcon icon={faSliders} className={`${styles.sliders}`} />
      </button>

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

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import ProductCard from "../../../shared/productcard";
// import Checkbox from "../../../shared/customCheckbox";
// import Accordion from "../../../shared/accordion";
// import Pagination from "../../../shared/pagination";
// import Slider from "@mui/material/Slider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronDown,
//   faChevronUp,
//   faSliders,
// } from "@fortawesome/free-solid-svg-icons";
// import { ArrowDownward, PersonOutline } from "@mui/icons-material";
// import { NavLink, useLocation } from "react-router-dom";
// import { RootState } from "../../../../redux/store.config";
// import {
//   useAppDispatch,
//   useAppSelector,
// } from "../../../../hooks/useTypedSelector";
// import { getProductsFilter } from "../../../../redux/features/products/productSlice";
// import FilterNav from "../../../shared/filterNav";
// import FilterSlider from "../../../shared/filterSlider";
// import BackdropCart from "../../../shared/backdropcart";
// import styles from "./styles.module.scss";

// interface GetProductsFilterArg {
//   page?: number;
//   limit?: number;
//   filter?: {
//     brand?: string;
//     size?: string;
//     price?: string;
//     categories?: string[];
//     color?: string;
//     minPrice?: number;
//     maxPrice?: number;
//   };
// }

// const Latest: React.FC = () => {
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const [openFilter, setOpenFilter] = useState(false);
//   const [page, setPage] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalItems, setTotalItems] = useState(0);
//   const [prodList, setProdList] = useState<any[]>([]); // Initialize as an empty array
//   const [loading, setLoading] = useState(false);
//   const dispatch = useAppDispatch();
//   const [error, setError] = useState("");
//   const changePage = (page: number) => {
//     setCurrentPage(page);
//   };

//   console.log("Hello this is current page: ", currentPage);

//   const profileRef = useRef<HTMLDivElement>(null); // Proper initialization
//   const menuRef = useRef<HTMLDivElement>(null); // Proper initialization

//   const addProductHandler = () => {
//     console.log("Add handler...");
//     setOpen(true);
//     document.documentElement.classList.add("_fixed");
//     document.body.classList.add("_fixed");
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       menuRef.current &&
//       !menuRef.current.contains(event.target as Node) &&
//       profileRef.current &&
//       !profileRef.current.contains(event.target as Node)
//     ) {
//       setOpen(false);
//     }
//   };

//   const searchedProds = useAppSelector(
//     (state: RootState) => state.product.searchedItems
//   );
//   console.log(" searched ...", searchedProds);
//   // const prodList = searchedProds?.productRecords;
//   // const totalItemsCount = searchedProds?.totalItems;
//   // console.log("Product list ...", prodList);

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const fetchProducts = useCallback(
//     async (page: number) => {
//       setLoading(true);
//       try {
//         const params: GetProductsFilterArg = { page };
//         const response = await dispatch(getProductsFilter(params)).unwrap();
//         setCurrentPage(response.currentPage);
//         setTotalPages(response.totalPages);
//         setTotalItems(response.totalItems);
//         setProdList(response.productRecords);
//       } catch (error: any) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [dispatch]
//   );

//   const openFilterHandler = () => {
//     console.log("Add handler...");
//     setOpenFilter(true);
//     document.documentElement.classList.add("_fixed");
//     document.body.classList.add("_fixed");
//   };

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [fetchProducts, currentPage]);

//   // Calculate start and end indices for the displayed products
//   const startIdx = (currentPage - 1) * (prodList?.length ?? 0) + 1;
//   const endIdx = Math.min(
//     currentPage * (prodList?.length ?? 0),
//     totalItems ?? 0
//   );

//   // const startIdx = (currentPage - 1) * (prodList?.length ?? 0) + 1;
//   // const endIdx = Math.min(startIdx + prodList.length - 1, totalItems);

//   // const endIdx = startIdx + (prodList?.length ?? 0) - 1;

//   return (
//     <section className={`${styles.latest}`}>
//       <div className={`${styles.wrapper} wrapper`}>
//         <div className={`${styles.collectionDiv}`}>
//           <div className={`${styles.filter}`}>
//             <FilterSlider />
//           </div>

//           <div className={`${styles.productDiv}`}>
//             <div className={`${styles.sortBar}`}>
//               <div className={`${styles.showItemNum}`}>
//                 <p>{`Showing ${endIdx} items of ${totalItems ?? 0} results`}</p>
//               </div>
//               {/* <div className={`${styles.showItemNum}`}>
//                 <p>{`Showing ${startIdx} - ${endIdx} of ${
//                   totalItems ?? 0
//                 } results`}</p>
//               </div> */}
//               <div
//                 className={`${styles.dropdown}`}
//                 onClick={() => setOpen(!open)}
//                 ref={profileRef}
//               >
//                 <p>default sorting</p>
//                 {open ? (
//                   <span>
//                     <FontAwesomeIcon
//                       icon={faChevronUp}
//                       className={`${styles.chevdown}`}
//                     />
//                   </span>
//                 ) : (
//                   <span>
//                     <FontAwesomeIcon
//                       icon={faChevronDown}
//                       className={`${styles.chevdown}`}
//                     />
//                   </span>
//                 )}
//               </div>
//               {open && (
//                 <div ref={menuRef} className={`${styles.profileContainer}`}>
//                   <ul className={`${styles.profileDropdown}`}>
//                     <li onClick={() => setOpen(false)}>
//                       <div className={`${styles.forDrop}`}>default sorting</div>
//                     </li>
//                     <li onClick={() => setOpen(false)}>
//                       <div className={`${styles.forDrop}`}>
//                         sort by popularity
//                       </div>
//                     </li>
//                     <li onClick={() => setOpen(false)}>
//                       <div className={`${styles.forDrop}`}>
//                         sort by average rating
//                       </div>
//                     </li>
//                     <li onClick={() => setOpen(false)}>
//                       <div className={`${styles.forDrop}`}>sort by latest</div>
//                     </li>
//                     <li onClick={() => setOpen(false)}>
//                       <div className={`${styles.forDrop}`}>
//                         sort by price: low to high
//                       </div>
//                     </li>
//                     <li>
//                       <div className={`${styles.forDrop}`}>
//                         sort by price: high to low
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//             <div className={`${styles.productList}`}>
//               {prodList?.slice(0, 11).map((product) => {
//                 return (
//                   <ProductCard
//                     key={product.uuid}
//                     id={product.uuid}
//                     title={product.title}
//                     price={product.price}
//                     oldPrice={product.oldPrice}
//                     image={`http://localhost:4040/${product.images[0]}`}
//                     infoProd={product.uuid}
//                     addProd={addProductHandler}
//                     // likeProd={likeProductHandler}
//                     // infoProd={openModalHandler}
//                   />
//                 );
//               })}
//             </div>
//             <Pagination
//               page={currentPage}
//               pages={totalPages}
//               changePage={changePage}
//             />
//           </div>
//         </div>
//       </div>

//       {
//         <button
//           onClick={() => openFilterHandler()}
//           className={`${styles.scrollTop} ${styles.topBtn}`}
//         >
//           <FontAwesomeIcon icon={faSliders} className={`${styles.sliders}`} />
//         </button>
//       }

//       <FilterNav
//         isOpen={openFilter}
//         clicked={() => {
//           setOpenFilter(false);
//           document.documentElement.classList.remove("_fixed");
//           document.body.classList.remove("_fixed");
//         }}
//         children={<FilterSlider />}
//       />
//       <BackdropCart
//         open={openFilter}
//         clicked={() => {
//           setOpenFilter(false);
//           document.documentElement.classList.remove("_fixed");
//           document.body.classList.remove("_fixed");
//         }}
//       />
//     </section>
//   );
// };

// export default Latest;
