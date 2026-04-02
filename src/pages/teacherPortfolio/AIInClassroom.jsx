import ExperiencePage from "../../components/ExperiencePage.jsx";

const articles = [
  {
    title: "Teaching Students How to Use AI Responsibly",
    author: "Shelby Scoffield",
    publication: "Edutopia",
    url: "https://www.edutopia.org/article/teaching-students-use-ai-responsibly",
    summary: "How one teacher paused her curriculum to spend a week helping students understand responsible AI use, verification of sources, and spotting bias in AI output.",
  },
  {
    title: "Guiding Students to Develop AI Literacy",
    author: "Rachelle Dené Poth",
    publication: "Edutopia",
    url: "https://www.edutopia.org/article/ai-literacy-students",
    summary: "A broader look at what AI literacy really means, including real world applications, ethical considerations, and building that knowledge gradually over time.",
  },
  {
    title: "Teaching CTE Students About Work-Related Uses of AI",
    author: "Michele Lockhart",
    publication: "Edutopia",
    url: "https://www.edutopia.org/article/teaching-cte-students-use-ai",
    summary: "Focused on Career and Technical Education classrooms, covering how AI can help students build real workforce skills like résumé writing and interview prep.",
  },
];

const AIArticlesSidebar = () => (
  <div>
    <h5 className="darkBlueText mb-3">
      <i className="bi bi-newspaper me-2"></i>Articles Referenced
    </h5>
    <p className="text-muted small mb-3">
      A combination of three Edutopia articles, all focused on AI in the classroom.
    </p>

    <div className="d-flex flex-column gap-3">
      {articles.map((article) => (
        <div
          key={article.url}
          className="p-3 rounded"
          style={{
            backgroundColor: "rgba(70,175,197,0.08)",
            border: "1px solid rgba(70,175,197,0.25)",
          }}
        >
          <p className="fw-semibold mb-1 darkBlueText" style={{ fontSize: "0.9rem" }}>
            {article.title}
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.8rem" }}>
            {article.author} &mdash; <em>{article.publication}</em>
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.8rem" }}>
            {article.summary}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm darkBlueBg iconBlue"
          >
            <i className="bi bi-box-arrow-up-right me-1"></i>Read Article
          </a>
        </div>
      ))}
    </div>
  </div>
);

const essay = [
  "I chose three articles from Edutopia that all focus on AI in the classroom: \"Teaching Students How to Use AI Responsibly\" by Shelby Scoffield, \"Guiding Students to Develop AI Literacy\" by Rachelle Dené Poth, and \"Teaching CTE Students About Work Related Uses of AI\" by Michele Lockhart. I picked these three together because they all address the growing role of AI in education from different angles, covering responsible use, broader AI literacy, and career readiness. As someone enrolled in both a Software Development Capstone and a Cadet Teaching course, AI is something I use every day, and I wanted to learn more about how to actually teach it rather than just ignore it.",
  "Scoffield's article describes how she paused her English curriculum for a full week to teach students how to use AI responsibly. She walked them through seven key questions covering things like how to verify AI generated sources, when paraphrasing becomes plagiarism, and how to identify bias in AI output. After the unit, students began coming to her with questions about AI instead of hiding their use. Her main takeaway was that banning AI does not work and that you have to teach students how to use it as a tool to deepen their learning, not replace it.",
  "Poth's article takes a broader approach, arguing that AI literacy goes beyond just knowing what AI is. It involves understanding real world applications, grappling with ethical questions, and being able to critically evaluate AI generated content. She recommends starting early, modeling responsible use as a teacher, and using engaging activities like a game where students guess whether a piece of text was written by a person or an AI. Her key point is that AI literacy needs to be built gradually over time, not treated as a one time lesson. I believe every subject needs to have a conversation about AI's role in that field, because it is already shaping every industry.",
  "Lockhart's article resonated with me most personally. It focuses on CTE classrooms and how AI can help students prepare for the real workforce. I recently went through the process of building my own résumé and genuinely did not know where to start or what employers actually care about. I ended up asking Claude for help, and it walked me through how to frame my projects and skills in a way I would not have come up with on my own. Students should be learning how to use AI for things like drafting résumés, writing cover letters, and preparing for interviews because being able to use AI effectively is quickly becoming a baseline job skill. The big emphasis is on using AI as a tutor, not an answer machine. Students should prompt it to explain things step by step, not just generate their work for them. She also stresses privacy practices like never entering real names or personal information into AI platforms, which is something I genuinely need to be more careful about myself.",
  "All three articles connected directly to my experience cadet teaching with Mrs. Collins. The students I work with are already using AI tools regularly, but most have never been given a real framework for thinking about them. I have tried to step in and redirect when I see students using AI in counterproductive ways, like just copying a math answer. What all three authors agree on is that students will use these tools regardless, so the better approach is to build structure around how they engage with them. The biggest takeaway I carry with me is this: the goal of AI education is not to scare students away from technology or let them use it without limits. It is to make them thoughtful users who understand when AI helps and when it gets in the way of actual learning. That is the mindset I want to model as a teacher.",
];

const AIInClassroom = () => (
  <ExperiencePage
    title="AI in the Classroom"
    subTitle="A reflection on three Edutopia articles exploring responsible AI use, AI literacy, and career readiness"
    category="Research Paper"
    essay={essay}
    sidebarContent={<AIArticlesSidebar />}
  />
);

export default AIInClassroom;