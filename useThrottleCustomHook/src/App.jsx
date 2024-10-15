import { useState, useEffect } from "react";
import "./App.css";
import useThrottleHook from "./hook/useThrottleHook";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const throttleHandleSize = useThrottleHook(handSize, 3000);
  useEffect(() => {
    window.addEventListener("resize", throttleHandleSize);
    return () => {
      window.removeEventListener("resize", throttleHandleSize);
    };
  });
  return (
    <div>
      {windowSize.width}*{windowSize.height}
    </div>
  );
}

export default App;
