import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import AboutUs from '../components/about-us/AboutUs';
import ServiceDetails from '../components/service-details/ServiceDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import useWindowSize from '../hooks/useWindowSize';

const HomePage: React.FC = () => {
  const size = useWindowSize();
  const isMobile = size.width <= 768;
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Router>
      <div className="flex h-screen" >
        {isMobile ? (
          <>
            <Button
              icon={<MenuOutlined />}
              onClick={toggleDrawer}
              className="p-4 fixed top-3 right-3 z-10 "
            />
            <Drawer
              placement="right"
              closable={false}
              onClose={toggleDrawer}
              width="60%"
              visible={drawerVisible}
              bodyStyle={{ padding: 0 }}
            >
              <Sidebar />
            </Drawer>
          </>
        ) : (
          <Sidebar />
        )}
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
