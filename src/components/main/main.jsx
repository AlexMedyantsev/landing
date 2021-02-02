import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Header from "../header/header.jsx";
import MainBanner from "../main-banner/main-banner.jsx";
import MySkills from "../my-skills/my-skills.jsx";
import Projects from "../projects/projects.jsx";

class Main extends PureComponent {

  constructor(props) {
    super();

  }

  render() {
    return <React.Fragment>
      <Header/>
      <MainBanner/>
      <MySkills/>
      <Projects/>
    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);