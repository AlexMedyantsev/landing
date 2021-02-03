import React from 'react';

export default function Project(props) {
  const {project} = props;

  return (
    <li className="projects__item">
      <span className="projects__name">{project.name}</span>
      {project.pages.map(page => {
        return <a
          className="projects__link"
          target="_blank"
          rel="noopener noreferrer"
          href={page.link}
          style={{backgroundImage: "url(" + page.image + ")"}}></a>
      })}
      <ul className="projects__highlights-list">
        {project.skillsUsed.map((skillUsed) => {return <li className="projects__highlights-item">{skillUsed}</li>})}
      </ul>
      <p class="projects__info">{project.info}</p>
    </li>
  )
}
