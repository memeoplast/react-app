import React from "react";
import { Form } from "react-router-dom";
import "./Contact.css";
import Button__link from "../Components/Button/button";

export default function EditContact() {
  return (
    <div className="block__content Form">
      <Form method="post" id="contact-form">
        <p className="text__default">
          <span className="text__default">Name</span>
          <input
            className="Form__input"
            placeholder="First name"
            aria-label="First name"
            type="text"
            name="first"
          />
          <input
            className="Form__input"
            placeholder="Last name"
            aria-label="Last name"
            type="text"
            name="last"
          />
        </p>
        <div>
          <span className="text__default">E-Mail</span>
          <input
            className="Form__input"
            type="text"
            name="email"
            placeholder="jack@gmail.com"
          />
        </div>
        <div>
          <p className="text__default">Notes</p>
          <textarea
            className="Form__input"
            name="notes"
            placeholder="Let us know what you think..."
            rows={8}
          />
        </div>
        <div className="Form__buttons">
          <Button__link text="Send" />
          <Button__link text="Cancel" />
        </div>
      </Form>
    </div>
  );
}
