/** @format */
import React, { useState, useRef } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import "./styles/all.scss";
import { useEffect } from "react";
import RotateLoader from "react-spinners/ClipLoader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import onClickOutside from "react-onclickoutside";
import { Context } from "./context/context";

function App() {
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);

    setLoading(true);
  }, []);

  const override = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current?.onclick) {
      setOpenMenu(false);
    }
  }, []);

  App.handleClickOutside = () => {
    setOpenMenu(false);
  };

  const setFormErrorsWrapper = (name, value) => {
    setFormErrors({
      ...formErrors,
      [name]: value,
    });
  };

  return (
    <div className="App">
      {loading ? (
        <RotateLoader
          cssOverride={override}
          loading={loading}
          color="black"
          className="spinner"
        />
      ) : (
        <Context.Provider value={{ setFormErrorsWrapper, formErrors }}>
          <Menu menuToggle={menuToggle} openMenu={openMenu} />
          <Header />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Context.Provider>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => App.handleClickOutside,
};

export default onClickOutside(App, clickOutsideConfig);
