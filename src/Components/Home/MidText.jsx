import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MidText = ({ text }) => {
  const midRef = useRef(null);

  const content =
    text ||
    "Colossal Labs is driven by purpose to        Engineer the future of life. Every                Experiment, every edit, Every                     Breakthrough is designed to nourish the     planet’s balance tomorrow, five months     from now, and fifty years ahead. We          Search for the friction where curiosity      Meets creation the spark that generates    Evolution. We’re Unapologetically honest. We say what Must be said. We build what Must be built.";

  useEffect(() => {
    gsap.fromTo(
      midRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        delay: 1.8,
        ease: "power4.out",
      }
    );
  }, []);

  const renderText = () =>
    content.split("").map((char, i) => {
      if (char === " ") return <span key={i}>{"\u00A0"}</span>;

      return (
        <span
          key={i}
          className="inline-block transition-colors duration-100 ease-in-out hover:text-[#ff5e00] cursor-pointer"
        >
          {char}
        </span>
      );
    });

  return (
    <p
      ref={midRef}
      className="
        font-[font2]
        text-[#ffffff]
        whitespace-pre-wrap
        transition-all
        duration-300
        ease-in-out

        

        /* 📱 Mobile */
        sm:text-[1.8vw] sm:leading-[2.2vw]
        md:text-[1.4vw] md:leading-[1.8vw]
        lg:text-[1vw] lg:leading-[1.3vw]
        max-sm:text-[3.4vw] max-sm:leading-[4.2vw]
      "
    >
      {renderText()}
    </p>
  );
};

export default MidText;
