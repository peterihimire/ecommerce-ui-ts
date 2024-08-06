import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import styles from "./StarRate.module.css"; // Adjust the path according to your project structure
import styles from "./styles.module.scss";

interface StarRateProps {
  onRatingChange?: (rating: number) => void;
  initialValue?: number; // Add this prop for initial rating value
  readOnly?: boolean;
}

const StarRate: React.FC<StarRateProps> = ({
  onRatingChange,
  initialValue = 0,
  readOnly = false,
}) => {
  const [rating, setRating] = useState<number | null>(initialValue);
  const [rateColor, setRateColor] = useState<number | null>(null);

  const handleRating = (currentRate: number) => {
    // setRating(currentRate);
    // if (onRatingChange) {
    //   onRatingChange(currentRate); // Call the callback function with the new rating
    // }
    if (!readOnly) {
      setRating(currentRate);
      if (onRatingChange) {
        onRatingChange(currentRate); // Call the callback function with the new rating
      }
      // onRatingChange(currentRate);
    }
    // onRatingChange(currentRate); // Call the callback function with the new rating
  };

  useEffect(() => {
    setRating(initialValue);
  }, [initialValue]);

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
              disabled={readOnly} // Disable input in read-only mode
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`${styles.customIcon}`}
              color={
                currentRate <= (rateColor ?? rating ?? 0)
                  ? "#FFE802"
                  : "#e0e0e0"
              }
              onMouseEnter={() => !readOnly && setRateColor(currentRate)}
              onMouseLeave={() => !readOnly && setRateColor(null)}
              // onMouseEnter={() => setRateColor(currentRate)}
              // onMouseLeave={() => setRateColor(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRate;
