import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

class MainBanner extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="main-banner">
       <div class="main-banner__name">Alexey Medyantsev</div>
       <div class="main-banner__my-photo"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MainBanner);