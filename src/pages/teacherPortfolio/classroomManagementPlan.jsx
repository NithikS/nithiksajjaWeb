import PageHeader from "../../components/PageHeader";
import classroomLayout from "../../assets/classroomLayout.png";
import { Link } from "react-router-dom";

const ClassroomManagementPlan = () => {
  return (
      <>
      <PageHeader title="Classroom Management Plan" subTitle="A detailed plan for managing my classroom effectively" />


      <div className="container py-3">
      {/* Back Button */}
      <p><Link className="btn darkGreenBg iconGreen mt-3 ms-3" to="/teacherportfolio" role="button"><i className="bi bi-arrow-left me-2"></i>Back to Portfolio</Link></p>
      {/* Classroom Setup */}
      <section className="mb-5">
        <h2 className="mt-4 mb-3 darkBlueText"><i className="bi bi-layout-text-window-reverse me-2 darkBlueText"></i>Classroom Set-up Map & Explanation</h2>
        <img src={classroomLayout} alt="Classroom Layout" className="img-fluid mb-3 rounded shadow p-5" />
        <p>Because I am interested in being a Computer Science Teacher I am considering that all desks must have a computer</p>
        <p>I designed my classroom using an inner and outer U-shape desk because it focuses on the student&apos;s attention to the front projector screen. It also allows for collaboration between students being next to each other but not too much that it leads to people being off task as seen in the pod tables. This design also allows the teacher to walk around the back of the classroom and can see the students&apos; screen for test taking etc. This seating will also promote classroom discussions because everyone can see each other. For choosing seats, I think seat changes will be made at the start of each unit and first seats are randomly assigned for the first 9 weeks and then students will be able to choose for the remaining 9 weeks. Then for the 2nd semester, it will be 5 weeks of assigned seats and then 13 weeks of choosing their own seats. I have seen this work in some of my classes, and it has worked well because many of the friends I have now were found by random seating, so you meet new people and not just stick to your regular group of friends.</p>
      </section>

      {/* Classroom Rules */}
      <section className="mb-5">
        <h2 className="mt-4 mb-3 darkBlueText"><i className="bi bi-list-check me-2 darkBlueText"></i>5 Rules Displayed in Classroom</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item mb-2">
            <strong>Stay on task and participate actively</strong>
            <p>Staying focused and joining class activities helps everyone learn better. When students pay attention and take part, lessons go more smoothly, students remember more of the content, and we can cover more material without distractions</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Maintain a clean and organized workspace</strong>
            <p>A clean desk or area helps you find materials quickly and stay focused. It also keeps the classroom safe, tidy, and comfortable for everyone. Keeping the classroom clean also makes a safer classroom</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Always use respectful language</strong>
            <p>Speaking politely and respectfully creates a positive environment. It helps classmates feel safe, encourages everyone to share ideas, and collaborate in class discussions.</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Respect school property and classroom materials</strong>
            <p>Taking care of computers, supplies, and the classroom shows responsibility. It ensures that materials are available and in good condition for everyone.</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Never be afraid to ask for help or clarification when needed</strong>
            <p>I am here to help you learn, so asking questions helps you understand the material better and prevents confusion. It also shows that you are interested and engaged in class.</p>
          </li>
        </ol>
      </section>

      {/* Procedures / Techniques */}
      <section className="mb-5">
        <h2 className="mt-4 mb-3 darkBlueText"><i className="bi bi-gear me-2 darkBlueText"></i>5 Procedures/Techniques</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item mb-2">
            <strong>Establish clear routines for transitions</strong>
            <p>Having clear routines helps students know exactly what to do at different times in class. This reduces confusion, prevents disruptions, and keeps the class running smoothly.</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Move around the classroom and create a positive, welcoming environment</strong>
            <p>When the teacher circulates and greets students, it builds strong relationships and a positive classroom culture. Students feel seen, respected, and are more likely to stay engaged and follow rules.</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Build strong relationships with students by checking in regularly and showing you care</strong>
            <p>Positive relationships make students feel safe and respected. When students know the teacher cares about them, they are more likely to follow rules and stay engaged in learning.</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Use pre-correction before transitions or activities</strong>
            <p>Reminding students what to do before a change or new activity helps prevent misbehavior. This proactive approach keeps everyone focused and aware of expectations.</p>
          </li>
          <li className="list-group-item mb-2">
            <strong>Give clear directions in simple steps and check for understanding</strong>
            <p>When students understand exactly what to do by verbally explaining and giving examples, there is less confusion and fewer mistakes. Checking for understanding ensures that everyone can follow procedures correctly.</p>
          </li>
        </ol>
      </section>

      {/* Daily Start Routine */}
      <section className="mb-5">
        <h2 className="mt-4 mb-3 darkBlueText"><i className="bi bi-clock me-2 darkBlueText"></i>How I Will Start Class Each Day</h2>
        <p>Each day, students will first look at the daily agenda displayed on the screen at the front of the class and can also check the agenda on Canvas, which is posted at the start of each week. To begin, I will ask if anyone has something interesting to share, giving students a chance to connect and feel heard. Then, I will go over the agenda for the day, including topics, assignments, and announcements, so students know what to expect. This routine helps students feel organized and prepared, and having a routine always helps me in all my classes. Which keeps the class running smoothly from the start and makes it better for the students.</p>
      </section>

      {/* First Day of School */}
      <section className="mb-5">
        <h2 className="mt-4 mb-3 darkBlueText"><i className="bi bi-calendar-check me-2 darkBlueText"></i>5 Things on the First Day of School</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item mb-2">Introduce yourself with a teacher introduction PowerPoint</li>
          <li className="list-group-item mb-2">Do an icebreaker activity to help students learn each other’s names</li>
          <li className="list-group-item mb-2">Give a classroom tour, pointing out where materials, turn in tray, etc. are located</li>
          <li className="list-group-item mb-2">Show the daily agenda and explain how to use it</li>
          <li className="list-group-item mb-2">Go over the classroom rules and explain why each one is important</li>
        </ul>
      </section>

      {/* Discipline Plan */}
      <section className="mb-5">
        <h2 className="mt-4 mb-3 darkBlueText"><i className="bi bi-shield-check me-2 darkBlueText"></i>Discipline Plan</h2>
        <p>I will implement a positive and consistent discipline system in my classroom that focuses on teaching and reinforcing expected behaviors rather than just punishing mistakes. I will ensure that discipline is never embarrassing or diminishing to a student, so they feel respected while learning from their mistakes. This approach creates a safe and supportive learning environment, helps students develop self-discipline, and ensures consistency and fairness. By focusing on proactive teaching of expectations, I can prevent problems before they occur, encourage positive habits, and support all students in being responsible, respectful, and engaged learners.</p>
      </section>
    </div>
      </>
  );
};

export default ClassroomManagementPlan;
