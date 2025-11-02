import gsap from "gsap";
import { useEffect, useRef, useContext } from "react";
import { NavbarContext } from "../../Context/NavContext";
import Time from "../common/Time";

const FullNav = () => {
  const FullNavRef = useRef(null);
  const FullScreenRef = useRef(null);
  const tlRef = useRef(null);
  const [navOpen, setnavOpen] = useContext(NavbarContext);

  // =======================
  // 🟩 NAV OPEN/CLOSE ANIMATION
  // =======================
  useEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out", overwrite: "auto" },
      onReverseComplete: () => {
        const body = document.body;
        body.style.overflow = "";
        body.style.width = "";
        gsap.set("#fullnav", { display: "none", pointerEvents: "auto" });
      },
      onComplete: () => gsap.set("#fullnav", { pointerEvents: "auto" }),
    });

    tl.fromTo(
      ".loader",
      { height: 0 },
      { height: "100%", stagger: { amount: -0.2, from: "start" }, duration: 0.35 }
    )
      .fromTo(FullNavRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 }, "-=0.2")
      .fromTo(
        ".Link",
        { opacity: 0, rotateX: 90, transformOrigin: "top center" },
        { opacity: 1, rotateX: 0, stagger: 0.1, duration: 0.25 },
        "-=0.2"
      )
      .fromTo(
        ".closeBtn",
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 },
        "-=0.2"
      )
      .fromTo(
        ".bottomText",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "-=0.1"
      );

    tlRef.current = tl;
    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  // =======================
  // 🟩 HANDLE NAV OPEN/CLOSE
  // =======================
  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    const body = document.body;

    if (navOpen) {
      body.style.overflow = "hidden";
      body.style.width = "100vw";
      gsap.set("#fullnav", { display: "block", pointerEvents: "auto" });
      gsap.set(".loader", { height: 0 });
      tl.pause(0);
      tl.play(0);
    } else {
      tl.timeScale(1);
      tl.reverse();
    }
  }, [navOpen]);

  // =======================
  // 🟩 PROJECT LINKS
  // =======================
  const projects = [
    {
      title: "Labs",
      moveText1: "Across oceans",
      moveText2: "continent another",
      img1: "https://colossal.com/wp-content/themes/colossal/img/labs/ipsc-1.jpg",
      img2: "https://colossal.com/wp-content/themes/colossal/img/labs/ipsc-3.jpg",
      href: "/lab",
    },
    {
      title: "Company",
      moveText1: "THE WORLD NEEDS",
      moveText2: "TO BE HEALED",
      img1: "https://colossal.com/wp-content/themes/colossal/img/wooly-herd.webp",
      img2: "https://colossal.com/wp-content/themes/colossal/img/ben-lamm-and-george-church.webp",
      href: "/company",
    },
    {
      title: "News",
      moveText1: "GRATITUDE IS",
      moveText2: "IN OUR GENES",
      img1: "https://colossal.com/wp-content/themes/colossal/img/mammoth-cave-painting.webp",
      img2: "https://colossal.com/wp-content/themes/colossal/img/speaking-image-2.jpg",
      href: "https://colossal.com/news/",
    },
    {
      title: "de-extinction",
      moveText1: "world’s definition",
      moveText2: "de-extinction flaw",
      img1: "https://colossal.com/wp-content/themes/colossal/img/deextinction/section-22.jpg",
      img2: "https://colossal.com/wp-content/themes/colossal/img/baby-mammoth-.jpg",
      href: "https://colossal.com/de-extinction/",
    },
  ];

  // =======================
  // 🟩 HANDLE LOGO CLICK
  // =======================
  const handleLogoClick = () => {
    setnavOpen(false);
    window.location.href = "/"; // redirects to homepage
  };

  // =======================
  // 🟩 MARQUEE ANIMATION
  // =======================
  useEffect(() => {
    const rows = gsap.utils.toArray(".movelink");
    const baseSpeed = 180;

    rows.forEach((row) => {
      const moveX = row.querySelector(".moveX");
      if (!moveX) return;

      const clone = moveX.cloneNode(true);
      row.appendChild(clone);

      const width = moveX.offsetWidth;
      const duration = width / baseSpeed;

      const tween = gsap.to(row.children, {
        x: -width,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % -width}px`,
        },
      });

      row.addEventListener("mouseenter", () => tween.pause());
      row.addEventListener("mouseleave", () => tween.play());
    });
  }, []);

  // =======================
  // 🟩 JSX RETURN
  // =======================
  return (
    <div
      ref={FullScreenRef}
      id="fullnav"
      className="h-screen w-full absolute text-amber-50 overflow-hidden z-50 hidden"
    >
      {/* Loader Background */}
      <div className="h-screen w-full fixed z-20">
        <div className="h-full w-full flex flex-row-reverse">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="loader h-full w-1/5 bg-black"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={FullNavRef} className="relative z-30 h-full w-full">
        {/* Header */}
        <div className="navlink flex justify-between items-start w-full">
          {/* 🟨 Logo */}
          <div className="w-[40vw] ml-4 mt-6  md:w-[40vw]">
            <img
              src="https://colossal.com/wp-content/themes/colossal/img/header-logo.png"
              alt="Colossal Logo"
              className="w-[40vw] md:w-[18vw] object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={handleLogoClick}
            />
          </div>

          {/* ❌ Close Button */}
          <div
            onClick={() => setnavOpen(false)}
            className="closeBtn h-[5vw] w-[5vw] relative cursor-pointer mt-7 md:mt-5 mr-10 md:mr-5 flex items-center justify-center z-30 group"
          >
            <div className="absolute w-[0.1vw] h-[12vw] md:h-[5vw] bg-white rotate-45 group-hover:bg-amber-400 transition-colors duration-300"></div>
            <div className="absolute w-[0.1vw] h-[12vw] md:h-[5vw] bg-white -rotate-45 group-hover:bg-amber-400 transition-colors duration-300"></div>
          </div>
        </div>

        {/* Links */}
        <div className="py-[40vw] md:py-15">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.href}
              onClick={() => setnavOpen(false)}
              className={`Link block origin-top ${
                index === projects.length - 1 ? "border-y" : "border-t"
              } border-white relative z-30 overflow-hidden cursor-pointer`}
            >
              <h1 className="font-[font2] leading-[15vw] md:leading-[6.8vw] pt-[1.2vw] text-[12vw] md:text-[8vw] tracking-tighter text-center uppercase">
                {proj.title}
              </h1>

              {/* Moving overlay text */}
              <div className="movelink absolute flex top-0  md:top-0 bg-amber-200 text-black z-30 whitespace-nowrap">
                <div className="moveX flex items-center shrink-0">
                  <h2 className="whitespace-nowrap font-[font2] leading-[7vw] pt-[1vw] text-[18vw] md:text-[8vw]   tracking-tighter uppercase">
                    {proj.moveText1}
                  </h2>
                  <img
                    className="h-[17vw] md:h-[7vw] py-2 w-[30vw] md:w-[13vw] shrink-0 rounded-full object-cover mx-[2vw]"
                    src={proj.img1}
                    alt=""
                  />
                  <h2 className="whitespace-nowrap font-[font2] leading-[7vw] pt-[1vw] text-[18vw] md:text-[8vw] tracking-tighter uppercase">
                    {proj.moveText2}
                  </h2>
                  <img
                    className="h-[17vw] md:h-[7vw] py-2 w-[30vw] md:w-[13vw] shrink-0 rounded-full object-cover mx-[2vw]"
                    src={proj.img2}
                    alt=""
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ======================= */}
        {/* 🟨 Bottom Center Text Line */}
        {/* ======================= */}
        <div className="bottomText absolute bottom-20 md:bottom-10 left-2 md:left-0 right-2 w-[90vw] md:w-full text-center flex justify-center items-center gap-[1vw] md:gap-[8vw] text-[2vw] md:text-[1vw] tracking-wide uppercase font-[font2] text-gray-300 z-30">
          <Time locationName="Austin_" className="text-[1.2vw] uppercase" />

          <span className="mt-0.1 md:mt-2 text-center  ">
            Copyright © 2025 Colossal Inc. All rights reserved.
          </span>

          <div className="flex items-center gap-[4vw] md:gap-[4vw]">
            <a
              href="https://colossal.com/terms-of-use/"
              className="transition-all duration-300 cursor-pointer hover:font-bold hover:scale-[1.03]"
            >
              Terms of Use
            </a>
            <a
              href="https://colossal.com/privacy-policy/"
              className="transition-all duration-300 cursor-pointer hover:font-bold hover:scale-[1.03]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullNav;
