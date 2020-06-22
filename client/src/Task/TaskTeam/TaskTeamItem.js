import React, { Fragment } from "react";
import TeamMemberItem from "./TeamMemberItem";

const TaskTeamItem = ({ title, add, edit, lead }) => {
  return (
    <Fragment>
      <div className="col s4">
        <div style={custom}>
          <h5 style={text}>{title}</h5>
        </div>
        <TeamMemberItem add={add} edit={edit} lead={lead} />
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
