import React, { useEffect, useState } from 'react'
import "./projects.css"
import IMG1 from "../../assets/P15.png"
import IMG2 from "../../assets/P16.png"
import IMG5 from "../../assets/P5.png"
import IMG6 from "../../assets/P6.png"
import IMG7 from "../../assets/P7.png"
import IMG8 from "../../assets/P8.png"
import IMG9 from "../../assets/P9.png"
import IMG11 from "../../assets/P11.png"
import IMG13 from "../../assets/P13.png"
import IMG14 from "../../assets/P14.png"

function Projects() {
    const [activeLink, setActiveLink] = useState("next")
    const [searchVal, setSearchVal] = useState("")
    const [finalResul, setFinalResult] = useState([])
    const [showDetailsIndex, setShowDetailsIndex] = useState(null);

const Projects = [
  {
    photo: IMG1,
    name: "Point of Sale (POS) System",
    gitubLink: "https://github.com/MuhamadSaeed/Point-of-sale-system",
    liveDemoLink: "https://github.com/MuhamadSaeed/Point-of-sale-system",
    tool: "all full-stack next",
    details: "A robust Full-Stack POS system designed to streamline business operations. Built with Next.js (Laravel on the backend), it handles inventory, sales tracking, and product management with a high focus on performance and accuracy."
  },
  {
    photo: IMG2,
    name: "Nutrivex AI Nutritionist",
    gitubLink: "https://github.com/MuhamadSaeed/nutrivex",
    liveDemoLink: "https://nutrivex.vercel.app",
    tool: "all full-stack next",
    details: "A Full-Stack AI assistant designed to provide personalized nutrition and keto coaching. Built with Next.js and Firebase"
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
    photo: IMG13,
    name: "e-commerce project ",
    gitubLink: "https://github.com/MuhamadSaeed/ecommerce",
    liveDemoLink: "https://github.com/MuhamadSaeed/ecommerce",
    tool: "all full-stack next",
    details: "A simple full-stack e-commerce project built with a frontend (Next.js) and a backend (PHP & MySQL). The application allows users to browse products, view details, and add them to the cart, while the admin can manage products through APIs (add, update, delete). The backend is connected to a MySQL database and provides RESTful APIs consumed by the frontend"
  },
  {
    photo: IMG14,
    name: "Social Media project",
    gitubLink: "https://github.com/MuhamadSaeed/social-media",
    liveDemoLink: "https://social-media-sigma-smoky.vercel.app/",
    tool: "all full-stack next",
    details: " A full-stack social media application built with Next.js. The app allows users to create accounts, post updates, and interact through likes and comments."
  },
]

    const Links = ["react", "next", "full-stack"]

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

