import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import styles from "./StarRate.module.css"; // Adjust the path according to your project structure
import styles from "./styles.module.scss";

interface StarRateProps {
  onRatingChange: (rating: number) => void;
}

const StarRate: React.FC<StarRateProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [rateColor, setRateColor] = useState<number | null>(null);

  const handleRating = (currentRate: number) => {
    setRating(currentRate);
    onRatingChange(currentRate); // Call the callback function with the new rating
  };

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <label key={index} className={`${styles.label}`}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              // onClick={() => setRating(currentRate)}
              onClick={() => handleRating(currentRate)}
              className={`${styles.input}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`${styles.customIcon}`}
              color={
                currentRate <= (rateColor ?? rating ?? 0) ? "yellow" : "#e0e0e0"
              }
              onMouseEnter={() => setRateColor(currentRate)}
              onMouseLeave={() => setRateColor(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRate;
