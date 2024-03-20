/** @format */
import Title from "./Title";
import "../styles/projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project4 from "../assets/images/project4.png";
import project3 from "../assets/images/project3.png";

const Projects = () => {
  return (
    <>
      <Title title="Projects" id="projects" />
      <div className="projects__wrapper">
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">Website</h2>
            <h2 className="project__title--text project__subtitle">
              for ZweiM Bau GmbH Company
            </h2>

            <p className="project__description">
              Website for a company specializing in dry construction. The
              company wanted a simple and minimalist website.
            </p>
            <p className="project__tech">
              <span> Technologies: REACT, CSS, NPM</span>
            </p>
            <a
              className="project__title--text project__link"
              href="https://www.zweimbau.ch/"
            >
              <FontAwesomeIcon icon={faLink} />
              live
            </a>
            <a
              className="project__title--text project__link project__link--github"
              href="https://github.com/martynakiljan/website-zweiMBau"
            >
              <FontAwesomeIcon icon={faCode} />
              code
            </a>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container">
              <div
                className="project__img"
                style={{
                  backgroundImage: `url(${project1})`,
                }}
              />

              <div className="project__mask"></div>
            </div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">App</h2>
            <h2 className="project__title--text project__subtitle">
              Todo List
            </h2>

            <p className="project__description">
              An application that helps you create tasks. You can add a task,
              remove it, mark it as important, move it up or down, or you can
              drag and drop it, you can also mark it as finished!
            </p>
            <p className="project__tech">
              <span> Technologies: REACT, MUI, NPM, CSS</span>
            </p>
            <a
              className="project__title--text project__link"
              href="https://todo-react2-wheat.vercel.app/"
            >
              <FontAwesomeIcon icon={faLink} />
              live
            </a>
            <a
              className="project__title--text project__link project__link--github"
              href="https://github.com/martynakiljan/todo-react"
            >
              <FontAwesomeIcon icon={faCode} />
              code
            </a>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container">
              <div
                className="project__img"
                style={{
                  backgroundImage: `url(${project2})`,
                }}
              />

              <div className="project__mask"></div>
            </div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">Website</h2>
            <h2 className="project__title--text project__subtitle">
              For Foos Event Company
            </h2>

            <p className="project__description">
              A website for cool people who are champions in table football :)
            </p>
            <p className="project__tech">
              <span> Technologies: JAVA SCRIPT, NPM, CSS</span>
            </p>
            <a
              className="project__title--text project__link"
              href="https://www.foos-events.com/"
            >
              <FontAwesomeIcon icon={faLink} />
              live
            </a>
            <a
              className="project__title--text project__link project__link--github"
              href="https://github.com/martynakiljan/foos-football-website"
            >
              <FontAwesomeIcon icon={faCode} />
              code
            </a>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container">
              <div
                className="project__img"
                style={{
                  backgroundImage: `url(${project3})`,
                }}
              />

              <div className="project__mask"></div>
            </div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">App</h2>
            <h2 className="project__title--text project__subtitle">
              Times new york App
            </h2>

            <p className="project__description">
              An application that shows news from around the world
            </p>
            <p className="project__tech">
              <span>
                {" "}
                Technologies: REACT, NPM, CSS, STYLED COMPONENTS, FETCH API
              </span>
            </p>
            <p className="project__title--text project__link">
              <FontAwesomeIcon icon={faLink} />
              no live
            </p>
            <a
              className="project__title--text project__link project__link--github"
              href="https://github.com/martynakiljan/new-york-times-app"
            >
              <FontAwesomeIcon icon={faCode} />
              code
            </a>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container">
              <div
                className="project__img"
                style={{
                  backgroundImage: `url(${project4})`,
                }}
              />

              <div className="project__mask"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
