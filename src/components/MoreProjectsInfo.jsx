/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const MoreProjectsInfo = () => {
  return (
    <a
      className="more-projects__container"
      href="https://github.com/martynakiljan?tab=repositories"
    >
      <p className="more-projects__text">
        More projects:{" "}
        <span className="more-projectes__text--second"> click me!</span>
        <FontAwesomeIcon icon={faGithubAlt} />
      </p>
    </a>
  );
};

export default MoreProjectsInfo;
