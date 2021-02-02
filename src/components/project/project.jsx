import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Project extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {project} = this.props;

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
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Project);