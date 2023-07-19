import React, { useState } from "react";
import "./Navbar.css";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../assets/logo.jpg";

const Navbar=() => {
    const [toggleMenu, setToggleMenu] = useState(false)
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
                    <div className="navbar-button">
                        <a href="https://giphy.com/gifs/welcome-cult-one-of-us-kHs1lBhZWaK5rj7lt3">
                            <button type="button">CONTACT US</button>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        {toggleMenu ?(
                            <RiCloseLine
                            color="#000"
                            size={27}
                            onClick={()=> setToggleMenu(false)}
                        />) : (
                            <RiMenu3Line
                            color="#000"
                            size={27}
                            onClick={()=>setToggleMenu(true)}
                            />
                        )}
                            {toggleMenu && (
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
