import React, { useEffect, useState } from 'react'
import "./projects.css"
import IMG1 from "../../assets/P1.png"
import IMG2 from "../../assets/P2.png"
import IMG3 from "../../assets/P3.png"
import IMG4 from "../../assets/P4.png"
import IMG5 from "../../assets/P5.png"
import IMG6 from "../../assets/P6.png"
import IMG7 from "../../assets/P7.png"
import IMG8 from "../../assets/P8.png"
import IMG9 from "../../assets/P9.png"
import IMG10 from "../../assets/P10.png"
import IMG11 from "../../assets/P11.png"
import IMG12 from "../../assets/P12.png"

function Projects() {
    const [activeLink, setActiveLink] = useState("css")
    const [searchVal, setSearchVal] = useState("")
    const [finalResul, setFinalResult] = useState([])
    const [showDetailsIndex, setShowDetailsIndex] = useState(null);

const Projects = [
  {
    photo: IMG1,
    name: "Sass Page",
    gitubLink: "https://github.com/MuhamadSaeed/SASS-Project",
    liveDemoLink: "https://muhamadsaeed.github.io/SASS-Project/",
    tool: "all Sass css",
    details: "I used Sass (variables, nesting, mixins, etc.) to build this simple landing page for a design service. Created in 2022."
  },
  {
    photo: IMG2,
    name: "Bootstrap Page",
    gitubLink: "https://github.com/MuhamadSaeed/Bootstrap-Project",
    liveDemoLink: "https://muhamadsaeed.github.io/Bootstrap-Project/",
    tool: "all css bootstrap",
    details: "I used Bootstrap to design this website quickly using built-in components. It’s for a web/design company and was built in 2022."
  },
  {
    photo: IMG10,
    name: "Medical Site",
    gitubLink: "https://github.com/MuhamadSaeed/mega-task-6",
    liveDemoLink: "https://muhamadsaeed.github.io/mega-task-6/",
    tool: "all css bootstrap",
    details: "A medical site made using Bootstrap and CSS, created in 2022 for a medical business."
  },
  {
    photo: IMG3,
    name: "Landing Page",
    gitubLink: "https://github.com/MuhamadSaeed/html-css-js-project",
    liveDemoLink: "https://muhamadsaeed.github.io/html-css-js-project",
    tool: "all javascript",
    details: "A personal portfolio landing page made with vanilla JavaScript. It includes sections like projects, info, and contact. Created in 2022."
  },
  {
    photo: IMG4,
    name: "Simple Protfolio",
    gitubLink: "https://github.com/MuhamadSaeed/mega-task-5",
    liveDemoLink: "https://muhamadsaeed.github.io/mega-task-5/",
    tool: "all css",
    details: "A very simple personal portfolio built using only HTML and CSS. Created in 2022."
  },
  {
    photo: IMG5,
    name: "Quran Site",
    gitubLink: "https://github.com/MuhamadSaeed/QuranApp",
    liveDemoLink: "https://al-waaq3a.netlify.app/",
    tool: "all javascript",
    details: "Quran site made in 2022. It contains Surahs and Azkar with audio, fetched from a Quran API."
  },
  {
    photo: IMG6,
    name: "Movie App",
    gitubLink: "https://github.com/MuhamadSaeed/moviesApp",
    liveDemoLink: "https://muhamadsaeed.github.io/moviesApp/",
    tool: "all react",
    details: "A movie app built using React and Redux. It fetches movie data from an API. Built in 2025."
  },
  {
    photo: IMG7,
    name: "React Portfolio",
    gitubLink: "https://github.com/MuhamadSaeed/react-page",
    liveDemoLink: "https://muhamadsaeed.github.io/react-page/",
    tool: "all react",
    details: "My personal portfolio built with React. It’s similar to my vanilla JS portfolio but uses components. Built in 2025."
  },
  {
    photo: IMG8,
    name: "Food App",
    gitubLink: "https://github.com/MuhamadSaeed/food-react-app",
    liveDemoLink: "https://food-react-app-1.netlify.app/",
    tool: "all react",
    details: "A food recipe app made in 2023. It includes blogs, recipe portfolio, filtering, and more features."
  },
  {
    photo: IMG9,
    name: "React Dashboard",
    gitubLink: "https://github.com/MuhamadSaeed/react-dashboard",
    liveDemoLink: "https://reacct-dashboard.netlify.app/",
    tool: "all react",
    details: "An interactive admin dashboard built with React. Created in 2024."
  },
  {
    photo: IMG11,
    name: "React pharmacy site",
    gitubLink: "https://github.com/MuhamadSaeed/pharmacy-site",
    liveDemoLink: "https://pharmacym.netlify.app/",
    tool: "all react",
    details: "Pharmacy e-commerce site built with React. It includes product info, cart, and fetches data from an API."
  },
  {
    photo: IMG12,
    name: "CRUD project",
    gitubLink: "https://github.com/MuhamadSaeed/mega-task-JS-3",
    liveDemoLink: "https://muhamadsaeed.github.io/mega-task-JS-3/",
    tool: "all javascript",
    details: "A CRUD operations project using vanilla JavaScript and localStorage for data persistence. Frontend only."
  },
]


    const Links = ["all", "css","sass", "bootstrap", "javascript", "react"]

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const handleLink = (e) => {
        setActiveLink(e)
        setSearchVal("")
    }

    const filteredProjects = Projects.filter(project => 
        project.tool.toLowerCase().includes(activeLink)
    );

    const filteredSearch= Projects.filter((item) =>
        item.name.toLowerCase().includes(searchVal) || item.tool.toLowerCase().includes(searchVal)
    );

    useEffect(() => {
        if (searchVal) {
            setFinalResult(filteredSearch)
        } else {
            setFinalResult(filteredProjects)
        }
    }, [searchVal, activeLink])

  return (
    <section id='projects' className="projects">
        <h1 className="projectsheading">Projects</h1>
        <p className="projectsPara">some of my projects</p>
        <ul className="mainLinks">
            {
                Links.map((link, key) => {
                    return (
                        <li key={key} className={activeLink === link ? "active" : ""} onClick={() => handleLink(link)}>{link}</li>
                    )
                })
            }
        </ul>

        <form action="" className="search" onSubmit={(e) => handleSearch(e)}>
            <input type="text" placeholder='search by name or tool' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
        </form>

        <div className="boxs">
            {
                finalResul.map((project, key) => {
                    return (
                    <div className="box" key={key} style={{ position: 'relative' }}>
                        <h1 className="nameProject">{project.name}</h1>
                        <img src={project.photo} alt="" />
                        <div className="links">
                            <a target='_blank' href={project.gitubLink} className="github">github</a>
                            <a target='_blank' href={project.liveDemoLink} className="live">live demo</a>
                        </div>
                        <button className="showMoreBtn" onClick={() => setShowDetailsIndex(key)}>Show More</button>
                        {showDetailsIndex === key && (
                            <div className="projectOverlay">
                                <p>{project.details}</p>
                                <button className="closeOverlay" onClick={() => setShowDetailsIndex(null)}>X</button>
                            </div>
                        )}
                    </div>
                    )
                })
            }
         </div>
    </section>
  )
}

export default Projects
