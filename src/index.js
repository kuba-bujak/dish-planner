import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import ColorOrganizer from "./components/ColorOrganizer";
import ColorProvider from "./hooks/ColorProvider";

export const ColorContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorProvider>
    <ColorOrganizer />
  </ColorProvider>
);
