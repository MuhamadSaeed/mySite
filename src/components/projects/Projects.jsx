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

function Projects() {
    const [activeLink, setActiveLink] = useState("css")
    const [searchVal, setSearchVal] = useState("")
    const [finalResul, setFinalResult] = useState([])
    
    const Projects = [
        {
            photo: IMG1, 
            name: "Sass Page",
            gitubLink: "https://github.com/MuhamadSaeed/SASS-Project", 
            liveDemoLink: "https://muhamadsaeed.github.io/SASS-Project/", 
            tool: "all Sass css",
        },
        {
            photo: IMG2, 
            name: "Bootstrap Page",
            gitubLink: "https://github.com/MuhamadSaeed/Bootstrap-Project", 
            liveDemoLink: "https://muhamadsaeed.github.io/Bootstrap-Project/", 
            tool: "all css bootstrap",
        },
        {
            photo: IMG3, 
            name: "Landing Page",
            gitubLink: "https://github.com/MuhamadSaeed/html-css-js-project", 
            liveDemoLink: "https://muhamadsaeed.github.io/html-css-js-project", 
            tool: "all javascript",
        },
        {
            photo: IMG4, 
            name: "Simple Protfolio",
            gitubLink: "https://github.com/MuhamadSaeed/mega-task-5", 
            liveDemoLink: "https://muhamadsaeed.github.io/mega-task-5/", 
            tool: "all css",
        },
        {
            photo: IMG5, 
            name: "Quran Site",
            gitubLink: "https://github.com/MuhamadSaeed/QuranApp", 
            liveDemoLink: "https://al-waaq3a.netlify.app/", 
            tool: "all javascript",
        },
        {
            photo: IMG6, 
            name: "Movie App",
            gitubLink: "https://github.com/MuhamadSaeed/moviesApp", 
            liveDemoLink: "https://muhamadsaeed.github.io/moviesApp/", 
            tool: "all React",
        },
        {
            photo: IMG7, 
            name: "React Portfolio",
            gitubLink: "https://github.com/MuhamadSaeed/react-page", 
            liveDemoLink: "https://muhamadsaeed.github.io/react-page/", 
            tool: "all react",
        },
        {
            photo: IMG8, 
            name: "Food App",
            gitubLink: "https://github.com/MuhamadSaeed/food-react-app", 
            liveDemoLink: "https://food-react-app-1.netlify.app/", 
            tool: "all react",
        },
        {
            photo: IMG9, 
            name: "React Dashboard",
            gitubLink: "https://github.com/MuhamadSaeed/react-dashboard", 
            liveDemoLink: "https://reacct-dashboard.netlify.app/", 
            tool: "all react",
        },
    ]

    const Links = ["all", "css","sass", "bootstrap", "javascript", "react"]

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchVal);
        
    }

    const handleLink = (e) => {
        setActiveLink(e)
        console.log(e)
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
                        <li key={key} className={activeLink == link ? "active" : ""} onClick={() => handleLink(link)}>{link}</li>
                    )
                })
            }
        </ul>

        <form action="" className="search" onSubmit={(e) => handleSearch(e)}>
            <input type="text" placeholder='search by name or tool' value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
        </form>

        {
            <div className="boxs">
                {
                    finalResul.map((project, key) => {
                        return (
                        <div className="box" key={key}>
                            <h1 className="nameProject">{project.name}</h1>
                            <img src={project.photo} alt="" />
                            <div className="links">
                                <a target='_blank' href={project.gitubLink} className="github">github</a>
                                <a target='_blank' href={project.liveDemoLink} className="live">live demo</a>
                            </div>
                        </div>
                        )
                    })
                }
             </div>
        }
        
    </section>
  )
}

export default Projects