import PageHeader from "../../components/PageHeader"
import profilePic from "../../assets/profilePic.png"
import { Link } from "react-router-dom"

const sections = [
  {
    icon: "bi-person-circle",
    title: "About Me",
    description: "My background, teaching philosophy, and the experiences that have shaped me as an educator.",
    path: "/teacherportfolio/about",
    accent: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
  },
  {
    icon: "bi-people",
    title: "Classroom Management Plan",
    description: "My approach to creating a positive, supportive, and safe learning environment.",
    path: "/teacherportfolio/classroom-management",
    accent: "darkGreenText",
    btnClass: "darkGreenBg iconGreen",
  },
  {
    icon: "bi-person-video3",
    title: "Field Experience",
    description: "My hands-on teaching experiences, classroom observations, and lesson implementation.",
    path: "/teacherportfolio/field-experience",
    accent: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
  },
  {
    icon: "bi-journal-text",
    title: "Lessons",
    description: "Lesson plans I designed and taught, including full plans, personal reflections, and supporting examples.",
    path: "/teacherportfolio/lessons",
    accent: "darkGreenText",
    btnClass: "darkGreenBg iconGreen",
  },
  {
    icon: "bi-binoculars",
    title: "Experiences",
    description: "Observations, job shadows, extracurricular events, and research reflections from my cadet teaching journey.",
    path: "/teacherportfolio/experiences",
    accent: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
  },
]

const teacherPortfolioHomepage = () => {
  return (
    <>
      <PageHeader title="Teacher Portfolio" subTitle="Welcome to my teaching portfolio!" />

      {/* Bio Section */}
      <section id="biography" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <img id="profileTeacherPic" src={profilePic} alt="Nithik Sajja" className="img-fluid rounded-circle" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title darkBlueText">Mr. Nithik Sajja</h2>
              <p>During the 2025&ndash;26 school year, I am taking Principles of Teaching, dual-enrolled with Indiana University&apos;s F200: Examining Self as Teacher. This opportunity is helping me explore the field of education, strengthen my teaching skills, and better understand what it means to support students in meaningful ways.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Reflection Banner */}
      <section className="py-4">
        <div className="container">
          <div
            className="rounded-3 p-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
            style={{
              background: "linear-gradient(135deg, var(--primary-logo-color-dark), var(--secondary-logo-color-dark))",
            }}
          >
            <div className="text-white">
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="fw-bold fs-5">Final Reflection</span>
              </div>
              <p className="mb-0" style={{ opacity: 0.92 }}>
                A full retrospective on my cadet teaching experience — what I learned, how I grew, and what kind of teacher I want to become.
              </p>
            </div>
            <Link
              className="btn btn-light fw-semibold flex-shrink-0"
              to="/teacherportfolio/final-reflection"
              role="button"
              style={{ color: "var(--primary-logo-color-dark)" }}
            >
              Read Reflection <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {sections.map((sec) => (
              <div key={sec.path} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <i className={`bi ${sec.icon} fs-1 mb-3 ${sec.accent}`}></i>
                  <h2 className={`fs-4 fw-bold mb-2 ${sec.accent}`}>{sec.title}</h2>
                  <p className="text-muted flex-grow-1">{sec.description}</p>
                  <Link className={`btn ${sec.btnClass} mt-2`} to={sec.path} role="button">
                    View details &raquo;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default teacherPortfolioHomepage