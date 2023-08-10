import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Button from "../Components/Button/button";

export const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isFromVisible, setIsFormVisible] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    if (!userName) {
      newErrors.user_name = "Name is required";
      isValid = false;
    }

    if (!userEmail) {
      newErrors.user_email = "Email is required";
      isValid = false;
    } else if (!validateEmail(userEmail)) {
      newErrors.user_email = "Invalid E-Mail Address";
      isValid = false;
    }

    if (!message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await emailjs.sendForm(
          "service_giaqmyh",
          "template_poq85d6",
          form.current,
          "2hztsgudSXS9mZwzX"
        );

        console.log("Successfully sent Email");
        setIsFormVisible(false);
        setSuccessMessage(
          "Thank you for your message! Your message was successfully sent!"
        );
      } catch (error) {
        console.log(error.text);
      }
    }
  };

  return (
    <div className="block__content">
      {isFromVisible ? (
        <div className="Form">
          <h2 className="heading__secondary">
            We would love to hear from you!
          </h2>

          <form ref={form} onSubmit={sendEmail}>
            <label className="text__default">Name</label>
            <input className="Form__input" type="text" name="user_name" />
            {errors.user_name && (
              <p className="error-message">{errors.user_name}</p>
            )}
            <label className="text__default">Email</label>
            <input className="Form__input" type="email" name="user_email" />
            {errors.user_email && (
              <p className="error-message">{errors.user_email}</p>
            )}
            <label className="text__default">Message</label>
            <textarea className="text__area-default" name="message" />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
            <input className="button__large" type="submit" value="Send" />
          </form>
        </div>
      ) : (
        <div className="content__text">
          <p className="text__default">{successMessage}</p>
          <Button text="Return Home" url="/" />
        </div>
      )}
    </div>
  );
};
