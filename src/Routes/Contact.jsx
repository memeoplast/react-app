import React from "react";
import { Form } from "react-router-dom";
import "./Contact.css";
import Button__link from "../Components/Button/button";

export default function EditContact() {
  return (
    <div className="block__content">
      <Form method="post" id="contact-form">
        <p className="text__default">
          <span>Name</span>
          <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
          />
          <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
          />
        </p>
        <label>
          <span>E-Mail</span>
          <input type="text" name="email" placeholder="jack@gmail.com" />
        </label>
        <label>
          <span>Notes</span>
          <textarea
            name="notes"
            placeholder="Let us know what you think..."
            rows={6}
          />
        </label>
        <p>
          <Button__link text="Save" />
          <Button__link text="Cancel" />
        </p>
      </Form>
    </div>
  );
}
