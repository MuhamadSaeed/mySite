import React from 'react';
import './skills.css';

function Skills() {
  const frontEndSkills = [
    { name: "HTML", desc: "The structure of every web page I build." },
    { name: "CSS", desc: "Used for styling and layout, with responsiveness in mind." },
    { name: "JavaScript", desc: "Adds interactivity and dynamic behavior to websites." },
    { name: "React.js", desc: "Helps build modular, reusable components." },
    { name: "Redux", desc: "For managing complex application state." },
    { name: "Next.js", desc: "Improves routing, SEO, and performance." },
    { name: "TypeScript", desc: "Provides type safety and better code structure." },
    { name: "Tailwind CSS", desc: "Utility-first CSS framework for fast UI development." },
    { name: "Bootstrap", desc: "Prebuilt responsive components and grid system." },
    { name: "SASS/SCSS", desc: "Advanced CSS with variables, nesting, and mixins." }
  ];

  const backEndSkills = [
    { name: "PHP", desc: "Server-side logic and data handling." },
    { name: "MySQL", desc: "Creating and managing databases." },
    { name: "Laravel", desc: "Building structured apps." },
  ];

  const tools = [
    { name: "Git", desc: "Tracking changes and version control." },
    { name: "GitHub", desc: "Storing and collaborating on code." },
    { name: "Vite", desc: "Fast build tool for modern web apps." },
    { name: "NPM", desc: "Managing libraries and tools." },
    { name: "Postman", desc: "Testing and debugging APIs." },
  ];

  return (
    <section className="skills" id="skills">
      <h1 className="skillsHeading">Skills</h1>
      <p className="paraSkills">
        These are the tools and technologies I use. I always aim to understand how things work, not just how to use them.
      </p>

      <div className="skills-group">
        <h2 className="skills-title">Front-End Skills</h2>
        <div className="skills-grid">
          {frontEndSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-desc"> – {skill.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-group">
        <h2 className="skills-title">Back-End Basics</h2>
        <div className="skills-grid">
          {backEndSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-desc"> – {skill.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-group">
        <h2 className="skills-title">Tools & Workflow</h2>
        <div className="skills-grid">
          {tools.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-desc"> – {skill.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
