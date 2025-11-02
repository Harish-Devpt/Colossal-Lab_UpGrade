import React, { useEffect, useState } from "react";

// White globe SVG that scales with font size
const GlobalLogo = ({ className = "text-white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block mr-[0.3vw] w-[2vw] h-[2vw] ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
           10-4.48 10-10S17.52 2 12 2zm0 18c-4.41
           0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59
           8-8 8zm1-13h-2v6h6v-2h-4z"
      />
    </svg>
  );
};

const Time = ({ locationName = "Austin", className = "" }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      // Convert to Austin (Central Time)
      const options = {
        timeZone: "America/Chicago",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      const formatted = new Intl.DateTimeFormat("en-US", options).format(now);
      setTime(formatted);
    };

    update(); // initial call
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    // Hidden on mobile, visible on tablet (md) and desktop
    <div className={`hidden md:flex items-center font-sans ${className}`}>
      <GlobalLogo className="text-white" />
      <span className="mr-[0.3vw]">{locationName}</span>
      <span>{time}</span>
    </div>
  );
};

export default Time;
