import { Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Home from './Pages/Home';
import Project from './Pages/Lab';
import Navbar from './Components/Navigation/Navbar';
import FullNav from './Components/Navigation/FullNav';
import NavContext from './Context/NavContext';
import Company from './Pages/Company';
import Lab from './Pages/Lab';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import CSS for smooth scroll

const App = () => {
  const scrollRef = useRef(null);
  const locoScrollInstance = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locoScrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
         multiplier: 10, // optionally adjust speed here
      });
    }

    return () => {
      locoScrollInstance.current?.destroy();
    };
  }, []);

  return (
    <NavContext>
      <Navbar />
      <FullNav />
      <div data-scroll-container ref={scrollRef}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Lab' element={<Lab />} />
        </Routes>
      </div>
    </NavContext>
  );
};

export default App;
