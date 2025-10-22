/** @format */

import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Background from "./components/Background";

export default function App() {
  const [view, setView] = React.useState<"home" | "projects">("home");

  return (
    <div className='app'>
      <Background />
      <header className='site-header'>
        <h1 className='brand' onClick={() => setView("home")}>
          SADGUN's Work
        </h1>
        <nav>
          <button
            onClick={() => setView("home")}
            className={view === "home" ? "active" : ""}>
            Home
          </button>
          <button
            onClick={() => setView("projects")}
            className={view === "projects" ? "active" : ""}>
            Projects
          </button>
        </nav>
      </header>

      <main className='site-main'>
        {view === "home" ? (
          <Home onViewProjects={() => setView("projects")} />
        ) : (
          <Projects />
        )}
      </main>

      <footer className='site-footer'>
        ©Sadgun {new Date().getFullYear()} — All Rights Reserved
      </footer>
    </div>
  );
}
