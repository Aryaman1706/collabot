import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import TaskTeamItem from "../Task/TaskTeam/TaskTeamItem";

const Team = () => {
  return (
    <Fragment>
      <div style={{ height: "100vh" }}>
        <Navbar backTo={"title of open project"} link={"/project"} />
        <div className="container" style={custom}>
          <div className="row">
            <TaskTeamItem
              title={"Project Lead"}
              add={false}
              edit={true}
              lead={true}
            />
            <TaskTeamItem title={"Team"} add={false} edit={true} lead={false} />
            <TaskTeamItem
              title={"Add New"}
              add={true}
              edit={false}
              lead={false}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const custom = {
  backgroundColor: "rgb(1, 22, 39)",
  marginTop: "20px",
  marginBottom: "20px",
  height: "85%",
  overflow: "auto",
  borderRadius: "10px",
  padding: "15px",
};

export default Team;
