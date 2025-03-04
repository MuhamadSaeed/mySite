import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>
        <ul className="footerLinks">
            <li> <a href=""><i className="fa-brands fa-github"></i></a> </li>
            <li> <a href=""><i className="fa-brands fa-linkedin"></i></a> </li>
            <li> <a href=""><i className="fa-brands fa-whatsapp"></i></a> </li>
        </ul>
        <h3>made by mohamed</h3>
        <span>all rights reserved</span>
    </footer>
  )
}

export default Footer