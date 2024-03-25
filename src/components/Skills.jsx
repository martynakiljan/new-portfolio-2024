/** @format */
import Title from "./Title";
import "../styles/skills.scss";

const Skills = () => {
  return (
    <>
      <Title title="Skills" id="skills" />
      <div className="skills__wrapper skills__wrapper--hard">
        <p className="skill">HTML</p>
        <p className="skill">CSS</p>
        <p className="skill">JAVA SCRIPT</p>
        <p className="skill">REACT</p>
        <p className="skill">TYPE SCRIPT</p>
        <p className="skill">BOOTSTRAP</p>
        <p className="skill">RWD</p>
        <p className="skill">NPM</p>
        <p className="skill">WEBPACK</p>
        <p className="skill">API</p>
        <p className="skill">FIGMA/ADOBE INDESIGN</p>
      </div>
      <p className="skills__and">&</p>
      <div className="skills__wrapper skills__wrapper--soft">
        <p className="skill">I'm ambitious.</p>
        <p className="skill">I manage my time well.</p>
        <p className="skill">I'm going to my destination.</p>
      </div>
    </>
  );
};

export default Skills;
