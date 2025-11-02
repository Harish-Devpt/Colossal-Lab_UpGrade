import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TopText = () => {
  const pathRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    // Inject Cookie font link
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Cookie&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // GSAP animations
    gsap.fromTo(
      lineRefs.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        delay: 1.7,
        ease: "power4.out",
        stagger: 0.2,
      }
    );

    const path = pathRef.current;
    const length = path.getTotalLength();
    const dashLength = 30;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      delay: 1.9,
    });

    tl.set(path, {
      strokeDasharray: `${dashLength} ${length}`,
      strokeDashoffset: length,
      opacity: 1,
    });

    tl.to(path, {
      strokeDashoffset: length * 0.1,
      duration: 1.3,
      ease: "linear",
    });

    tl.to(path, { opacity: 0, duration: 0.25, ease: "power1.out" });
    tl.to({}, { duration: 0.5 });

    tl.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1,
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "linear",
    });

    tl.to({}, { duration: 2 });

    tl.to(path, {
      strokeDashoffset: -length,
      duration: 1.2,
      ease: "linear",
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !lineRefs.current.includes(el)) {
      lineRefs.current.push(el);
    }
  };

  return (
    <div className="font-[font1] text-amber-50 -mr-[1vw] md:mr-[4.3vw] pt-[75vw] md:pt-7">
      <div
        ref={addToRefs}
        className="text-[12vw] flex items-center justify-center uppercase leading-[8.1vw] font-[font3] md:text-[9vw] md:leading-[9vw]
        sm:text-[12vw] sm:leading-[11vw]"
      >
        The spark
      </div>

      <div
        ref={addToRefs}
        className="text-[10vw] flex items-center justify-center uppercase leading-[15vw] md:leading-[8vw] font-[font3] md:text-[8vw]
        sm:text-[12vw] sm:leading-[11vw]"
      >
        that
        <div className="h-[10vw] md:h-[7vw] w-[19vw] md:w-[15vw] rounded-full overflow-hidden -mt-[0.5vw] flex-shrink-0 flex items-center justify-center mx-1">
          <video
            muted
            autoPlay
            loop
            src="/Video.mp4"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        awakens
      </div>

      <div
        ref={addToRefs}
        className="text-[9vw] flex items-center justify-center leading-[8.1vw] relative"
      >
        <span
          style={{
            fontFamily: "'Cookie', cursive",
            fontSize: "15vw",     // adjust if you want size changes
            textTransform: "none", // remove uppercase if you want normal
            color: "inherit",
            
          }}
        >
          Creativity
        </span>

        <svg
          className="absolute left-[22vw] top-2 w-[52vw] h-[8vw] scale-x-[-1]"
          viewBox="0 0 520 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            ref={pathRef}
            x="2"
            y="2"
            width="516"
            height="76"
            rx="500"
            stroke="#FDE68A"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopText;
