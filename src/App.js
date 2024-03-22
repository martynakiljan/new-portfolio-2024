/** @format */
import React, { useState } from "react";
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
import { Context } from "./context/context";

function App() {
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 700);

    setLoading(true);
  }, []);

  const override = {
    position: "absolute",
    top: "0",
    left: "0",
    transform: "translate(-50%, -50%)",
    width: "50px",
    height: "50px",
  };

  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };

  App.handleClickOutside = () => {
    setOpenMenu(false);
  };

  const setFormErrorsWrapper = (name, value) => {
    setFormErrors({
      ...formErrors,
      [name]: value,
    });
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="App">
      {loading ? (
        <div className="spinner__container">
          <RotateLoader
            cssOverride={override}
            loading={loading}
            color="black"
            className="spinner"
          />
        </div>
      ) : (
        <Context.Provider value={{ setFormErrorsWrapper, formErrors }}>
          <Menu
            menuToggle={menuToggle}
            openMenu={openMenu}
            closeMenu={closeMenu}
          />
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

export default App;
