import ExperiencePage from "../../components/ExperiencePage.jsx";
import fjhLogo from "../../assets/FJH-Logo.png";

const FJHSidebar = () => (
  <div>
    <h5 className="darkBlueText mb-3">
      <i className="bi bi-building me-2"></i>Fishers Junior High
    </h5>

    <div
      className="rounded d-flex align-items-center justify-content-center flex-column mb-4"
      style={{
        height: "160px",
        backgroundColor: "rgba(70,175,197,0.5)",
        border: "2px solid var(--primary-logo-color-dark)",
      }}
    >
      <img src={fjhLogo} alt="Fishers Junior High Logo" className="img-fluid" style={{ maxHeight: "140px", objectFit: "contain" }} />
    </div>

    <div>
      <h6 className="darkBlueText fw-bold mb-2">
        <i className="bi bi-info-circle me-2"></i>About This Experience
      </h6>
      <ul className="list-unstyled text-muted small mb-0">
        <li className="mb-1"><i className="bi bi-person me-2"></i>Teacher: Mr. Gaza</li>
        <li className="mb-1"><i className="bi bi-geo-alt me-2"></i>Fishers Junior High, Fishers, IN</li>
        <li className="mb-1"><i className="bi bi-book me-2"></i>Subject: Engineering &amp; Technology</li>
        <li><i className="bi bi-people me-2"></i>Grades: 7th &amp; 8th</li>
      </ul>
    </div>
  </div>
);

const essay = [
  "To start, I want to talk about Mr. Gaza himself because he is truly remarkable. He is the type of person where, after talking for just five minutes, it feels like you have known each other for years. His teaching philosophy centers on making class fun, because in his view, students simply will not learn if they are not engaged. He has a loud, commanding voice, but he uses it to crack jokes and create a comfortable, energetic environment for his students.",
  "To start the day, he had his agenda on the front screen. For the 7th grade classes I observed, students began with ten minutes of a bridge builder software activity, then he walked them through the agenda and what they would be working on. During the Excel portion of the lesson, I witnessed a strategy I absolutely loved and want to borrow if I become a teacher. After each action he demonstrated, he had students stand up if they were able to replicate it, which was a quick and effective formative assessment. But then he took it one step further: he told the students who were standing to go help someone who was still sitting down. It turned the whole room into a peer teaching moment and naturally built a sense of community.",
  "Throughout the day, it was clear that Mr. Gaza was not focused on speed or perfect mastery. He cared most about whether students understood the concept. Whenever he needed to get their attention, he would use a funny cue word like \"67\" and the whole class would settle immediately before he moved on. Then during project work time, I witnessed something that genuinely impressed me: every single student was wearing their safety glasses while using the machines. It was like magic, and I was more impressed in that moment than I had been in a long time.",
  "I found it interesting to learn that his classes run on a different schedule than Mrs. Collins's, with 7th grade on a 9 week rotation while 8th grade is a full semester. When I asked him about it, he explained that the 9 week format serves as an introduction to engineering so students can explore whether they are interested before committing to more. It also allows him to reach almost every 7th grader at some point in the year, which is a really thoughtful approach.",
  "Overall, I learned a great deal from observing Mr. Gaza. I got to see different classroom management strategies in action, and because we teach the same subject area, I also gained insight into how he decides what to teach, in what order, and why.",
];

const FJHObservation = () => (
  <ExperiencePage
    title="Teacher Observation at Fishers Junior High"
    subTitle="Observing Mr. Gaza's Engineering & Technology classes at Fishers Junior High"
    category="School Observation"
    essay={essay}
    sidebarContent={<FJHSidebar />}
  />
);

export default FJHObservation;