import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Students from "./Student";
import Mentor from "./Mentor";
import NewMentor from "./NewMentor";
import EditMentor from "./EditMentor";
import NewStudent from "./NewStudent";
import EditStudents from "./Editstudent";

const Content = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        {/* Nav bar */}
        <Nav />
        {/* contents with routes */}
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student" element={<Students />}>
              <Route path="newstudent" element={<NewStudent />} />
              <Route path=":id" element={<EditStudents />} />
            </Route>
            <Route path="/mentor" element={<Mentor />}>
              <Route path="newmentor" element={<NewMentor />} />
              <Route path=":id" element={<EditMentor />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;