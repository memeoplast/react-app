import React from "react";
import "./Header.css";
const Header = ({
  isDark
}) => {
  return dom("div", {
    className: `block__header ${isDark && "mode--dark"}`,
    id: "Header"
  }, dom("div", {
    className: "block__float-light"
  }, dom("h1", {
    className: "heading__primary"
  }, "InnovaSphere"), dom("h3", {
    className: "heading__secondary"
  })));
};
export default Header;