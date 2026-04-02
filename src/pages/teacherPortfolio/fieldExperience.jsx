import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import collage1 from "../../assets/fieldPic1.jpg";
import collage2 from "../../assets/fieldPic2.jpg";
import collage3 from "../../assets/fieldPic3.jpg";
import collage4 from "../../assets/fieldPic4.jpg";

const FieldExperience = () => {
  return (
    <>
      <PageHeader 
        title="Field Experience" 
        subTitle="Cadet Teaching Experience at Hamilton Southeastern Intermediate/Junior High" 
      />

      <div className="container py-4">

        {/* Back Button */}
        <p>
          <Link className="btn darkGreenBg iconGreen mt-3 mb-4" to="/teacherportfolio" role="button">
            <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
          </Link>
        </p>

        {/* Experience Overview */}
        <section className="mb-5">
          <h2 className="mb-3 darkBlueText">
            <i className="bi bi-person-workspace me-2"></i>Teaching Experience
          </h2>
          <p>
            This semester, I cadet taught under <strong>Mrs. Collins</strong>, an Engineering and Technology teacher, working with <strong>7th and 8th grade students</strong> at <strong>Hamilton Southeastern Intermediate/Junior High</strong> in Fishers, Indiana. My experience included assisting with lessons, observing classroom management, and working directly with students on hands-on engineering and technology projects.
          </p>
        </section>

        {/* School Demographics */}
        <section className="mb-5">
          <h2 className="mb-3 darkBlueText">
            <i className="bi bi-building me-2"></i>School Demographics
          </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Location:</strong> Fishers, Indiana</li>
            <li className="list-group-item"><strong>Total Enrollment:</strong> Approximately 1,200 students (grades 6–8)</li>
            <li className="list-group-item"><strong>Socioeconomic Breakdown:</strong> Diverse student body with a wide range of socioeconomic backgrounds</li>
            <li className="list-group-item"><strong>Free/Reduced Lunch:</strong> About 11% of students qualify for free or reduced-price lunch</li>
            <li className="list-group-item"><strong>Other Info:</strong> Strong focus on STEM programs, project-based learning, and extracurricular opportunities in engineering and technology</li>
          </ul>
        </section>

        {/* Collage Section */}
        <section className="mb-5">
          <h2 className="mb-3 darkBlueText">
            <i className="bi bi-camera me-2"></i>Field Experience Photos
          </h2>
          <p>
            Here are some highlights from my cadet teaching experience, including classroom activities, student engagement, and the school environment.
          </p>

          {/* Collage Container */}
          <div className="collage-container d-flex flex-wrap gap-2 justify-content-center mb-5">

            {/* Row 1 */}
            <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
              <img 
                src={collage1} 
                alt="Field experience 1" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
              <img 
                src={collage2} 
                alt="Field experience 2" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Row 2 */}
            <div style={{ flex: "1 1 30%", minWidth: "150px" }}>
              <img 
                src={collage3} 
                alt="Field experience 3" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div style={{ flex: "1 1 65%", minWidth: "200px" }}>
              <img 
                src={collage4} 
                alt="Field experience 4" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* New Row 3 */}
            <div style={{ flex: "1 1 35%", minWidth: "150px" }}>
              <img 
                src="https://via.placeholder.com/400x300" 
                alt="Placeholder 5" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div style={{ flex: "1 1 60%", minWidth: "200px" }}>
              <img 
                src="https://via.placeholder.com/600x300" 
                alt="Placeholder 6" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* New Row 4 */}
            <div style={{ flex: "1 1 50%", minWidth: "180px" }}>
              <img 
                src="https://via.placeholder.com/500x400" 
                alt="Placeholder 7" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div style={{ flex: "1 1 45%", minWidth: "180px" }}>
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Placeholder 8" 
                className="img-fluid rounded shadow"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default FieldExperience;