/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurst } from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";

const Project = ({ title, id }) => {
  return (
    <div className="title__wrapper" id={id} >
      <div className="title__inner">
        <h1 className="title">
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title} <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title} <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title} <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title} <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title} <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
          {title} {title} {title}
          <FontAwesomeIcon icon={faBurst} />
        </h1>
      </div>
    </div>
  );
};

export default Project;
