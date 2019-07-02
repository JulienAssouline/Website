import React from "react"
import { Link } from "gatsby"
import "../styling/styles.css"


function ImageComp(props) {

  console.log(props.link)

  const link_check = props.link.includes("http")
  console.log(link_check)

  return (
    <div className = "project-container">
      <div className = "link-container">
        <a href = {props.link} className = "project-link" target= { link_check ? "_blank" : ""}>
          <div className = "image-container">
            <img className = "image" src={props.img} alt="chord_diagram" />
          </div>
          <div className = "image-text-container">
            <p className="post-title"> {props.text} </p>
          <div className = "skills-container">
            {
              props.skills.map((e,i) =>
                <div>
                  <p key = {i} className = "skills">
                    {e}
                  </p>
                  <div className="bottom-border"></div>
                </div>
                )
            }
            </div>
          </div>
        </a>
      </div>
    </div>
    )
}

export default ImageComp