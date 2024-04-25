/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/menu.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuToggle, openMenu, closeMenu }) => {

  return (
    <>
      <div className="menu">
        <div className="menu__inner">
          <div className="menu__burger" onClick={menuToggle}>
            {openMenu ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
          <div className="menu__logo">
            <div className="menu__emotji">👩‍💻</div>
          </div>

          <div className="menu__social">
            <a
              className="menu__link--social"
              href="https://www.linkedin.com/in/martyna-bogdan-03a7a71a9/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              className="menu__link--social"
              href="https://www.instagram.com/martyna_kili/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="menu__link--social"
              href="https://github.com/martynakiljan"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

      <div className={openMenu ? "menu-toopen open" : "menu-toopen"}>
        <ul className="menu-open__list">
          <li className="menu-open__li">
            {" "}
            <a className="menu-open__link" href="#home" onClick={closeMenu}>
              home
            </a>
          </li>
          <li className="menu-open__li">
            {" "}
            <a className="menu-open__link" href="#skills" onClick={closeMenu}>
              skills
            </a>
          </li>
          <li className="menu-open__li">
            {" "}
            <a className="menu-open__link" href="#projects" onClick={closeMenu}>
              projects
            </a>
          </li>
          <li className="menu-open__li">
            {" "}
            <a className="menu-open__link" href="#contact" onClick={closeMenu}>
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
