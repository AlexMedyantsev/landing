import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {skills} from "../../utils/const.js"
import Skill from "../skill/skill.jsx";

class MySkills extends PureComponent {
  constructor() {
    super();
  }

  render() {
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
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MySkills);