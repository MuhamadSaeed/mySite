import React, { useEffect, useState } from 'react'
import "./header.css"
import MYPIC from "../../assets/MYPIC.jpeg"

export const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  
  return (
    <header>
      <div className="DLMode" onClick={() => setDarkMode((prev) => !prev)}>
      <i className={darkMode === true?  "fa-solid fa-moon" : "fa-solid fa-sun"} style={darkMode === true? {color: "white"} : {color: "var(--text-color)"}} ></i>
      </div>
        <ul className="headerLinks">
            <li> <a target="_blank" href="https://github.com/MuhamadSaeed"><i className="fa-brands fa-github"></i></a> </li>
            <li> <a target="_blank" href="https://www.linkedin.com/in/mohamed-saeed-893858248/"><i className="fa-brands fa-linkedin"></i></a> </li>
            <li> <a target="_blank" href="https://wa.me/201080698745?text=Hello%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"><i className="fa-brands fa-whatsapp"></i></a> </li>
        </ul>
        <div className="headerInfo">
            <div className="headName"><h1>Mohamed Ibrahim</h1><i className="fa-solid fa-handshake"></i></div>
            <h3><span>───── </span> Frontend Developer</h3>
            <p>Front-end developer focused on React.js, Next.js, Tailwind CSS, and TypeScript.</p>
            <a className='button' href={`#prjects`} onClick={(e) => {e.preventDefault(); scrollToSection("projects")}}>See Projects<i className="fa-solid fa-hand-wave"></i></a>
        </div>
        <div className="image">
            <img src={MYPIC} alt="" />
        </div>
    </header>
  )
}

export default Header