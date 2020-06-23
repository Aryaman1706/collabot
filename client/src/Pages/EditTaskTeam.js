import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";

const EditTaskTeam = () => {
  return (
    <Fragment>
      <div style={{ height: "100vh" }}>
        <Navbar />
        <div className="container" style={{ height: "100%" }}>
          <div
            className="row"
            style={{ marginTop: "20px", marginBottom: "20px", height: "85%" }}
          >
            <div className="col s6" style={{ height: "100%" }}>
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
                Panel 1
              </div>
            </div>
            <div className="col s6" style={{ height: "100%" }}>
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
                Panel 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTaskTeam;
