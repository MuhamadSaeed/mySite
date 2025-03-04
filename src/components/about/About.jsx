import React from 'react'
import "./about.css"
import { Link } from 'react-router-dom'
function About() {
  return (
    <section className="about">
        <h1 className="aboutHeading">About Me</h1>
        <p className='paraAbout'>Let me introduce myself</p>
        <div className="flexDiv">

            <div className="infoAbout">
                <h1>A freelance Web developer</h1>
                <p>
                    I am from Egypt—a land rich in history and culture. Since childhood, I have been passionate about art and design, always striving to create with a unique perspective. I also love building things that are useful to others.
                    <br /> <br />
                    I started coding in high school, and to me, coding is another form of art. It allows me to combine design and functionality, which I find truly fascinating. I enjoy the creative process and the endless possibilities it offers.
                    <br /> <br />
                    My vision is to contribute to making the world a better place. As everything around us evolves, it's our turn to create meaningful innovations that positively impact lives.
                </p>
                <Link className='button' to='#contact'>have A Project? <i className="fa-solid fa-lightbulb"></i> </Link>
            </div>

          <div class="circle-container">
            <   div className="rotating-circle">
                  <div class="center-circle"></div>
                  <i class="icon icon-1 fa-brands fa-react"></i>
                  <i class="icon icon-2 fa-brands fa-js"></i>
                  <i class="icon icon-3 fa-brands fa-sass"></i>
                  <i class="icon icon-4 fa-brands fa-bootstrap"></i>
                  <i class="icon icon-5 fa-brands fa-git"></i> 
                </div>
            </div> 
        </div>
    </section>
  )
}

export default About