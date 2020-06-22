import React from "react";

const EditTaskModal = () => {
  return (
    <div id="edit-task-modal" className="modal" style={modalCustom}>
      <div className="modal-content">
        <h4
          className="white-text center"
          style={{ fontFamily: "Philosopher sans-serif" }}
        >
          Edit Task Details
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

          <div className="row">
            <div className="input-field col s12">
              <input
                name="refrences"
                type="text"
                className="white-text"
                style={{ borderBottomColor: "white" }}
              />
              <label htmlFor="refrences" className="active white-text">
                Refrences
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

export default EditTaskModal;
