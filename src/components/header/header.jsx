import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class Header extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <header class="header">
        <ul className="contacts">
          <li className="contacts__item">Почта</li>
          <li className="contacts__item">Телеграм</li>
          <li className="contacts__item">Head Hunter</li>
        </ul>
        <div className="popup-button"></div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);