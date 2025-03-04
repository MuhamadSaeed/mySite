import React, { useEffect, useState } from 'react'
import "./header.css"
import MYPIC from "../../assets/MYPIC.jpeg"
import { Link } from 'react-router-dom';
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
            <li> <a href=""><i className="fa-brands fa-github"></i></a> </li>
            <li> <a href=""><i className="fa-brands fa-linkedin"></i></a> </li>
            <li> <a href=""><i className="fa-brands fa-whatsapp"></i></a> </li>
        </ul>
        <div className="headerInfo">
            <div className="headName"><h1>Mohamed Saeed</h1><i className="fa-solid fa-handshake"></i></div>
            <h3><span>───── </span> Frontend Developer</h3>
            <p>I transform ideas into smooth, interactive interfaces, design clean and fast user experiences, and build modern web interfaces</p>
            <Link className='button' to="#projects">See Projects<i className="fa-solid fa-hand-wave"></i></Link>
        </div>
        <div className="image">
            <img src={MYPIC} alt="" />
        </div>
    </header>
  )
}

export default Header