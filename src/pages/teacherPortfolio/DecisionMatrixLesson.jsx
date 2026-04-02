import LessonPage from "../../components/LessonPage.jsx";

// Example Decision Matrix component rendered in the 3rd tab
const DecisionMatrixExample = () => {
  const criteria = ["Comfort", "Arm Rests", "Bold Color", "Cost"];
  const chairs = [
    { name: "Chair A", scores: [4, 3, 2, 1] },
    { name: "Chair B", scores: [3, 4, 3, 2] },
    { name: "Chair C", scores: [2, 2, 4, 4] },
    { name: "Chair D", scores: [4, 1, 1, 3] },
    { name: "Chair E", scores: [3, 3, 3, 2] },
    { name: "Chair F", scores: [1, 4, 4, 4] },
  ];

  const getTotal = (scores) => scores.reduce((a, b) => a + b, 0);
  const totals = chairs.map((c) => getTotal(c.scores));
  const maxTotal = Math.max(...totals);

  return (
    <div>
      <div className="mb-4 p-3 rounded" style={{ backgroundColor: "rgba(70,175,197,0.08)", borderLeft: "4px solid var(--primary-logo-color-dark)" }}>
        <p className="mb-0">
          <i className="bi bi-info-circle me-2"></i>
          This is an example of a Decision Matrix used during the lesson. Students scored 6 chairs across 4 criteria on a <strong>0 to 4 scale</strong>. The chair with the highest total score is highlighted.
        </p>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered table-hover align-middle text-center mb-0">
          <thead style={{ backgroundColor: "var(--primary-logo-color-dark)", color: "white" }}>
            <tr>
              <th className="text-start ps-3">Chair Option</th>
              {criteria.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Total Score</th>
            </tr>
          </thead>
          <tbody>
            {chairs.map((chair, i) => {
              const total = totals[i];
              const isWinner = total === maxTotal;
              return (
                <tr key={i} style={isWinner ? { backgroundColor: "rgba(78, 247, 73, 0.15)", fontWeight: "600" } : {}}>
                  <td className="text-start ps-3">
                    {isWinner && <i className="bi bi-trophy-fill me-2" style={{ color: "var(--secondary-logo-color-dark)" }}></i>}
                    {chair.name}
                  </td>
                  {chair.scores.map((score, j) => (
                    <td key={j}>{score}</td>
                  ))}
                  <td>
                    <span className={`badge ${isWinner ? "darkGreenBg" : "bg-secondary"}`} style={{ fontSize: "0.9rem" }}>
                      {total}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-muted small mt-3">
        <i className="bi bi-info-circle me-2"></i>
        Scoring scale: <strong>0</strong> = Does not meet criteria &nbsp;|&nbsp; <strong>1</strong> = Barely meets &nbsp;|&nbsp; <strong>2</strong> = Partially meets &nbsp;|&nbsp; <strong>3</strong> = Mostly meets &nbsp;|&nbsp; <strong>4</strong> = Fully meets
      </p>
    </div>
  );
};

// Lesson Plan Data
const lessonPlan = {
  standards: [
    { code: "8.CC.4", description: "Communicate specific constraints and criteria established for an investigation." },
    { code: "8.CC.5", description: "Evaluate competing solutions or arguments in a systematic way based on qualitative and/or quantitative evidence." },
    { code: "8.AM.3", description: "Use models to compare and contrast different systems and explain the factors that influence them." },
    { code: "8.IDL.3", description: "Describe how solutions or technologies are adapted to meet the changing needs and wants of individuals or communities." },
  ],
  objectives: [
    "Communicate specific constraints and criteria established for an investigation.",
    "Evaluate competing solutions or arguments in a systematic way based on qualitative and/or quantitative evidence.",
    "Use models to compare and contrast different systems and explain the factors that influence them.",
    "Describe how solutions or technologies are adapted to meet the changing needs and wants of individuals or communities.",
  ],
  materials: [
    "Printed copies of the Decision Matrix worksheet",
    "Pencils and general supplies",
    "Students seated in their existing project groups",
  ],
  priorKnowledge:
    "Students need to be able to identify the requirements in a problem and be familiar with their current PLTW project and its design criteria from Activity 1.1 (Ankle Foot Orthosis).",
  activities: [
    {
      heading: "Opening / The Hook",
      content: [
        "Present students with a relatable scenario: \"You need to choose the best chair. You have six options.\"",
        "Display images of 3 to 4 different chair options.",
        "As a class, brainstorm evaluation criteria: Comfort, Arm Rests, Bold Color, and Cost.",
        "In groups, students score each chair using a Decision Matrix on a 0 to 4 scale and calculate totals.",
        "Whole class discussion: Which chair scored highest? Lowest? Did every group get the same result? How did personal bias affect scoring?",
        "Transition: Explain that this structured system prevents decisions based solely on opinion and ensures choices are supported by evidence.",
      ],
    },
    {
      heading: "Connecting to PLTW Activity 1.1 (Ankle Foot Orthosis)",
      content: [
        "Ask students to identify design criteria for their AFO project.",
        "Clarify constraints: attaches to foot and lower leg, ankle can move upward, places foot flat when standing, patient cannot point toes, gives foot and ankle support, patient wears with comfort, can be removed.",
        "Explain that this matrix will support both peer evaluation and teacher grading during presentations.",
      ],
    },
  ],
  differentiation: [
    {
      category: "Content",
      description: "What students learn and the materials they use",
      strategy: "Talk through the matrix step by step so it makes more sense. Allow students to reference their vocabulary notes.",
    },
    {
      category: "Process",
      description: "How students engage with the content",
      strategy: "Allow verbal discussion before written scoring. Offer small group check ins for students who struggle with organization. Provide sentence stems: \"This design scored highest in ___ because...\" and \"One limitation of this solution is...\"",
    },
    {
      category: "Product",
      description: "How students show what they know",
      strategy: "All students complete a Decision Matrix. Students evaluate peer AFO presentations using the matrix.",
    },
    {
      category: "Learning Environment",
      description: "Where and with whom learning happens",
      strategy: "Students work in collaborative design teams. Whole class discussion builds shared understanding. Teacher circulates to provide targeted support.",
    },
  ],
  closure: [
    "Ask students: When and why should engineers use a Decision Matrix? How does it help communicate design decisions?",
    "Students retrieve their AFO projects, review the criteria on PLTW, plan how they will justify their design decisions in presentations, and confirm they understand how they will be evaluated.",
  ],
  assessment:
    "Formative: To assess students' understanding of the decision matrix, each student evaluates other groups while they present. Papers are reviewed after class to check for comprehension.",
};

// Reflection Data
const reflection = {
  gradeSubject: "8th Grade Technology Education",
  topic: "How and when to use a Decision Matrix and lead into AFO presentations",
  sections: [
    {
      heading: "1. Lesson Planning and Preparation",
      content:
        "Before the lesson, I put together a lesson plan that outlined the standards being covered, the materials needed, and the order of events so I could stay organized. To start, I made sure to let students know they would be learning about what a decision matrix is and how we would use one to evaluate their projects. During the lesson, I walked around and checked in with each group to figure out how much time to allocate, which helped make sure everyone had enough time to understand the concept.",
    },
    {
      heading: "2. Student Engagement and Participation",
      content:
        "My students were amazing during my lesson! A large part of it involved multiple full class discussions, and all the students actively participated. For example, after filling out the decision matrix for the chairs, students shared which option they thought was the best or worst and explained their reasoning. I wanted to make sure the environment felt comfortable and that students knew they could speak freely — we were all learning this new concept together. I also knew they would be presenting their projects during the same class period, so I was intentional about not adding unnecessary stress.",
    },
    {
      heading: "3. Instructional Strategies",
      content:
        "I had students complete an example decision matrix before moving on to the actual rubric for their project. The example involved six different chairs and finding the \"best\" option. I was able to walk through it with them so they understood both how to use the matrix and when it makes sense to use one. After the example, we had a class discussion where I could check whether the students had grasped the concept.",
    },
    {
      heading: "4. Classroom Management",
      content:
        "During the lesson, I had students sit with their project groups, groups of three in pod arrangements. This allowed them to collaborate and support each other without getting too distracted. Because we had several class discussions throughout, students stayed mostly on task and did not get bored.",
    },
    {
      heading: "5. Student Understanding and Learning",
      content:
        "I assessed student understanding in a few ways. First, I paid close attention to what was being said during class discussions to identify any gaps. Second, I reviewed their completed example decision matrices to see if their scores generally aligned, which would indicate they understood how the tool works. Finally, the summative assessment was the decision matrix students filled out while watching and evaluating other groups' AFO presentations.",
    },
    {
      heading: "6. Use of Formative Assessment and Feedback",
      content:
        "Throughout the lesson, I made sure students understood that a decision matrix reflects personal experience — their answers do not have to match everyone else's, and that is okay. I brought up past examples, like how one student believed black is a bold color while others might disagree. I built off what students said and made gentle corrections without ever just telling someone they were wrong.",
    },
    {
      heading: "7. Time Management",
      content:
        "I had a rough timeline in mind for each part of the lesson, which helped me adapt on the fly and make sure students fully understood the material. I balanced meaningful discussion with enough time left for the project presentations. Overall, I think I gave students adequate time to talk through ideas without letting things go off track.",
    },
    {
      heading: "8. Student Relationships and Classroom Climate",
      content:
        "During class discussions, I made a point to include all students, especially since it was a smaller class and I wanted everyone involved. At the same time, I made sure not to push students who I knew were uncomfortable speaking in front of the whole group.",
    },
    {
      heading: "9. Self Reflection and Professional Growth",
      content: [
        "What went well: Overall, the lesson went really well. It was designed to be a lighter, more enjoyable class, and students were genuinely able to grasp the concepts.",
        "What I'd change: The lesson went mostly smoothly. The one thing I'd adjust is better accounting for the time students need to complete their work independently — I'd plan more intentionally for that portion.",
        "How I felt: I was definitely nervous since it was my first time teaching this class, but I have had experience teaching other grade levels through Computer Science Honor Society, which gave me the confidence to lead effectively.",
        "\"Aha\" moment: Watching the students have their own \"aha\" moments was incredible, especially during the example matrix, when they started seeing the real world applications and everything clicked.",
        "Growth moving forward: I still have a lot to learn. There were a few things I missed that Mrs. Collins had to step in and cover, but overall it was a great experience and I walked away with a lot of valuable lessons.",
      ],
    },
  ],
};

const DecisionMatrixLesson = () => {
  return (
    <LessonPage
      title="Decision Matrix Lesson"
      subTitle="Mini Lesson: Using a Decision Matrix to Evaluate Designs — 8th Grade Technology Education"
      lessonPlan={lessonPlan}
      reflection={reflection}
      exampleComponent={<DecisionMatrixExample />}
      exampleLabel="Example Decision Matrix"
    />
  );
};

export default DecisionMatrixLesson;