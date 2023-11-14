import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/dishes_list/Menu";
import data from "./data/recipes.json"
import StarRating from "./components/start_rating/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu recipes={data} />
    <StarRating style={{ backgroundColor: "lightblue" }} />
  </React.StrictMode>
);
