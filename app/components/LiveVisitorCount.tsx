"use client";

import React, { useState, useEffect } from "react";

const LiveVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Initial random count
    setVisitorCount(Math.floor(Math.random() * 1000));

    // Update count every 5 seconds
    const interval = setInterval(() => {
      setVisitorCount(
        (prevCount) => prevCount + Math.floor(Math.random() * 10)
      );
    }, 5000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="p-1">
      <div className="flex justify-center items-center">
        <span className="text-md">👁️ Live Visitors: </span>
        <span className="ml-2 text-s font-bold">{visitorCount}</span>
      </div>
    </div>
  );
};

export default LiveVisitorCount;
