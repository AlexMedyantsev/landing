import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Shop extends PureComponent {
  constructor() {
    super();
  }

  render() {
    const {skill} = this.props;

    return (
       <li className="my-skills__item" key={skill.name}>
          <span className="">{skill.name}</span>
          <div class="my-skills__icon" style={{backgroundImage: "url(" + skill.icon +")"}}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);