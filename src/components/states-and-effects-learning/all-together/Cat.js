import React, { useState, memo } from "react";

const Cat = memo(({ name, meow = (f) => f }) => {
  console.log(`Generowanie kota ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
});

const RenderCatOnce = memo(Cat, () => true);
const AlwaysRenderCat = memo(Cat, () => false);
const PureCat = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name);

export default function CatGenerator() {
  const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat
          key={i}
          name={name}
          meow={(name) => console.log(`${name} miauczy`)}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt("Nadaj imię koty")])}>
        Dodaj kota
      </button>
    </>
  );
}
