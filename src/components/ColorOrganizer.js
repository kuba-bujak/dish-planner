import React from "react";
import ColorList from "./color_organizer/ColorList";
import AddColorForm from "./color_organizer/AddColorForm";

export default function ColorOrganizer() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}
