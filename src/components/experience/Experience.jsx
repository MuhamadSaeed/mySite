import "./experience.css"

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Developer (Contract / Remote)</h3>
            <span className="timeline-place">Codela • September 2025 – Present</span>
            <ul className="experience-list">
              <li>Started with small frontend tasks and quickly progressed to delivering full projects.</li>
              <li>Built full-stack and frontend applications from scratch, turning specifications into real products.</li>
              <li>Contributed to UI/UX design and backend integration when needed, handling features beyond frontend scope.</li>
              <li>Optimized performance to ensure fast loading and smooth user experience across projects.</li>
              <li>Handled multiple projects in a fast-paced remote environment.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Instructor (Part-time)</h3>
            <span className="timeline-place">Smart Vision Academy • November 2025 – March 2026</span>
            <ul className="experience-list">
              <li>Taught the complete Frontend track (HTML, CSS, JavaScript, Tailwind, React, TypeScript, and Next.js).</li>
              <li>Mentored students through real, practical projects and hands-on web development.</li>
              <li>Trained students to collaborate with back-end developers and work with APIs.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
