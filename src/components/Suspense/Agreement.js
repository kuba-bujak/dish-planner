import React from "react";

export default function Agreement({ onAgree = (f) => f }) {
  return (
    <div>
      <p>Regulamin...</p>
      <p>To są warunki użycia aplikacji. Czy się na nie zgadzasz?</p>
      <button onClick={onAgree}>I agree</button>
    </div>
  );
}
