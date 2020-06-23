import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProjectItem = () => {
  return (
    <Fragment>
      <li style={{ marginTop: "12px" }}>
        <div
          className="collapsible-header"
          style={{
            backgroundColor: "rgb(32, 164, 243)",
            paddingTop: "5px",
            paddingBottom: "7px",
          }}
        >
          <div className="row" style={{ margin: "0px", width: "100%" }}>
            <h5 className="white-text">Title to project</h5>
            <p className="white-text" style={{ margin: "0px" }}>
              Lead:- Lead UserName | Lead Email Address
            </p>
            <Link to="/project" className="blue-text right btn-small white">
              <strong>Open</strong>
            </Link>
          </div>
        </div>
        <div className="collapsible-body" style={{ backgroundColor: "white" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop{" "}
          </p>
        </div>
      </li>
    </Fragment>
  );
};

export default ProjectItem;
