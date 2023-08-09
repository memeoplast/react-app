import React, { useState, useContext } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import Switch from "react-switch";
import Button from "../Button/button";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    isDark,
    setIsDark
  } = useContext(AppContext);
  const handleScrollToElement = id => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return dom("div", {
    className: "navbar__bg"
  }, dom("div", {
    className: "navbar"
  }, dom("div", {
    className: "navbar__navigation"
  }, dom("div", {
    className: "navbar__logo"
  }, dom(Link, {
    to: "/"
  }, dom("img", {
    src: logo,
    alt: "company logo"
  }))), dom("div", {
    className: `navbar__content ${isMenuOpen ? "navbar__content--open" : ""}`
  }, dom("div", {
    className: "navbar__links"
  }, dom(Link, {
    to: "/",
    onClick: () => handleScrollToElement("Header"),
    className: "navbar__link"
  }, "Home"), dom(Link, {
    to: "/#Offers",
    onClick: () => handleScrollToElement("Offers"),
    className: "navbar__link"
  }, "Offers"), dom(Link, {
    to: "/#Pricing",
    className: "navbar__link",
    onClick: () => handleScrollToElement("Pricing")
  }, "Pricing"), dom(Link, {
    to: "/#AboutUs",
    className: "navbar__link",
    onClick: () => handleScrollToElement("AboutUs")
  }, "About Us")), dom("div", {
    className: "navbar__button-container"
  }, dom(Switch, {
    className: "navbar__theme-switch",
    onChange: () => {
      setIsDark(!isDark);
    },
    checked: isDark,
    onColor: "#000",
    checkedIcon: dom("div", {
      className: "navbar__theme-switch-checked-icon"
    }, dom(BsMoonStarsFill, null)),
    uncheckedIcon: dom("div", {
      className: "navbar__theme-switch-unchecked-icon"
    }, dom(BsSunFill, null))
  }), dom(Button, {
    text: "Contact Us",
    url: "Contact"
  }))), dom("div", {
    className: "navbar__hamburger-menu"
  }, isMenuOpen ? dom(RiCloseLine, {
    color: "6200ee",
    size: 27,
    onClick: () => setIsMenuOpen(false)
  }) : dom(RiMenu3Line, {
    color: "#6200ee",
    size: 27,
    onClick: () => setIsMenuOpen(true)
  })))));
};
export default Navbar;