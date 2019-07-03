import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styling/styles.css"

import { withPrefix } from 'gatsby'

  console.log(window.innerWidth)


const Header = ({ siteTitle }) => (
  <header className = "header">
    <div className = "header-text-container">

      <div className = "nav-buttons">
        <div className = "text-header-container"><Link to="/"> <p className = "nav-text"> Home </p> </Link></div>
        <div className = "text-header-container"><Link to="/Projects/"> <p className = "nav-text"> Projects </p> </Link></div>
        <div className = "text-header-container"><a rel="noopener noreferrer" href={withPrefix('/CV.pdf')} target="_blank"><p className = "nav-text"> Resume </p></a></div>
        <div className = "text-header-container"><Link to="/About/"><p className = "nav-text"> About </p> </Link></div>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
