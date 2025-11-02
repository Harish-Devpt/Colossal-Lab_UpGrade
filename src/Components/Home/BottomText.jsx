import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const BottomText = () => {
  const bottomRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bottomRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.8,
        delay: 1.9,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div
      ref={bottomRef}
      className="
        text-amber-50 font-[font2]
        flex justify-center items-center gap-5 md:gap-10
        flex-wrap
        px-2 sm:px-4 md:px-8
      "
    >
      {/* Labs */}
      <div
        className="
          flex items-center border-3 border-amber-50 hover:border-green-400 hover:text-green-400
          rounded-full uppercase transition-all duration-300
          px-3 sm:px-4 md:px-5 pt-2 sm:pt-2
          leading-[6vw] sm:leading-[5vw] md:leading-[4.5vw]
      
     
        "
      >
        <Link
          className="
            text-[8vw] sm:text-[6vw] md:text-[5vw]
          "
          to='/Lab'
        >
          Labs
        </Link>
      </div>

      {/* Company */}
      <div
        className="
          flex items-center border-3 border-amber-50 hover:border-green-400 hover:text-green-400
          rounded-full uppercase transition-all duration-300
          px-3 sm:px-4 md:px-5 pt-2 sm:pt-2
          leading-[6vw] sm:leading-[5vw] md:leading-[4.5vw]
           
          
        "
      >
        <Link
          className="
            text-[8vw] sm:text-[6vw] md:text-[5vw]
          "
          to='/Company'
        >
          Company
        </Link>
      </div>
    </div>
  );
};

export default BottomText;
