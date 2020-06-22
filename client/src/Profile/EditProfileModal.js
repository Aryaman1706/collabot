import React from "react";

const EditProfileModal = () => {
  return (
    <div id="edit-profile-modal" className="modal" style={modalCustom}>
      <div className="modal-content">
        <h4
          className="white-text center"
          style={{ fontFamily: "Philosopher sans-serif" }}
        >
          Edit Profile
        </h4>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="username"
                type="text"
                className="white-text"
                style={{ borderBottomColor: "white" }}
              />
              <label htmlFor="username" className="active white-text ">
                UserName
              </label>
            </div>
          </div>

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

          <div className="row">
            <div className="input-field col s12">
              <input
                name="phone"
                type="text"
                className="white-text"
                style={{ borderBottomColor: "white" }}
              />
              <label htmlFor="phone" className="active white-text ">
                Phone Number
              </label>
            </div>
          </div>

          <input
            className="waves-effect waves-light btn white black-text modal-close"
            type="submit"
            value="Save Changes"
          />
        </form>
      </div>
    </div>
  );
};

const modalCustom = {
  backgroundColor: "rgb(32, 164, 243)",
  borderRadius: "10px",
  padding: "15px",
};

export default EditProfileModal;
