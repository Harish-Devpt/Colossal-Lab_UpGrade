import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Wait till video is ready (prevents stutter at load)
    const handleLoadedData = () => {
      gsap.fromTo(
        video,
        {
          scale: 2.5,
          filter: "blur(2px)",
        },
        {
          scale: 1,
          filter: "blur(0px)",
          duration: 5.5,
          delay: 0.3,
          ease: "power3.out",
          force3D: true,
          overwrite: true,
        }
      );
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      gsap.killTweensOf(video);
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover will-change-transform [transform-origin:center_center] select-none pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/Video.mp4"
      />
    </div>
  );
};

export default Video;
