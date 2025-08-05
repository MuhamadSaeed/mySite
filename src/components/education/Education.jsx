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
                <p>
                Studying core computer science topics like discrete math, algebra, probability & statistics, data structures, algorithms, problem solving, operating systems, computer architecture, web development, databases, data communication, and electronics.
                </p>
            </div>
            </div>

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">Full Stack Internship</h3>
                <span className="timeline-place">NTI – July 2025 to August 2025</span>
                <p>
                4-week internship (120 hours). I learned the fundamentals of front-end development and explored the back-end basics using PHP, MySQL, and Laravel.  
                During the internship, I built two CRUD-based admin dashboards: the first using native PHP, and the second using Laravel.  
                The dashboard allows admin users to manage training program data — including viewing, adding, editing, and deleting users and courses. Access control was implemented to ensure only admins can perform these actions.
                </p>
            </div>
            </div>

            <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">Web Development Nanodegree</h3>
                <span className="timeline-place">Udacity – Oct 2021 to Dec 2021</span>
                <p>
                Completed Udacity’s Web Development Nanodegree, where I learned the basics of the internet, HTML, CSS, Bootstrap, and JavaScript. I built several small projects, including landing pages and interactive components.
                <br />
                My mid-level project was a weather application that uses external APIs to fetch real-time weather data based on user input. It showed city temperatures, weather conditions, and icons based on the forecast, and gave me my first hands-on experience with asynchronous JavaScript and working with APIs.
                </p>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Education