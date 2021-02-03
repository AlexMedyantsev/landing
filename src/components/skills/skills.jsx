import React from 'react';
import {skills} from "../../utils/const.js"
import Skill from "../skill/skill.jsx";

export default function MySkills() {
  return (
    <article className="my-skills">
      <span className="my-skills__header">My Skills</span>
      <ul className="my-skills__list">
        {skills.map(skill => {
          return <Skill skill={skill} />
        })}
      </ul>
    </article>
  )
}