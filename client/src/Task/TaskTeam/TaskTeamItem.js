import React, { Fragment } from "react";
import TeamMemberItem from "./TeamMemberItem";
import { Link } from "react-router-dom";

const TaskTeamItem = ({ type }) => {
  let title;
  if (type === "lead") {
    title = "Task Lead";
  } else if (type === "assign") {
    title = "Assigned To";
  } else {
    title = "Report To";
  }

  return (
    <Fragment>
      <div className="col s4">
        <div style={custom}>
          <div className="row" style={{ margin: "0px" }}>
            <h5 style={text}>{title}</h5>
            <Link to="/editTaskTeam" className="right white-text">
              <i className="material-icons left">edit</i>
              <strong>Edit</strong>
            </Link>
          </div>
        </div>
        <TeamMemberItem type={type} />
      </div>
    </Fragment>
  );
};

const custom = {
  borderRadius: "10px",
  backgroundColor: "rgb(32, 164, 243)",
  padding: "10px",
  marginBottom: "20px",
};

const text = {
  marginTop: "2px",
  marginBottom: "2px",
  color: "white",
};

export default TaskTeamItem;
