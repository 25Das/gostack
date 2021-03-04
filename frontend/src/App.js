import "./App.css";

import React, { useState } from "react";

import backgroundImage from "./assets/background.jpeg";
import { Header } from "./components/Header";

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

  function handleAppProject() {
    setProjects([... projects, `Novo projeto ${Date.now()}`])
  }

  return (
    <>
      <Header title = "Projects" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAppProject}>Adicionar projeto</button>
    </>
  )
}

export default App;