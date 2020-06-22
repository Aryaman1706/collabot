import React from "react";

const AddProjectModal = () => {
  return (
    <div id="add-project-modal" className="modal" style={modalCustom}>
      <div className="modal-content">
        <h4
          className="white-text center"
          style={{ fontFamily: "Philosopher sans-serif" }}
        >
          Add Project
        </h4>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="title"
                type="text"
                className="white-text"
                style={{ borderBottomColor: "white" }}
              />
              <label htmlFor="title" className="active white-text ">
                Title
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="description"
                type="text"
                className="white-text"
                style={{ borderBottomColor: "white" }}
              />
              <label htmlFor="description" className="active white-text ">
                Description
              </label>
            </div>
          </div>

          <input
            className="waves-effect waves-light btn white black-text modal-close"
            type="submit"
            value="Add Project"
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

export default AddProjectModal;
