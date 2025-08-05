import React from 'react'
import "./about.css"
import {scrollToSection} from "../header/Header"
function About() {
 
  return (
    <section className="about">
        <h1 className="aboutHeading">About Me</h1>
        <p className='paraAbout'>A freelance Web developer</p>
        <div className="flexDiv">

            <div className="infoAbout">
                {/* <h1></h1> */}
                <p>I'm a freelance front-end web developer. I started learning programming in 2020, beginning with the basics like programming fundamentals, OOP, and data structures and algorithms. In 2022, I moved into front-end development, learning HTML, CSS, and JavaScript, and built more than 20 projects to practice. After that, I started using Bootstrap and Sass to make styling more organized. Then in 2023, I began working with React.js, Next.js, and Tailwind CSS to build better websites more efficiently.
                  <br /> <br />
                    Recently, I started learning the basics of PHP and MySQL, not because I want to become a back-end developer, but to understand how the full website works and how everything connects behind the scenes.
                  <br /> <br />
                  So far, I’ve built over 60 front-end projects, including personal websites, landing pages, and e-commerce stores. I focus on writing clear and simple code, and I try to make the websites easy to use for both the user and the developer.
                </p>
                <a className='button' href={`#contact`} onClick={(e) => {e.preventDefault(); scrollToSection("contact")}}> have A Project? <i className="fa-solid fa-lightbulb"></i> </a>
            </div>
          <div className="circle-container">
            <div className="rotating-circle">
              <div className="center-circle"></div>
              
              <div className="icon" style={{ transform: "rotate(0deg) translate(125px) rotate(-0deg)" }}>
                <i className="fa-brands fa-react"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(40deg) translate(125px) rotate(-40deg)" }}>
                <i className="fa-brands fa-js"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(80deg) translate(125px) rotate(-80deg)" }}>
                <i className="fa-brands fa-sass"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(120deg) translate(125px) rotate(-120deg)" }}>
                <i className="fa-brands fa-bootstrap"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(160deg) translate(125px) rotate(-160deg)" }}>
                <i className="fa-brands fa-git"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(200deg) translate(125px) rotate(-200deg)" }}>
                <i className="fa-brands fa-github"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(240deg) translate(125px) rotate(-240deg)" }}>
                <i className="fa-brands fa-php"></i>
              </div>
              <div className="icon" style={{ transform: "rotate(280deg) translate(125px) rotate(-280deg)" }}>
                <i className="fa-solid fa-database"></i> 
              </div>
              <div className="icon" style={{ transform: "rotate(320deg) translate(125px) rotate(-320deg)" }}>
                <i className="fa-brands fa-laravel"></i>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About