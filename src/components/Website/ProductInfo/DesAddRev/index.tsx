import React, { useState } from "react";
import CustomTab from "../../../shared/customTabProd";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";

import styles from "./styles.module.scss";

const DesAddRev: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

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
      name: "Reviews (0)",
      icon: "/images/bank.svg",
      id: 3,
    },
  ];

  return (
    <section className={`${styles.latest}`}>
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
            <h3>Description</h3>
          </div>
        )}

        {activeTab === 2 && (
          <div className={styles.content}>
            <h3>Additional Information</h3>
          </div>
        )}

        {activeTab === 3 && (
          <div className={styles.content}>
            <h3>Reviews (0)</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesAddRev;
