import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = () => {
  return (
    <div className="col s4">
      <div className="card-panel hoverable" style={custom}>
        <p
          className="black-text"
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          Title
        </p>
        <Link to="/project">
          <h5
            className="white-text"
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              fontFamily: "Philosopher sans-serif",
            }}
          >
            Title to my project
          </h5>
        </Link>
        <p
          className="black-text"
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          Description
        </p>
        <p
          className="white-text"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            fontFamily: "Philosopher sans-serif",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop{" "}
        </p>
      </div>
    </div>
  );
};

const custom = {
  borderRadius: "10px",
  backgroundColor: "rgb(32, 164, 243)",
  padding: "10px",
  height: "200px",
  overflow: "auto",
};

export default ProjectItem;
