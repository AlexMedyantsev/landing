import React from 'react';

export default function Skill(props) {
    const {skill} = props;

    return (
       <li className="my-skills__item" key={skill.name}>
          <span className="">{skill.name}</span>
          <div class="my-skills__icon" style={{backgroundImage: "url(" + skill.icon +")"}}></div>
        </li>
    )
}
