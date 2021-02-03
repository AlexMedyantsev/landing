import React, {PureComponent} from "react";
import Header from "../header/header.jsx";
import MainBanner from "../main-banner/main-banner.jsx";
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects.jsx";

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <MainBanner />
      <Skills />
      <Projects />
    </React.Fragment>
  )
}