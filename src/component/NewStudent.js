import React, { useContext } from "react";
import DataContext from "../Context/DataContext";

const NewStudent = () => {
  const {
    newStudentName,
    setNewStudentName,
    course,
    setCourse,
    mentor,
    setMentor,
    handleSubmit,
    handleCancel,
    mentorLists,
  } = useContext(DataContext);
  return (
    <>
      <form className="NewTask" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            placeholder="Name"
            value={newStudentName}
            required
            className="form-control"
            onChange={(e) => setNewStudentName(e.target.value)}
          />
        </div>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="time">Course</label>
          <select
            name="course"
            id="course"
            required
            value={course}
            className="form-control"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Course</option>
            <option value="MERN">MERN Stack</option>
            <option value="MEAN">MEAN Stack</option>
            <option value="MEVN">MEVN Stack</option>
            <option value="DevOps">DevOps</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div className="form-group d-flex align-items-baseline flex-column">
          <label htmlFor="mentor">Mentor</label>
          <select
            name="mentor"
            id="mentor"
            required
            mentor={mentor}
            className="form-control"
            onChange={(e) => setMentor(e.target.value)}
          >
            <option value="">Mentor</option>
            {mentorLists.map((e, i) => (
              <option key={i} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group row d-flex align-items-center justify-content-center g-2">
          <button className="btn btn-warning mr-2 col-3" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-success col-3" onClick={handleSubmit}>
            Save
          </button>
        </div>
        <hr />
      </form>
    </>
  );
};

export default NewStudent;