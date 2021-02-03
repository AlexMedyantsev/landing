import React from 'react';
import {projects} from '../../utils/const.js'
import Project from "../project/project.jsx";

export default function Projects() {
    return (
      <ul class="projects">
        <h2 className="projects__header">My Projects</h2>
        {projects.map(project => {
          return <Project project={project} />
        })}
      </ul>
    )
}
