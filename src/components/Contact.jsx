/** @format */
import { useState, useContext, useEffect } from "react";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty } from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";
import {
  validateName,
  validateNumber,
  validateEmail,
  validateMessage,
} from "../assets/validateErrors.js";
import { Context } from "../context/context";
import Error from "./Error";

const Contact = () => {
  const defaultFormData = {
    fname: "",
    email: "",
    number: "",
    message: "",
  };

  const [formData, setFormData] = useState(defaultFormData);
  const { formErrors, setFormErrorsWrapper } = useContext(Context);

  const validateInput = (name, value) => {
    switch (name) {
      case "fname":
        validateName(value, setFormErrorsWrapper);
        break;
      case "number":
        validateNumber(value, setFormErrorsWrapper);
        break;
      case "email":
        validateEmail(value, setFormErrorsWrapper);
        break;
      case "message":
        validateMessage(value, setFormErrorsWrapper);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e, name, value) => {
    e.preventDefault();
    validateInput(name, value);
    setFormData((formData) => ({ ...formData, [name]: value }));
    isValidForm();
  };

  const isValidForm = () => {
    if (formErrors) {
      return Object.values(formErrors).every(
        (currentValue) => currentValue === ""
      );
    }
  };

  const isEmptyForm = () => {
    return Object.entries(formData).every(([k, v]) => v !== "");
  };


  return (
    <>
      <Title title="Lets talk"></Title>
      <div className="form__wrapper" id="contact">
        <form className="form">
          <h1 className="form__title">&bull; Keep in Touch &bull;</h1>
          <div className="form__icon">
            <FontAwesomeIcon icon={faTty} />
          </div>
          <div className="form__row">
            <div className="form__name">
              <label forhtml="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="fname"
                id="name_input"
                value={formData.fname}
                onChange={(e) => handleSubmit(e, e.target.name, e.target.value)}
              ></input>
            </div>
            <div className="form__email">
              <label forhtml="email"></label>
              <input
                type="text"
                placeholder="My email is"
                name="email"
                id="email_input"
                value={formData.email}
                onChange={(e) => handleSubmit(e, e.target.name, e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form__number">
            <label forhtml="number"></label>
            <input
              type="text"
              placeholder="My number is"
              name="number"
              id="number_input"
              value={formData.number}
              onChange={(e) => handleSubmit(e, e.target.name, e.target.value)}
            ></input>
          </div>
          <div className="form__message">
            <label forhtml="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              value={formData.message}
              onChange={(e) => handleSubmit(e, e.target.name, e.target.value)}
              cols="50"
              rows="5"
            ></textarea>
          </div>
          {formErrors && <Error formErrors={formErrors} />}
          <div className="form__submit">
            <button
              id="form_button"
              disabled={!isEmptyForm() || !isValidForm()}
            >
              SEND MESSAGE!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
