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

import styles from "./styles.module.scss";

const DesAddRev: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

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
    </section>
  );
};

export default DesAddRev;
