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
                +41779553234
              </a>
            </div>
          </div>
          {/* //<span className="header__line"></span> */}
          <div className="header__top-contact header__top-email">
            <div className="header__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="header__top-info">
              <span className="header__top-text">Write me:</span>
              <a href="kmartynak@icloud.com" className="header__top-value">
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
            <span className="header__title header__title-">I am </span>{" "}
            <span className="header__title header__title-bold header__title-small">
              an
            </span>{" "}
            <span className="header__title header__title-">ambitious </span>{" "}
            <span className="header__title header__title-bold">frontend</span>{" "}
            <br></br>
            <span className="header__title header__title-italic">
              ingenieur
            </span>
          </div>
          <div className="header__about">
            <button className="header__scroll-down">
              <p className="header__scroll-text">Scroll down</p>
              <div>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </button>
            <p className="header__about-me">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget purus eget nibh aliquet commodo eget non ex. Vestibulum ante
              ipsum primis{" "}
            </p>
          </div>
        </div>
        <div className="header__bottom-col header__photo-box">
          <div className="header__photo">
            <div className="header__photo-img"></div>
            <div className="header__photo-box-with-text">
              <p className="header__photo-title">Hello, I am Martyna </p>
              <p className="header__photo-text">
                I love mountains<br></br>& Traveling! 😎{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
