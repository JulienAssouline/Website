import React from "react"
import { Link } from "gatsby"
import "../styling/styles.css"


function ImageComp(props) {
  return (
    <div className = "image-container">
      <div className = "link-container">
      <a href = {props.link}><img className = "image" src={props.img} alt="chord_diagram" /> </a>
      <a href = {props.link}><p className="post-title"> {props.text} </p></a>
      </div>
      <div className = "skills-container">
      {
        props.skills.map((e,i) =>
          <p key = {i} className = "skills">
            {e}
          </p>
          )
      }
      </div>
    </div>
    )
}

export default ImageComp