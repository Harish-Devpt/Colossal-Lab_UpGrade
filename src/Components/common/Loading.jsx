// Components/Loading.jsx
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Loading = ({ children }) => {
  const path = useLocation().pathname;
  const loaderRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const loader = loaderRef.current;

    // ✅ Always start from the top whenever loader triggers
    window.scrollTo(0, 0);

    // Disable all scrolling (x + y)
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Set initial states
      gsap.set(loader, { display: "block", opacity: 1 });
      gsap.set(".load", { clearProps: "all", y: "0%", height: "100%" });

      // Animate bars filling up
      tl.from(".load", {
        height: 0,
        duration: 0.5,
        stagger: { amount: -0.25 },
      });

      // Animate bars sliding down
      tl.to(".load", {
        y: "100%",
        duration: 0.6,
        stagger: { amount: -0.3 },
      });

      // Fade out loader, then re-enable scroll + reset scroll position
      tl.to(
        loader,
        {
          opacity: 0,
          duration: 0.25,
          ease: "none",
          onComplete: () => {
            gsap.set(loader, { display: "none" });

            // ✅ Re-enable scroll
            document.body.style.overflow = "auto";
            document.body.style.overflowX = "hidden"; // Keep X hidden permanently

            // ✅ Force scroll to top after loader completes
            window.scrollTo(0, 0);

            // Dispatch event if needed by other components
            window.dispatchEvent(new Event("loaderComplete"));
          },
        },
        "-=0.25"
      );

      // Reset .load position
      tl.set(".load", { y: "0%" });
    });

    return () => ctx.revert();
  }, [path]);

  // Cleanup on unmount (in case of fast navigation)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, []);

  return (
    <div className="overflow-x-hidden"> {/* ✅ Prevent X scroll globally */}
      {/* LOADING SCREEN */}
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 w-full h-screen z-[9999] bg-white overflow-hidden pointer-events-none"
      >
        <div className="h-full w-full flex">
          <div className="load h-full w-1/5 bg-black"></div>
          <div className="load h-full w-1/5 bg-black"></div>
          <div className="load h-full w-1/5 bg-black"></div>
          <div className="load h-full w-1/5 bg-black"></div>
          <div className="load h-full w-1/5 bg-black"></div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Loading;
