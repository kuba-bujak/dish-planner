import React, { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

export default function StarRating({ style = {}, totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px",  ...style }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} z {totalStars} gwiazdek
      </p>
    </div>
  );
}
