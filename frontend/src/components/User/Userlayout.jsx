import { AppstoreAddOutlined, BarChartOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Image, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const { Sider, Header, Content, Footer } = Layout;

const items = [
  {
    key: "/app/user/dashboard",
    label: "Dashboard",
    icon: <AppstoreAddOutlined />
  },
  {
    key: "/app/user/report",
    label: "Reports",
    icon: <BarChartOutlined />
  }
]

const Userlayout = () => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleNavigate = (menu) => {
    navigate(menu.key);
  }

  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetIntineStart:0,
    top:0,
    bottom:0,
    scrottbarWidth : 'thin',
    scrottbarGutter: 'stable',
  }

  return (
    <Layout className='min-h-screen!'>
      <Sider collapsible collapsed={open}>
        <div className=' flex items-center justify-center my-4'>
          <Image
            src='/exp-img.jpg'
            width={60}
            height={60}
            alt="logo"
            className="rounded-full mx-auto mb-3"
          />
        </div>
        <Menu
          defaultSelectedKeys={['/app/user/dashboard']}
          theme='dark'
          items={items}
          onClick={handleNavigate}
        />
      </Sider>
      <Layout>
        <Header className='flex items-center justify-between px-5! bg-white! shadow!'>
          <Button
            onClick={() => setOpen(!open)}
            icon={<MenuOutlined />}
          />
          <Button
            icon={<LogoutOutlined />}
          />
        </Header>
      </Layout>
    </Layout>

  )
}

export default Userlayout
