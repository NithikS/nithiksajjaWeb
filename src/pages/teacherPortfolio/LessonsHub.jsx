import PageHeader from "../../components/PageHeader.jsx";
import { Link } from "react-router-dom";

const lessons = [
  {
    title: "Decision Matrix Lesson",
    grade: "8th Grade Technology Education",
    topic: "Using a Decision Matrix to Evaluate Designs",
    description:
      "Students learn how and when to use a decision matrix by working through a relatable example (choosing the best chair) before applying the tool to evaluate their own Ankle Foot Orthosis (AFO) project designs.",
    icon: "bi-grid-3x3",
    color: "darkBlueText",
    btnClass: "darkBlueBg iconBlue",
    path: "/teacherportfolio/lessons/decision-matrix",
    tags: ["Lesson Plan", "Reflection", "Example Matrix"],
  },
  {
    title: "Intro to PLTW Skimmers",
    grade: "7th / 8th Grade Technology Education",
    topic: "Introduction to the PLTW Skimmer Project",
    description:
      "An introductory lesson to the PLTW Skimmer engineering project, covering the design brief, constraints, and criteria students will use to guide their build process.",
    icon: "bi-water",
    color: "darkGreenText",
    btnClass: "darkGreenBg iconGreen",
    path: "/teacherportfolio/lessons/pltw-skimmers",
    tags: ["Lesson Plan", "Reflection", "Photo"],
  },
];

const LessonsHub = () => {
  return (
    <>
      <PageHeader
        title="Lessons"
        subTitle="Lesson plans, reflections, and examples from my cadet teaching experience"
      />

      <div className="container py-4">
        {/* Back Button */}
        <p>
          <Link className="btn darkGreenBg iconGreen mt-3 mb-2" to="/teacherportfolio" role="button">
            <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
          </Link>
        </p>

        {/* Intro */}
        <p className="text-muted mb-5">
          Below are lessons I planned and taught during my cadet teaching experience with Mrs. Collins at Hamilton Southeastern Intermediate/Junior High. Each lesson includes the full lesson plan, my personal reflection, and a supporting example or photo.
        </p>

        {/* Lesson Cards */}
        <div className="row g-4">
          {lessons.map((lesson, i) => (
            <div key={i} className="col-lg-6">
              <div className="card h-100 shadow border-0" style={{ borderTop: "4px solid var(--primary-logo-color-dark)" }}>
                <div className="card-body d-flex flex-column p-4">
                  {/* Icon + Title */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "rgba(70,175,197,0.12)",
                      }}
                    >
                      <i className={`bi ${lesson.icon} fs-4 ${lesson.color}`}></i>
                    </div>
                    <div>
                      <h4 className={`mb-0 fw-bold ${lesson.color}`}>{lesson.title}</h4>
                      <small className="text-muted">{lesson.grade}</small>
                    </div>
                  </div>

                  {/* Topic */}
                  <p className="fw-semibold mb-2">{lesson.topic}</p>

                  {/* Description */}
                  <p className="text-muted flex-grow-1">{lesson.description}</p>



                  {/* Button */}
                  {lesson.comingSoon ? (
                    <button className="btn btn-secondary disabled w-100" disabled>
                      <i className="bi bi-clock me-2"></i>Coming Soon
                    </button>
                  ) : (
                    <Link className={`btn ${lesson.btnClass} w-100`} to={lesson.path} role="button">
                      View Lesson <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LessonsHub;