import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

const NewMentor = () => {
  const { newMentor, setNewMentor, handleUpdateMentor, handleCancelMentor } =
    useContext(DataContext);
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text">Mentor Name</label>
          <input
            type="text"
            id="text"
            placeholder="Mentor Name"
            value={newMentor}
            required
            className="form-control"
            onChange={(e) => setNewMentor(e.target.value)}
          />
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button
            className="btn btn-warning mr-2 col-3"
            onClick={handleCancelMentor}
          >
            Cancel
          </button>
          <button
            className="btn btn-success col-3"
            onClick={handleUpdateMentor}
          >
            Save
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default NewMentor;