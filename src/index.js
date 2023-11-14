import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/start_rating/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating style={{ backgroundColor: "lightblue" }} />
  </React.StrictMode>
);
