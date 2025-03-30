import React, { useEffect, useState, useRef } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null); // Prevents re-renders

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          return 100;
        }
        return prev + 25; // Faster increments
      });
    }, 40);

    window.addEventListener("load", () => setProgress(100));

    return () => clearInterval(intervalRef.current);
  }, []); // Runs only once on mount (page refresh)

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Animated Spinner */}
      <div className="w-14 h-14 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-4"></div>

      {/* Progress Bar */}
      <p className="mb-2 text-gray-700 font-semibold">{progress}% Loading...</p>
      <div className="w-56 h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(Loading); // Memoized to prevent unnecessary renders
