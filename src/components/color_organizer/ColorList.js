import React from "react";
import Color from "./Color";
import { useColors } from "../../hooks/ColorProvider";

export default function ColorList() {
  const { colors } = useColors();

  if (!colors.length) return <div>Brak kolorów. (Dodaj kolor)</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
