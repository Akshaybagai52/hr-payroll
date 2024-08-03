import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import AboutUs from '../components/about-us/AboutUs';
import ServiceDetails from '../components/service-details/ServiceDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const HomePage: React.FC = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  return (
    <Router>
      <div className="flex h-screen">
        {!isMobile && <Sidebar />}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/service/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
