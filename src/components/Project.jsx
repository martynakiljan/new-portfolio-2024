/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";

const Project = ({
  title,
  subtitle,
  description,
  technologies,
  projectUrl,
  hrefLive,
  hrefCode,
}) => {
  return (
    <div className="projects__project">
      <div className="projects__col projects__col--left">
        <h2 className="project__title--text project__title">{title}</h2>
        <h2 className="project__title--text project__subtitle">{subtitle}</h2>
        <p className="project__description">{description}</p>
        <p className="project__tech">
          <span> 💻 Technologies: {technologies}</span>
        </p>
        <div className="project__links">
          {hrefLive ? (
            <a className="project__title--text project__link" href={hrefLive}>
              <FontAwesomeIcon icon={faLink} />
              live
            </a>
          ) : null}
          <a
            className="project__title--text project__link project__link--github"
            href={hrefCode}
          >
            <FontAwesomeIcon icon={faCode} />
            code
          </a>
        </div>
      </div>
      <div className="projects__col projects__col--right">
        <div className="project__container">
          <div
            className="project__img"
            style={{
              backgroundImage: `url(${projectUrl})`,
            }}
          />
          <div className="project__mask"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
