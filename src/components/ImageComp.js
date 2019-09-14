import React from "react"
import { Link } from "gatsby"
import "../styling/styles.css"

function ImageComp(props) {
  const link_check = props.link.includes("http")

  return (
    <div className="project-container">
      <div className="link-container">
        <a
          href={props.link}
          className="project-link"
          target={link_check ? "_blank" : ""}
        >
          <div className="image-container">
            <img className="image" src={props.img} alt={props.text} />
          </div>
          <div className="image-text-container">
            <p className="post-title">{props.text}</p>
            <div className="skills-container">
              {props.skills.map((e, i) => (
                <div key={"skill" + i}>
                  <p className="skills">{e}</p>
                  <div className="bottom-border"></div>
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ImageComp
