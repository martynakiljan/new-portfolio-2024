/** @format */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurst } from "@fortawesome/free-solid-svg-icons";
import "../styles/all.scss";

const Project = ({ title, id }) => {
  const repetitions = 5;

  return (
    <div className="title__wrapper" id={id}>
      <div className="title__inner">
        <h1 className="title">
          {Array.from({ length: repetitions }, (_, index) => (
            <React.Fragment key={index}>
              <FontAwesomeIcon icon={faBurst} />
              {title} {title}
            </React.Fragment>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Project;
