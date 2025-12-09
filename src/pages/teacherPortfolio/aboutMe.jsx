import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profilePic.png";

const AboutMe = () => {
  return (
    <>
      <PageHeader title="About Me" subTitle="Learn more about my background, interests, and future plans" />

      <div className="container py-4">

    {/* Back Button */}
      <p>
        <Link className="btn darkGreenBg iconGreen mt-3 mb-4" to="/teacherportfolio" role="button">
          <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
        </Link>
      </p>

        {/* Short Biography */}
        <section className="mb-5 p-4 bg-light rounded shadow d-flex flex-column flex-md-row align-items-center gap-4">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle darkBlueText img-fluid"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
            id="profileTeacherPic"
          />
          <div>
            <h2 className="darkBlueText mb-2"><i className="bi bi-person-fill me-2"></i>Short Biography</h2>
            <p>
              I am 16 and a Junior at HSE with a strong interest in Computer Science. This 2025-2026 school year, I am part of HSE&apos;s Cadet Teaching program, shadowing Mrs. Collins at Hamilton Southeastern Intermediate/Junior High to gain hands-on teaching experience. I enjoy connecting with students, exploring their learning styles, and helping them succeed. Through this program, I hope to discover if teaching is the right path for my future while combining my passion for technology with creating meaningful learning experiences like many teachers have given me.
            </p>
          </div>
        </section>

        {/* Profile Journal */}
        <section className="mb-5">
          <h2 className="darkBlueText mb-3"><i className="bi bi-journal-text me-2"></i>Profile Journal</h2>
          {/* Assessment Cards */}
          <div className="row g-4">
            {/* Assessment 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title"><i className="bi bi-clipboard-check me-2"></i>16 Personalities Quiz</h5>
                  <p><strong>Format:</strong> Statements with a 7-point scale from Agree to Disagree about everyday behavior.</p>
                  <p><strong>Results:</strong> I got Debater (75% extraverted, 57% intuitive, 53% thinking, 51% prospecting, 57% turbulent). I am social, love being with others, and strive to improve constantly.</p>
                  <p><strong>Impact:</strong> These results show I want to be a teacher who connects with students and continually improves myself.</p>
                </div>
              </div>
            </div>

            {/* Assessment 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title"><i className="bi bi-briefcase me-2"></i>Naviance Career Interest Profiler</h5>
                  <p><strong>Format:</strong> Statements rated Strongly Disagree to Strongly Agree about potential activities.</p>
                  <p><strong>Results:</strong> I am Conventional, Realistic, Social, and Investigative. I like structure but also enjoy helping others and leading.</p>
                  <p><strong>Impact:</strong> These results show I want to be a teacher who is organized, structured, and can lead the classroom effectively.</p>
                </div>
              </div>
            </div>

            {/* Assessment 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title"><i className="bi bi-person-lines-fill me-2"></i>Naviance AchieveWorks Personality</h5>
                  <p><strong>Format:</strong> Choosing between 2 scenarios and selecting the one that best fits you.</p>
                  <p><strong>Results:</strong> I got ESTJ (Extraversion, Sensing, Thinking, Judging). Outspoken, logical, enjoy routines and predictable patterns.</p>
                  <p><strong>Impact:</strong> These results show I want to be an approachable, organized teacher who can make meaningful connections with students.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Belief Statements */}
        <section className="mb-5 p-4 bg-light rounded shadow">
          <h2 className="darkBlueText mb-3"><i className="bi bi-lightbulb-fill me-2"></i>Belief Statements & Educational Philosophy</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item mb-2">
              <strong>Children:</strong> I believe children are curious, motivated, and social because they learn best by asking questions, exploring new ideas, and collaborating with their peers.
            </li>
            <li className="list-group-item mb-2">
              <strong>Teaching:</strong> I believe teachers are patient, adaptable, and encouraging because teachers adjust to each student&apos;s needs while providing steady support that helps students grow with confidence.
            </li>
            <li className="list-group-item mb-2">
              <strong>Education:</strong> I believe education is opportunity-creating, evolving, and life-altering because it constantly adapts to the world and gives students the chance to build better futures for themselves and their communities.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
