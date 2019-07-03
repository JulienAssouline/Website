import React from "react"
import { Link } from "gatsby"

import "../styling/styles.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ImageComp from "../components/ImageComp"
import chord_diagram from "../images/Flourish_Chord_diagram.png"
import Flourish_Parliament from "../images/Flourish_Parliament.png"
import FiveThirtyEight from "../images/538.png"
import Baseball_display from "../images/Baseball_display.png"
import Grant_contest from "../images/Grant_contest.png"
import North_Korea from "../images/North_Korea_display.png"
import Oscors_race from "../images/Oscors_race_display.png"
import sunshine_list from "../images/sunshine_list.png"
import display_friends from "../images/display_friends.png"
import video_games_movies from "../images/video_games_movies.png"
import r10 from "../images/r10.png"
import bazaar from "../images/bazaar.png"
import space_explorer from "../images/space_explorer.png"
import dogstagram from "../images/dogstagram.png"
import hiRED from "../images/hiRED.png"

import Logo from "../components/Logo"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';




const skills = {
  HTML: "HTML",
  CSS: "CSS",
  JavaScript: "JavaScript",
  Python: "Python",
  React: "React",
  GraphQL: "GraphQL",
  Apollo: "Apollo",
  React_Native: "React Native",
  D3: "D3",
  PostgreSQL: "PostgreSQL",
  Node: "Node",
  Express: "Express",
  REST_API: "REST API",
  MongoDB: "MongoDB",
  Canvas: "Canvas",
  GreenSock: "GreenSock",
  MapBox_GL: "MapBox GL",
  REGL: "REGL",
  Three: "Three.js",
}



const IndexPage = () => (
  <Layout>
    <div className = "home-container">
      <div className = "hero-text-container">
      <div className="name">
        <svg height="100" width="1000" style = {{strokeWidth: 2}} stroke="#333"  className="text-line">
            <text className = "name-text" x="0" y="80" fill="none" >Hey, I'm Julien Assouline</text>
          </svg>
      </div>
      <p className = "title-description">I'm a Full Stack Developer passionate about building applications, tools, data visualizations and coding, in general, to improve peoples lives and make the world a better place.</p>
      <div className = "icons-container">
            <a href="mailto:julien1993@hotmail.ca"> <FontAwesomeIcon
                    icon={faEnvelope}
                    className = "icon fa-5x"
                    /> </a>
           <a href="https://github.com/JulienAssouline"> <FontAwesomeIcon
                      icon={faGithub}
                      className = "icon fa-5x"
                      /> </a>
          <a href="https://www.linkedin.com/in/julienassouline/"> <FontAwesomeIcon
                    icon={faLinkedin}
                    className = "icon fa-5x"
                    /> </a>

           <a href="https://twitter.com/JulienAssouline"> <FontAwesomeIcon
                      icon={faTwitter}
                      className = "icon fa-5x"
                      /> </a>
          </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
