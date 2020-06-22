import React from "react";
import TaskTeamItem from "./TaskTeamItem";

const TaskTeamCollection = () => {
  return (
    <div className="col s8" style={{ height: "100%" }}>
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
            Team for this Task
          </h4>
          <a href="#!" className="right" style={{ marginTop: "25px" }}>
            Click to Edit Team<i className="material-icons left">edit</i>
          </a>
        </div>

        <div className="row" style={{ margin: "0px" }}>
          <TaskTeamItem title={"Task Lead"} />
          <TaskTeamItem title={"Assigned to"} />
          <TaskTeamItem title={"Report to"} />
        </div>
      </div>
    </div>
  );
};

export default TaskTeamCollection;
