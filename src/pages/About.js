import React from "react"
import { Link } from "gatsby"
import "../styling/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" />
    <div className = "about-page-container">
      <h1> Hi! I'm Julien 👋 </h1>
      <p>I'm a full stack developer. Currently, I'm learning Full Stack Development at Red Academy where I'm learning React, Redux, Apollo, GraphQL, PostgreSQL, React Native, and more.
      <br/>
      <br/>
      Previously, I've been an intern with CBC where I worked with the interactive team as a developer to build applications and visualizations on the web. I also
      worked with reporters and journalists to gather and clean data.
      <br/>
      <br/>
      For my first internship, I was a JavaScript developer with Flourish (Flourish is a data visualization software for creating interactive visualizations on the web).
      At Flourish I used JavaScript and D3 to build, fix, and improve Flourish templates. I was the lead developer for the Chord Diagram and Parliament chart templates.
      <br/>
      <br/>
      In University I studied journalism at Ryerson University. In 2017 I also graduated from the Lede Program for Data Journalism at Columbia University where I learned Python and PostgreSQL.
      </p>
    </div>
  </Layout>
)

export default About
