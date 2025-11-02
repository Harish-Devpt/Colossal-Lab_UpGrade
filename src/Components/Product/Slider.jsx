import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const slideRefs = useRef([]);
  const headingRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "woolly mammoth",
      subtitle: "MAMMUTHUS PRIMIGENIUS (8000 -1650 BCE)",
      image:
        "https://imgs.search.brave.com/BkDnt5dT8O8hq4aE9KAoIRbegp6G4x7Gm2pWS_RAgL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwMjkw/NjcuanBn",
      link: "https://colossal.com/mammoth/",
    },
    {
      id: 2,
      title: "tasmanian tiger",
      subtitle: "Thylacinus cynocephalus (1808 - 1936)",
      image:
        "https://imgs.search.brave.com/qd3Echp3pC6KS_-rff-lYTc2pMjWG0rSG8uTTA-v-2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzYxLzkzLzY2/LzM2MF9GXzk2MTkz/NjYyMV9JbUtzUjBO/WUZnTTRIUWxSVnd3/TzZ5VmNUWjF3Rktz/dS5qcGc",
      link: "https://colossal.com/thylacine/",
    },
    {
      id: 3,
      title: "Dodo",
      subtitle: "Raphus cucullatus (1681 - 1824)",
      image: "https://colossal.com/wp-content/themes/colossal/img/species/dodo-5.jpg",
      link: "https://colossal.com/dodo/",
    },
    {
      id: 4,
      title: "MOA",
      subtitle: "Dinornithiformes (1300s)",
      image: "https://colossal.com/wp-content/themes/colossal/img/species/moa-collage.jpg",
      link: "https://colossal.com/moa/",
    },
    {
      id: 5,
      title: "Custom Page",
      subtitle: "Your content here",
      height: "70vh",
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-white p-10 rounded-t-[4vw] relative overflow-hidden">
          {/* Background soft glow */}
          <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl opacity-30 animate-pulse"></div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[4.5vw] md:text-[2vw] font-extrabold mb-5 md:mb-10 tracking-tight text-center uppercase"
          >
            Let's make a better world together. Send me newsletter updates.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm md:text-lg text-center text-gray-300 mb-12 max-w-[80vw] md:max-w-[50vw]"
          >
            After signing up for our newsletter, you may also receive occasional
            surveys and special topical emails from Colossal via email. You
            understand and agree that Colossal may use your information in
            accordance with our Privacy Policy. You can unsubscribe at any time
            by clicking the Unsubscribe button at the bottom of any email you
            receive from Colossal.
          </motion.p>

          {/* Inquiries Section */}
          <div className="flex items-center gap-[15vw] md:gap-[5vw] mb-16 ml-[-5vw] text-[3vw] md:text-[1.5vw] uppercase">
            {[
              { label: "For General Inquiries", email: "mailto:general@colossal.com" },
              { label: "For Press Inquiries", email: "mailto:press@colossal.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.email}
                className="relative text-gray-300 hover:text-white transition-all duration-300 group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="font-medium group-hover:font-semibold transition-all duration-300">
                  {item.label}
                </span>
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex gap-[10vw] ml-[4vw] md:-ml-[3vw] -mt-10 md:mt-5"
          >
            {[
              {
                name: "Facebook",
                link: "https://www.facebook.com/itiscolossal/",
                src: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
              },
              {
                name: "Instagram",
                link: "https://www.instagram.com/colossal/",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
              },
              {
                name: "YouTube",
                link: "https://www.youtube.com/@colossal",
                src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
              },
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/company/colossal/",
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
              },
              {
                name: "X",
                link: "https://x.com/colossal",
                src: "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg",
                forceWhite: true,
              },
            ].map((icon, index) => (
              <motion.a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={icon.src}
                  alt={icon.name}
                  className={`w-15 md:w-14 h-10 md:h-14 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-none md:rounded-2xl ${
                    icon.forceWhite ? "invert brightness-200" : ""
                  }`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Line */}
          <div className="absolute bottom-[2vw] md:bottom-[2vw] left-1/2 -translate-x-1/2 w-full flex flex-wrap md:flex-wrap items-center justify-center gap-[5vw] md:gap-16 text-gray-400 text-[1.8vw] md:text-[1vw] uppercase tracking-wide text-center">
            {[
              { label: "Terms of Use", link: "https://colossal.com/terms-of-use/" },
              { label: "Careers at Colossal", link: "https://colossal.com/careers/" },
              { label: "Advisors", link: "https://colossal.com/advisors/" },
              { label: "Privacy Policy", link: "https://colossal.com/privacy-policy/" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative hover:text-white transition-colors duration-300 cursor-pointer group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-[2px] w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            ))}

            <span className="text-gray-500 text-[2vw] md:text-[0.9vw]">
              © 2025 Colossal Inc. All rights reserved.
            </span>

            <Link to="/" className="ml-[2vw] mb-[2vw] md:mb-1.5">
              <img
                src="https://colossal.com/wp-content/themes/colossal/img/logo-crisper-black.svg"
                alt="logo"
                className="w-[19vw] md:w-[10vw] invert brightness-200 opacity-100 hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    slideRefs.current.forEach((slide) => {
      if (slide) {
        ScrollTrigger.create({
          trigger: slide,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
        });
      }
    });

    if (headingRef.current && slideRefs.current.length > 0) {
      const sliderHeight = slideRefs.current.reduce((acc, slide) => {
        if (!slide) return acc;
        const h = slide.style.height || window.innerHeight;
        return acc + parseInt(h);
      }, 0);

      ScrollTrigger.create({
        trigger: slideRefs.current[0],
        start: "top top",
        end: `+=${sliderHeight}`,
        pin: headingRef.current,
        pinSpacing: false,
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="relative w-full mt-[50vw] bg-transparent">
      {/* 🔥 Pinned Heading */}
      <h1
        ref={headingRef}
        className="absolute top-[10vw] md:top-[2.5vw] left-[24vw] md:left-[41vw] -translate-x-1/2 font-[font1] text-[7vw] md:text-[2vw] uppercase select-none pointer-events-none"
        style={{
          color: "#ff0000",
          textShadow: "0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.5)",
          zIndex: 999999,
          filter: "none",
          mixBlendMode: "normal",
        }}
      >
        Species Index
      </h1>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[index] = el)}
          className={`relative overflow-hidden ${
            index === 0 || index === 4 ? "rounded-t-[4vw]" : ""
          }`}
          style={{ height: slide.height ? slide.height : "100vh" }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {slide.content ? (
            slide.content
          ) : (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              ></div>

              <div className="flex flex-col items-center justify-center h-full w-full gap-4 relative z-10 text-center">
                <h2 className="font-[font2] text-[3vw] md:text-4xl uppercase text-white tracking-widest">
                  {slide.subtitle}
                </h2>

                <div className="relative inline-block group cursor-pointer">
                  {slide.link ? (
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">
                      <h1 className="font-[font2] text-[9vw] md:text-[7vw] uppercase text-white">
                        {slide.title}
                      </h1>
                      <span className="absolute left-0 bottom-[2.4vw] h-[6px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ) : (
                    <>
                      <h1 className="font-[font2] text-[7vw] uppercase text-white">
                        {slide.title}
                      </h1>
                      <span className="absolute left-0 bottom-[2.4vw] h-[6px] bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
