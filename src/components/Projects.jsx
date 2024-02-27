/** @format */
import Title from "./Title";
import "../styles/projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <Title title="Projects" />
      <div className="projects__wrapper" id="projects">
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">
              Project Title
            </h2>
            <h2 className="project__title--text project__subtitle">Website</h2>

            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veni
            </p>
            <h3 className="project__title--text project__link">
              <FontAwesomeIcon icon={faLink} />
              live
            </h3>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container"></div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">
              Project Title
            </h2>
            <h2 className="project__title--text project__subtitle">Website</h2>

            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veni
            </p>
            <h3 className="project__title--text project__link">
              <FontAwesomeIcon icon={faLink} />
              live
            </h3>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container"></div>
          </div>
        </div>
        <div className="projects__project">
          <div className="projects__col projects__col--left">
            <h2 className="project__title--text project__title">
              Project Title
            </h2>
            <h2 className="project__title--text project__subtitle">Website</h2>

            <p className="project__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veni
            </p>
            <h3 className="project__title--text project__link">
              <FontAwesomeIcon icon={faLink} />
              live
            </h3>
          </div>
          <div className="projects__col projects__col--right">
            <div className="project__container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
