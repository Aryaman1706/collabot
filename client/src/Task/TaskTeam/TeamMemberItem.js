import React, { Fragment } from "react";

const TeamMemberItem = ({ type }) => {
  return (
    <Fragment>
      <div style={custom}>
        <p style={text}>UserName</p>
        <p style={text}>Email Address</p>
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
export default TeamMemberItem;
