import React, { useState, useContext } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import Switch from "react-switch";
import { ThemeContext } from "../ThemeContext";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar__bg">
      <div className="navbar">
        <div className="navbar__navigation">
          <div className="navbar__logo">
            <a href="#">
              <img src={logo} alt="company logo" />
            </a>
          </div>
          <div
            className={`navbar__content ${
              isMenuOpen ? "navbar__content--open" : ""
            }`}
          >
            <div className="navbar__links">
              <a className="navbar__link" href="#">
                Home
              </a>
              <a className="navbar__link" href="#">
                Offers
              </a>
              <a className="navbar__link" href="#">
                Products
              </a>
              <a className="navbar__link" href="#">
                Pricing
              </a>
              <a className="navbar__link" href="#">
                About Us
              </a>
            </div>

            <div className="navbar__button-container">
              <Switch
                className="navbar__theme-switch"
                onChange={toggleTheme}
                checked={isDark}
                onColor="#1f2937"
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
              {/* der button kann eine eigene Komponente werden für Wiederverwendbarkeit (1 button mit href einer mit onclick) */}
              <a href="https://giphy.com/clips/eternalfamilytv-eternal-family-tv-99ers-nFgGB7f0BLqGNcpIyc">
                <button className="button__big" type="button">
                  CONTACT US
                </button>
              </a>
            </div>
          </div>

          <div className="navbar__hamburger-menu">
            {isMenuOpen ? (
              <RiCloseLine
                color="#000"
                size={27}
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <RiMenu3Line
                color="#000"
                size={27}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
          {/* 
            {isMenuOpen && (
              <div className="navbar__hamburger-menu scale-up-center">
                <div className="navbar__hamburger-menu-links">
                  
                    <a className="navbar__link" href="#">
                      Home
                    </a>
                  
                  
                    <a className="navbar__link" href="#">
                      Offers
                    </a>
                  
                  
                    <a className="navbar__link" href="#">
                      Products
                    </a>
                  
                  
                    <a className="navbar__link" href="#">
                      Pricing
                    </a>
                  
                  
                    <a className="navbar__link" href="#">
                      About Us
                    </a>
                  
                </div>
                <div className="navbar__menu-links-sign">
                  <div className="switch__toggle">
                    <Switch
                      className="theme-switch"
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
                    <button className="button__big" type="button">
                      CONTACT US
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
