import PageHeader from "../../components/PageHeader.jsx";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Student Resource Officer Shadow",
    category: "Job Shadow",
    description:
      "Spending a full day with the HIJH Student Resource Officer and learning how relationship-building, trust, and never-stop-learning are at the heart of working with students.",
    icon: "bi-shield-check",
    path: "/teacherportfolio/experiences/sro-shadow",
    accent: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
  },
  {
    title: "Teacher Observation at Fishers Junior High",
    category: "School Observation",
    description:
      "Observing Mr. Gaza's Engineering & Technology classes at Fishers Junior High — a look at different classroom management strategies, student engagement techniques, and how another teacher structures the same subject.",
    icon: "bi-eye",
    path: "/teacherportfolio/experiences/fjh-observation",
    accent: "darkGreenText",
    btnClass: "darkGreenBg iconGreen",
  },
  {
    title: "HIJH Mary Poppins Jr. Musical",
    category: "Extracurricular Observation",
    description:
    "Attending my students' production of Mary Poppins Jr. and discovering the real impact of showing up for students outside the classroom.",
    icon: "bi-music-note-beamed",
    path: "/teacherportfolio/experiences/mary-poppins",
    accent: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
  },
  {
    title: "AI in the Classroom",
    category: "Research Paper",
    description:
      "A reflection on three Edutopia articles exploring responsible AI use, broader AI literacy, and how AI prepares students for the workforce — and what that means for how I want to teach.",
    icon: "bi-robot",
    path: "/teacherportfolio/experiences/ai-in-classroom",
    accent: "darkGreenText",
    btnClass: "darkGreenBg iconGreen",
  },
  {
    title: "Day in the Life",
    category: "Day in the Life",
    description:
      "A full Friday shadowing Mrs. Collins — from prep period through flex time — including the Souper Bowl lunch, a suspicious phishing email, and planning out the following week.",
    icon: "bi-calendar-day",
    path: "/teacherportfolio/experiences/day-in-the-life",
    accent: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
  },
];

const ExperiencesHub = () => {
  return (
    <>
      <PageHeader
        title="Experiences"
        subTitle="Observations, reflections, and experiences from my cadet teaching journey"
      />

      <div className="container py-4">
        {/* Back Button */}
        <p>
          <Link className="btn darkGreenBg iconGreen mt-3 mb-2" to="/teacherportfolio" role="button">
            <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
          </Link>
        </p>

        <p className="text-muted mb-5">
          Throughout my cadet teaching experience with Mrs. Collins, I had the opportunity to go beyond the classroom — observing other teachers, attending student events, shadowing staff, and researching how technology is reshaping education. Each experience below includes a full reflection.
        </p>

        {/* Experience Cards — horizontal layout */}
        <div className="d-flex flex-column gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.path}
              className="card border-0 shadow-sm"
              style={{ borderLeft: "5px solid var(--primary-logo-color-dark) !important" }}
            >
              <div className="card-body p-4">
                <div className="row align-items-center g-3">
                  {/* Icon */}
                  <div className="col-auto d-none d-md-flex">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "rgba(70,175,197,0.12)",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`bi ${exp.icon} fs-3 ${exp.accent}`}></i>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="col">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-1">
                      <h5 className={`mb-0 fw-bold ${exp.accent}`}>{exp.title}</h5>
                      <span
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: "rgba(70,175,197,0.12)",
                          color: "var(--primary-logo-color-dark)",
                          border: "1px solid var(--primary-logo-color-dark)",
                          fontSize: "0.75rem",
                        }}
                      >
                        {exp.category}
                      </span>
                    </div>
                    <p className="text-muted mb-0">{exp.description}</p>
                  </div>

                  {/* Button */}
                  <div className="col-12 col-md-auto">
                    <Link className={`btn ${exp.btnClass} w-100`} to={exp.path} role="button">
                      Read Reflection <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperiencesHub;
