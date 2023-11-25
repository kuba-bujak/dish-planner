import React from "react";
import Recipe from "./dishes_list/Recipe";

function Menu({ recipes }) {
  return (
    <article>
      <header>
        <h1>Przepisy na smaczne potrawy</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

export default Menu;
