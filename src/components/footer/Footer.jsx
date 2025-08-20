import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>
        <ul className="footerLinks">
            <li> <a target="_blank" href="https://github.com/MuhamadSaeed"><i className="fa-brands fa-github"></i></a> </li>
            <li> <a target="_blank" href="https://www.linkedin.com/in/mohamed-saeed-893858248/"><i className="fa-brands fa-linkedin"></i></a> </li>
            <li> <a target="_blank" href="https://wa.me/201080698745?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"><i className="fa-brands fa-whatsapp"></i></a> </li>
        </ul>
        <h3>made by mohamed</h3>
        <span>all rights reserved</span>
    </footer>
  )
}

export default Footer