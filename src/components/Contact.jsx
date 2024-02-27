/** @format */
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTty } from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";

const Contact = () => {
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
            <div class="form__name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              ></input>
            </div>
            <div class="form__email">
              <label for="email"></label>
              <input
                type="text"
                placeholder="My email is"
                name="email"
                id="email_input"
                required
              ></input>
            </div>
          </div>

          <div class="form__number">
            <label for="number"></label>
            <input
              type="text"
              placeholder="My number is"
              name="number"
              id="number_input"
              required
            ></input>
          </div>
          <div class="form__message">
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div class="form__submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
