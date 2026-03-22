import PageHeader from "../components/PageHeader";
import adminStoryMap from "../assets/Admin_Story_map.png"
import freshmenStoryMap from "../assets/Freshmen_Story_Map.png"
import mentorStoryMap from "../assets/Mentor_Story_Map.png"
import erd from "../assets/royal_rumble_erd.png"

/* ─────────────────────────────────────────────
   Data – all the timeline phases
───────────────────────────────────────────── */
const phases = [
  {
    month: "Pre-Project",
    icon: "bi-lightbulb-fill",
    color: "darkGreenText",
    badgeClass: "bg-success",
    title: "The Problem & The Pitch",
    body: `Nico and I both experienced Royal Rumble as freshmen — HSE's annual freshman orientation event involving hundreds of students, tours, a pep rally, and a student panel. When we talked to the organizers (Mrs. Habig, Pucillo, and Holle), they described a painful manual process: juggling spreadsheets, chasing down data across multiple documents, and doing it all under a tight deadline.

We also submitted this project to the CS for Good competition, framing it exactly as it is: real computer science solving a real problem in our own community.`,
    bullets: [
      "Interviewed organizers and mentors to capture exact pain points",
      "Created a User Persona ('Mrs. Beifong') to ground every design decision",
      "Performed a Competitive Analysis of college orientation websites",
      "Built Story Maps for Admin, Mentor, and Freshman roles",
      "Designed an Entity Relationship Diagram for the database",
      "Nico designed the frontend mockups & logo; Nithik owned the backend",
    ],
    tag: "Research & Planning",
  },
  {
    month: "August",
    icon: "bi-cpu-fill",
    color: "darkBlueText",
    badgeClass: "bg-primary",
    title: "Picking the Stack",
    body: `August was all about decisions. We evaluated React + Node + PostgreSQL, then — after a recommendation from our teacher and more research — simplified to Next.js + PostgreSQL. Every hour of CodeAcademy courses and debate about Firebase vs. Postgres was laying the foundation for everything that came after.`,
    bullets: [
      "Evaluated React + Node vs Next.js — chose Next.js for its full-stack simplicity",
      "Decided on NeonDB (serverless Postgres) + Drizzle ORM",
      "Planned Auth.js with Microsoft Entra ID SSO (school accounts)",
      "Chose Bootstrap 5 for consistent, fast UI",
      "Started CodeAcademy courses on Next.js and Node",
    ],
    tag: "Tech Decisions",
  },
  {
    month: "September",
    icon: "bi-journal-code",
    color: "darkGreenText",
    badgeClass: "bg-success",
    title: "Learning & Setup",
    body: `September was fundamentals month. I learned how Next.js routing, file structure, and CSS integration actually work. Meanwhile Nico was deep in Figma. We also presented our project idea and timeline to our clients using the Agile model — keeping them informed at every stage.`,
    bullets: [
      "Learned Next.js app router, layouts, and component model",
      "Set up the GitHub repo and collaborative workflow with Nico",
      "Regular client check-ins following Agile principles",
      "Began planning the full folder/page structure",
    ],
    tag: "Foundations",
  },
  {
    month: "October",
    icon: "bi-folder2-open",
    color: "darkBlueText",
    badgeClass: "bg-primary",
    title: "Building the Skeleton",
    body: `October was about creating structure before substance. I built the full Next.js project tree with every route stubbed out so we could click through the entire app from day one. Components were built with parametric colors so theming would be easy later. This was also when we were simultaneously competing in the Congressional App Challenge and CS for Good — so time management was brutal.`,
    bullets: [
      "Set up all routes: /admin/*, /mentor/*, /freshmen/home",
      "Built reusable component library: LogoButton, BackButton, InfoBox, SaveButton, CheckBoxTable, ViewDropdown",
      "Built a temp navbar to click through every URL",
      "Parametric CSS variables so colors could change globally",
      "Juggled Congressional App Challenge + CS for Good simultaneously",
    ],
    tag: "Architecture",
    codeSnippet: `// October folder tree (abridged)
src/app/
├── admin/
│   ├── add/  edit/  upload/
│   ├── all_groups/
│   └── attendance/all_groups/
├── mentor/
│   ├── group_leader/  hallway_host/
│   ├── spirit_session/  utility_squad/
└── freshmen/home/`,
  },
  {
    month: "November",
    icon: "bi-database-fill-up",
    color: "darkGreenText",
    badgeClass: "bg-success",
    title: "Database & The Upload Beast",
    body: `November was the first real backend month. Setting up NeonDB and learning to write Drizzle ORM schemas was new territory. But the real challenge — 215 lines of code — was the /upload page: accept Excel files from teachers (GoFan exports, Microsoft Forms), parse them, and insert everything correctly into the database. Data-size issues, missing values, and mismatched columns made this a serious grind.`,
    bullets: [
      "Set up NeonDB + Drizzle ORM; wrote schema.ts and index.ts",
      "Built the /upload page: 215 lines parsing Excel → DB",
      "Handled oversized payloads, missing fields, and insert errors",
      "Added a progress bar + loading screen for teacher feedback",
      "Nico owned the frontend; I wired the backend without touching the UI",
      "Presented Semester 1 progress to clients; received feedback from Jake",
    ],
    tag: "Backend",
    codeSnippet: `// Drizzle ORM schema example
export const freshmen = pgTable("freshmen", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  groupId: integer("group_id").references(() => groups.id),
  language: text("primary_language"),
  tshirtSize: text("tshirt_size"),
});`,
  },
  {
    month: "December",
    icon: "bi-pencil-square",
    color: "darkBlueText",
    badgeClass: "bg-primary",
    title: "CRUD, Views & Search",
    body: `December was about turning the database into a real app. I built all the Add and Edit pages and connected them to live data. Feedback from Jake led to a key UX decision: combine edit and delete into one page. I also learned a critical Next.js pattern that I've used in every page since — server components for data fetching, client components for interactivity.`,
    bullets: [
      "Built all Add Pages; connected all Edit Pages to the database",
      "Built the Freshmen Seminar Upload with auto-group-creation logic",
      "Learned: page.tsx = server component, ui.tsx = client component",
      "Combined edit + delete onto single View pages (Jake's feedback)",
      "Added search to every view page",
      "Built Bootstrap alert system for user feedback",
    ],
    tag: "Features",
    codeSnippet: `// The pattern used on every admin page since
// page.tsx  → server component, fetches data
export default async function MentorsPage() {
  const mentors = await getAllMentors();
  return <MentorsPageUI mentors={mentors} />;
}

// ui.tsx  → client component, handles interactivity
"use client";
export default function MentorsPageUI({ mentors }) {
  const [filter, setFilter] = useState("all");
  // ... search, filter, edit, delete
}`,
  },
  {
    month: "January",
    icon: "bi-people-fill",
    color: "darkGreenText",
    badgeClass: "bg-success",
    title: "Groups, Assignments & Attendance Foundations",
    body: `January focused on the all_groups ecosystem — the heart of the event. Every group needed a view, an edit page, and reassignment functionality. Deleting a group doesn't delete students; it sets them to "Unassigned." I also started tackling the attendance system, which would become a major focus in February.`,
    bullets: [
      "Built /admin/all_groups and all subpages",
      "Built edit pages for Freshmen Groups and Hallway Groups with reassign buttons",
      "Soft-delete for groups: students move to 'Unassigned' instead of being removed",
      "Started the Attendance pages architecture",
      "~18 hours outside of school (5 over winter break + 13 in January)",
    ],
    tag: "Core Features",
  },
  {
    month: "February",
    icon: "bi-rocket-takeoff-fill",
    color: "darkBlueText",
    badgeClass: "bg-primary",
    title: "The Big Month 🎉 — Login, Deploy & Full Feature Push",
    body: `February was by far the most productive month of the whole project. Microsoft SSO finally worked (after months of wanting it), the app went live at royalrumble.hseapps.org, and a huge wave of features shipped. ~30 hours outside of school in a single month.`,
    bullets: [
      "🔐 Microsoft Entra ID SSO login — live and working",
      "🚀 Deployed to royalrumble.hseapps.org via Netlify",
      "Rebuilt admin + mentor layouts to work with live sessions",
      "SessionProvider moved to root layout; sessionStorage redirect-once pattern",
      "Split Utility Squad and Spirit Session into separate pages",
      "Built Export-to-Excel feature with column selection",
      "Completed mentor and freshman attendance systems with optimistic UI",
      "Created DEV_MODE flag to toggle features during development",
      "Built full CRUD for the Events system",
    ],
    tag: "Launch",
    codeSnippet: `// Optimistic UI pattern used for attendance checkboxes
async function handleToggle(id: number, current: boolean) {
  // 1. Update UI immediately
  setAttendance(prev => prev.map(a =>
    a.id === id ? { ...a, present: !current } : a
  ));
  // 2. Hit the server
  const result = await toggleAttendance(id, !current);
  // 3. Roll back if it failed
  if (!result.success) {
    setAttendance(prev => prev.map(a =>
      a.id === id ? { ...a, present: current } : a
    ));
  }
}`,
  },
  {
    month: "March (Recent)",
    icon: "bi-map-fill",
    color: "darkGreenText",
    badgeClass: "bg-success",
    title: "Route Management System",
    body: `The most technically complex feature of the project. With 66 groups across 6 event order patterns, groups doing Tour at the same time need different routes, while groups at different times can share them. This reduced the number of routes admins need to configure from 66 down to ~22.`,
    bullets: [
      "New DB tables: event_order_pattern, block_schedule, tour_route, tour_route_stop, group_route_attendance",
      "Arrival times computed from block schedule — never stored",
      "Smart route assignment: same-time groups → different routes; different-time groups → can share",
      "66 groups × 6 patterns → only ~22 routes to configure",
      "addTourRouteStop auto-seeds group_route_attendance rows",
      "Fixed upload page: route.ts was calling req.formData() but client sends JSON",
      "Fixed selectDistinct + ORDER BY Postgres error via JS-side deduplication",
    ],
    tag: "Advanced",
    codeSnippet: `// Route assignment logic (simplified)
// Groups at the same time slot CANNOT share a route
// Groups at different time slots CAN share a route
function assignRoute(group, existingAssignments, blockSchedule) {
  const groupTimeSlot = getTimeSlot(group, blockSchedule);
  
  for (const routeNum of availableRoutes) {
    const conflict = existingAssignments.some(a =>
      a.routeNum === routeNum &&
      getTimeSlot(a.group, blockSchedule) === groupTimeSlot
    );
    if (!conflict) return routeNum;
  }
  return createNewRoute(); // only if all slots conflict
}`,
  },
];

/* ─────────────────────────────────────────────
   Key Learnings data
───────────────────────────────────────────── */
const learnings = [
  {
    icon: "bi-database-fill-exclamation",
    title: "Postgres selectDistinct + ORDER BY",
    body: "ORDER BY expressions must appear in the SELECT list. Workaround: regular select + JS-side deduplication.",
  },
  {
    icon: "bi-arrow-counterclockwise",
    title: "Optimistic UI Pattern",
    body: "Update local state immediately, call the server action, roll back on failure. Used for every attendance checkbox.",
  },
  {
    icon: "bi-layout-wtf",
    title: "Session Persistence",
    body: "SessionProvider must live at the root layout — not inside a sub-route — to survive page navigations.",
  },
  {
    icon: "bi-brush-fill",
    title: "CSS Override Strategy",
    body: "When Bootstrap's .form-select width conflicts with dynamic elements, use inline styles rather than modifying shared stylesheets.",
  },
  {
    icon: "bi-flag-fill",
    title: "Redirect-Once Pattern",
    body: "sessionStorage flags fire post-login redirects exactly once, surviving component remounts without persisting across sessions.",
  },
  {
    icon: "bi-server",
    title: "Server vs Client Components",
    body: "page.tsx = server component that fetches data. ui.tsx = client component that handles interactivity. Used on every page.",
  },
];

/* ─────────────────────────────────────────────
   Tech Stack data
───────────────────────────────────────────── */
const techStack = [
  { name: "Next.js + TypeScript", icon: "bi-code-slash", color: "darkBlueText" },
  { name: "NeonDB (Postgres)", icon: "bi-database-fill", color: "darkGreenText" },
  { name: "Drizzle ORM", icon: "bi-layers-fill", color: "darkBlueText" },
  { name: "Auth.js + Entra ID", icon: "bi-shield-lock-fill", color: "darkGreenText" },
  { name: "Bootstrap 5", icon: "bi-bootstrap-fill", color: "darkBlueText" },
  { name: "Netlify", icon: "bi-cloud-upload-fill", color: "darkGreenText" },
];

/* ─────────────────────────────────────────────
   Page Component
───────────────────────────────────────────── */
const RoyalRumbleProject = () => {
  return (
    <>
      <PageHeader
        title="Royal Rumble App"
        subTitle="Full-stack capstone project — HSE Freshman Orientation Management System"
      />

      {/* ── Hero Stats Bar ── */}
      <section className="py-4" style={{ backgroundColor: "var(--black-bg)" }}>
        <div className="container">
          <div className="row text-center text-white justify-content-center">
            {[
              { num: "8+", label: "Months of Development" },
              { num: "6", label: "User Roles" },
              { num: "600+", label: "Students Managed" },
              { num: "30+", label: "Hours in February Alone" },
              { num: "12+", label: "DB Tables" },
              // { num: "1", label: "Live Deployment" },
            ].map((s) => (
              <div className="col-4 col-md-2 mb-3 mb-md-0" key={s.label}>
                <h3 className="darkGreenText fw-bold mb-0">{s.num}</h3>
                <small style={{ opacity: 0.8 }}>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h2 className="darkBlueText mb-3">
                <i className="bi bi-info-circle-fill me-2"></i>What Is Royal Rumble?
              </h2>
              <p className="lead">
                Royal Rumble is Hamilton Southeastern High School&apos;s annual freshman orientation event.
                Hundreds of incoming students are split into groups, led through a tour of the school,
                participate in a pep rally, and sit in on a student panel — all coordinated by dozens
                of student mentors across multiple roles.
              </p>
              <p>
                Before this app, organizers managed everything through spreadsheets, scattered
                documents, and manual data entry under tight deadlines. Our app replaces all of
                that with one system: data uploads, group assignments, role-based access, attendance
                tracking, and guided hallway routes.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-2">
                <a
                  href="https://github.com/AvatarNit/royal_rumble_app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-website"
                >
                  <i className="bi bi-github me-2"></i>View on GitHub
                </a>
                {/* <a
                  href="https://www.royalrumble.hseapps.org"
                  target="_blank"
                  rel="noreferrer"
                  className="btn darkGreenBg iconGreen"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>Live Site
                </a> */}
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="p-4 rounded shadow"
                style={{ backgroundColor: "#f8f9fa", border: "3px solid var(--primary-logo-color-dark)" }}
              >
                <h5 className="darkGreenText mb-3">
                  <i className="bi bi-people-fill me-2"></i>6 User Roles
                </h5>
                {[
                  { role: "Admin", desc: "Full data management, uploads, attendance oversight" },
                  { role: "Group Leader", desc: "Manages their freshman group; takes attendance" },
                  { role: "Hallway Host", desc: "Monitors groups visiting their hallway stop" },
                  { role: "Utility Squad", desc: "Event-wide logistics support" },
                  { role: "Spirit Session", desc: "Pep rally and spirit coordination" },
                  { role: "Freshman", desc: "Views their group, schedule, and event info" },
                ].map((r) => (
                  <div key={r.role} className="d-flex align-items-start mb-2">
                    <i className="bi bi-check-circle-fill darkGreenText me-2 mt-1"></i>
                    <span>
                      <strong>{r.role}</strong> — {r.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="darkBlueText text-center mb-4">
            <i className="bi bi-stack me-2"></i>Tech Stack
          </h2>
          <div className="row justify-content-center g-3">
            {techStack.map((t) => (
              <div key={t.name} className="col-6 col-md-4 col-lg-2">
                <div className="card text-center h-100 shadow-sm py-3">
                  <i className={`bi ${t.icon} ${t.color}`} style={{ fontSize: "2.5rem" }}></i>
                  <p className="mb-0 mt-2 fw-semibold small">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-5">
        <div className="container">
          <h2 className="darkBlueText text-center mb-2">
            <i className="bi bi-calendar3 me-2"></i>Development Timeline
          </h2>
          <p className="text-center text-muted mb-5">
            August 2024 → March 2026 · One school year · One real product
          </p>

          {phases.map((phase, i) => (
            <div key={phase.month} className="row mb-5 align-items-start g-4">
              {/* Left: month label */}
              <div className="col-md-2 text-md-end text-start">
                <div
                  className="d-inline-block px-3 py-2 rounded shadow-sm text-white fw-bold"
                  style={{
                    backgroundColor:
                      i % 2 === 0
                        ? "var(--primary-logo-color-dark)"
                        : "var(--secondary-logo-color-dark)",
                    minWidth: "110px",
                    textAlign: "center",
                  }}
                >
                  {phase.month}
                </div>
              </div>

              {/* Connector line (desktop) */}
              <div className="col-md-1 d-none d-md-flex justify-content-center">
                <div
                  style={{
                    width: "3px",
                    backgroundColor:
                      i % 2 === 0
                        ? "var(--primary-logo-color-dark)"
                        : "var(--secondary-logo-color-dark)",
                    minHeight: "100%",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>

              {/* Right: card */}
              <div className="col-md-9">
                <div
                  className="card shadow-sm"
                  style={{
                    borderLeft: `5px solid ${
                      i % 2 === 0
                        ? "var(--primary-logo-color-dark)"
                        : "var(--secondary-logo-color-dark)"
                    }`,
                  }}
                >
                  <div className="card-body">
                    {/* Header */}
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h4 className={`mb-0 ${phase.color}`}>
                        <i className={`bi ${phase.icon} me-2`}></i>
                        {phase.title}
                      </h4>
                      <span className={`badge ${phase.badgeClass}`}>{phase.tag}</span>
                    </div>

                    {/* Body text */}
                    {phase.body.split("\n\n").map((para, j) => (
                      <p key={j} className="mb-3">
                        {para}
                      </p>
                    ))}

                    {/* Bullet list */}
                    <ul className="mb-0">
                      {phase.bullets.map((b) => (
                        <li key={b} className="mb-1">
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Code snippet */}
                    {phase.codeSnippet && (
                      <pre
                        className="mt-4 p-3 rounded small"
                        style={{
                          backgroundColor: "var(--black-bg)",
                          color: "var(--primary-logo-color-light)",
                          overflowX: "auto",
                          lineHeight: 1.6,
                        }}
                      >
                        <code>{phase.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Key Learnings ── */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="darkBlueText text-center mb-2">
            <i className="bi bi-mortarboard-fill me-2"></i>Key Technical Learnings
          </h2>
          <p className="text-center text-muted mb-5">
            Lessons that now live in my toolkit permanently
          </p>
          <div className="row g-4">
            {learnings.map((l) => (
              <div key={l.title} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <i
                      className={`bi ${l.icon} darkBlueText`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h5 className="darkGreenText mt-2 mb-2">{l.title}</h5>
                    <p className="mb-0 small">{l.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story Map Images ── */}
      <section className="py-5">
        <div className="container">
          <h2 className="darkBlueText text-center mb-2">
            <i className="bi bi-diagram-3-fill me-2"></i>Planning Artifacts
          </h2>
          <p className="text-center text-muted mb-5">
            Story maps built before a single line of code was written
          </p>
 
          {/* Admin Story Map */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">
              <div className="mb-3">
                <span className="badge bg-primary me-2">Admin</span>
                <h4 className="darkBlueText d-inline">Admin Story Map</h4>
              </div>
              <p className="text-muted mb-4">
                Every admin action mapped out — from uploading Excel sheets to manually editing
                individual student records. Blue cards are high-level goals, pink rows are core
                features, and light purple rows are lower-priority tasks below the cut line.
              </p>
              <div
                className="rounded overflow-hidden"
                style={{ border: "2px solid var(--primary-logo-color-dark)" }}
              >
                <img
                  src={adminStoryMap}
                  alt="Admin Story Map"
                  className="img-fluid w-100"
                  style={{ display: "block" }}
                />
              </div>
              <div className="mt-3 d-flex flex-wrap gap-2">
                {[
                  "Upload Externally Collected Info",
                  "Search Data",
                  "Find Groups",
                  "Take Mentor Attendance",
                  "Edit All Databases",
                ].map((col) => (
                  <span
                    key={col}
                    className="badge"
                    style={{ backgroundColor: "var(--primary-logo-color-dark)" }}
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
 
          {/* Mentor Story Map */}
          <div className="card shadow-sm mb-5">
            <div className="card-body">
              <div className="mb-3">
                <span className="badge bg-success me-2">Mentor</span>
                <h4 className="darkGreenText d-inline">Mentor Story Map</h4>
              </div>
              <p className="text-muted mb-4">
                Mapped the needs of all four mentor roles — Group Leader, Hallway Host, Utility
                Squad, and Spirit Session. Each role sees different data and has different
                responsibilities, which directly shaped the role-based routing system.
              </p>
              <div
                className="rounded overflow-hidden"
                style={{ border: "2px solid var(--secondary-logo-color-dark)" }}
              >
                <img
                  src={mentorStoryMap}
                  alt="Mentor Story Map"
                  className="img-fluid w-100"
                  style={{ display: "block" }}
                />
              </div>
              <div className="mt-3 d-flex flex-wrap gap-2">
                {[
                  "Find Group Details",
                  "Take Freshman Attendance",
                  "Find Route",
                  "Find Hallway Group Details",
                  "Find Schedule",
                  "Return Home",
                ].map((col) => (
                  <span
                    key={col}
                    className="badge"
                    style={{ backgroundColor: "var(--secondary-logo-color-dark)" }}
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
 
          {/* Freshman Story Map */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="mb-3">
                <span className="badge bg-primary me-2">Freshman</span>
                <h4 className="darkBlueText d-inline">Freshman Story Map</h4>
              </div>
              <p className="text-muted mb-4">
                Defined what incoming freshmen need from the app before and during the event —
                finding their group number, viewing event info, and knowing where to go.
              </p>
              <div
                className="rounded overflow-hidden"
                style={{ border: "2px solid var(--primary-logo-color-dark)" }}
              >
                <img
                  src={freshmenStoryMap}
                  alt="Freshman Story Map"
                  className="img-fluid w-100"
                  style={{ display: "block" }}
                />
              </div>
              <div className="mt-3 d-flex flex-wrap gap-2">
                {[
                  "Find Group Details",
                  "Display Group Number",
                  "Display Event Info",
                ].map((col) => (
                  <span
                    key={col}
                    className="badge"
                    style={{ backgroundColor: "var(--primary-logo-color-dark)" }}
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
 
          <p className="text-muted small text-center mt-2">
            <i className="bi bi-info-circle me-1"></i>
            Blue = high-level goals · Pink = core features · Purple = lower-priority tasks below the cut line
          </p>
        </div>
        {/* ERD */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="mb-3">
                <span className="badge bg-primary me-2">Database</span>
                <h4 className="darkBlueText d-inline">Entity Relationship Diagram</h4>
              </div>
              <p className="text-muted mb-4">
                Designed before a single table was created. The ERD maps every table, its fields,
                and how they relate — mentor and freshman data linking through groups, hallway hosts
                linking through stops, and the route system connecting groups to tour stops via
                attendance records. Color coding matches the role that owns each table.
              </p>
              <div
                className="rounded overflow-hidden"
                style={{ border: "2px solid var(--primary-logo-color-dark)" }}
              >
                <img
                  src={erd}
                  alt="Royal Rumble Entity Relationship Diagram"
                  className="img-fluid w-100"
                  style={{ display: "block" }}
                />
              </div>
              <div className="mt-3 d-flex flex-wrap gap-2">
                {[
                  { label: "Mentor General", color: "#4e9af1" },
                  { label: "Admin General", color: "#f18f4e" },
                  { label: "Freshmen General", color: "#f14e9a" },
                  { label: "Group Leader", color: "#f1e44e" },
                  { label: "Hallway Host", color: "#4ef196" },
                  { label: "Route", color: "#9a9a9a" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="badge"
                    style={{ backgroundColor: item.color, color: "#222" }}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

      </section>

      {/* ── Reflection ── */}
      <section
        className="py-5"
        style={{ backgroundColor: "var(--black-bg)", color: "white" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="darkGreenText mb-4">
                <i className="bi bi-chat-quote-fill me-2"></i>Reflection
              </h2>
              <p className="lead mb-4">
                Going into this project I had never used Next.js, Drizzle ORM, NeonDB, Auth.js,
                or deployed a full-stack app to production. By the end of the year every one of
                those was just a normal part of my toolkit.
              </p>
              <p style={{ opacity: 0.85 }}>
                What made this project different from any tutorial or classroom assignment was that
                it had real clients, real users, real deadlines, and a real event date that couldn&apos;t
                move. When the upload page broke because I was calling{" "}
                <code style={{ color: "var(--primary-logo-color-light)" }}>req.formData()</code>{" "}
                instead of parsing JSON, teachers were waiting. When attendance rows weren&apos;t seeding,
                mentors saw empty screens on orientation day. That pressure is what real software
                engineering feels like — and solving those problems under it is what I&apos;m most proud
                of.
              </p>
              <div className="mt-4 d-flex flex-wrap gap-3 justify-content-center">
                <a
                  href="https://github.com/AvatarNit/royal_rumble_app"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-website"
                >
                  <i className="bi bi-github me-2"></i>View Code on GitHub
                </a>
                {/* <a
                  href="https://www.royalrumble.hseapps.org"
                  target="_blank"
                  rel="noreferrer"
                  className="btn darkGreenBg iconGreen"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>Live Site
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoyalRumbleProject;
