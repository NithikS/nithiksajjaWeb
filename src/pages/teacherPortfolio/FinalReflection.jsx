import NavbarHeader from "../../components/NavbarHeader";
import ContactFooter from "../../components/ContactFooter";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";

const reflectionParagraphs = [
  "Coming into this class I have always had an interest in education. But this experience confirmed it. It was incredible and is something I am going to miss.",
  "Walking into a classroom in the teacher role for the first time felt completely different than I expected. I had prepared slides and knew what I was going to say. But standing in front of the students changed everything. I realized that what I had prepared was rehearsed and they could see right through it. I knew I needed to speak naturally so I seemed human and just like them. The nerves were definitely there. But over time they faded and I felt comfortable. I felt like I belonged up there.",
  "What I learned about students is that the little things matter more than anything else. Making the lesson fun, getting them involved, actually paying attention to them as people and not just as students. When those things are there, the students are actually able to learn. Students know when you genuinely care and they respond to it.",
  "What I learned about teachers changed my perspective. I thought I understood what the job was. Teaching, planning, grading. But watching Mrs. Collins every day showed me how much more goes into it. The relationships, the emotional energy, just being present for students beyond the academic stuff. I saw this clearly at the start of the semester when before class started Mrs. Collins pulled me to the side to tell me about all the situations going on with her students. I had respect for teachers before this course. I have a completely different level of respect now.",
  "The best moments were the eureka moments. Every single time without exception. Watching a concept click in a student's brain, seeing that look on their face, the little bit of pride that they actually got it. Those moments solidified my interest in education. They will always be my favorite moments.",
  "The hardest part was the student teacher relationship. I wanted to be someone the students actually liked and enjoyed being around, but I also needed them to see me as a teacher. Finding that balance was harder than I expected, especially with the age gap being so small. Some of these students are only three or four years younger than me. Many of them will even be at HSE with me next year. There were moments where I was too friendly, too lenient, and I had a bad habit of saying things like \"that is way better than I could ever do\" when a student did something well. I meant it as a compliment but through the book we read and through my experience, I realize now it probably did not help. Finding that line between being approachable and being taken seriously is something I am still working on.",
  "My strengths in this experience were communication and adaptability. I am a natural talker and I can tell when students are not learning and come up with new ways to reach them. When something was not working I could usually find a different angle. My limitations were the nerves early on, struggling to keep everyone's attention at once, and being too nice when the situation needed more firmness.",
  "I am not going into teaching right away after high school. But I know it is in my future. This course did not just confirm something I already thought about myself. It showed me something new. I genuinely love this. Being in a classroom, connecting with students, being part of those moments where someone understands something they did not understand before. That matters to me more than I knew going in.",
  "Thank you for this experience. It is something I will never forget and will always be grateful for.",
];

const teacherNotes = [
  {
    name: "Mrs. Williams",
    icon: "bi-mortarboard-fill",
    accentColor: "var(--primary-logo-color-dark)",
    accentBg: "rgba(70,175,197,0.10)",
    accentBorder: "var(--primary-logo-color-dark)",
    message:
      "I don't know where to start. You have been an amazing teacher, and you have done so in a fraction of the face-to-face time that other teachers normally get. You have always encouraged me in my exploration of education and have always been adaptable to all the craziness. You made it feel okay to not be perfect when teaching, and it is about how you grow. You have made a big impact on my life, and I cannot thank you enough. I will miss this class soooo much, it is the only reason I have been able to get through this year. Thank you for giving me the opportunity to explore this and find out that education is in my future.",
  },
  {
    name: "Mrs. Collins",
    icon: "bi-heart-fill",
    accentColor: "var(--secondary-logo-color-dark)",
    accentBg: "rgba(134,201,114,0.10)",
    accentBorder: "var(--secondary-logo-color-dark)",
    message:
      "Thank you for everything. You have now been my teacher for 4 years and I wish it could be for 4 more. I have learned so much from you and have enjoyed this experience more than you could ever know. From me first contacting you in August to turning and laughing to each other every 5 minutes because of the crazy things the students say. I don't know how to put into words my gratitude towards you. When I contacted you in August, I said that you might not have remembered me, but this year you have made it seem like I never left. Your passion for teaching inspires me every day. I have seen many students stop by your classroom and you remember every single one. I hope that I can be half the teacher that you are.",
  },
];

export default function FinalReflection() {
  return (
    <>
      <NavbarHeader />
      <PageHeader
        title="Final Reflection"
        subTitle="Looking back on a year that changed everything"
      />

      <div className="container py-4">

        {/* Back Button */}
        <p>
          <Link className="btn darkGreenBg iconGreen mt-3 mb-4" to="/teacherportfolio" role="button">
            <i className="bi bi-arrow-left me-2"></i>Back to Portfolio
          </Link>
        </p>

        {/* Badge */}
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
            <i className="bi bi-journal-text me-1"></i>Teacher Thank You
          </span>
          <span
            className="badge rounded-pill px-3 py-2"
            style={{
              backgroundColor: "rgba(134,201,114,0.15)",
              color: "var(--secondary-logo-color-dark)",
              border: "1px solid var(--secondary-logo-color-dark)",
              fontSize: "0.85rem",
            }}
          >
            <i className="bi bi-calendar3 me-1"></i>Spring 2026
          </span>
        </div>

        {/* Main Reflection */}
        <section className="p-4 bg-light rounded shadow-sm mb-5">
          <h4 className="darkBlueText mb-4">
            <i className="bi bi-journal-text me-2"></i>Reflection
          </h4>
          {reflectionParagraphs.map((para, i) => (
            <p key={i} className={i < reflectionParagraphs.length - 1 ? "mb-3" : "mb-0"}>
              {para}
            </p>
          ))}
        </section>

        {/* Teacher Thank-You Cards */}
        <section className="mb-5">
          <h4 className="darkBlueText mb-4">
            A Thank You to the Teachers Who Made This Possible
          </h4>
          <div className="row g-4">
            {teacherNotes.map((note) => (
              <div className="col-md-6" key={note.name}>
                <div
                  className="p-4 rounded shadow h-100 d-flex flex-column"
                  style={{
                    backgroundColor: note.accentBg,
                    border: `2px solid ${note.accentBorder}`,
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: note.accentBorder,
                      }}
                      aria-hidden="true"
                    >
                      <i className={`bi ${note.icon} fs-5 text-white`}></i>
                    </div>
                    <h5 className="mb-0 fw-bold" style={{ color: note.accentColor }}>
                      {note.name}
                    </h5>
                  </div>
                  <p className="mb-0 fst-italic">&ldquo;{note.message}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <ContactFooter />
    </>
  );
}
