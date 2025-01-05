
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutSection from './components/AboutSection'
import TechnicalSkills from './components/TechnicalSkills'
import ProjectsSection from './components/ProjectsSection'
import TeachingProjects from './components/TeachingProjects'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Accomplishments from './components/Accomplishments'

function App() {

  return (
    <>
     
   <Navbar></Navbar>
   <Header></Header>
   <AboutSection></AboutSection>
   <TechnicalSkills></TechnicalSkills>
   <ProjectsSection></ProjectsSection>
   <TeachingProjects></TeachingProjects>
   <Accomplishments></Accomplishments>
   <ContactForm></ContactForm>
   <Footer></Footer>
      
    </>
  )
}

export default App
