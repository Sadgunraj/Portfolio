/** @format */

import React from "react";
import projects from "../data/projects";

function ProjectCard({ project }: { project: any }) {
  return (
    <article className='project-card'>
      <h3>{project.title}</h3>
      <p className='desc'>{project.description}</p>
      <div className='meta'>
        <span>{project.tech.join(" • ")}</span>
        <a href={project.link} className= "btn" target='_blank' rel='noreferrer'>
          Live
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id='projects' className='projects'>
      <h2>Projects</h2>
      <div className='grid'>
        {projects.map((p: any) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
