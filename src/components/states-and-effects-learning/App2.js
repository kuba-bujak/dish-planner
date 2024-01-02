import React, { useEffect, useState, useMemo } from "react";

// I learned how to use useMemo and useEffect

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);
};

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const fn = () => {
    console.log("Witaj");
    console.log("Świecie");
  };

  useEffect(() => {
    console.log("Ponowne wygenerowanie treści");
    fn();
  }, [fn]);

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}

export default function App() {
  return <WordCount>You are not going to dsa beslieve this but...</WordCount>;
}
