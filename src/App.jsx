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
import LessonsHub from './pages/teacherPortfolio/LessonsHub.jsx'
import DecisionMatrixLesson from './pages/teacherPortfolio/DecisionMatrixLesson.jsx'
import PLTWSkimmersLesson from './pages/teacherPortfolio/PLTWSkimmersLesson.jsx'

import ExperiencesHub from './pages/teacherPortfolio/ExperiencesHub.jsx'
import DayInTheLife from './pages/teacherPortfolio/DayInTheLife.jsx'
import FJHObservation from './pages/teacherPortfolio/FJHObservation.jsx'
import SROShadow from './pages/teacherPortfolio/SROShadow.jsx'
import MaryPoppinsObservation from './pages/teacherPortfolio/MaryPoppinsObservation.jsx'
import AIInClassroom from './pages/teacherPortfolio/AIInClassroom.jsx'
import FinalReflection from './pages/teacherPortfolio/FinalReflection.jsx'
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
        <Route path="/teacherportfolio/lessons" element={<LessonsHub />} />
        <Route path="/teacherportfolio/lessons/decision-matrix" element={<DecisionMatrixLesson />} />
        <Route path="/teacherportfolio/lessons/pltw-skimmers" element={<PLTWSkimmersLesson />} />
        <Route path="/teacherportfolio/experiences" element={<ExperiencesHub />} />
        <Route path="/teacherportfolio/experiences/day-in-the-life" element={<DayInTheLife />} />
        <Route path="/teacherportfolio/experiences/fjh-observation" element={<FJHObservation />} />
        <Route path="/teacherportfolio/experiences/sro-shadow" element={<SROShadow />} />
        <Route path="/teacherportfolio/experiences/mary-poppins" element={<MaryPoppinsObservation />} />
        <Route path="/teacherportfolio/experiences/ai-in-classroom" element={<AIInClassroom />} />
        <Route path="/teacherportfolio/final-reflection" element={<FinalReflection />} />
      </Routes>
      <ContactFooter />
    </Router>
  )
}

export default App
