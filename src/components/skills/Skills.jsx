import React from 'react'
import "./skills.css"
function Skills() {
    const Skills = {
        skills1: ["HTML", "css", "Javascript", "React.js", "Redux", "Typescript"],
        skills2: ["Python", "C Sharp", "C++"],
        skills3: ["SASS", "Bootstrap", "API Integration", "Git", "Github"] 
    }
  return (
    <section className="skills">
        <h1 className="skillsHeading">Skills</h1>
        <p className="paraSkills">Skills grow with practice, not just talent.</p>
        <div className="skills1">
            {Skills.skills1.map( (skill, index) => {
                return <div key={index} className="skill"> <i className="fa-solid fa-check"></i> {skill}</div>
            })}
        </div>
        <hr />
        <div className="skills2">
            {Skills.skills3.map( (skill, index) => {
                return <div key={index} className="skill"> <i className="fa-solid fa-check"></i> {skill}</div>
            })}
        </div>
        <hr />
        <div className="skills3">
        {Skills.skills2.map( (skill, index) => {
                return <div key={index} className="skill"> <i className="fa-solid fa-check"></i> {skill}</div>
            })}
        </div>
    </section>
  )
}

export default Skills