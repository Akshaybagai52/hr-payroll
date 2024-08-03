import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { services } from '../../data/serviceData';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [currentKey, setCurrentKey] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentKey('home');
    } else {
      const match = location.pathname.match(/\/service\/(\d+)/);
      if (match) {
        setCurrentKey(match[1]);
      }
    }
  }, [location]);

  return (
    <div className="h-full bg-gray-800 text-white">
      <Menu theme="dark" mode="inline" selectedKeys={[currentKey]}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        {services.map((service, index) => (
          <Menu.Item key={index.toString()}>
            <Link to={`/service/${index}`}>{service.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;
