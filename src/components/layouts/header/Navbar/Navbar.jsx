import React, { useState } from "react";
import menuItems from "./menu-items/MenuItems";
import './index.scss';
import Button from "../../../controls/button/Button";
import logo from '../../../../assets/logo/logo.jpg';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="navbar shadow">
            <h1 className="navbar-logo mb-0">
                <img src={logo} className="img-fluid logo" alt="A1 Consultancy" />
            </h1>
            <div className="menu-icon" onClick={handleClick}>
                <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={active ? "nav-menu ps-0 active" : "ps-0 nav-menu"}>
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
