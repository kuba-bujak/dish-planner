import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import ColorOrganizer from "./components/ColorOrganizer";
import Menu from "./components/Menu";
import recipes from "./data/recipes.json";
import FetchLearning from "./components/data-learning/FetchLearning";
import UserManager from "./components/data-learning/GitHubUser";
import ArrayDisplayer from "./components/data-learning/ArrayDisplayer";
import FakeListLearning from "./components/data-learning/FakeListLearning";
import App from "./components/Suspense/App";

export const ColorContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Menu recipes={recipes} />
    <ColorOrganizer /> */}
    {/* <FetchLearning /> */}
    {/* <UserManager />
    <ArrayDisplayer /> */}
    {/* <FakeListLearning /> */}
    {/* <UserManager /> */}
    <App />
  </React.StrictMode>
);
