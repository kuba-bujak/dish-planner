import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./components/Menu";
import data from "./data/recipes.json"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Menu recipes={data} />);
