import React, { useState, useEffect } from "react";

// Custom easing function
export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const BezierBackground = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
    setCount(JSON.parse(localStorage.getItem("count")));
  }, [count]);

  // Easing function to get smooth transitions
  const getBezierValue = (t: number) => easeInOutCubic(t / 100); // Normalize 0-1 range

  // Compute the background gradient dynamically with neutral colors
  const getBackground = (count: number) => {
    const easedValue = getBezierValue(count) * 1000; // Scaled value (limited for grayscale)
    return `linear-gradient(135deg, hsl(0, 0%, ${easedValue}%), hsl(30, 10%, ${
      easedValue + 20
    }%))`;
  };

  return (
    <div
      className="min-h-full md:h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center transition-all duration-500"
      style={{ background: getBackground(count) }}
    >
      {children}
    </div>
  );
};

export default BezierBackground;
