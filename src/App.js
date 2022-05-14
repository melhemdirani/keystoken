import React, { useLayoutEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import './App.style.scss';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import AllProjects from './pages/AllProjects/AllProjects';
import Menu from './assets/images/menu.png'
import Navbar from './components/Navbar/Navbar';
import AboutusPage from './pages/AboutusPage/AboutusPage';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import ContactUs from './components/ContactUs/ContactUs';
import BusinessVertical from './pages/BusinessVertical/BusinessVertical';


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const closeMenu = () => {
    setShowMenu(false)
  }
  const handleMenuClick=()=> {
    setShowMenu(!showMenu)
  }
  return (
    <div className="App">
    <Navbar />
    <Wrapper>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="video" element={<VideoPlayer />} />
        <Route path="BusinessVerticals" element={<BusinessVertical />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="projects" element={<AllProjects />} />
        <Route path="Aboutus" element={<AboutusPage />} />
        <Route path="projects/:projectid" element={<ProjectPage />} />
      </Routes>
    </Wrapper>
    <Footer />
    </div>
  );
}

export default App;
