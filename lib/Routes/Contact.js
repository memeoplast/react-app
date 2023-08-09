import React from "react";
import { Form } from "react-router-dom";
import "./Contact.css";
import Button__link from "../Components/Button/button";
export default function EditContact() {
  return dom("div", {
    className: "block__content Form"
  }, dom(Form, {
    method: "post",
    id: "contact-form"
  }, dom("p", {
    className: "text__default"
  }, dom("span", {
    className: "text__default"
  }, "Name"), dom("input", {
    className: "Form__input",
    placeholder: "First name",
    "aria-label": "First name",
    type: "text",
    name: "first"
  }), dom("input", {
    className: "Form__input",
    placeholder: "Last name",
    "aria-label": "Last name",
    type: "text",
    name: "last"
  })), dom("div", null, dom("span", {
    className: "text__default"
  }, "E-Mail"), dom("input", {
    className: "Form__input",
    type: "text",
    name: "email",
    placeholder: "jack@gmail.com"
  })), dom("div", null, dom("p", {
    className: "text__default"
  }, "Notes"), dom("textarea", {
    className: "Form__input",
    name: "notes",
    placeholder: "Let us know what you think...",
    rows: 8
  })), dom("div", {
    className: "Form__buttons"
  }, dom(Button__link, {
    text: "Send"
  }), dom(Button__link, {
    text: "Cancel"
  }))));
}