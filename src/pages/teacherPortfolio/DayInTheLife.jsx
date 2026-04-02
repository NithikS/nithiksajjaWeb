import ExperiencePage from "../../components/ExperiencePage.jsx";
import HIJHLogo from "../../assets/HIJH-Logo.png";

const DayInTheLifeSidebar = () => (
  <div>
    <h5 className="darkBlueText mb-3">
      <i className="bi bi-building me-2"></i>Hamilton Southeastern Intermediate/Junior High
    </h5>
    <div
      className="rounded d-flex align-items-center justify-content-center flex-column"
      style={{
        height: "220px",
        backgroundColor: "rgba(70,175,197,0.5)",
        border: "2px solid var(--primary-logo-color-dark)",
      }}
    >
      <img src={HIJHLogo} alt="Hamilton Southeastern Intermediate/Junior High Logo" className="img-fluid" style={{ maxHeight: "140px", objectFit: "contain" }} />
    </div>

    <div className="mt-4">
      <h6 className="darkBlueText fw-bold mb-2">
        <i className="bi bi-info-circle me-2"></i>About This Experience
      </h6>
      <p className="text-muted small mb-0">
        A full day shadowing Mrs. Collins at Hamilton Southeastern Intermediate/Junior High, observing everything from prep period to flex time.
      </p>
    </div>
  </div>
);

const essay = [
  "I started the day with Mrs. Collins' prep period. During that time, we reviewed the plans for the day, got out project materials, and checked her mailbox. She also sent emails to all of her students who were missing assignments so they could come in during flex for help. One surprising thing that happened was that she received an email that appeared to be from HSE but also looked suspicious. During lunch, we stopped by the office to double check whether it was legitimate. We ended up deciding to ignore it since it had the hallmarks of a phishing email.",
  "One of the best things Mrs. Collins does for her students is making her class a break from the typical notes, homework, repeat cycle. That is something I want to prioritize if I become a teacher, because I know how draining it is to have too many classes that follow that same pattern. The main thing I would do differently is giving students a little less freedom, since some students interpret her kindness as an opportunity to push boundaries. Along those same lines, she makes a real effort to let students socialize and talk during project time so they can decompress while they work. Her goal is for the classroom to feel calm and fun so every student feels comfortable and each class becomes its own community.",
  "One of the best moments of my day came right before I met her 8th period class for the first time. Mrs. Collins pulled me aside and gave me the full rundown of the class's drama and dynamics, and I already knew it was going to be an amazing group. I also had not fully appreciated just how much teachers have to navigate in terms of classroom relationships and personalities until that moment.",
  "Lunch was another highlight. The teachers had a \"Souper Bowl\" lunch where everyone brought different foods, and it was an amazing time filled with conversations and jokes. It gave me a real look at the strong sense of community that exists among the staff, which is something I had not thought much about before.",
  "At the end of the day was flex period, where I helped different students with their work. After the bell rang, I cleaned up the room and helped Mrs. Collins plan out the work for the following week. Overall, it was an amazing day and different from my first Day in the Life experience since I got to see her prep period this time and was there on a Friday, which gave me a window into all the preparation she does heading into the next week.",
];

const DayInTheLife = () => (
  <ExperiencePage
    title="Day in the Life"
    subTitle="A full day shadowing Mrs. Collins at Hamilton Southeastern Intermediate/Junior High"
    category="Day in the Life"
    essay={essay}
    sidebarContent={<DayInTheLifeSidebar />}
  />
);

export default DayInTheLife;
