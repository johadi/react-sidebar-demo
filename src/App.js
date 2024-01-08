import {useState} from 'react'
import logo from './logo.svg';
import { Layout, Menu, Button, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {SideBar} from "./SideBar/SideBar";

import './App.css';

function App() {
    const [openNav, setOpenNav] = useState(true);
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <button className="toggle-button" onClick={() => setOpenNav(!openNav)}>
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                    </button>
                </div>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <SideBar className="App-sidebar" isOpen={openNav} onClose={() => setOpenNav(false)} overlay={false} >
                <h2>Mobile Nav</h2>
                <Menu
                    // theme="dark"
                    // style={{backgroundColor: '#20408b', color: '#ffffff'}}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </SideBar>
            <main className="App-main">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
               <div>
                   <a
                       className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer"
                   >
                       Learn React
                   </a>
               </div>
            </main>
        </div>
    );
}

export default App;
