import {  HashRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<>
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </>} />
    </Routes>
    </HashRouter>
  )
}
export default App;
