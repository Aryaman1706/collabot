import React, { Fragment } from "react";

import ProjectItem from "./ProjectItem";
import AddProjectModal from "./AddProjectModal";

const ProjectCollection = () => {
  return (
    <Fragment>
      <div className="col s9" style={{ height: "100%" }}>
        <div
          className="card-panel"
          style={{
            overflow: "auto",
            padding: "10px",
            borderRadius: "10px",
            margin: "0px",
            height: "100%",
            backgroundColor: "rgb(1, 22, 39)",
          }}
        >
          <div className="row" style={{ margin: "0px" }}>
            <h4
              className="left"
              style={{
                color: "rgb(32, 164, 243)",
                fontFamily: "Philosopher sans-serif",
              }}
            >
              Projects
            </h4>
            <a
              href="#add-project-modal"
              className="right modal-trigger"
              style={{ marginTop: "25px" }}
            >
              Click to Add Projects<i className="material-icons left">add</i>
            </a>
          </div>
          <ul className="collapsible popout" style={{ border: "0" }}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </ul>
        </div>
      </div>

      <AddProjectModal />
    </Fragment>
  );
};

export default ProjectCollection;
