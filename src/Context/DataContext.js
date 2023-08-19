import { createContext, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize.js";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let [toggle, setToggle] = useState(true);
  let { width } = useWindowSize();
  window.addEventListener("resize", () => {
    if (window.innerWidth < 600) {
      setToggle(false);
    } else if (window.innerWidth > 600 && window.innerWidth < 768) {
      setToggle(true);
    }
  });
  let handleToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  let [students, setStudents] = useState([]);
  let [mentorLists, setMentorLists] = useState([]);
  let data = [
    {
      title: "No. of Students",
      value: students.length,
      color: "primary",
      icon: "fa-users",
    },
    {
      title: "No. of Mentors",
      value: mentorLists.length,
      color: "success",
      icon: "fa-chalkboard-user",
    },
  ];
  let [newStudentName, setNewStudentName] = useState("");
  let [editStudentName, setEditStudentName] = useState("");
  let [newMentor, setNewMentor] = useState("");
  let [editMentorName, setEditMentorName] = useState("");
  let [course, setCourse] = useState("");
  let [mentor, setMentor] = useState("");
  let [editcourse, setEditCourse] = useState("");
  let [editMentor, setEditMentor] = useState("");
  let navigator = useNavigate();
  useEffect(() => {
    let students = JSON.parse(localStorage.getItem("students")) || [
      {
        id: 1,
        name: "Surya",
        course: "MERN",
        mentor: "Ramya",
      },
      {
        id: 2,
        name: "Seenu",
        course: "fsd",
        mentor: "Satish",
      },
      {
        id: 3,
        name: "Rithik",
        course: "MERN",
        mentor: "Arul",
      },{
        id:4,
        name: "siva",
        course:"MERN",
        mentor:"Sathish"
      }
    ];
    let mentors = JSON.parse(localStorage.getItem("mentors")) || [
      {
        id: 1,
        name: "Ramya",
      },
      {
        id: 2,
        name: "Satish",
      },
      {
        id: 3,
        name: "Arul",
      },
      {
        id: 4,
        name: "Dheepan",
      },
    ];
    if (window.innerWidth < 600) {
      setToggle(false);
    } else if (window.innerWidth > 600 && window.innerWidth < 768) {
      setToggle(true);
    }
    setStudents(students);
    setMentorLists(mentors);
  }, []);
  let handleSubmit = () => {
    let id = students.length ? students[students.length - 1].id + 1 : 1;
    if (newStudentName === "" || course === "" || mentor === "") {
      alert("Kindly fill all inputs");
    } else {
      let student = {
        id: id,
        name: newStudentName,
        course: course,
        mentor: mentor,
      };
      let allStudents = [...students, student];
      localStorage.setItem("students", JSON.stringify(allStudents));
      setStudents(allStudents);
      setNewStudentName("");
      setCourse("");
      navigator("/student");
    }
  };
  let handleCancel = () => {
    setNewStudentName("");
    setCourse("");
    navigator("/student");
  };
  let handleUpdate = (id) => {
    if (editStudentName === "" || editcourse === "" || editMentor === "") {
      alert("Kindly fill all inputs");
    } else {
      let student = students.find((e) => e.id === id);
      let updatedStudent = {
        id: student.id,
        name: editStudentName,
        course: editcourse,
        mentor: editMentor,
      };
      let newStudents = students.map((student) =>
        student.id === id ? { ...updatedStudent } : student
      );
      setStudents(newStudents);
      localStorage.setItem("students", JSON.stringify(newStudents));
      setEditStudentName("");
      setEditCourse("");
      setEditMentor("");
      navigator("/student");
    }
  };
  let handleDelete = (id) => {
    if (window.confirm("Please confirm to delete") === true) {
      let filteredStudents = students.filter((e) => e.id !== id);
      setStudents(filteredStudents);
      localStorage.setItem("students", JSON.stringify(filteredStudents));
      navigator("/student");
    }
  };

  let handleUpdateMentor = () => {
    let id = mentorLists.length
      ? mentorLists[mentorLists.length - 1].id + 1
      : 1;
    if (newMentor === "") {
      alert("Kindly fill all inputs");
    } else {
      let mentor = {
        id: id,
        name: newMentor,
      };
      let allMentors = [...mentorLists, mentor];
      setMentorLists(allMentors);
      localStorage.setItem("mentors", JSON.stringify(allMentors));
      setNewMentor("");
      navigator("/mentor");
    }
  };
  let handleCancelMentor = () => {
    setNewMentor("");
    navigator("/mentor");
  };
  let handleDeleteMentor = (id) => {
    if (window.confirm("Please confirm to delete") === true) {
      let filteredMentors = mentorLists.filter((e) => e.id !== id);
      setMentorLists(filteredMentors);
      localStorage.setItem("mentors", JSON.stringify(filteredMentors));
      navigator("/mentor");
    }
  };
  let handleEditMentor = (id) => {
    if (editMentorName === "") {
      alert("Kindly Mention Mentors Name");
    } else {
      let mentor = mentorLists.find((e) => e.id === id);
      let updatedMentor = {
        id: mentor.id,
        name: editMentorName,
      };
      let newMentorLists = mentorLists.map((mentor) =>
        mentor.id === id ? { ...updatedMentor } : mentor
      );
      setMentorLists(newMentorLists);
      localStorage.setItem("mentors", JSON.stringify(newMentorLists));
      setEditMentorName("");
      navigator("/mentor");
    }
  };

  return (
    <DataContext.Provider
      value={{
        data,
        handleToggle,
        toggle,
        newStudentName,
        setNewStudentName,
        course,
        setCourse,
        handleSubmit,
        handleCancel,
        students,
        mentor,
        setMentor,
        editStudentName,
        setEditStudentName,
        editcourse,
        setEditCourse,
        editMentor,
        setEditMentor,
        handleUpdate,
        handleDelete,
        newMentor,
        setNewMentor,
        editMentorName,
        setEditMentorName,
        mentorLists,
        setMentorLists,
        handleDeleteMentor,
        handleUpdateMentor,
        handleCancelMentor,
        handleEditMentor,
        width,
        setToggle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;