import React, { useContext } from "react";
import Card from "./Card";
import DataContext from "../Context/DataContext";

const Dashboard = () => {
  const { data, students } = useContext(DataContext);
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-center mb-4">
        <h1 className="h1 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        {data.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
      <h2 className="h1 mb-0 text-center text-gray-800">Records</h2>
      {students.length !== 0 ? (
        <>
          <table className="table table-hover table-primary">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Course</th>
                <th scope="col">Mentor</th>
              </tr>
            </thead>
            <tbody>
              {students.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.course}</td>
                  <td>{data.mentor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="text-center h3 text-muted">No students available</p>
      )}
    </>
  );
};

export default Dashboard;