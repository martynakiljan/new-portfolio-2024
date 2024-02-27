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

function App() {
  const [loading, setLoading] = useState(true);

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

  const [openMenu, setOpenMenu] = useState(false);
  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current?.onclick) {
      setOpenMenu(false);
    }
  }, []);

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
        <>
          <Menu menuToggle={menuToggle} openMenu={openMenu} />
          <Header />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
