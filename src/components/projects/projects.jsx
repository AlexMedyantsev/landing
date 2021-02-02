import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {projects} from '../../utils/const.js'
import Project from "../project/project.jsx";

class Projects extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <ul class="projects">
        <h2 className="projects__header">My Projects</h2>
        {projects.map(project => {
          return <Project project={project} />
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Projects);