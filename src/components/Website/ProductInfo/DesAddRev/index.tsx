import React, { useState } from "react";
import CustomTab from "../../../shared/customTabProd";
import { products } from "../../../../data-list";
import Form from "../Form";
import { RootState } from "../../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import StarRate from "../../../shared/starRate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCaretDown,
  faChevronDown,
  faChevronUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

const DesAddRev: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const [clicked, setClicked] = useState<number | null>(1);
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

  const productReviews = useAppSelector(
    (state: RootState) => state.product.productData
  );
  console.log("This is current product review ...", productReviews?.reviews);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const tabHeaders = [
    {
      name: "Description",
      icon: "/images/person.svg",
      id: 1,
    },
    {
      name: "Additional Information",
      icon: "/images/credit-card.svg",
      id: 2,
    },
    {
      name: `Reviews (${productReviews?.reviews?.length})`,
      icon: "/images/bank.svg",
      id: 3,
    },
  ];

  return (
    <section className={`${styles.desAddRev}`}>
      <div className={` wrapper ${styles.mobile}`}>
        <div className={`${styles.collapsibleContainer}`}>
          <ul className={`${styles.collapsible}`}>
            <li>
              <button onClick={() => toggler(Number(1))}>
                <div className={`${styles.headInfo}`}>
                  <span>{"Description"}</span>
                </div>
                <div className={`${styles.rotate}`}>
                  {clicked === Number(1) ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={`${styles.icon} ${styles.iconUp}`}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.icon} ${styles.iconDown}`}
                    />
                  )}
                </div>
              </button>

              <div
                className={`${`${styles.content}`} ${
                  clicked === Number(1) && styles.show
                }`}
              >
                <div>
                  <h6>Description</h6>
                  <p>{productReviews?.desc}</p>
                  <p>{productReviews?.desc}</p>
                </div>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(Number(2))}>
                <div className={`${styles.headInfo}`}>
                  <span>{"Additional Information"}</span>
                </div>
                <div className={`${styles.rotate}`}>
                  {clicked === Number(2) ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={`${styles.icon} ${styles.iconUp}`}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.icon} ${styles.iconDown}`}
                    />
                  )}
                </div>
              </button>

              <div
                className={`${`${styles.content}`} ${
                  clicked === Number(2) && styles.show
                }`}
              >
                <h6>Additional Information</h6>
                <div className={`${styles.tableWrapper}`}>
                  <table className={`${styles.table}`}>
                    <tbody className={`${styles.tbody}`}>
                      <tr>
                        <th className={`${styles.td}`} style={{ width: "10%" }}>
                          Weight
                        </th>
                        <td
                          className={`${styles.td} `}
                          style={{ width: "65%" }}
                        >
                          Nil
                        </td>
                      </tr>
                      <tr>
                        <th className={`${styles.td}`} style={{ width: "10%" }}>
                          Dimension
                        </th>
                        <td
                          className={`${styles.td} `}
                          style={{ width: "65%" }}
                        >
                          Nil
                        </td>
                      </tr>
                      <tr>
                        <th className={`${styles.td}`} style={{ width: "10%" }}>
                          Size
                        </th>
                        <td
                          className={`${styles.td} `}
                          style={{ width: "65%" }}
                        >
                          {productReviews?.size}
                        </td>
                      </tr>
                      <tr>
                        <th className={`${styles.td}`} style={{ width: "10%" }}>
                          Color
                        </th>
                        <td
                          className={`${styles.td} `}
                          style={{ width: "65%" }}
                        >
                          {productReviews?.color}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </li>

            <li>
              <button onClick={() => toggler(Number(3))}>
                <div className={`${styles.headInfo}`}>
                  <span>{`Reviews(${0})`}</span>
                </div>
                <div className={`${styles.rotate}`}>
                  {clicked === Number(3) ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className={`${styles.icon} ${styles.iconUp}`}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${styles.icon} ${styles.iconDown}`}
                    />
                  )}
                </div>
              </button>

              <div
                className={`${`${styles.content}`} ${
                  clicked === Number(3) && styles.show
                }`}
              >
                <div>
                  <h6>Reviews</h6>
                  <Form />
                  <ul className={`${styles.reviewList}`}>
                    {productReviews?.reviews?.map((review: any) => {
                      return (
                        <li className={`${styles.reviewItem}`}>
                          <div className={`${styles.reviewTitle}`}>
                            <div>
                              <StarRate
                                initialValue={review.rating}
                                readOnly={true}
                              />
                            </div>
                            <div>
                              <p>{review.title}</p>
                            </div>
                          </div>
                          <div className={`${styles.reveiwBody}`}>
                            <p>{review.review}</p>
                          </div>
                          <div className={`${styles.reviewFooter}`}>
                            <p>{review.name}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.desktop}`}>
        <div className={`wrapper`}>
          <CustomTab
            activeTab={activeTab}
            clicked={handleTabClick}
            // clicked={(index) => tabIndexHandler(index)}
            headers={tabHeaders}
            // src='../../../public/images/person.svg'
            // src={tabHeaders}
            // src="/images/send-icon.svg"
          />
        </div>
        <div className={`wrapper`}>
          {activeTab === 1 && (
            <div className={styles.content}>
              <h6>Description</h6>

              <div>
                <p>{productReviews?.desc}</p>
                <p>{productReviews?.desc}</p>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className={styles.content}>
              <h6>Additional Information</h6>
              <div className={`${styles.tableWrapper}`}>
                <table className={`${styles.table}`}>
                  <tbody className={`${styles.tbody}`}>
                    <tr>
                      <th className={`${styles.td}`} style={{ width: "10%" }}>
                        Weight
                      </th>
                      <td className={`${styles.td} `} style={{ width: "65%" }}>
                        Nil
                      </td>
                    </tr>
                    <tr>
                      <th className={`${styles.td}`} style={{ width: "10%" }}>
                        Dimension
                      </th>
                      <td className={`${styles.td} `} style={{ width: "65%" }}>
                        Nil
                      </td>
                    </tr>
                    <tr>
                      <th className={`${styles.td}`} style={{ width: "10%" }}>
                        Size
                      </th>
                      <td className={`${styles.td} `} style={{ width: "65%" }}>
                        {productReviews?.size}
                      </td>
                    </tr>
                    <tr>
                      <th className={`${styles.td}`} style={{ width: "10%" }}>
                        Color
                      </th>
                      <td className={`${styles.td} `} style={{ width: "65%" }}>
                        {productReviews?.color}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className={styles.content}>
              <h6>Reviews</h6>
              <Form />
              <ul className={`${styles.reviewList}`}>
                {productReviews?.reviews?.map((review: any) => {
                  return (
                    <li className={`${styles.reviewItem}`}>
                      <div className={`${styles.reviewTitle}`}>
                        <div>
                          <StarRate
                            initialValue={review.rating}
                            readOnly={true}
                          />
                        </div>
                        <div>
                          <p>{review.title}</p>
                        </div>
                      </div>
                      <div className={`${styles.reveiwBody}`}>
                        <p>{review.review}</p>
                      </div>
                      <div className={`${styles.reviewFooter}`}>
                        <p>{review.name}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesAddRev;
