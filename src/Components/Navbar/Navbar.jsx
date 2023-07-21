import React, { useState, useContext } from "react";
import "./Navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.svg";
import Switch from "react-switch";
import { ThemeContext } from "../ThemeContext";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

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
                            <a className="link__navbar" href="#">
                                Home
                            </a>
                        </p>
                        <p>
                            <a className="link__navbar" href="#">
                                Offers
                            </a>
                        </p>
                        <p>
                            <a className="link__navbar" href="#">
                                Products
                            </a>
                        </p>
                        <p>
                            <a className="link__navbar" href="#">
                                Pricing
                            </a>
                        </p>
                        <p>
                            <a className="link__navbar" href="#">
                                About Us
                            </a>
                        </p>
                    </div>


                    <div className="navbar-button">
                    <div className="switch__toggle">

                        <Switch className="theme-switch" 
                        onChange={toggleTheme} 
                        checked={isDark === "dark"}
                        onColor="#1f2937"
                        checkedIcon={
                            <div className="theme-switch__checkedIcon"> 
                                <BsMoonStarsFill />
                            </div>
                        }
                        uncheckedIcon={
                            <div className="theme-switch__uncheckedIcon">
                                <BsSunFill />
                                </div>
                        }
                        
                        />
                        </div>

                        <a href="https://giphy.com/clips/eternalfamilytv-eternal-family-tv-99ers-nFgGB7f0BLqGNcpIyc">
                            <button className="button__big" type="button">CONTACT US</button>
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
                                        <a className="link__navbar" href="#">
                                            Home
                                        </a>
                                    </p>
                                    <p>
                                        <a className="link__navbar" href="#">
                                            Offers
                                        </a>
                                    </p>
                                    <p>
                                        <a className="link__navbar" href="#">
                                            Products
                                        </a>
                                    </p>
                                    <p>
                                        <a className="link__navbar" href="#">
                                            Pricing
                                        </a>
                                    </p>
                                    <p>
                                        <a className="link__navbar" href="#">
                                            About Us
                                        </a>
                                    </p>
                                </div>
                                <div className="navbar-menu_container-links-sign">
                                <div className="switch__toggle">
                                <Switch className="theme-switch" 
                                    onChange={toggleTheme} 
                                    checked={isDark === "dark"}
                                    onColor="#1f2937"
                                    checkedIcon={
                                        <div className="theme-switch__checkedIcon"> 
                                            <BsMoonStarsFill />
                                        </div>
                                    }
                                    uncheckedIcon={
                                        <div className="theme-switch__uncheckedIcon">
                                            <BsSunFill />
                                            </div>
                                    }
                                    
                                />
                                    </div>

                                    <a href="https://giphy.com/clips/eternalfamilytv-eternal-family-tv-99ers-nFgGB7f0BLqGNcpIyc">
                                        <button className="button__big" type="button">CONTACT US</button>
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
