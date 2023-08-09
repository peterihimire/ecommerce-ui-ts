import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import ProductCard from "../../../ui/productCard";
import { Link } from "react-router-dom";
import product1 from "../../../../assets/images/product1.png";
import product2 from "../../../../assets/images/product2.png";
import product3 from "../../../../assets/images/product3.png";
import product4 from "../../../../assets/images/product4.png";
import product5 from "../../../../assets/images/product5.png";
import product6 from "../../../../assets/images/product6.png";
import product7 from "../../../../assets/images/product7.png";
import product8 from "../../../../assets/images/product8.png";
import product9 from "../../../../assets/images/product9.png";
import product10 from "../../../../assets/images/product10.png";
import product11 from "../../../../assets/images/product11.png";

import Select from "../../../ui/customSelect";
import Modal from "../../../ui/modal";
import CartNav from "../../../ui/cartNav";
import Backdrop from "../../../ui/backdropCart";

import "./styles.scss";

const FeaturedProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const products = [
    {
      id: "02",
      price: 90,
      color: ["white", "red", "green", "black"],
      size: ["s", "l", "m", "xl", "xs", "xxl"],
      title: "T-Shirt",
      detail:
        "Learning day desirous informed expenses material returned six the.",
      images: [product2],
    },
    {
      id: "03",
      price: 540,
      color: ["white", "red", "green", "black"],
      size: ["s", "l", "m", "xl", "xs", "xxl"],
      title: "Hisense TV",
      detail:
        "Learning day desirous informed expenses material returned six the.",
      images: [product3],
    },

    {
      id: "07",
      price: 940000,
      color: ["white", "red", "green", "black"],
      size: ["s", "l", "m", "xl", "xs", "xxl"],
      title: "iphone 13 Pro",
      detail:
        "Learning day desirous informed expenses material returned six the.",
      images: [product7],
    },
    {
      id: "08",
      price: 840,
      color: ["white", "red", "green", "black"],
      size: ["s", "l", "m", "xl", "xs", "xxl"],
      title: "Iphone 13 Pro",
      detail:
        "Learning day desirous informed expenses material returned six the.",
      images: [product8],
    },
  ];

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

  const addProductHandler = () => {
    console.log("Add handler...");
    setOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const likeProductHandler = () => {
    console.log("Like Handler...");
  };

  return (
    <section className={`featured-product`}>
      <div className="wrapper">
        <div className={`featured-head`}>
          <h3>Featured Products</h3>
        </div>

        <div className={`featured-wrapper`}>
          {products.map((product) => {
            return (
              <ProductCard
                title={product.title}
                detail={product.detail}
                infoProd={openModalHandler}
                addProd={addProductHandler}
                likeProd={likeProductHandler}
                id={product.id}
                image={product.images[0]}
                price={product.price}
              />
            );
          })}
        </div>
      </div>

      {showModal && (
        <Modal click={closeModalHandler}>
          {
            <div className={`modal-children`}>
              <div className={`modal-img`}>
                <img src={product1} alt="" />
              </div>
              <div className={`modal-txt`}>
                <h3>iPhone 13 Pro Max</h3>
                <h6>$1400</h6>
                <button
                  className="btn-primary btn-block"
                  style={{ height: "40px", marginBottom: "10px" }}
                >
                  Add to Cart
                </button>
                <Link to="/collections/1" className={`modal-link`}>
                  View More Details
                </Link>
              </div>
            </div>
          }
        </Modal>
      )}

      <CartNav
        isOpen={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
    </section>
  );
};

export default FeaturedProduct;
