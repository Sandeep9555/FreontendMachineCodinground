import React, { useEffect, useState } from "react";

const HookuseEffect = () => {
  const [count, setCount] = useState({
    num: 1,
    id: "abcd",
  });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };
  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    console.log("ran");
    return () => {
      console.log("Ran Returned");
    };
  }, [count]);
  return (
    <>
      <button onClick={handleSubstract}>-</button>
      <span>{count.num}</span>
      <span>{count.id}</span>
      <button onClick={handleAdd}>+</button>
      <p>{screenWidth}</p>
    </>
  );
};

export default HookuseEffect;
