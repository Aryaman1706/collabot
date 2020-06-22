import React, { Fragment } from "react";
import TaskItem from "./TaskItem";
import AddTaskModal from "./AddTaskModal";

const TaskCollection = () => {
  return (
    <Fragment>
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
              Included Tasks
            </h4>
            <a
              href="#add-task-modal"
              className="right modal-trigger"
              style={{ marginTop: "25px" }}
            >
              Click to Add Task<i className="material-icons left">add</i>
            </a>
          </div>

          <div className="row" style={{ margin: "0px" }}>
            <TaskItem />
          </div>
        </div>
      </div>

      <AddTaskModal />
    </Fragment>
  );
};

export default TaskCollection;
