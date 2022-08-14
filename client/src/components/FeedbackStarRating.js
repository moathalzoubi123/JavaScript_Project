import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./FeedbackStarRating.css";

const FeedbackStarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="FeedbackStarRating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#FFC107" : "E4E5E9"}
              size={100}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setRating(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default FeedbackStarRating;
