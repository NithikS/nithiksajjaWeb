import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader.jsx";

/**
 * Reusable LessonPage component
 *
 * Props:
 *  - title: string
 *  - subTitle: string
 *  - lessonPlan: { standards, objectives, materials, priorKnowledge, activities, differentiation, closure, assessment }
 *  - reflection: { gradeSubject, topic, sections: [{ heading, content }] }
 *  - exampleComponent: JSX (optional — rendered in the Example tab)
 *  - exampleLabel: string (optional — tab label, defaults to "Example")
 *  - topNote: JSX (optional — rendered above the tabs, e.g. a context banner)
 */

const LessonPage = ({
  title,
  subTitle,
  lessonPlan,
  reflection,
  exampleComponent,
  exampleLabel,
  topNote,
}) => {
  return (
    <>
      <PageHeader title={title} subTitle={subTitle} />

      <div className="container py-4">
        {/* Back Button */}
        <p>
          <Link className="btn darkGreenBg iconGreen mt-3 mb-4" to="/teacherportfolio/lessons" role="button">
            <i className="bi bi-arrow-left me-2"></i>Back to Lessons
          </Link>
        </p>

        {/* Optional top note (e.g. context banner) */}
        {topNote && <div className="mb-3">{topNote}</div>}

        {/* Tabs */}
        <ul
          className="nav nav-tabs mb-4"
          id="lessonTabs"
          role="tablist"
          style={{
            "--bs-nav-tabs-link-active-color": "var(--primary-logo-color-dark)",
            "--bs-nav-link-color": "var(--primary-logo-color-dark)",
            "--bs-nav-link-hover-color": "var(--primary-logo-color-light)",
          }}
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active fw-semibold"
              id="plan-tab"
              data-bs-toggle="tab"
              data-bs-target="#plan"
              type="button"
              role="tab"
              aria-controls="plan"
              aria-selected="true"
            >
              <i className="bi bi-file-text me-2"></i>Lesson Plan
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fw-semibold"
              id="reflection-tab"
              data-bs-toggle="tab"
              data-bs-target="#reflection"
              type="button"
              role="tab"
              aria-controls="reflection"
              aria-selected="false"
            >
              <i className="bi bi-journal-richtext me-2"></i>Reflection
            </button>
          </li>
          {exampleComponent && (
            <li className="nav-item" role="presentation">
              <button
                className="nav-link fw-semibold"
                id="example-tab"
                data-bs-toggle="tab"
                data-bs-target="#example"
                type="button"
                role="tab"
                aria-controls="example"
                aria-selected="false"
              >
                <i className="bi bi-layout-text-window me-2"></i>{exampleLabel}
              </button>
            </li>
          )}
        </ul>

        <div className="tab-content" id="lessonTabsContent">

          {/* ── LESSON PLAN TAB ── */}
          <div className="tab-pane fade show active" id="plan" role="tabpanel" aria-labelledby="plan-tab">

            {/* Standards */}
            {lessonPlan.standards && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-bookmark-check me-2"></i>Academic Standards
                </h4>
                <ul className="list-group list-group-flush">
                  {lessonPlan.standards.map((s) => (
                    <li key={s.code} className="list-group-item bg-transparent">
                      <strong>{s.code}</strong> — {s.description}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Objectives */}
            {lessonPlan.objectives && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-bullseye me-2"></i>Learning Objectives
                </h4>
                <p className="mb-2">Students will be able to:</p>
                <ul>
                  {lessonPlan.objectives.map((obj) => (
                    <li key={obj}>{obj}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Materials */}
            {lessonPlan.materials && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-box-seam me-2"></i>Materials
                </h4>
                <ul>
                  {lessonPlan.materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Prior Knowledge */}
            {lessonPlan.priorKnowledge && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-lightbulb me-2"></i>Prior Knowledge &amp; Experiences
                </h4>
                <p>{lessonPlan.priorKnowledge}</p>
              </section>
            )}

            {/* Activities */}
            {lessonPlan.activities && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-play-circle me-2"></i>Learning Activities &amp; Instructional Strategies
                </h4>
                {lessonPlan.activities.map((block) => (
                  <div key={block.heading} className="mb-3">
                    {block.heading && <h6 className="fw-bold">{block.heading}</h6>}
                    {Array.isArray(block.content) ? (
                      <ol>
                        {block.content.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ol>
                    ) : (
                      <p>{block.content}</p>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* Differentiation */}
            {lessonPlan.differentiation && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-diagram-3 me-2"></i>Differentiated Instruction
                </h4>
                <div className="row g-3">
                  {lessonPlan.differentiation.map((d) => (
                    <div key={d.category} className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body">
                          <h6 className="card-title darkBlueText fw-bold">{d.category}</h6>
                          <p className="card-text text-muted small mb-1 fst-italic">{d.description}</p>
                          <p className="card-text">{d.strategy}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Closure */}
            {lessonPlan.closure && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-check2-circle me-2"></i>Lesson Closure
                </h4>
                {Array.isArray(lessonPlan.closure) ? (
                  <ul>
                    {lessonPlan.closure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{lessonPlan.closure}</p>
                )}
              </section>
            )}

            {/* Assessment */}
            {lessonPlan.assessment && (
              <section className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-clipboard-data me-2"></i>Assessment &amp; Evaluation
                </h4>
                <p>{lessonPlan.assessment}</p>
              </section>
            )}
          </div>

          {/* ── REFLECTION TAB ── */}
          <div className="tab-pane fade" id="reflection" role="tabpanel" aria-labelledby="reflection-tab">
            <div
              className="mb-3 p-3 rounded"
              style={{
                backgroundColor: "rgba(70,175,197,0.08)",
                borderLeft: "4px solid var(--primary-logo-color-dark)",
              }}
            >
              <p className="mb-0 fst-italic text-muted">
                <i className="bi bi-info-circle me-2"></i>
                <strong>Grade Level / Subject:</strong> {reflection.gradeSubject} &nbsp;|&nbsp;
                <strong>Topic:</strong> {reflection.topic}
              </p>
            </div>

            {reflection.sections.map((section) => (
              <section key={section.heading} className="mb-4 p-4 bg-light rounded shadow-sm">
                <h4 className="darkBlueText mb-3">
                  <i className="bi bi-chat-quote me-2"></i>{section.heading}
                </h4>
                {Array.isArray(section.content) ? (
                  <ul>
                    {section.content.map((item) => (
                      <li key={item} className="mb-2">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </section>
            ))}
          </div>

          {/* ── EXAMPLE TAB ── */}
          {exampleComponent && (
            <div className="tab-pane fade" id="example" role="tabpanel" aria-labelledby="example-tab">
              {exampleComponent}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

LessonPage.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  lessonPlan: PropTypes.shape({
    standards: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
    objectives: PropTypes.arrayOf(PropTypes.string),
    materials: PropTypes.arrayOf(PropTypes.string),
    priorKnowledge: PropTypes.string,
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string,
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]).isRequired,
      })
    ),
    differentiation: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        description: PropTypes.string,
        strategy: PropTypes.string.isRequired,
      })
    ),
    closure: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    assessment: PropTypes.string,
  }).isRequired,
  reflection: PropTypes.shape({
    gradeSubject: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ]).isRequired,
      })
    ).isRequired,
  }).isRequired,
  exampleComponent: PropTypes.node,
  exampleLabel: PropTypes.string,
  topNote: PropTypes.node,
};

LessonPage.defaultProps = {
  exampleComponent: null,
  exampleLabel: "Example",
  topNote: null,
};

export default LessonPage;