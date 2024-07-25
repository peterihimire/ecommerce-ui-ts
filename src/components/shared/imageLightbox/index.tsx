import React, { useState } from "react";
import Modal from "react-modal";
import { LightboxProps } from "../../../types/types";
import styles from "./styles.module.scss";

// const ProductLightbox = ({ images }) => {
const ProductLightbox: React.FC<LightboxProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const customStyles = {
    content: {
      zIndex: 800, // Set your desired z-index here
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.8)",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div>
      <div className={styles.productLargeFrame} onClick={openLightbox}>
        <img
          src={`http://localhost:4040/${images[currentImageIndex]}`}
          alt="Product Full"
          style={{ width: "500px", height: "auto", cursor: "pointer" }}
        />
      </div>
      <div className={styles.productThumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={`http://localhost:4040/${image}`}
            alt={`Product Thumbnail ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
            style={{
              cursor: "pointer",
              // margin: "10px",
              width: "120px",
              height: "120px",
            }}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeLightbox}
        contentLabel="Product Image Lightbox"
        style={customStyles} // Apply custom styles here
        // style={{
        //   content: {
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     background: "rgba(0, 0, 0, 0.8)",
        //     border: "none",
        //   },
        //   overlay: {
        //     backgroundColor: "rgba(0, 0, 0, 0.5)",
        //   },
        // }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={showPreviousImage}>&lt;</button>
          <img
            src={`http://localhost:4040/${images[currentImageIndex]}`}
            alt="Product Full"
            style={{ maxHeight: "80vh", maxWidth: "80vw", margin: "0 20px" }}
          />
          <button onClick={showNextImage}>&gt;</button>
        </div>
        <button
          onClick={closeLightbox}
          style={{
            display: "block",
            margin: "10px auto",
            background: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};
export default ProductLightbox;
