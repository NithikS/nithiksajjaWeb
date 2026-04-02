import ExperiencePage from "../../components/ExperiencePage.jsx";
import musicalPoster from "../../assets/HIJH-MPJr.jpeg";

const MusicalSidebar = () => (
  <div>
    <h5 className="darkBlueText mb-3">
      <i className="bi bi-music-note-beamed me-2"></i>Mary Poppins Jr.
    </h5>

    <div
      className="rounded d-flex align-items-center justify-content-center flex-column mb-4"
      style={{
        height: "220px",
        backgroundColor: "rgba(70,175,197,0.5)",
        border: "2px solid var(--primary-logo-color-dark)",
      }}
    >
          <img src={musicalPoster} alt="Mary Poppins Jr. Musical Poster" className="img-fluid rounded" style={{ maxHeight: "200px", objectFit: "contain" }} />
    </div>

    <div>
      <h6 className="darkBlueText fw-bold mb-2">
        <i className="bi bi-info-circle me-2"></i>About This Experience
      </h6>
      <ul className="list-unstyled text-muted small mb-0">
        <li className="mb-1"><i className="bi bi-geo-alt me-2"></i>Hamilton Southeastern Intermediate/Junior High (HIJH)</li>
        <li className="mb-1"><i className="bi bi-star me-2"></i>Production: Mary Poppins Jr.</li>
        <li><i className="bi bi-heart me-2"></i>Featuring many of Mrs. Collins&apos; students</li>
      </ul>
    </div>

    <div
      className="mt-4 p-3 rounded"
      style={{
        backgroundColor: "rgba(134,201,114,0.12)",
        borderLeft: "4px solid var(--secondary-logo-color-dark)",
      }}
    >
      <p className="text-muted small mb-0 fst-italic">
        &ldquo;Showing up for even one event outside of class means everything to a student and helps build the connection between student and teacher.&rdquo;
      </p>
    </div>
  </div>
);

const essay = [
  "It was incredible. I went to HIJH's production of Mary Poppins Jr., and it genuinely changed me. I never attended any of the musicals when I was a student at HIJH, and now I regret that completely. I am just writing my honest feelings here — the entire experience was joyful and moving, and I was blown away by the work and talent that went into it.",
  "Seeing my students in the play was something I did not expect to affect me the way it did. One of the main performers was a student of mine — and not only that, but he is normally one of the quieter kids in class. Watching him command the stage was incredible, and I could not wait to tell him how amazing he was.",
  "I found out about the musical from one of my MTSS students. He mentioned it in passing, and I was immediately interested — partly because of this assignment, but also because it genuinely sounded like something worth seeing. I told him to let me know when tickets went on sale. I had almost forgotten about it until he messaged me that they were available, and I bought one right away.",
  "After the show ended, I was waiting for the students to clear out first when I spotted the student who had originally told me about it. He came right over and asked what I thought. I told him it was incredible, and watching his face light up with happiness was a feeling I have never quite experienced before. It meant everything to him that I was there.",
  "Only in that moment did I fully understand the true purpose of this assignment. For a while, I had been treating it like just another item on my to-do list. But after seeing my students' reactions to knowing I showed up for them, everything clicked. Students seeing their teachers support them outside the classroom is genuinely impactful in a way I had not appreciated before.",
  "So thank you for making this a required experience. Like I said — I never went to these events as a student, and now I wish I had. The memories I made with my students that night are something I will hold onto, and I now understand that showing up for even one event outside of class means everything to a student. It is one of the simplest ways to build real connection.",
];

const MaryPoppinsObservation = () => (
  <ExperiencePage
    title="HIJH Mary Poppins Jr. Musical"
    subTitle="Attending my students' performance of Mary Poppins Jr. at Hamilton Southeastern Intermediate/Junior High"
    category="Extracurricular Observation"
    essay={essay}
    sidebarContent={<MusicalSidebar />}
  />
);

export default MaryPoppinsObservation;
