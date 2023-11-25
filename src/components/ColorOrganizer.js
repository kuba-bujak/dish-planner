import React from "react";
import ColorList from "./color_organizer/ColorList";
import AddColorForm from "./color_organizer/AddColorForm";
import ColorProvider from "../hooks/ColorProvider";

export default function ColorOrganizer() {
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  );
}
