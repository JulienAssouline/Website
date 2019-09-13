import React from "react"
import { Link } from "gatsby"

import "../styling/styles.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Background from "../components/Background"

import Logo from "../components/Logo"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/fontawesome-free-brands"

const IndexPage = () => (
  <Layout>
    <div className="home-container">
      <div className="hero-text-container">
        <div className="name">
          <svg
            height="100"
            width="1000"
            style={{ strokeWidth: 2 }}
            stroke="#333"
            className="text-line"
          >
            <text className="name-text" x="0" y="80" fill="none">
              Hey, I'm Julien Assouline
            </text>
          </svg>
        </div>
        <p className="title-description">
          I'm a Full Stack Developer passionate about building applications,
          tools, data visualizations and coding, in general, to improve peoples
          lives and make the world a better place.
        </p>
        <div className="icons-container">
          <a href="mailto:julien1993@hotmail.ca">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} className="icon fa-5x" />{" "}
          </a>
          <a href="https://github.com/JulienAssouline">
            {" "}
            <FontAwesomeIcon icon={faGithub} className="icon fa-5x" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/julienassouline/">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} className="icon fa-5x" />{" "}
          </a>

          <a href="https://twitter.com/JulienAssouline">
            {" "}
            <FontAwesomeIcon icon={faTwitter} className="icon fa-5x" />{" "}
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
