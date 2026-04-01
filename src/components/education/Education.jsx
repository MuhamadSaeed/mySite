import "./education.css"
function Education() {
  return (
    <section className="education-section" id="education">
        <h2 className="section-title">Education & Training</h2>
        <div className="timeline">

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">BSc in Computer Science</h3>
                <span className="timeline-place">Mansoura University (2023 – 2027)</span>
                <ul className="education-list">
                  <li>Studying core computer science topics like discrete math, algebra, probability & statistics, data structures, algorithms, problem solving, operating systems, computer architecture, web development, databases, data communication, and electronics.</li>
                </ul>
            </div>
            </div>

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">Full Stack Internship</h3>
                <span className="timeline-place">NTI – July 2025 to August 2025</span>
                <ul className="education-list">
                  <li>4-week internship (120 hours). Learned the fundamentals of front-end development and explored the back-end basics using PHP, MySQL, and Laravel.</li>
                  <li>Built two CRUD-based admin dashboards: the first using native PHP, and the second using Laravel.</li>
                  <li>Developed dashboard for managing training program data, including viewing, adding, editing, and deleting users and courses with access control.</li>
                </ul>
            </div>
            </div>

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">Web Development Nanodegree</h3>
                <span className="timeline-place">Udacity – Oct 2021 to Dec 2021</span>
                <ul className="education-list">
                  <li>Completed Udacity's Web Development Nanodegree, learning the basics of the internet, HTML, CSS, Bootstrap, and JavaScript.</li>
                  <li>Built several small projects, including landing pages and interactive components.</li>
                  <li>Created a weather application that uses external APIs to fetch real-time weather data based on user input, displaying city temperatures and weather conditions.</li>
                </ul>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Education