import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader.jsx";

/**
 * Reusable ExperiencePage component
 *
 * Props:
 *  - title: string
 *  - subTitle: string
 *  - category: string (e.g. "Field Observation", "Job Shadow")
 *  - date: string (optional)
 *  - essay: string | string[] (paragraphs)
 *  - sidebarContent: JSX (optional — logo, poster, links shown in sidebar on desktop / below essay on mobile)
 */

const ExperiencePage = ({ title, subTitle, category, date, essay, sidebarContent }) => {
  const paragraphs = Array.isArray(essay) ? essay : [essay];

  return (
    <>
      <PageHeader title={title} subTitle={subTitle} />

      <div className="container py-4">
        {/* Back Button */}
        <p>
          <Link className="btn darkBlueBg iconBlue mt-3 mb-4" to="/teacherportfolio/experiences" role="button">
            <i className="bi bi-arrow-left me-2"></i>Back to Experiences
          </Link>
        </p>

        {/* Meta badge row */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <span
            className="badge rounded-pill px-3 py-2"
            style={{
              backgroundColor: "rgba(70,175,197,0.15)",
              color: "var(--primary-logo-color-dark)",
              border: "1px solid var(--primary-logo-color-dark)",
              fontSize: "0.85rem",
            }}
          >
            <i className="bi bi-tag me-1"></i>{category}
          </span>
          {date && (
            <span
              className="badge rounded-pill px-3 py-2"
              style={{
                backgroundColor: "rgba(134,201,114,0.15)",
                color: "var(--secondary-logo-color-dark)",
                border: "1px solid var(--secondary-logo-color-dark)",
                fontSize: "0.85rem",
              }}
            >
              <i className="bi bi-calendar3 me-1"></i>{date}
            </span>
          )}
        </div>

        {/* Main layout: essay + optional sidebar */}
        <div className="row g-4">
          {/* Essay */}
          <div className={sidebarContent ? "col-lg-8" : "col-12"}>
            <section className="p-4 bg-light rounded shadow-sm">
              <h4 className="darkBlueText mb-4">
                <i className="bi bi-journal-text me-2"></i>Reflection
              </h4>
              {paragraphs.map((para, i) => (
                // Static content — index key is fine here
                // eslint-disable-next-line react/no-array-index-key
                <p key={i} className={i < paragraphs.length - 1 ? "mb-3" : "mb-0"}>
                  {para}
                </p>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          {sidebarContent && (
            <div className="col-lg-4">
              <div className="p-4 bg-light rounded shadow-sm h-100">
                {sidebarContent}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ExperiencePage.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string,
  essay: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  sidebarContent: PropTypes.node,
};

ExperiencePage.defaultProps = {
  date: null,
  sidebarContent: null,
};

export default ExperiencePage;
