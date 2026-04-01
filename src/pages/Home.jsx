import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'
import Projects from '../components/projects/Projects'
import Services from '../components/services/Services'
import Skills from '../components/skills/Skills'
import Footer from '../components/footer/Footer'
import Education from '../components/education/Education'
import Experience from '../components/experience/Experience'
function Home() {
  return (
    <div>
        <>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Services />
        <Contact />
        <Footer />
      </>
    </div>
  )
}

export default Home