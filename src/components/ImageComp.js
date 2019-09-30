import React from "react"
import "../styling/styles.css"

function ImageComp({ link, skills, img, text }) {
  const link_check = link.includes("http")

  return (
    <div className="project-container">
      <div className="link-container">
        <a
          href={link}
          className="project-link"
          target={link_check ? "_blank" : ""}
        >
          <div className="image-container">
            <img className="image" src={img} alt={text} />
          </div>
          <div className="image-text-container">
            <p className="post-title">{text}</p>
            <div className="skills-container">
              {skills.map((e, i) => (
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
