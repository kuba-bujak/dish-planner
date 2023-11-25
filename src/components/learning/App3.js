import React, { useEffect, useLayoutEffect, useState } from "react";

// I learned how to use useLayoutEffect
// There are two functions to get the window size and mouse position

function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return [width, height];
}

function useMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const setPosition = ({ x, y }) => {
    setX(x);
    setY(y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", useMousePosition);
    return () => window.removeEventListener("mousemove", useMousePosition);
  }, []);

  return [x, y];
}

export default function App3() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return <div>Ready</div>;
}
