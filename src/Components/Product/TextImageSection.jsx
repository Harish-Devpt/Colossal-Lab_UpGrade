import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TextImageSection = ({
  title1,
  title2,
  extraText1,
  extraText2,
  image,
  isFirst = false,
}) => {
  const sectionRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const section = sectionRef.current;
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;

    const sectionWidth = section.offsetWidth;
    const title1Width = title1.offsetWidth;
    const title2Width = title2.offsetWidth;

    // Both lines must travel their full path (text + section width)
    const totalDistance1 = sectionWidth + title1Width;
    const totalDistance2 = sectionWidth + title2Width;

    // Pick a constant speed (px per second)
    const speed = 200; // adjust for faster/slower motion
    const duration1 = totalDistance1 / speed;
    const duration2 = totalDistance2 / speed;

    // --- TOP LINE: move left ---
    gsap.fromTo(
      title1,
      { x: sectionWidth },
      {
        x: -title1Width,
        duration: duration1,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % -totalDistance1),
        },
      }
    );

    // --- BOTTOM LINE: move right ---
    gsap.fromTo(
      title2,
      { x: -title2Width },
      {
        x: sectionWidth,
        duration: duration2,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalDistance2),
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={sectionRef}
      className="h-screen w-full relative overflow-hidden flex justify-center items-center"
    >
      {/* FIRST MOVING TITLE */}
      <div
        ref={title1Ref}
        className="flex gap-[3vw] text-[20vw] md:text-[10vw] uppercase absolute top-[25vw] md:top-[5vw] select-none whitespace-nowrap"
      >
        <span>{title1}</span>
        {extraText1 && (
          <span className="text-[10vw] md:text-[4vw] top-[12vw] md:top-[7vw] relative font-bold ">
            {extraText1}
          </span>
        )}
      </div>

      {/* IMAGE DIV — add rounded-top only if first */}
      <div
        className={`h-[200vw] md:h-full w-[90vw] md:w-[35vw] absolute left-1/2 -translate-x-1/2 overflow-hidden ${
          isFirst ? "rounded-t-[2rem]" : ""
        }`}
      >
        <img
          className="h-full w-full object-cover"
          src={image}
          alt={title1}
        />
      </div>

      {/* SECOND MOVING TITLE */}
      <div
        ref={title2Ref}
        className="flex gap-[3vw] text-[20vw] md:text-[10vw] uppercase absolute top-[105vw] md:top-[29vw] select-none whitespace-nowrap"
      >
        <span>{title2}</span>
        {extraText2 && (
          <span className="text-[10vw] md:text-[4vw] top-[12vw] md:top-[7vw] relative font-bold">
            {extraText2}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextImageSection;
