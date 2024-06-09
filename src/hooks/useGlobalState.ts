import { useState, useEffect } from "react";

const globalState: any = {};

export const useGlobalState = (key: string, initialValue: any) => {
  const [state, setState] = useState(() => {
    if (globalState.hasOwnProperty(key)) {
      return globalState[key];
    } else {
      globalState[key] = initialValue;
      return initialValue;
    }
  });

  useEffect(() => {
    globalState[key] = state;
  }, [key, state]);

  return [state, setState];
};
