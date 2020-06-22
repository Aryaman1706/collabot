import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import TitleCard from "../Project/TitleCard";
import TaskCollection from "../Task/TaskCollection";

const Project = () => {
  return (
    <Fragment>
      <div style={{ height: "100vh" }}>
        <Navbar backTo={"Projects"} link={"/"} />
        <div
          className="row"
          style={{ marginTop: "20px", marginBottom: "20px", height: "85%" }}
        >
          <TitleCard />
          <TaskCollection />
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
