import React, { useRef } from "react";

const ProjectCard = ({
  img1,
  img2,
  title1,
  title2,
  index,
  color1 = "#FFD700",
  color2 = "#00FFFF",
  link = "https://colossal.com/labs/",
}) => {
  const divisionLeft = String(index * 2 + 1).padStart(2, "0");
  const divisionRight = String(index * 2 + 2).padStart(2, "0");

  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  const handleEnter = (e, color, imgRef) => {
    e.target.style.color = color;
    e.target.style.textShadow = `0 0 15px ${color}`;
    if (imgRef.current) imgRef.current.style.transform = "scale(1.1)";
  };

  const handleLeave = (e, imgRef) => {
    e.target.style.color = "white";
    e.target.style.textShadow = "none";
    if (imgRef.current) imgRef.current.style.transform = "scale(1)";
  };

  return (
    <>
      {/* LEFT SIDE */}
      <div className="group relative h-[50vh] md:h-full w-full md:w-[50vw] overflow-hidden transition-all rounded-none hover:rounded-[1.6vw]">
        <img
          ref={imgRef1}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          src={img1}
          alt={title1 || "Project Image 1"}
        />

        <div className="absolute top-0 left-0 bg-black/25 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleEnter(e, color1, imgRef1)}
            onMouseLeave={(e) => handleLeave(e, imgRef1)}
          >
            <h1 className="text-white text-[5vw] md:text-[2.6vw] uppercase font-[font2] transition-all duration-300 ease-out hover:scale-105">
              {title1 || "Untitled Project"}
            </h1>
          </a>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-[3vw] md:text-[1.1vw] uppercase font-[font2] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          Division {divisionLeft}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="group relative h-[50vh] md:h-full w-full md:w-[50vw] overflow-hidden transition-all rounded-none hover:rounded-[1.6vw]">
        <img
          ref={imgRef2}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          src={img2}
          alt={title2 || "Project Image 2"}
        />

        <div className="absolute top-0 left-0 bg-black/25 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => handleEnter(e, color2, imgRef2)}
            onMouseLeave={(e) => handleLeave(e, imgRef2)}
          >
            <h1 className="text-white text-[5vw] md:text-[2.6vw] uppercase font-[font2] transition-all duration-300 ease-out hover:scale-105">
              {title2 || "Untitled Project"}
            </h1>
          </a>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-[3vw] md:text-[1.1vw] uppercase font-[font2] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
          Division {divisionRight}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
