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
        <h4
          className="left"
          style={{
            color: "rgb(32, 164, 243)",
            fontFamily: "Philosopher sans-serif",
            width: "100%",
          }}
        >
          Team for this Task
        </h4>
        <div className="row" style={{ margin: "0px" }}>
          <TaskTeamItem type={"lead"} />
          <TaskTeamItem type={"assign"} />
          <TaskTeamItem type={"report"} />
        </div>
      </div>
    </div>
  );
};

export default TaskTeamCollection;
