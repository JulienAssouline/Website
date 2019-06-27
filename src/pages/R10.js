import React from "react"
import { Link } from "gatsby"
import "../styling/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import schedule from "../R10_images/schedule.png"
import session from "../R10_images/session.png"
import speaker from "../R10_images/speaker.png"
import speaker_2 from "../R10_images/speaker_2.png"
import map from "../R10_images/map.png"
import faves from "../R10_images/faves.png"
import about from "../R10_images/about.png"
import about_acordian from "../R10_images/about_acordian.png"


const R10 = () => (
  <Layout>
    <SEO title="R10" />
    <div className = "r10-container">
      <h1> R10 </h1>
      <p> R10 is a react native conference app. It is getting data from
        a publicaly available graphql end point made by Red Academy. The code for this project
        can be found on my github repo <a className = "r10-github-link" href = "https://github.com/JulienAssouline/R10">HERE</a>.
        This was mainly a frontend project. </p>
      <div className = "r10_image_conatiner">
        <img className = "r10_img" src = {schedule} alt="chord_diagram"/>
        <img className = "r10_img" src = {session} alt="chord_diagram"/>
        <img className = "r10_img" src = {speaker} alt="chord_diagram"/>
        <img className = "r10_img" src = {speaker_2} alt="chord_diagram"/>
        <img className = "r10_img" src = {map} alt="chord_diagram"/>
        <img className = "r10_img" src = {faves} alt="chord_diagram"/>
        <img className = "r10_img" src = {about} alt="chord_diagram"/>
        <img className = "r10_img" src = {about_acordian} alt="chord_diagram"/>
    </div>
    </div>
  </Layout>
)

export default R10
