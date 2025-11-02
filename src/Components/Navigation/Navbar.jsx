import React, { useContext, useRef, useState, useEffect } from 'react';
import { NavbarContext } from '../../Context/NavContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const NavGreen = useRef(null);
  const [navOpen, setnavOpen] = useContext(NavbarContext);

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <div
      className={`flex fixed top-0 w-full items-start justify-between z-40 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* ===== Logo Section ===== */}
      <div className="ml-4 mt-2 md:mt-6 w-[40vw] sm:w-[30vw] md:w-[20vw]">
        <img
          src="https://colossal.com/wp-content/themes/colossal/img/header-logo.png"
          alt="Colossal Logo"
          className="w-[40vw] sm:w-[25vw] md:w-[18vw] min-w-[100px] object-contain cursor-pointer"
          onClick={handleLogoClick}
        />
      </div>

      {/* ===== Menu Button Section ===== */}
      <div
        onClick={() => setnavOpen(true)}
        onMouseEnter={() => {
          if (window.innerWidth > 768) NavGreen.current.style.height = '100%';
        }}
        onMouseLeave={() => {
          if (window.innerWidth > 768) NavGreen.current.style.height = '0%';
        }}
        className="relative overflow-hidden cursor-pointer bg-black transition-transform duration-300 ease-in-out
          h-[10vw] w-[40vw] sm:h-[6vw] sm:w-[20vw] md:h-[3vw] md:w-[15vw] "
      >
        {/* Hover fill effect */}
        <div
          ref={NavGreen}
          className="bg-green-500 absolute top-0 left-0 w-full h-0 transition-all duration-300 ease-in-out z-10"
        ></div>

        {/* Animation lines (kept identical, scaled with screen size) */}
        <div className="absolute top-[4vw] sm:top-[2vw] md:top-[1.3vw] left-[60%] md:left-[9.3vw] w-[28%] h-[1px] bg-white z-20"></div>
        <div className="absolute top-[6vw] sm:top-[2.8vw] md:top-[1.8vw] left-[70%] md:left-[10.8vw] w-[18%] h-[1px] bg-white z-20"></div>
      </div>
    </div>
  );
};

export default Navbar;
