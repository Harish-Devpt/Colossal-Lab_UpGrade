import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const feedbackData = [
  { leftText: "Alta Charo", rightText: "Head of Bioethics", imageSrc: "https://www.nti.org/wp-content/uploads/2021/09/charo.png" },
  { leftText: "Aurelia Skipwith", rightText: "Regulatory Affairs Lead", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Vice_President_Mike_Pence_Participates_in_a_Ceremonial_Swearing-in_%2849347561316%29_%28cropped%29.jpg" },
  { leftText: "Beth Shapiro", rightText: "Chief Science Officer", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Beth_Shapiro_-_PopTech_2010_-_Camden%2C_Maine_%285103086839%29_%28cropped%29.jpg" },
  { leftText: "Andrew Pask", rightText: "Chief Biology Officer", imageSrc: "https://museumsvictoria.com.au/media/20614/andrew-pask-headshot.jpg" },
  { leftText: "Sara Ord", rightText: "Director of Biotechnology Innovation", imageSrc: "https://i0.wp.com/reviverestore.org/wp-content/uploads/2023/08/1615773649839-Sara-Ord-1.jpeg?ssl=1" },
  { leftText: "Anna Keyte", rightText: "Species Director", imageSrc: "https://web-summit-avenger.imgix.net/production/avatars/original/107b1cdc3f9f062d191b9ded1deb601def00eda0.jpg?ixlib=rb-3.4.0&auto=format&fit=crop&crop=faces&w=600&h=600" },
  { leftText: "Michael Abrams", rightText: "Species Director", imageSrc: "https://colossal.com/wp-content/uploads/IMG_5429-scaled-e1741731967288-1024x1011.jpg" },
  { leftText: "Brian Beard", rightText: "Co-Founder & Chief Legal Officer", imageSrc: "https://colossal.com/wp-content/uploads/Brian-Beard-Colossal.jpeg" },
  { leftText: "Brandi Cantarel", rightText: "Director Of Bioinformatics", imageSrc: "https://cdn.theorg.com/ce4a9c2d-ac7d-400c-9784-34afd83e0b29_medium.jpg" },
  { leftText: "Sam Singer", rightText: "Chief Financial Officer", imageSrc: "https://colossal.com/wp-content/uploads/Sam-Singer-Photo.jpg" },
  { leftText: "Sarah Grant", rightText: "Chief Of Staff", imageSrc: "https://colossal.com/wp-content/uploads/Screen-Shot-2022-04-04-at-2.03.35-PM-1015x1024-1.jpg" },
  { leftText: "Jillian McCall", rightText: "Marketing Director", imageSrc: "https://cdn.theorg.com/1f14e8a0-5421-445b-9b01-dbc44ab19685_medium.jpg" },
  { leftText: "Amanda Bastawros", rightText: "Head of HR", imageSrc: "https://cdn.theorg.com/fa1aa8fe-efdb-4b44-aa91-c3bb2c574b1d_medium.jpg" },
  { leftText: "Kent Wakeford", rightText: "Special Executive Advisor To The CEO", imageSrc: "https://cdn.theorg.com/c499ffbd-48e6-4890-89fa-c87f7f1ffb1e_medium.jpg" },
  { leftText: "Chris Klee", rightText: "Executive Vice President", imageSrc: "https://colossal.com/wp-content/uploads/Image-from-iOS-1024x1024.jpg" },
  { leftText: "Trevor Snyder", rightText: "Artificial Womb Technology", imageSrc: "https://colossal.com/wp-content/uploads/IMG_5410-2.jpg" },
  { leftText: "Matt James", rightText: "Executive Director", imageSrc: "https://keratnew.s3.us-west-2.amazonaws.com/event-images/Matt+James.png" },
  { leftText: "Andrew Busey", rightText: "Chief Product Officer", imageSrc: "https://colossal.com/wp-content/uploads/andrew-busey.webp" },
];

const Feedback = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="h-auto lg:h-[246vh] w-full bg-black py-[10vw] relative">
      {feedbackData.map((item, i) => (
        <div
          key={i}
          className="relative flex items-center justify-between border-t border-white px-[3vw] py-[3vw] lg:py-[0.9vw] group"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Blue background animation — visible on all screens */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: hoveredIndex === i ? "100%" : 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-0 left-0 w-full bg-blue-600 z-0"
          />

          {/* Left Text */}
          <div className="text-[3vw] lg:text-[2vw] uppercase font-bold font-sans relative z-10 text-white">
            {item.leftText}
          </div>

          {/* Hover Image — only on desktop */}
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                exit={{ clipPath: "inset(0 100% 0 0)" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="hidden lg:block absolute top-0 left-[50vw] -translate-x-1/2 pointer-events-none z-[999] h-[35vw] w-[23vw] rounded-3xl overflow-hidden"
                style={{
                  transform: `translate(-50%, ${
                    i >= feedbackData.length - 3
                      ? i === feedbackData.length - 1
                        ? "-50%"
                        : i === feedbackData.length - 2
                        ? "-45%"
                        : "-40%"
                      : "-20%"
                  })`,
                }}
              >
                <img
                  className="h-full w-full object-cover rounded-3xl"
                  src={item.imageSrc}
                  alt="Hover Visual"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Text */}
          <div className="text-[3vw] lg:text-[2vw] uppercase font-bold font-sans relative z-10 text-white">
            {item.rightText}
          </div>
        </div>
      ))}
      <div className="border-b border-white"></div>
    </div>
  );
};

export default Feedback;
