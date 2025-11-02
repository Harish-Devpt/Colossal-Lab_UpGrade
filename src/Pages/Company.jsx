import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import TextImageSection from "../Components/Product/TextImageSection";
import Feeback from "../Components/Product/Feeback";
import Slider from "../Components/Product/Slider";
import WebFont from "webfontloader";

const Company = () => {
  document.title = "Company";
  const imgDiv = useRef(null);
  const ImgRef = useRef(null);
  const sectionRefs = useRef([]);
  

  const ImageArr = [
    "https://imgs.search.brave.com/Y6_5sbAPnVVVFBVctTiXYsY6NYkAwvJ3C2XilBiIUws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbm4uY29tL2Fw/aS92MS9pbWFnZXMv/c3RlbGxhci9wcm9k/LzExMTc5MC1zY2ll/bnRpc3RzY3JlYXRl/ZGlyZXdvbGYtdGh1/bWItY2xlYW4ucG5n/P2M9MTZ4OSZxPXdf/MTI4MCxjX2ZpbGw",
    "https://images.unsplash.com/photo-1579273175840-512f9e43f993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2032",
    "https://media.gettyimages.com/id/168839791/vector/a-mammoth-standing-among-stones-on-a-hillside.jpg?s=612x612&w=0&k=20&c=ildZBlI1leDojg0wRbfh9eZ45nYN_foL0pPWnFlErtQ=",
    "https://plus.unsplash.com/premium_photo-1667239373174-00ac66927653?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1334",
    "https://media.gettyimages.com/id/492758639/photo/unspecified-megalodon-lamnidae-or-otodontidae-eocene-pliocene-artwork-by-nick-pike.jpg?s=612x612&w=0&k=20&c=r6fPD5Eah3SDHTqBBffE1R-yjOSETCeImyOWuKnoACI=",
    "https://imgs.search.brave.com/113SK7xOfkASxlmnQtbH2HgzyJ_YXVK6sHuyh1a3vb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NTU2MDg2NC92ZWN0/b3IvcXVhZ2dhLXpl/YnJhLWlsbHVzdHJh/dGlvbi0xODk5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1T/ckdzd2N2R2FfMWkz/YXFFZFRGMHVYTTA5/c0pqQVBDaFNuU0VB/SVhRWXU0PQ",
    "https://imgs.search.brave.com/EJDYFWm3AEdFajqkF5DifoEAzJCFCRQuyHrTqS2SATI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9pbWFnZXMt/cHJvZmlsZS1mbG93/LzQwMC9pbWFnZXMt/bWVkaXVtLWxhcmdl/LTUvYS1kaW5vcm5p/cy1naWdhbnRldXMt/Z2lhbnQtbW9hLW1h/cnktZXZhbnMtcGlj/dHVyZS1saWJyYXJ5/LmpwZw",
    "https://imgs.search.brave.com/6cq2EGHE0-47Ad5_A73y5hqd48WUJHVXZ-oU8ippiF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGVz/aW9zYXVyaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9rZWlj/aG91c2F1cnVzbW9u/Z2VyLmpwZw",
    "https://imgs.search.brave.com/u1fJF0OuUPZ3vd0fuh7uk5gSB5z2FKzeI0toDmOtYqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9pbWFnZXMt/cHJvZmlsZS1mbG93/LzQwMC9pbWFnZXMv/YXJ0d29ya2ltYWdl/cy9tZWRpdW1sYXJn/ZS8zL3ZlbG9jaXJh/cHRvci1iYWJ5LWdy/YXBoaWMtYXJ0LWN1/dGUtd2F0ZXJjb2xv/ci1hbmltYWwtZnVu/bnktYWRyaWVuLWVm/cmVuLmpwZw",
    "https://imgs.search.brave.com/KYsphC8CXQj2s0euiL1moVIdpEsMIIZfOhKtTFaCQXY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmx5/ZGlub3NhdXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMC9mb3VyLWdy/YXktZGlub3NhdXJz/LWluLWEtdHJvcGlj/YWwtZm9yZXN0Lmpw/Zw",
    "https://imgs.search.brave.com/Y4BtLV07YHXnhjFrwzYqMNlfhaNNI_sdrDwvHqQCkTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmx5/ZGlub3NhdXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMC9IZXJiaXZv/cm91cy1Ucmlhc3Np/Yy1EaW5vc2F1cnMt/SW4tQS1Gb3Jlc3Qu/anBn",
    "https://imgs.search.brave.com/hb9dEnJTvGjNP-Q53Nhmhuxdr1uEs7oC-B-lP4KVR8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk0/MzgwNjE1L3ZlY3Rv/ci9hLWJyYWNoaW9z/YXVydXMtaGVyZC1n/cmF6aW5nLW9uLXRy/ZWV0b3BzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1uanRh/OFRmZmw1emtCTzls/UzNiTm1MM1Z5RTRB/aUlnN0VWN3E1Ynha/bzVzPQ",
    "https://imgs.search.brave.com/YjnNGq1ILpIAZ6JmmnUSEMNGqes5k2kc0H29W2PFVZQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmx5/ZGlub3NhdXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMC9QbGF0ZW9z/YXVydXMtd2Fsa3Mt/aW4tYS1mb3Jlc3Qu/anBn",
    "https://imgs.search.brave.com/7oAEnElMGyv4UWmzqZBL2TUxOFNnOC30N0yXj8ki_KM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kcmF3aW5nLWRp/bm9zYXVyLXN3aW1t/aW5nLW9jZWFuXzg5/MDE5MS0yOTI2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA",
    "https://imgs.search.brave.com/OA7GL1yaWDuXWmCA6EyI66scYx5mJyeDZ1PS1XrlF_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzRX/R3gzSG5pMlRnNUdG/eGFyQnhLNm0uanBn",


  ];

  const sectionsData = [
    {
      title1: "Ben Lamm",
      title2: "Ben Lamm",
      extraText1: (
        <span className="font-[Merriweather,serif] founder-text">
          Co-founder
        </span>
      ),
      extraText2: (
        <span className="font-[Merriweather,serif] founder-text">
          CEO of Colossal
        </span>
      ),
      image: "/Founder-1.jpg",
    },
    {
      title1: "George Church",
      title2: "George Church",
      extraText1: (
        <span className="font-[Merriweather,serif] text-orange-500 preserve-color">
          American geneticist
        </span>
      ),
      extraText2: (
        <span className="font-[Merriweather,serif] text-orange-500 preserve-color">
          Co-founder
        </span>
      ),
      image:
        "https://www.rollingstone.com/wp-content/uploads/2025/04/direwolf_GRRM_DW_Exclusive_RS.jpg?w=819",
    },
  ];


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const firstSection = sectionRefs.current[0];
    const secondSection = sectionRefs.current[1];
    const feedbackSection = document.querySelector(".feedback-wrapper");

    // ---------- Image Pin & Scroll Animation ----------
    let interval = null;
    if (window.innerWidth > 1024) {
      gsap.to(imgDiv.current, {
        scrollTrigger: {
          trigger: imgDiv.current,
          start: "top 24%",
          end: "top -115%",
          pin: true,
          scrub: true,
          onUpdate: (elem) => {
            const idx =
              elem.progress < 1
                ? Math.floor(elem.progress * ImageArr.length)
                : ImageArr.length - 1;
            ImgRef.current.src = ImageArr[idx];
          },
        },
      });
    }
    else {
       gsap.set(imgDiv.current, { clearProps: "all" });

    let currentIndex = 0;

    const updateImage = () => {
      currentIndex = (currentIndex + 1) % ImageArr.length;
      gsap.set(ImgRef.current, { attr: { src: ImageArr[currentIndex] } });
    };

    interval = setInterval(updateImage, 2000);
    }

    // ---------- Pin Sections ----------
    if (firstSection && secondSection) {
      ScrollTrigger.create({
        trigger: firstSection,
        start: "top top",
        endTrigger: secondSection,
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });
    }
    if (secondSection && feedbackSection) {
      ScrollTrigger.create({
        trigger: secondSection,
        start: "top top",
        endTrigger: feedbackSection,
        end: "top 25%",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onEnter: () => gsap.to(secondSection, { zIndex: 2 }),
        onLeaveBack: () => gsap.to(secondSection, { zIndex: 0 }),
      });
    }

    // ---------- Parallax for 2nd Section ----------
    gsap.fromTo(
      secondSection,
      { yPercent: 0 },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: secondSection,
          start: "center bottom",
          end: "center top",
          scrub: true,
        },
      }
    );

    // ---------- Fade out 1st Section Text ----------
    const fadeTexts = firstSection?.querySelectorAll("h1, h2, p, span");
    if (fadeTexts && secondSection) {
      gsap.to(fadeTexts, {
        opacity: 0,
        scrollTrigger: {
          trigger: secondSection,
          start: "top 65%",
          end: "top 45%",
          scrub: true,
        },
      });
    }

    // ---------- Feedback Section Entrance ----------
    if (feedbackSection) {
      gsap.fromTo(
        feedbackSection,
        { yPercent: 10 },
        {
          opacity: 1,
          yPercent: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feedbackSection,
            start: "top 75%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }

    // ---------- Page-wide smooth background + text color ----------
    if (firstSection) {
      gsap.to("body", {
        backgroundColor: "#000",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: firstSection,
          start: "top 50%",
          end: "top 60%",
          scrub: 1,
        },
      });


      // ---------- Page-wide background + controlled text color + founder quick color ----------
      if (firstSection) {
        // 1) background
        gsap.to("body", {
          backgroundColor: "#000",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: firstSection,
            start: "top 50%",
            end: "top 60%",
            scrub: 1,
          },
        });

        // 2) global text -> white, but SKIP preserved elements
        gsap.utils.toArray("body *").forEach((el) => {
          // only target leaf text nodes, not images or containers
          if (
            el.tagName !== "IMG" &&
            el.children.length === 0 &&
            !el.classList.contains("preserve-color") &&
            !el.classList.contains("founder-text")
          ) {
            gsap.to(el, {
              color: "#fff",
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: firstSection,
                start: "top 50%",
                end: "top 60%",
                scrub: 1,
              },
            });
          }
        });

        // 3) founder-text: FAST toggle when entering firstSection
        // Use duration toggle (not long scrub) so it feels instant.
        const founderTexts = firstSection.querySelectorAll(".founder-text");
        if (founderTexts.length) {
          gsap.fromTo(
            founderTexts,
            { color: "#ffffff" }, // start white
            {
              color: "#f97316", // Tailwind orange-500 hex
              duration: 0.35,   // fast but smooth
              ease: "power2.out",
              scrollTrigger: {
                trigger: firstSection,
                start: "top 92%", // when firstSection is just entering the viewport
                // same point for start & end because we're using toggleActions (time-based)
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }


    }

    // ---------- Hero Section Animation ----------
    const charsHero = document.querySelectorAll(".section-1 .char");
    gsap.to(charsHero, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.5,
      ease: "power4.out",
      stagger: { each: 0.05, from: "start" },
    });

    // ---------- Expertise Titles Animation ----------
    const expertiseChars = document.querySelectorAll(
      ".section-2 .flex > h1 .char, .section-2 .flex > div h1 .char"
    );
    gsap.to(expertiseChars, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power4.out",
      stagger: 0.015,
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 70%",
        toggleActions: "play none none none", 
      },
    });

    // ---------- Paragraph Block Animation ----------
    const paraBlocks = document.querySelectorAll(".section-2 .para-block");
    gsap.to(paraBlocks, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".section-2",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div>
      {/* SECTION 1 */}
      <div className="section-1">
        <div
          ref={imgDiv}
          className="w-[40vw] md:w-[22vw] h-[35vw] md:h-[20vw] absolute top-[45vw] md:top-[12vw] left-[20vw] md:left-[25vw] rounded-3xl overflow-hidden"
        >
          <img
            ref={ImgRef}
            className="h-full w-full object-cover"
            src={ImageArr[0]}
            alt=""
          />
        </div>

        <div className="font-[font2] relative">
          <div className="mt-[68vw] md:mt-[26.5vw]">
            <h1 className="text-[20vw] uppercase leading-[17vw] tracking-tighter text-center overflow-hidden">
              <div className="line-wrapper overflow-hidden">
                {"Modern".split("").map((char, i) => (
                  <span
                    key={i}
                    className="char inline-block -translate-y-full opacity-0"
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="line-wrapper overflow-hidden">
                {"Genesis".split("").map((char, i) => (
                  <span
                    key={i}
                    className="char inline-block -translate-y-full opacity-0 text-[15vw] -tracking-[1.2vw] "
                  >
                    {char}
                  </span>
                ))}
              </div>
            </h1>
          </div>
          <div className="pl-[18%] md:pl-[43%] mt-40 md:mt-20">
            <p className="text-[4vw] md:text-[2.7vw] leading-[4vw] md:leading-[3vw]">
              Colossal Labs is where biology meets imagination. We are pioneering the science of de-extinction using advanced genome engineering, CRISPR technology, and conservation innovation to restore lost species and revive the balance of Earth’s ecosystems. Our curiosity drives our breakthroughs, and our purpose keeps us grounded: to build a future where humanity and nature evolve together, stronger and more resilient than before.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="section-2 h-[40vw] w-full relative z-[1]">
        {/* Expertise Titles */}
        <div className="flex gap-[18vw] md:gap-[20vw] mt-[20vw] md:mt-[12vw] font-[font2]  px-[5vw]">
          <h1 className="text-[5vw] md:text-[1.3vw] font-bold ml-[10vw] overflow-hidden">
            {"Expertise".split("").map((c, i) => (
              <span
                key={i}
                className="char inline-block -translate-y-full opacity-0"
              >
                {c}
              </span>
            ))}
          </h1>
          <div>
            {["De-Extinction", "Evolution", "Innovation", "Creation", "Discovery"].map(
              (word, idx) => (
                <h1
                  key={idx}
                  className="text-[5vw] md:text-[1.3vw] font-bold leading-[5vw] md:leading-[1.5vw] overflow-hidden"
                >
                  {word.split("").map((c, i) => (
                    <span
                      key={i}
                      className="char inline-block -translate-y-full opacity-0"
                    >
                      {c}
                    </span>
                  ))}
                </h1>
              )
            )}
          </div>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col md:flex-row gap-[3vw] mt-[15vw] md:mt-[9vw] font-[font2] px-[6vw]">
          {[
            "Founded in 2021 in Dallas by Ben Lamm and George Church, Colossal began with a single mission: to reverse extinction through science.",
            "From reviving the woolly mammoth to decoding the dodo, our breakthroughs in genome engineering, CRISPR, and reproductive technology are reshaping the boundaries of biology.",
            "To restore lost species, protect biodiversity, and build a sustainable future where innovation and life evolve together.",
          ].map((para, idx) => (
            <div
              key={idx}
              className={`flex-1 px-[2vw] md:px-[${idx === 0 ? 7 : idx === 2 ? 5 : 2
                }vw] text-center md:text-left`}
            >
              <h1 className="text-[3vw] md:text-[1.2vw] leading-snug para-block opacity-0 -translate-y-full">
                {para}
              </h1>
            </div>
          ))}
        </div>

        {/* TextImage Sections */}
        <div>
          {sectionsData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`text-image-section ${index === 0 ? "mt-[15vw]" : ""
                }`}
            >
              <TextImageSection
                title1={item.title1}
                title2={item.title2}
                extraText1={item.extraText1}
                extraText2={item.extraText2}
                image={item.image}
                isFirst={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="feedback-wrapper -mt-[7vw] relative z-[2]">
          <Feeback />
        </div>
      </div>

      {/* Slider */}
      <div className="relative z-10 mt-[670vw] md:mt-[210vw]">
        <Slider />
      </div>
    </div>
  );
};

export default Company;
