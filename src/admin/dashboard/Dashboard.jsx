import React from 'react';
import './dashboard.scss';
import logo from '../../assets/logo/a1-logo1.png';
import { MessageOutlined, UnorderedListOutlined, AppstoreAddOutlined, DashboardOutlined, FileAddOutlined, FileTextOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logout clicked");
        sessionStorage.clear();
        navigate('/admin/login');
    };

    const items = [
        {
            key: '1',
            icon: React.createElement(DashboardOutlined),
            label: <Link className='text-decoration-none' to="/admin/dashboard">Dashboard</Link>,
        },
        {
            key: '2',
            icon: React.createElement(FileAddOutlined),
            label: <Link className='text-decoration-none' to="/admin/dashboard/add-blog">Add Blog</Link>,
        },
        {
            key: '3',
            icon: React.createElement(FileTextOutlined),
            label: <Link className='text-decoration-none' to="/admin/dashboard/blogs">Blog List</Link>,
        },
        {
            key: '4',
            icon: React.createElement(AppstoreAddOutlined),
            label: <Link className='text-decoration-none' to="/admin/dashboard/add-category">Add Category</Link>,
        },
        {
            key: '5',
            icon: React.createElement(UnorderedListOutlined),
            label: <Link className='text-decoration-none' to="/admin/dashboard/categories">Category List</Link>,
        },
        {
            key: '6',
            icon: React.createElement(MessageOutlined),
            label: <Link className='text-decoration-none' to="/admin/dashboard/comments">Comments List </Link>,
        },
        {
            key: '7',
            icon: React.createElement(LogoutOutlined),
            label: 'Logout',
            onClick: handleLogout,
        },
    ];

    return (
        <div className='dashboard'>
            <div className='row'>
                <div className='col-md-2 bg-light custom-height shadow pe-0'>
                    <div className='sidebar'>
                        <div className='logo-container mt-md-4'>
                            <img className='img-fluid' src={logo} alt="logo" />
                            <h3 className='text-center mt-md-2'> Admin Access </h3>
                            <Sider
                                breakpoint="lg"
                                collapsedWidth="0"
                                onBreakpoint={(broken) => {
                                    console.log(broken);
                                }}
                                onCollapse={(collapsed, type) => {
                                    console.log(collapsed, type);
                                }}
                            >
                                <div className="demo-logo-vertical" />
                                <Menu
                                    theme="light"
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    items={items}
                                />
                            </Sider>
                        </div>
                    </div>
                </div>
                <div className='col-md-10 p-3 pe-4'>
                    <div className='main-content'>
                        {/* Main content goes here */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
