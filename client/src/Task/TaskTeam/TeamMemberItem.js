import React, { Fragment } from "react";

const TeamMemberItem = ({ add, edit, lead }) => {
  return (
    <Fragment>
      {!add ? (
        <Fragment>
          {edit ? (
            <div style={custom}>
              {lead ? (
                <a href="#!">
                  <i className="right material-icons white-text">edit</i>
                </a>
              ) : (
                <a href="#!">
                  <i className="right material-icons red-text">delete</i>
                </a>
              )}
              <p style={text}>Username</p>
              <p style={text}>Emailaddress@domain</p>
            </div>
          ) : (
            <div style={custom}>
              <p style={text}>Username</p>
              <p style={text}>Emailaddress@domain</p>
            </div>
          )}
        </Fragment>
      ) : (
        <div>
          <form>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="email"
                  type="email"
                  className="white-text"
                  style={{ borderBottomColor: "white" }}
                />
                <label htmlFor="email" className="active white-text ">
                  Email
                </label>
              </div>
            </div>

            <input
              className="btn white black-text right"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      )}
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
