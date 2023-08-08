import React, { useState, useContext } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import Switch from "react-switch";
import Button__link from "../Button/button";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isDark, setIsDark } = useContext(AppContext);

  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
  };

  const handleScrollToElement = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar__bg">
      <div className="navbar">
        <div className="navbar__navigation">
          <div className="navbar__logo">
            <Link to={"/"}>
              <img src={logo} alt="company logo" />
            </Link>
          </div>
          <div
            className={`navbar__content ${
              isMenuOpen ? "navbar__content--open" : ""
            }`}
          >
            <div className="navbar__links">
              <Link
                to={"/"}
                onClick={handleScrollToElement}
                className="navbar__link"
              >
                Home
              </Link>
              <Link
                to={"/#Offers"}
                onClick={() => handleScrollToElement("Offers")}
                className="navbar__link"
              >
                Offers
              </Link>
              <Link
                to={"/#Pricing"}
                className="navbar__link"
                onClick={() => handleScrollToElement("Pricing")}
              >
                Pricing
              </Link>
              <Link
                to={"/#AboutUs"}
                className="navbar__link"
                onClick={() => handleScrollToElement("AboutUs")}
              >
                About Us
              </Link>
            </div>

            <div className="navbar__button-container">
              <Switch
                className="navbar__theme-switch"
                onChange={handleDarkModeToggle}
                checked={isDark}
                onColor="#000"
                checkedIcon={
                  <div className="navbar__theme-switch-checked-icon">
                    <BsMoonStarsFill />
                  </div>
                }
                uncheckedIcon={
                  <div className="navbar__theme-switch-unchecked-icon">
                    <BsSunFill />
                  </div>
                }
              />
              <Button__link text="Contact Us" url="Contact" />
            </div>
          </div>

          <div className="navbar__hamburger-menu">
            {isMenuOpen ? (
              <RiCloseLine
                color="6200ee"
                size={27}
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <RiMenu3Line
                color="#6200ee"
                size={27}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
