import React, { useState } from "react";
import menuItems from "./menu-items/MenuItems";
import './index.scss';
// import Button from "../../../controls/button/Button";
import logo from '../../../../assets/logo/logo.jpg';
import { slide as Menu } from 'react-burger-menu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    let styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '30px',
            height: '30px',
            right: '15px',
            top: '27px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: '100%',
            top: '0px'
        },
        bmMenu: {
            background: '#192276',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            // color: '#ffffff',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block',
            color: '#ffffff'
        },
        bmOverlay: {
            background: '#192276'
        }
    };

    return (
        <nav className="navbar shadow">
            <h1 className="navbar-logo mb-0">
                <img src={logo} className="img-fluid logo" alt="A1 Consultancy" />
            </h1>
            <div className="menu-icon" onClick={handleMenuToggle}>
                <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className="burger-menu">
                <Menu styles={styles} right isOpen={menuOpen} onStateChange={({ isOpen }) => setMenuOpen(isOpen)}>
                    {menuItems.map((item, index) => (
                        <a key={index} className={item.cName} href={item.url}>{item.title}</a>
                    ))}
                </Menu>
            </div>
            {/* Your existing menu */}
            <ul className={menuOpen ? "nav-menu ps-0 active" : "ps-0 nav-menu"}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {/* <Button>SIGN UP</Button> */}
        </nav>
    );
};

export default Navbar;
