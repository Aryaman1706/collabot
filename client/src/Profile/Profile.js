import React, { Fragment } from "react";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
  return (
    <Fragment>
      <div className="col s3" style={{ height: "100%" }}>
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
          <h3
            className="center"
            style={{
              color: "rgb(32, 164, 243)",
              fontFamily: "Philosopher sans-serif",
            }}
          >
            Collabot
          </h3>
          <p
            className="center"
            style={{
              color: "rgb(32, 164, 243)",
              fontFamily: "Philosopher sans-serif",
            }}
          >
            Team Management Solutions
          </p>
          <br />
          <h5
            className="white-text"
            style={{ fontFamily: "Philosopher sans-serif" }}
          >
            Welcome, Username
          </h5>
          <p className="grey-text">Email Address</p>
          <h6
            className="white-text"
            style={{ fontFamily: "Philosopher sans-serif" }}
          >
            myEmailAddress@gmail.com
          </h6>
          <p className="grey-text">Phone Number</p>
          <h6
            className="white-text"
            style={{ fontFamily: "Philosopher sans-serif" }}
          >
            8851418645
          </h6>
          <br />
          <div className="row" style={{ margin: "0px" }}>
            <a href="#edit-profile-modal" className="modal-trigger">
              Edit Profile<i className="material-icons left">edit</i>
            </a>
            <a href="#!" className="right">
              Log Out <i className="material-icons right">exit_to_app</i>{" "}
            </a>
          </div>
        </div>
      </div>
      <EditProfileModal />
    </Fragment>
  );
};

export default Profile;
