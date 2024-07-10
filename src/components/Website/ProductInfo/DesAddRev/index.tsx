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
              <p>
                Eleifend cursus facilisi sapien platea integer class. Commodo
                efficitur auctor augue nulla mus ornare. Sem congue senectus
                posuere nullam potenti eleifend cubilia dapibus. Mollis vel
                posuere duis tempor sagittis eu. Laoreet arcu eros id posuere
                porta viverra. Dui letius dis ipsum felis per viverra tortor.
                Aliquam diam ac eget justo tempus amet. Scelerisque ultricies
                porttitor porta mollis id metus quis dictumst.
              </p>
              <p>
                Eleifend cursus facilisi sapien platea integer class. Commodo
                efficitur auctor augue nulla mus ornare. Sem congue senectus
                posuere nullam potenti eleifend cubilia dapibus. Mollis vel
                posuere duis tempor sagittis eu. Laoreet arcu eros id posuere
                porta viverra. Dui letius dis ipsum felis per viverra tortor.
                Aliquam diam ac eget justo tempus amet. Scelerisque ultricies
                porttitor porta mollis id metus quis dictumst.
              </p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className={styles.content}>
            <h6>Additional Information</h6>
            <div className={`${styles.tableWrapper}`}>
              <table className={`${styles.table}`}>
                <tbody className={`${styles.tbody}`}>
                  {products.slice(7, 11).map((product, index) => {
                    return (
                      <tr key={index}>
                        <th className={`${styles.td}`} style={{ width: "10%" }}>
                          Samsung Smart TV
                        </th>
                        <td
                          className={`${styles.td} `}
                          style={{ width: "65%" }}
                        >
                          $128
                        </td>
                      </tr>
                    );
                  })}
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
