/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";

const Header = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="header__top">
          <div className="header__top-contact header__top-phone">
            <div className="header__icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="header__top-info">
              <span className="header__top-text">Call me:</span>
              <a href="tel:+41779553234" className="header__top-value">
                +41 779553234
              </a>
            </div>
          </div>
          <div className="header__top-contact header__top-email">
            <div className="header__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="header__top-info">
              <span className="header__top-text">Write me:</span>
              <a
                href="mailto:kmartynak@icloud.com"
                className="header__top-value"
              >
                kmartynak@icloud.com
              </a>
            </div>
          </div>
        </div>
        <span className="header__bottom-line"></span>
      </div>

      <div className="header__bottom">
        <div className="header__bottom-col">
          <div className="header__left">
            <p className="header__title header__title-">I am </p>{" "}
            <p className="header__title header__title-bold header__title-small header__title-light">
              an
            </p>{" "}
            <p className="header__title header__title-">ambitious </p> <br></br>
            <p className="header__title header__title-bold">frontend</p>{" "}
            <br></br>
            <p className="header__title header__title-italic">developer</p> 
          </div>
          <div className="header__about">
            <a className="header__scroll-down" href="#projects">
              <p className="header__scroll-text">Scroll down</p>
              <div>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </a>
            <p className="header__about-me">
              Hi! Welcome to my little portfolio. My name is Martyna and I am 29
              years old. I am from Poland. I speak very good German. My English
              is still in the process of learning, but I can communicate. I have
              been in the IT industry for 4 years... I love doing it! Please
              check out my projects! There is more on github! You will find the
              link in the upper right corner. I hope you will contact me :)
              Thanks!{" "}
            </p>
          </div>
        </div>
        <div className="header__bottom-col header__photo-box">
          <div className="header__photo">
            <div className="header__photo-img"></div>
            <div className="header__photo-box-with-text">
              <p className="header__photo-title">Hello, I am Martyna </p>
              <p className="header__photo-text">
                I love mountains<br></br>& traveling! 😎{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
