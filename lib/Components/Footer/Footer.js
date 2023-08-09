import React from "react";
import "../Footer/Footer.css";

// Creating a footer with links
const Footer = () => {
  return dom("div", {
    className: "footer"
  }, dom("div", {
    className: "footer section__padding"
  }, dom("div", {
    className: "footer-links"
  }, dom("div", {
    className: "footer-links-div"
  }, dom("h4", {
    className: "footer-links-headig"
  }, " For Business"), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Employer")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Benefits")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Retreats")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Rewards"))), dom("div", {
    className: "footer-links-div"
  }, dom("h4", {
    className: "footer-links-headig"
  }, " Partners"), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Google")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Microsoft")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Klarna"))), dom("div", {
    className: "footer-links-div"
  }, dom("h4", {
    className: "footer-links-headig"
  }, " Company"), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Team")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Jobs")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "About Us"))), dom("div", {
    className: "footer-links-div"
  }, dom("h4", {
    className: "footer-links-heading"
  }, " Social Media"), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Facebook")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Discord")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Twitter")), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("p", null, "Instagram")))), dom("hr", {
    className: "footer__divider"
  }), dom("div", {
    className: "footer-below"
  }, dom("div", {
    className: "footer-copyright"
  }, dom("p", {
    className: "copyright-info"
  }, "\xA9 ", new Date().getFullYear(), " ", dom("a", {
    className: "link__standard",
    href: "https://github.com/memeoplast"
  }, "NMG."), " ", "All rights reserved.")), dom("div", {
    className: "footer-below-links"
  }, dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("div", null, dom("p", {
    className: "legal-links"
  }, "Terms and Conditions"))), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("div", null, dom("p", {
    className: "legal-links"
  }, "Privacy"))), dom("a", {
    className: "link__standard",
    href: "#"
  }, dom("div", null, dom("p", {
    className: "legal-links"
  }, "Security")))))));
};
export default Footer;