import "./App.css";

import React, { useEffect, useState } from "react";

import { Header } from "./components/Header";
import api from "./services/api";



function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  function handleAppProject() {
    setProjects([... projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title = "Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAppProject}>Adicionar projeto</button>
    </>
  )
}

export default App;