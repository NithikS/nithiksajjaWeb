import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavbarHeader from './components/NavbarHeader.jsx'
import ContactFooter from './components/ContactFooter.jsx'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Links from './pages/links.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import PdfViewer from './pages/pdfViewer.jsx'
import './App.css'
import pcepPDF from "./assets/pcepCert.pdf"
import TeacherPortfolioHomepage from './pages/teacherPortfolio/teacherPortfolioHomepage.jsx'
import ClassroomManagementPlan from './pages/teacherPortfolio/classroomManagementPlan.jsx'
import AboutMe from './pages/teacherPortfolio/aboutMe.jsx'
import FieldExperience from './pages/teacherPortfolio/fieldExperience.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import RoyalRumbleProject from './pages/RoyalRumbleProject.jsx'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/PCEP" element={<PdfViewer pdfUrl={pcepPDF} />} />
        <Route path="/teacherPortfolio" element={<TeacherPortfolioHomepage />} />
        <Route path="/teacherportfolio/classroom-management" element={<ClassroomManagementPlan />} />
        <Route path="/teacherportfolio/about" element={<AboutMe />} />
        <Route path="/teacherportfolio/field-experience" element={<FieldExperience />} />
        <Route path="/projects/royal-rumble" element={<RoyalRumbleProject />} />
      </Routes>
      <ContactFooter />
    </Router>
  )
}

export default App
