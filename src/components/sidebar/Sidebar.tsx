import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { services } from '../../data/serviceData'
import { Link, useLocation } from 'react-router-dom'
import { FacebookFilled, LinkedinFilled,HomeFilled } from '@ant-design/icons'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const [currentKey, setCurrentKey] = useState('')

  useEffect(() => {
    if (location.pathname === '/') {
      setCurrentKey('home')
    } else {
      const match = location.pathname.match(/\/service\/(\d+)/)
      if (match) {
        setCurrentKey(match[1])
      }
    }
  }, [location])

  return (
    <div className='h-full bg-gray-800 text-white flex flex-col'>
      <div className="p-4 flex items-center justify-center bg-gray-900">
        <img src="https://i.ibb.co/3cxsmv3/logo.jpg" alt="Logo" className="w-32 h-auto" />
      </div>
      <Menu
        theme='dark'
        mode='inline'
        selectedKeys={[currentKey]}
        className='h-full relative'
      >
        <Menu.Item key='home'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        {services.map((service, index) => (
          <Menu.Item key={index.toString()}>
            <Link to={`/service/${index}`}>{service.title}</Link>
          </Menu.Item>
        ))}
        <div className='absolute bottom-0 flex right-0 mr-3'>
          <Menu.Item key='facebook' style={{padding: 0}}>
            <Link
              to={`https://www.facebook.com/share/j1rPVAxkJRhjHZhm/?mibextid=qi2Omg`}
              target='_blank'
            >
              <FacebookFilled style={{ fontSize: 30 }} />
            </Link>
          </Menu.Item>
          <Menu.Item key='linkedin' style={{padding: 0}}>
            <Link to={`https://www.linkedin.com/company/nexgen-hr-solutions/`} target='_blank'>
              <LinkedinFilled style={{ fontSize: 30 }} />
            </Link>
          </Menu.Item>
        </div>
      </Menu>
    </div>
  )
}

export default Sidebar
