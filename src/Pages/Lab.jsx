import React, { useEffect } from "react";
import ProjectCard from "../Components/Project/ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

document.title = "Labs";
gsap.registerPlugin(ScrollTrigger);

const Lab = () => {
  const ProjectImg = [
    {
      img1: "https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/human_dna_688px.jpg.webp?itok=_8IU3BGV",
      img2: "https://www.kenhub.com/thumbor/qwoivAlKn014u7AOyrTjIvK-a4k=/fit-in/800x1600/filters:watermark(/images/logo_url.png,-10,-10,0):background_color(FFFFFF):format(jpeg)/images/library/6091/304334264_8cba67ad75_b.jpg",
      title1: "Genome Engineering",
      title2: "Embryology",
      link: "https://colossal.com/labs/",
    },
    {
      img1: "https://stemcellthailand.org/wp-content/uploads/2022/03/stem-cell-culturing-regencenter-2022.jpg",
      img2: "https://bioinformatics.udel.edu/files/2020/01/digital-dna-resize.jpg",
      title1: "Stem Cell Reprogramming",
      title2: "Computational Biology",
      link: "https://colossal.com/labs/",
    },
    {
      img1: "https://www.innovationnewsnetwork.com/wp-content/uploads/2021/04/1-EFSNOUV1-27476-%C2%A9-iStock-luismmolina-696x392.jpg",
      img2: "https://colossal.com/wp-content/themes/colossal/img/labs/section-20-bg.jpg",
      title1: "Cellular Engineering",
      title2: "Animal Husbandry",
      link: "https://colossal.com/labs/",
    },
  ];

  const logos = [
    { src: "https://colossal.com/wp-content/themes/colossal/img/aussie-ark.png", url: "https://www.aussieark.org.au/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/elephant-affiliate-1.png", url: "https://elephanthavens.org/donate/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/rewild-logo-all-white.svg", url: "https://www.rewild.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/wildark.png", url: "https://wildark.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/elephant-affiliate-2.png", url: "https://elephantconservation.org/donate/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/world-elephant-day.png", url: "https://worldelephantday.org/take-action/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/elephant-affiliate-3.png?cache=2", url: "https://aza.networkforgood.com/projects/141748-safe-saving-animals-from-extinction?utm_source=safe_page&utm_medium=square&utm_campaign=annual_appeal&term=safe" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/large-VGP_Tag_RGB_newLogo_72dpi_Dots_EDIT.png", url: "https://vertebrategenomesproject.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/save-elephants.png", url: "https://savetheelephants.org/help-save-elephants/donate/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/elephant-affiliate-mauritian.png", url: "https://www.mauritian-wildlife.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/bonorong.svg?cache=2", url: "https://www.bonorong.com.au/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/big-SEZARC-Logo-cleaned.png", url: "https://sezarc.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/big-zoos%20victoria.png", url: "https://www.zoo.org.au/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/big-ConservartionNation.png", url: "https://conservationnation.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/biorescue.png", url: "https://www.biorescue.org/en/home-0" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/safe.png", url: "https://www.aza.org/safe-species#northamericanbison" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/aesg.png", url: "https://www.asesg.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/rewilding-bw.png", url: "https://globalrewilding.earth/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/WolfConnection-White.png", url: "https://wolfconnection.org/newsletter-signup/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/BirdLife_International_logoWHITE.svg", url: "https://www.birdlife.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/PigeonandDoveSpecialist_Group_White.png", url: "https://iucn.org/our-union/commissions/group/iucn-ssc-pigeon-and-dove-specialist-group" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/Samoa_Conservation_Society.png", url: "https://samoaconservationsociety.com/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/yellowstoneforever.svg", url: "https://www.yellowstone.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/grizzly.png", url: "https://www.grizcam.com/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/untamedplanet.svg", url: "https://www.untamedplanet.earth/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/Pronatura_Noroeste.png", url: "https://pronatura-noroeste.org/en/home-eng/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/conservation/IWCN.png", url: "https://tesf.org/" },
    { src: "https://colossal.com/wp-content/themes/colossal/img/turner.png", url: "https://wildlifecoexistence.org/" },
  ];

  useEffect(() => {
    const setupAnimations = () => {
      // Clear existing triggers before setting up new ones
      ScrollTrigger.getAll().forEach((t) => t.kill());

      if (window.innerWidth > 768) {
        const heroes = gsap.utils.toArray(".hero");

        heroes.forEach((hero) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top 85%",
              end: "bottom top",
              scrub: 1.5,
              ease: "power2.out",
              invalidateOnRefresh: true,
            },
          });

          tl.fromTo(
            hero,
            { height: "250px", opacity: 0.8, scale: 0.98 },
            {
              height: "70vh",
              opacity: 1,
              scale: 1,
              ease: "power3.inOut",
              duration: 1.8,
            }
          );
        });
      }
    };

    setupAnimations();
    window.addEventListener("resize", setupAnimations);

    return () => {
      window.removeEventListener("resize", setupAnimations);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="pt-[35vh] leading-[12vw] md:leading-[8vw]">
        <h1 className="font-[font2] uppercase text-[11vw] md:text-[6vw] pl-[1.5vw]">
          LABORATORY
        </h1>
        <h1 className="font-[font2] uppercase text-[17vw] md:text-[11vw] pl-[1vw]">
          DIVISIONS
        </h1>
      </div>

      {/* Projects Section */}
      <div className="parent p-4">
        {ProjectImg.map((img, idx) => (
          <div
            key={idx}
            className="hero w-full h-[70vh] flex flex-col md:flex-row gap-3 mb-3 overflow-hidden transition-transform duration-700 ease-out relative"
          >
            <ProjectCard
              img1={img.img1}
              img2={img.img2}
              title1={img.title1}
              title2={img.title2}
              index={idx}
              link={img.link}
            />
          </div>
        ))}
      </div>

      {/* Conservation Partners */}
      <div className="font-[font2] w-full bg-black text-white flex flex-col items-center relative py-[6vw] md:py-[3vw]">
        <h1 className="text-[6vw] md:text-[4vw] mb-[4vw]">CONSERVATION PARTNERS</h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-[10vw] md:gap-[2vw] w-[70%] md:w-[80%]">
          {logos.map((logo, i) => (
            <a
              key={i}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={`Partner Logo ${i + 1}`}
                className="w-full aspect-[3/2] object-contain hover:scale-110 hover:opacity-100 opacity-80 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="w-full text-white mt-[3vw] px-[6vw] flex items-center relative min-h-[5vw]">
          <h1 className="text-[3vw] md:text-[1vw] text-center w-full absolute left-[30vw] md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 -translate-y-[.21vw]">
            © 2025 Colossal Inc. All rights reserved.
          </h1>

          <div className="ml-auto w-[20vw] md:w-[15vw] flex items-center justify-end">
            <Link
              to="/"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <img
                className="w-full object-contain brightness-0 invert"
                src="https://colossal.com/wp-content/themes/colossal/img/logo-crisper-black.svg"
                alt="Colossal Logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
