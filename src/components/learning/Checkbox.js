import React, { useEffect, useReducer, useState } from "react";

function Numbers() {
  const [number, setNumber] = useReducer(
    (number, nextNumber) => number + nextNumber,
    0
  );

  return <h1 onClick={() => setNumber(30)}>{number}</h1>
}

export default function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  // function toggle() {
  //   setChecked((checked) => !checked);
  // }

  const numbers = [28, 34, 67, 68];

  console.log(numbers.reduce((number, nextNumber) => number + nextNumber, 0));

  useEffect(() => {
    localStorage.setItem("checkbox-value", checked);
  });

  return (
    <>
      <Numbers />
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );
}
