import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import ColorOrganizer from "./components/ColorOrganizer";
import Menu from "./components/Menu";
import recipes from "./data/recipes.json";

export const ColorContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Menu recipes={recipes} />
    <ColorOrganizer />
  </React.StrictMode>
);
