import React, { useState, useEffect } from "react";

const Counter = ({ countStep, start, stop }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      // Incrementing or decrementing based on whether start < stop or start > stop
      if (start < stop) {
        if (count < stop) {
          setCount((prevCount) => prevCount + countStep);
        }
      } else if (start > stop) {
        if (count > stop) {
          setCount((prevCount) => prevCount - countStep);
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, [count, start, stop, countStep]);

  return <div>{count}</div>;
};

export default Counter;
