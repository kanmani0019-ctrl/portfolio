/**
 * ────────────────────────────────────────────────────────────────
 *  EDIT THIS FILE ONLY.
 *  Everything on the site — name, projects, jobs, skills, links,
 *  and every section heading — is rendered from the objects below.
 * ────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Kanmani S',
  initials: 'KS',
  role: 'Java Backend Developer',
  tagline: 'Building scalable Java backend systems with Spring Boot and REST APIs.',
  summary:
    'Java Backend Developer with 2 years of experience building enterprise applications with ' +
    'Java, Spring Boot, and REST APIs on MySQL and PostgreSQL. Delivered 20+ modules in an ' +
    'HRMS platform with end-to-end ownership, from requirement analysis and database design ' +
    'to API development, unit testing and production support. Built Apache Airflow pipelines ' +
    '(Bronze, Silver, Gold) and backend services feeding an LLM-based platform. Uses Claude ' +
    'Code and AI tools to deliver features faster; learning Generative AI and LLMs.',
  /**
   * Short hook shown in the hero, under the tagline.
   * Deliberately different from `summary` (which the About section uses) so
   * the same paragraph is not read twice on one scroll.
   */
  heroHook:
    'Currently at OASYS Cybernetics, Chennai — working on the APIs behind ' +
    'enterprise HRMS and government platforms.',

    aboutExtra:
    'Day to day I work on the services behind enterprise HRMS, data and government platforms — ' +
    'building REST endpoints, wiring approval workflows and schedulers, tightening SQL queries ' +
    'and staying on production support across 3 live projects when something needs fixing. ' +
    'I analyze tasks logically, pick suitable data types, and write unit tests before delivery.',
  /**
   * Your photo, served from the /public folder.
   * The capital K matters: Windows ignores filename case but Linux hosts
   * (Vercel, Netlify, GitHub Pages) do not, so this must match the file
   * exactly or the image 404s once deployed.
   * Set to '' to show the initials monogram instead.
   */
  photo: '/Kanmani.jpg',
  /** Caption strip under the hero photo. */
  photoCaption: 'Chennai, India · Backend engineering',

  location: 'Chennai, Tamil Nadu',
  availability: 'Open to Java Backend Opportunities',
  email: 'kanmanisenthil19@gmail.com',
  phone: '+91 92424 37282',
  resumeUrl: '/resume.pdf', // drop your resume.pdf into the /public folder
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/kanmani-s-6192a2383',
      icon: 'linkedin',
    },
    { label: 'Email', url: 'mailto:kanmanisenthil19@gmail.com', icon: 'mail' },
    { label: 'Phone', url: 'tel:+919242437282', icon: 'phone' },
    // Add your GitHub here once you have a profile to link:
    // { label: 'GitHub', url: 'https://github.com/your-handle', icon: 'github' },
  ],
}

/**
 * Code sample shown in the About section.
 * Keep lines under ~55 characters so the card never scrolls sideways.
 */
export const codeSnippet = `@GetMapping("/{id}")
public Attendance find(@PathVariable Long id) {
    return service.findById(id);
}`

/** Filename shown in the code card's title bar. */
export const codeSnippetFile = 'AttendanceController.java'

/**
 * Small cards floating around the hero portrait.
 * Add or remove entries freely — positions are assigned by index, and the
 * layout supports up to three. Keep every claim here verifiable.
 */
export const heroFloats = [
  { value: 'Spring Boot', label: 'REST API development' },
  { value: '20+ Modules', label: 'Delivered in HRMS' },
]

export const stats = [
  { value: 2, suffix: '', label: 'Years building Java backends' },
  { value: 20, suffix: '+', label: 'HRMS modules delivered' },
  { value: 3, suffix: '', label: 'Live projects supported' },
  { value: 2, suffix: '', label: 'Databases: MySQL & PostgreSQL' },
]

export const highlights = [
  {
    title: 'Backend development',
    body: 'Enterprise application logic in Java and Spring Boot — services, controllers and layered architecture built to project coding standards.',
    icon: 'layers',
  },
  {
    title: 'REST API design',
    body: 'RESTful APIs with business logic and validation for enterprise workflows, including automated manager approve/reject and employee cancel flows.',
    icon: 'code',
  },
  {
    title: 'SQL & data pipelines',
    body: 'MySQL and PostgreSQL data modeling and query optimization, plus Apache Airflow pipelines across Bronze, Silver and Gold layers.',
    icon: 'gauge',
  },
  {
    title: 'Debugging & production support',
    body: 'Working with QA and deployment teams through testing, release and live issue resolution to keep applications stable.',
    icon: 'shield',
  },
]

/**
 * Skills are listed, not scored. Proficiency percentages invite questions no
 * one can answer objectively ("what is 85% Java?"), so the Experience and
 * Projects sections carry the evidence instead.
 * Each group is just a name plus a list of strings.
 */
export const skillGroups = [
  {
    category: 'Programming',
    items: ['Java', 'Java 8', 'Python', 'SQL'],
  },
  {
    category: 'Backend Development',
    items: ['Spring Boot', 'Spring MVC', 'REST APIs', 'JDBC', 'API Validation'],
  },
  {
    category: 'Database & SQL',
    items: ['MySQL', 'PostgreSQL', 'SQL Query Optimization', 'Data Modeling'],
  },
  {
    category: 'Data Pipelines',
    items: ['Apache Airflow (DAGs, scheduling)', 'Bronze-Silver-Gold layers', 'Object Storage'],
  },
  {
    category: 'Frontend (working knowledge)',
    items: ['React.js', 'Node.js'],
  },
  {
    category: 'Core Java',
    items: ['OOP', 'Collections', 'Exception Handling', 'Multithreading'],
  },
  {
    category: 'Developer Tools',
    items: ['Git & GitLab', 'Postman', 'Maven & Gradle', 'STS'],
  },
  {
    category: 'Engineering Practices',
    items: ['Unit Testing', 'Debugging', 'Production Support', 'Documentation'],
  },
  {
    category: 'AI-Assisted Development',
    items: ['Claude Code', 'Prompt Engineering'],
  },
]

/** Rendered as a highlighted card below the skills grid. Set to [] to hide. */
export const learning = [
  'Generative AI',
  'Large Language Models (LLMs)',
]

/** Rendered as scrolling chips under the hero. */
export const techMarquee = [
  'Java', 'Java 8', 'Spring Boot', 'Spring MVC', 'REST APIs', 'MySQL', 'PostgreSQL',
  'Apache Airflow', 'JDBC', 'Collections', 'Multithreading', 'React.js', 'Node.js',
  'Git', 'GitLab', 'Maven', 'Gradle', 'Postman', 'STS', 'SQL', 'Python', 'Claude Code',
]

export const experience = [
  {
    company: 'OASYS Cybernetics Private Limited',
    role: 'Java Backend Developer',
    period: '2024 — Present',
    location: 'Chennai, Tamil Nadu',
    current: true,
    points: [
      'Built and maintained 20+ modules (Attendance, Leave, Shift, Employee, On-Duty, Document Management and more) using Java, Spring Boot, and REST APIs.',
      'Developed the HRMS backend from the Login API onward, including Employee Profile APIs (basic details, passport, family, social profile, emergency contact).',
      'Built Self-Service modules: Leave, On-Duty, Out Pass, Comp-Off, Holiday support, Attendance requests, Shift Management and Task Assignment.',
      'Built automated approval workflows (manager approve/reject, employee cancel), reducing manual approval effort.',
      'Developed schedulers (late-order, biometric) and automated email flows, including birthday and meeting-schedule mails.',
      'Built MD and Employee dashboard APIs and master data APIs for dropdowns stored in dedicated tables.',
      'Built Apache Airflow pipelines across Bronze, Silver and Gold layers with scheduled and manual runs.',
      'Optimized SQL queries on MySQL and PostgreSQL, wrote unit tests before delivery, and resolved production issues across 3 live projects with QA and deployment teams.',
      'Used Claude Code and AI tools to speed up feature development.',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'PostgreSQL', 'Apache Airflow'],
  },
]

export const education = [
  {
    school: 'Valliammal College for Women, Chennai',
    degree: 'Bachelor of Commerce (General)',
    period: '2021 — 2024',
    note: '',
  },
]

export const certifications = [
  {
    name: 'Java Full Stack Development',
    issuer: 'Apollo Computer Education Ltd',
    year: '',
  },
]

/**
 * `tags` power the project filter. Keep them consistent across projects.
 * `featured: true` gives the card a wider, highlighted layout and shows `detail`.
 */
export const projects = [
  {
    title: 'HRMS Portal Application',
    blurb:
      'Enterprise HRMS platform where I developed the backend for 20+ modules, from the Login API onward, covering employee profiles, self-service requests and approvals.',
    detail:
      'Owned the backend end to end: requirement analysis, database design, REST APIs, ' +
      'approval workflows, schedulers, unit testing and production support.',
    /** Bullet detail — rendered on featured cards only. */
    points: [
      'Employee Profile APIs: basic details, passport, family, social profile and emergency contact.',
      'Self-Service modules: Leave (apply, approve, reject, cancel), On-Duty, Out Pass, Comp-Off, Holiday, Attendance requests, Shift Management and Task Assignment.',
      'Automated approval workflows, schedulers (late-order, biometric) and email flows (birthday, meeting scheduling).',
      'MD and Employee dashboard APIs, plus master data APIs (add, update, delete) for dropdown values.',
      'Optimized SQL for faster data processing, wrote unit tests, fixed bugs and provided production support.',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'React.js'],
    tags: ['Backend', 'HRMS'],
    metrics: [
      { label: 'Modules delivered', value: '20+' },
      { label: 'Ownership', value: 'End to end' },
    ],
    /**
     * Illustrative code sample, not a paste of the real source. Keep the
     * filename generic so nobody expects a line-for-line match, and keep
     * lines under ~62 characters so the card never scrolls sideways.
     */
    code: {
      file: 'ApprovalController.java',
      snippet: `@PostMapping("/leave/{id}/approve")
public ResponseEntity<Void> approve(@PathVariable Long id) {
    workflowService.approve(id, currentUser());
    return ResponseEntity.noContent().build();
}`,
    },
    links: { repo: '', live: '' },
    featured: true,
  },
  {
    title: 'OASYS Enterprise Data Platform (OEDP)',
    blurb:
      'Backend services and Apache Airflow pipelines for an enterprise data platform that supplies data as input to an LLM.',
    detail:
      'Built Airflow DAG pipelines (Silver to Bronze, Bronze to Silver, Silver to Gold), one DAG ' +
      'per pipeline, with scheduled or manual runs and outputs stored in object storage. Also ' +
      'built DB and source connection services, native-query rules, multithreaded list ' +
      'operations for faster processing, and API validations and integrations.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Apache Airflow', 'Node.js'],
    tags: ['Backend', 'Data'],
    links: { repo: '', live: '' },
  },
  {
    title: 'UP Excise Project',
    blurb:
      'Government application where I analyzed the project structure and queries during onboarding, then fixed bugs and resolved production issues.',
    detail:
      'Worked on a Spring Boot and REST API codebase for a government application, ' +
      'fixing bugs and resolving production issues.',
    stack: ['Java', 'Spring Boot', 'REST APIs'],
    tags: ['Backend', 'Government'],
    links: { repo: '', live: '' },
  },
]

/**
 * Real recommendations only — add them once colleagues give you one.
 * While this array is empty the whole section is hidden automatically.
 */
export const testimonials = []

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

/** Headings and intro text for each section. */
export const sectionCopy = {
  about: {
    eyebrow: 'About me',
    title: 'Backend work that ',
    accent: 'holds up in production',
    lead: 'I focus on the parts users never see — clean service logic, well-shaped REST contracts and SQL that stays fast as the data grows.',
  },
  skills: {
    eyebrow: 'Technical skills',
    title: 'The stack I ',
    accent: 'work with',
    lead: 'Core Java and Spring Boot on the backend, MySQL and PostgreSQL for data, Apache Airflow for pipelines, and the tools I use to build, test, and ship reliable applications.',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I have ',
    accent: 'shipped',
    lead: 'Building and supporting enterprise backend applications at OASYS Cybernetics, Chennai.',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'What I have ',
    accent: 'built',
    lead: 'Enterprise systems I have worked on as a backend developer — an HRMS portal, an Airflow-based data platform, and a government application.',
  },
  testimonials: {
    eyebrow: 'Endorsements',
    title: 'What colleagues ',
    accent: 'say',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us build something ',
    accent: 'solid',
    lead: 'Open to Java backend opportunities. Whether it is a role, a project or a question about Spring Boot — my inbox is open.',
  },
}
