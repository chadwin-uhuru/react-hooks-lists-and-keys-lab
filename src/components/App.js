import "../App.css";
import React from "react";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "My awesome portfolio site.",
    technologies: ["React", "CSS", "HTML"],
  },
  {
    id: 2,
    name: "ToDo App",
    description: "Simple to-do app.",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 3,
    name: "Blog Platform",
    description: "Platform for sharing blogs.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
