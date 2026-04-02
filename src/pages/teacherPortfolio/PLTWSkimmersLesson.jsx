import LessonPage from "../../components/LessonPage.jsx";
import skimmerPhoto from "../../assets/skimmerMeasurements.png";

// Photo component rendered in the 3rd tab
const SkimmerPhoto = () => {
  return (
    <div>
      <div
        className="mb-4 p-3 rounded"
        style={{
          backgroundColor: "rgba(70,175,197,0.08)",
          borderLeft: "4px solid var(--primary-logo-color-dark)",
        }}
      >
        <p className="mb-0">
          <i className="bi bi-info-circle me-2"></i>
          This is the Skimmer Measurements sheet students used to record their dimensions during the build. Accurate measurements are key — the closer students measure to the instructions, the farther their skimmer travels.
        </p>
      </div>

      <div className="text-center">
        <img
          src={skimmerPhoto}
          alt="Skimmer Measurements Sheet"
          className="img-fluid rounded shadow"
          style={{ maxHeight: "600px", objectFit: "contain" }}
          onError={(e) => {
            e.target.style.display = "none";
            document.getElementById("skimmer-placeholder").style.display = "flex";
          }}
        />
        <div
          id="skimmer-placeholder"
          className="rounded shadow d-none align-items-center justify-content-center flex-column"
          style={{
            height: "300px",
            backgroundColor: "rgba(70,175,197,0.08)",
            border: "2px dashed var(--primary-logo-color-dark)",
          }}
        >
          <i className="bi bi-image fs-1 mb-2" style={{ color: "var(--primary-logo-color-dark)" }}></i>
          <p className="text-muted mb-0">Skimmer Measurements Photo</p>
          <small className="text-muted">Add skimmerMeasurements.jpg to your assets folder</small>
        </div>
      </div>
    </div>
  );
};

// Lesson Plan Data
const lessonPlan = {
  standards: [
    {
      code: "8.DM.1",
      description:
        "Use multiple systems of measurement (standard and metric) and data sets (plots, tables, graphs, charts) to analyze real world scenarios and the mathematical relationships represented by the data.",
    },
    {
      code: "8.AM.4",
      description: "Use and revise models to describe, test, and predict phenomena or solutions.",
    },
    {
      code: "8.IPS.1",
      description:
        "Conduct or extend an original investigation, analyze results, iterate, and revise to improve the design.",
    },
  ],
  objectives: [
    "Use multiple systems of measurement and data sets (plots, tables, graphs) to analyze real world scenarios and identify mathematical relationships in the data.",
    "Use and revise models to describe, test, and predict phenomena or solutions related to the skimmer design.",
    "Conduct an original investigation, analyze results, iterate, and revise their skimmer design to improve performance.",
  ],
  materials: [
    "1 Manila Folder (per student)",
    "1 Skimmer Measurements Paper (per student)",
    "1 Testing Skimmers Paper (per student)",
    "Masking Tape (teacher provided)",
    "Rubber Bands (teacher provided)",
    "Paper Clips (teacher provided)",
    "Glue Sticks (teacher provided)",
    "Scissors (teacher provided)",
  ],
  priorKnowledge:
    "Students should have some basic familiarity with the US Customary and Metric measurement systems, as well as a basic ability to read a ruler.",
  activities: [
    {
      heading: "1. Project Overview",
      content: [
        "Walk students through the PLTW Skimmers project on the board.",
        "Explain each handout and what it is used for.",
        "Clarify that all instructions, including step by step video instructions, are available on PLTW. Teacher assistance is only given when the student has PLTW open and is actively trying.",
      ],
    },
    {
      heading: "2. Triangle Measurement Activity",
      content: [
        "Review both the inch and centimeter sides of a ruler and explain what each tick mark represents.",
        "Give students random lengths in inches and have them draw a triangle using those measurements.",
        "Give students random lengths in centimeters and have them draw a second triangle.",
        "This activity is designed to build ruler reading confidence before the project begins.",
        "Clarify: the entire Skimmers project will use only US Customary measurements.",
      ],
    },
    {
      heading: "3. Model Demo",
      content: [
        "Show a pre built model skimmer to spark student interest and excitement.",
        "Emphasize: the closer students measure to the instructions, the farther their skimmer will travel — measuring matters.",
      ],
    },
    {
      heading: "4. Begin Building",
      content: [
        "Students open Canvas and PLTW and begin working on their skimmer builds at their own pace.",
      ],
    },
  ],
  differentiation: [
    {
      category: "Content",
      description: "What students learn and the materials they use",
      strategy:
        "Provide additional ruler practice sheets for students who struggle reading fractions on a ruler.",
    },
    {
      category: "Process",
      description: "How students engage with the content",
      strategy:
        "Students work self paced through PLTW instructions. Teacher check ins are provided for students who are actively trying. Students are encouraged to help each other before asking the teacher.",
    },
    {
      category: "Product",
      description: "How students show what they know",
      strategy:
        "Completed triangle measurement sheet. Progress on the skimmer build during class time.",
    },
    {
      category: "Learning Environment",
      description: "Where and with whom learning happens",
      strategy:
        "Students work independently at their seats but may talk with tablemates. The teacher circulates throughout. Canvas and PLTW serve as the primary instructional resources.",
    },
  ],
  closure: [
    "Ask students: Why does measurement precision matter in this project?",
    "Ask students: Where do you find the instructions if you get stuck?",
    "Students put materials away, store their skimmer and handouts in their Manila folder, and note where they left off so they are ready to continue next class.",
  ],
  assessment:
    "Formative: The teacher observes students during the triangle activity to check ruler reading accuracy and circulates during the build to confirm students are referencing PLTW and making progress. Future Summative: The completed skimmer build and Skimmer Measurements Paper will be collected and reviewed at the end of the project.",
};

// Reflection Data
const reflection = {
  gradeSubject: "8th Grade Technology Education",
  topic: "Introduction to the Skimmer Project",
  sections: [
    {
      heading: "1. Lesson Planning and Preparation",
      content:
        "Before the lesson, I prepared all of the handouts and the lesson plan. Reflecting on it, though, I can see that I did not plan the time for each activity carefully enough and felt like I moved through everything too quickly. During the lesson, I still made a point to walk around and check in with each table to answer questions. At the beginning, I made sure to tell students what the lesson would be about so they had a clear sense of the objectives for the day.",
    },
    {
      heading: "2. Student Engagement and Participation",
      content:
        "While I think the lesson went well overall, after debriefing with Mrs. Collins, she pointed out that I had a hard time getting students' attention at the start. She emphasized that when planning a lesson, the first thing to consider is how you're going to get students interested. She suggested I could have used the example skimmer model to build excitement right away. Student engagement was decent, but it definitely could have been better.",
    },
    {
      heading: "3. Instructional Strategies",
      content:
        "During the lesson, I made sure to connect concepts to things relevant to students' lives. I also gave them practice examples before they started the actual project so they could build confidence first. I tried to give clear explanations, though I think I could have slowed down and gone into more depth at certain points. During the examples, I encouraged students to talk to each other and help one another, which seemed to work well.",
    },
    {
      heading: "4. Classroom Management",
      content:
        "Students were seated in their pods of 3 to 4, which allowed them to collaborate and support each other without getting too distracted. The combination of examples and discussion kept things moving, and students remained mostly on task throughout.",
    },
    {
      heading: "5. Student Understanding and Learning",
      content:
        "I assessed student understanding in a couple of ways. First, I paid attention to what was being said during class discussions to identify any gaps in the lesson. Second, I reviewed their practice papers to check whether the triangles were measured and drawn correctly.",
    },
    {
      heading: "6. Use of Formative Assessment and Feedback",
      content:
        "Throughout the lesson, I kept an eye on where students were and made sure that when I asked questions, no one felt embarrassed for getting something wrong. For formative assessment, I reviewed students' practice papers to see if the triangles were accurate.",
    },
    {
      heading: "7. Time Management",
      content:
        "Overall, I think my time management was okay, but I did move through some parts of the lesson a bit too quickly. I should have given students a little more time to fully process the concepts. I did make sure to leave time at the end for questions, which helped.",
    },
    {
      heading: "8. Student Relationships and Classroom Climate",
      content:
        "During discussions, I made an effort to include everyone, especially since it was a larger class and I wanted all students to have a chance to participate. At the same time, I was careful not to push students who I knew were uncomfortable speaking in front of the whole class.",
    },
    {
      heading: "9. Self Reflection and Professional Growth",
      content: [
        "What went well: The lesson was designed to be a fun project introduction day to get students excited, and for the most part it achieved that. Students were able to understand the core concepts.",
        "What I'd change: The main thing I'd do differently is spend more time at the very beginning building excitement and getting students' attention. Using the model skimmer as a hook right away would have made a big difference.",
        "How I felt: I was definitely nervous since it was my first time teaching this class, but having watched Mrs. Collins teach it the previous year gave me a bit more confidence going in.",
        "\"Aha\" moment: Watching students get genuinely excited about the project, especially when they found out about the 100 foot distance record and started talking about beating it, was a great moment.",
        "Growth moving forward: There are still things I need to work on, including doing a better job of capturing students' attention right at the start. But overall the lesson went well, and I took away a lot of valuable lessons from the experience.",
      ],
    },
  ],
};

const PLTWSkimmersLesson = () => {
  return (
    <LessonPage
      title="Intro to PLTW Skimmers"
      subTitle="Introduction to the Skimmer Project — 8th Grade Technology Education"
      lessonPlan={lessonPlan}
      reflection={reflection}
      exampleComponent={<SkimmerPhoto />}
      exampleLabel="Project Photo"
    />
  );
};

export default PLTWSkimmersLesson;