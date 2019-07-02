import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"


import "../styling/styles.css"
import Image from "../components/image"
import Header from "../components/header"

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
import seniorcare from "../images/seniorcare.png"


const skills = {
  HTML: "HTML",
  CSS: "CSS",
  JavaScript: "JavaScript",
  Python: "Python",
  React: "React",
  Redux: "Redux",
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


const Projects = () => (
  <div>
    <Header />
      <div className = "main-container">
        <ImageComp skills = {[skills.React_Native, skills.Redux, skills.Apollo, skills.GraphQL, skills.PostgreSQL]} text = {'Seniorcare'} img = {seniorcare} link = {"https://github.com/JulienAssouline/seniorcare"} />
        <ImageComp skills = {[skills.React, skills.Apollo, skills.GraphQL, skills.PostgreSQL]} text = {'hiRED'} img = {hiRED} link = {"https://github.com/JunCLi/hiRED"} />
        <ImageComp skills = {[skills.React, skills.React_Native, skills.Apollo, skills.GraphQL]} text = {'R10'} img = {r10} link = {"/R10/"} />
        <ImageComp skills = {[skills.React, skills.Apollo, skills.GraphQL]} text = {'Dogstagram'} img = {dogstagram} link = {"https://github.com/JulienAssouline/Dogstagram"} />
        <ImageComp skills = {[skills.React, skills.Apollo, skills.GraphQL, skills.PostgreSQL, skills.Canvas]} text = {'Space Explorer'} img = {space_explorer} link = {"https://github.com/JulienAssouline/SpaceExplorer"} />
        <ImageComp skills = {[skills.React, skills.Apollo, skills.GraphQL, skills.PostgreSQL, skills.D3]} text = {'Bazaar Marketplace'} img = {bazaar} link = {"http://ec2-35-183-68-196.ca-central-1.compute.amazonaws.com/"} />
        <ImageComp skills = {[skills.JavaScript, skills.React, skills.D3]} text = {"FiveThirtyEight's endorsement dashboard [Remake]"} img = {FiveThirtyEight} link = {"https://julienassouline.github.io/538_dashboard_remake-/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3, skills.REGL]} text = {"CBC Sunshine List"} img = {sunshine_list} link = {"https://www.cbc.ca/news/canada/toronto/search-ontario-s-2017-sunshine-list-for-yourself-1.4590239"} />
        <ImageComp skills = {[skills.JavaScript, skills.D3]} text = {"Chord Diagram Template for Flourish"} img = {chord_diagram} link = {"https://flourish.studio/2018/07/25/how-to-make-a-chord-diagram/"} />
        <ImageComp skills = {[skills.JavaScript, skills.D3]} text = {"Parliament Template for Flourish"} img = {Flourish_Parliament} link = {"https://flourish.studio/2018/07/06/how-to-make-parliament-chart/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3]} text = {"Who's Still Trading With North Korea?"} img = {North_Korea} link = {"https://julienassouline.github.io/data-studios-projects/North_Korea/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3]} text = {"How long is a baseball players career?"} img = {Baseball_display} link = {"https://julienassouline.github.io/data-studios-projects/Baseball_Life/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3]} text = {"In Acting Categories 92 Percent of Oscar Winners are White"} img = {Oscors_race} link = {"https://julienassouline.github.io/data-studios-projects/Oscors_race/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3]} text = {"360Giving Data Visualization Challenge"} img = {Grant_contest} link = {"https://julienassouline.github.io/data-studios-projects/Grant%20contest/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3]} text = {'The Best Friends in "Friends"'} img = {display_friends} link = {"https://julienassouline.github.io/data-studios-projects/Friends/"} />
        <ImageComp skills = {[skills.JavaScript, skills.Python, skills.D3]} text = {'Video games make terrible movies, so why are they still being made?'} img = {video_games_movies} link = {"https://julienassouline.github.io/data-studios-projects/Movies_based_on_video_games/"} />
      </div>
  </div>
)

export default Projects
