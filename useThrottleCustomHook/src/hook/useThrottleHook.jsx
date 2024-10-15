import React, { useState, useEffect, useRef } from "react";

const useThrottleHook = (value, delay) => {
  const [throtleValue, setThrottleValue] = useState(value);
  const lastExecute = useRef(Date.now());
  useEffect(() => {
    const handle = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecute.current;
      if (timeElapsed > delay) {
        setThrottleValue(value);
        lastExecute.current = now;
      }
    }, delay - (Date.now() - lastExecute));
    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);
  return [throtleValue];
};

export default useThrottleHook;
