import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Scroll Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      {/* Always Visible Scroll Percentage */}
      <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-full shadow-lg">
        {Math.round(scrollPercentage)}%
      </div>
    </div>
  );
};

export default ScrollProgress;
