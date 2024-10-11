import React, { useRef } from "react";

const useCustomEffec = (effect, deps) => {
  const isFirstrender = useRef(true);
  const prevDeps = useRef([]);

  //First Render
  if (isFirstrender.current) {
    isFirstrender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }

  //Deps Chnge and no deps array
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;
  if (depsChanged) {
    const cleanup = effect();

    if (cleanup && typeof cleanup === "function" && deps) {
      cleanup();
    }
  }
  //cleanup

  prevDeps.current = deps || [];
};

export default useCustomEffec;
