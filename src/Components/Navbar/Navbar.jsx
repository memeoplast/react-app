import React, { useState, useContext } from "react";
import "./Navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.jpg";
import Switch from "react-switch";
import { ThemeContext } from "../ThemeContext";

const Navbar=() => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return(
        <div className="navbar-bg">
            <div className="navbar">
                <div className="navbar-links">
                    <div className="navbar-links_logo">
                        <a href="#">
                            <img src={logo} alt="company logo"/>
                        </a>
                    </div>
                    <div className="navbar-links_container">
                        <p>
                            <a href="#">
                                Home
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Offers
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Products
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                Pricing
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                About Us
                            </a>
                        </p>
                    </div>
                    <div className="switch"><Switch onChange={toggleTheme} checked={isDark === "dark"} /></div>
                    <div className="navbar-button">
                        <a href="https://giphy.com/gifs/welcome-cult-one-of-us-kHs1lBhZWaK5rj7lt3">
                            <button type="button">CONTACT US</button>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        {isMenuOpen ?(
                            <RiCloseLine
                            color="#000"
                            size={27}
                            onClick={()=> setisMenuOpen(false)}
                        />) : (
                            <RiMenu3Line
                            color="#000"
                            size={27}
                            onClick={()=>setisMenuOpen(true)}
                            />
                        )}
                            {isMenuOpen && (
                                <div className="navbar-menu_container scale-up-center">
                                    <div className="navbar-menu:container-links">
                                    <p>
                                        <a href="#">
                                            Home
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#">
                                            Offers
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#">
                                            Products
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#">
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#">
                                            About Us
                                        </a>
                                    </p>
                                </div>
                                <div className="navbar-menu_container-links-sign">
                                    <a href="#">
                                        <button type="button">CONTACT US</button>
                                    </a>
                                </div>
                                </div>

                            )}

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar
