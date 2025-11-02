import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Video from "../Components/Home/Video";
import TopText from "../Components/Home/TopText";
import BottomText from "../Components/Home/BottomText";
import Time from "../Components/common/Time";
import MidText from "../Components/Home/MidText";

const Home = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    document.title = "Home";
    // Zoom in → out animation for overlay content (optional)
    gsap.fromTo(
      overlayRef.current,
      { scale: 1.15, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
        delay: 1.5,
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Background video */}
      <div className="w-full h-screen fixed top-0 left-0">
        <Video />

        {/* Permanent blur overlay layer */}
      <div className="absolute inset-0 backdrop-blur-[5px] bg-black/40 pointer-events-none"></div>
      </div>

      {/* Foreground overlay content */}
      <div
        ref={overlayRef}
        className="w-screen h-screen relative flex flex-col justify-between overflow-hidden pb-4"
      >
        <TopText />

        {/* MidText Component */}
        <div className="absolute top-[115vw] right-[5vw] text-white w-[68vw]
        md:top-[27vw] md:right-[2.5vw] md:text-white md:w-[20vw]">
          <MidText />
        </div>

        {/* Time Component */}
        <div className="absolute left-[1.8vw] bottom-[1vw] text-white">
          <Time className="text-[1.5vw]" locationName="AUSTIN_" />
        </div>

        <BottomText />
      </div>
    </div>
  );
};

export default Home;
