import ExperiencePage from "../../components/ExperiencePage.jsx";
import fpdLogo from "../../assets/FPD-Logo.png";

const SROSidebar = () => (
  <div>
    <h5 className="darkBlueText mb-3">
      <i className="bi bi-shield-check me-2"></i>Fishers Police Department
    </h5>

    <div
      className="rounded d-flex align-items-center justify-content-center flex-column mb-4"
      style={{
        height: "160px",
        backgroundColor: "rgba(70,175,197,0.5)",
        border: "2px solid var(--primary-logo-color-dark)",
      }}
    >
      <img src={fpdLogo} alt="Fishers Police Department Logo" className="img-fluid" style={{ maxHeight: "140px", objectFit: "contain" }} />
    </div>

    <div>
      <h6 className="darkBlueText fw-bold mb-2">
        <i className="bi bi-info-circle me-2"></i>About This Experience
      </h6>
      <ul className="list-unstyled text-muted small mb-0">
        <li className="mb-1"><i className="bi bi-person-badge me-2"></i>Role: Student Resource Officer</li>
        <li className="mb-1"><i className="bi bi-geo-alt me-2"></i>Hamilton Southeastern Intermediate/Junior High</li>
        <li><i className="bi bi-people me-2"></i>Serving grades 5 to 8</li>
      </ul>
    </div>

    <div
      className="mt-4 p-3 rounded"
      style={{
        backgroundColor: "rgba(134,201,114,0.12)",
        borderLeft: "4px solid var(--secondary-logo-color-dark)",
      }}
    >
      <h6 className="fw-bold mb-2" style={{ color: "var(--secondary-logo-color-dark)" }}>
        <i className="bi bi-lightbulb me-2"></i>Key Lessons
      </h6>
      <ul className="list-unstyled text-muted small mb-0">
        <li className="mb-1">1. Be a sponge and absorb everything you can in a new environment.</li>
        <li>2. Never stop learning. Practice and use what you know, or you will lose it.</li>
      </ul>
    </div>
  </div>
);

const essay = [
  "I chose to shadow the HIJH Student Resource Officer, and it turned out to be one of the most memorable experiences of my cadet teaching year. From the moment we started talking, I could tell he was someone genuinely kind and caring. We began by going over the general scope of his job and its different components.",
  "The first part of his role involves the physical security of the building, walking the hallways, checking for propped doors, looking for anything suspicious or out of the ordinary, and making sure both students and staff feel safe. He also uses a range of technology tools every day, including security cameras, daily reporting systems, Skyward, HSE Report It, and a platform for handling cybercrime reports. Technically, physical security is the only thing required of the position, but many officers, including him, go far beyond that.",
  "His primary focus is on building relationships with students so they feel comfortable enough to come to him with anything. The goal is to help students understand that law enforcement are not the bad guys and that they genuinely care about each person in the building. The first thing that stuck with me was how he described every interaction: not as an officer talking to a student, but as two people having a conversation. He makes sure every student feels heard and never made to feel lesser because of their age.",
  "When I asked him to describe a time when he made a significant impact on a student, he said that every student whose day he improves counts as an accomplishment to him. The most rewarding moments, he explained, are when a student recognizes their own worth and realizes they are worth fighting for. Watching a student's grades improve or their behavior turn around, that never gets old.",
  "We then walked the school together and checked in on students in the hallways. It happened to be school wide testing day for 7th and 8th graders so, we were checkingin on any students not in their classroom. We then stepped outside with a group of 5th grade teachers who had taken their students out to play math games in the great weather. We made sure the area stayed safe and that the noise level stayed manageable for the students testing inside.",
  "The most telling part of the whole day was simply watching students react to him as we walked the halls. Every single student recognized him and said hi. He was clearly someone they trusted. Along the way, we also stopped to talk with teachers and staff, because he emphasized that building relationships with the adults in the building matters just as much.",
  "He left me with two lessons I have thought about a lot since: first, whenever you go somewhere new, be a sponge and absorb everything you can. Second and most importantly, never stop learning. After you gain a skill, you have to keep using it or you will lose it. He used learning Spanish as the example: you can take all the classes, but if you stop practicing, it fades. He also shared a small routine that I found to be amazing: when students came to him asking for a sticker, instead of just handing one over, he would ask them three questions: what is something new you learned that you did not know before, how is that going to be useful in your life, and who taught it to you? It made students actually stop and reflect, and I thought it was a genuinely clever way to build that habit of thinking and reflecting.",
  "Even though I will never become an SRO, this experience gave me a new appreciation for the role they play in schools. It also made me think more carefully about the relationships I want to build with students and staff if I go into teaching.",
];

const SROShadow = () => (
  <ExperiencePage
    title="Student Resource Officer Shadow"
    subTitle="Shadowing the HIJH Student Resource Officer for a full school day"
    category="Job Shadow"
    essay={essay}
    sidebarContent={<SROSidebar />}
  />
);

export default SROShadow;