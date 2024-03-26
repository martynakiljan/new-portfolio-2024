/** @format */
import Title from "./Title";
import "../styles/projects.scss";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project4 from "../assets/images/project4.png";
import project3 from "../assets/images/project3.png";
import Project from "./Project";
import MoreProjectsInfo from "./MoreProjectsInfo";

const Projects = () => {
  return (
    <>
      <Title title="Projects" id="projects" />
      <div className="projects__wrapper">
        <Project
          title="Website"
          subtitle="for ZweiM Bau GmbH Company"
          description="Website for a company specializing in dry construction. The
              company wanted a simple and minimalist website."
          technologies="REACT, CSS, NPM"
          hrefLive="https://www.zweimbau.ch/"
          hrefCode="https://github.com/martynakiljan/website-zweiMBau"
          projectUrl={project1}
        />
        <Project
          title="App"
          subtitle="Todo List"
          description="An application that helps you create tasks. You can add a task,
          remove it, mark it as important, move it up or down, or you can
          drag and drop it, you can also mark it as finished!"
          technologies="REACT, MUI, NPM, CSS"
          hrefLive="https://todo-react-indol-psi.vercel.app/"
          hrefCode="https://github.com/martynakiljan/todo-react"
          projectUrl={project2}
        />
        <Project
          title="Website"
          subtitle="For Foos Event Company"
          description="A website for cool people who are champions in table football :)"
          technologies="REACT, MUI, NPM, CSS"
          hrefLive="https://www.foos-events.com/"
          hrefCode="https://github.com/martynakiljan/foos-football-website"
          projectUrl={project3}
        />
        <Project
          title="App"
          subtitle="The New York Times App"
          description="An application that shows news from around the world"
          technologies="REACT, NPM, CSS, STYLED COMPONENTS, FETCH API"
          hrefCode="https://github.com/martynakiljan/the-new-york-times-app/tree/main"
          projectUrl={project4}
        />
        <MoreProjectsInfo />
      </div>
    </>
  );
};

export default Projects;
