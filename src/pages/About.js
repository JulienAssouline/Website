import React from "react"
import "../styling/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" />
    <div className="about-page-container">
      <h1 className="about-title"> Hi! I'm Julien 👋 </h1>

      <h3 className="description-text">
        I'm a full stack developer. I've recently graduated from Red Academy's
        Full Stack Development program where I learned React, Redux, Apollo,
        GraphQL, PostgreSQL, React Native, and more.
      </h3>
      <p>
        Previously, I've been an intern with CBC where I worked with the
        interactive team as a developer to build applications and visualizations
        on the web. I also worked with reporters and journalists to gather and
        clean data.
        <br />
        <br />
        For my first internship, I was a JavaScript developer with Flourish
        (Flourish is a data visualization software for creating interactive
        visualizations on the web). At Flourish I used JavaScript and D3 to
        build, fix, and improve Flourish templates. I was the lead developer for
        the Chord Diagram and Parliament chart templates.
        <br />
        <br />
        In University I studied journalism at Ryerson University. In 2017 I also
        graduated from the Lede Program for Data Journalism at Columbia
        University where I learned Python and PostgreSQL.
      </p>
    </div>
  </Layout>
)

export default About
