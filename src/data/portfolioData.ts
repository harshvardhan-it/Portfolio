export interface ArchitectureNode {
  id: string;
  name: string;
  type: 'client' | 'gateway' | 'worker' | 'cache' | 'database' | 'ai';
  latency: string;
  description: string;
}

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI Engineering' | 'Computer Vision' | 'FinTech & Analytics' | 'Full-Stack Product';
  featured: boolean;
  image: string;
  overview: string;
  problem: string;
  solution: string;
  architectureNodes: ArchitectureNode[];
  codeSnippets: CodeSnippet[];
  techStack: string[];
  impactMetrics: string[];
  keyFeatures: string[];
  tradeoffs: string;
  benchmarks?: { metric: string; before: string; after: string; improvement: string }[];
  githubUrl: string;
  demoUrl: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: 'Internship' | 'Leadership' | 'Open Source' | 'Teaching';
  location: string;
  description: string;
  impactHighlights: string[];
  technologies: string[];
}

export interface TechCategory {
  title: string;
  description: string;
  skills: {
    id: string;
    name: string;
    level: 'Expert' | 'Proficient' | 'Advanced';
    experience: string;
    highlight?: string;
    usedInProjectIds: string[];
  }[];
}

export interface Achievement {
  year: string;
  title: string;
  organization: string;
  type: 'Hackathon' | 'Award' | 'Certification' | 'Competition';
  description: string;
  badgeText: string;
  proofLink?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  relation: string;
  verificationBadge: string;
  prsReviewed?: number;
  avatarUrl?: string;
}

export const PERSONAL_INFO = {
  name: 'Harshvardhan Dubey',
  title: 'AI/ML & Generative AI Developer | Azure (Foundational Learning)',
  shortBio: 'Final-year Information Technology student with hands-on experience in data analytics, business intelligence, and full-stack application development. Skilled in Python, SQL, FastAPI, React, and PostgreSQL, with experience building AI-powered analytics platforms and data-driven applications. Interested in developing intelligent software solutions using AI, Generative AI, and cloud technologies.',
  location: 'B.Tech Information Technology, SATI (2023-2027)',
  email: 'harshvardhan.dubey.it@gmail.com',
  github: 'https://github.com/harshvardhan-it',
  linkedin: 'https://www.linkedin.com/in/harshvardhan-dubey-31051a294',
  resumeUrl: '/Harshvardhan_Resume.pdf',
  status: 'Seeking internships and early-career roles in AI/ML, Generative AI, and AI software engineering; building Microsoft Azure fundamentals.',
  metrics: [
    { label: 'Education', value: 'B.Tech IT' },
    { label: 'Institute', value: 'SATI' },
    { label: 'Core Stack', value: 'React / FastAPI' },
    { label: 'Backend', value: 'Python / PostgreSQL' },
  ]
};

export const RECRUITER_FAST_PASS = {
  headline: 'Recruiter Summary — Harshvardhan Dubey',
  roles: ['AI/ML Engineer', 'Generative AI Engineer', 'AI Software Engineer', 'Azure AI Engineer (Foundational Learning)'],
  topCapabilities: [
    'Builds React-based product experiences with a clear focus on usability and engineering structure',
    'Works with FastAPI, PostgreSQL, Python, and reporting tools to turn data into practical software features',
    'Interested in AI-assisted product workflows that support decision-making and analysis',
    'Keeps technical claims grounded in portfolio projects, internship work, and interview-defensible implementation details'
  ],
  education: 'B.Tech Information Technology, Samrat Ashok Technological Institute (SATI), 2023-2027',
  locationFlexibility: 'Seeking internships and early-career opportunities in AI/ML, Generative AI, and AI software engineering.',
  workAuthorization: 'Open to student and early-career software engineering opportunities'
};

export const PHILOSOPHY_PILLARS = [
  {
    icon: 'Terminal',
    title: 'Understand before you build',
    description: 'Good implementation starts with understanding the problem, constraints, data flow, and failure points before choosing the tools.',
  },
  {
    icon: 'Cpu',
    title: 'Make AI actually useful',
    description: 'AI should solve a real problem. I care about the engineering around the model — context, retrieval, orchestration, fallbacks, and measurable outcomes.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Design for failure',
    description: 'Systems should be understandable when things go wrong. Clear boundaries, validation, observability, and graceful failure make iteration much easier.',
  },
  {
    icon: 'RefreshCw',
    title: 'Ship, measure, improve',
    description: 'The first version is only the starting point. Real engineering comes from testing assumptions, learning from failures, and making the next version better.',
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'neurosync',
    title: 'NeuroSync',
    tagline: 'Executive Decision Intelligence Platform',
    category: 'AI Engineering',
    featured: true,
    image: '/assets/project_ai.png',
    overview: 'NeuroSync transforms business datasets into executive intelligence through KPI analysis, anomaly detection, forecasting, risk assessment, root-cause analysis, scenario simulation, and AI-assisted recommendations. It is designed to move from raw operational data to a decision-ready action plan without treating an LLM as the analytics engine.',
    problem: 'The real business challenge was not just data volume. It was decision friction. Teams were collecting useful information, but the effort required to interpret it, summarize it, and turn it into a practical recommendation was too high. That gap creates delays, weakens confidence in decisions, and makes the value of the data far harder to realize.',
    solution: 'A user uploads a business dataset; FastAPI coordinates validation and deterministic/statistical analysis to create structured intelligence. The Groq layer then turns that grounded intelligence into an executive summary, recommendations, and an action plan. React, PostgreSQL, JWT, and PDF reporting complete a clear, secure path from input to a shareable decision artifact.',
    architectureNodes: [
      { id: '1', name: 'Dataset Input', type: 'client', latency: '3ms', description: 'React-based experience for upload, review, and workflow navigation' },
      { id: '2', name: 'FastAPI Backend', type: 'gateway', latency: '12ms', description: 'API layer for authentication, data handling, and orchestration' },
      { id: '3', name: 'Analytics Engines', type: 'worker', latency: '24ms', description: 'Deterministic and statistical workflows for KPIs, anomalies, forecasts, risks, and root causes' },
      { id: '4', name: 'Structured Intelligence', type: 'database', latency: '18ms', description: 'PostgreSQL-backed analysis context, report state, and decision inputs' },
      { id: '5', name: 'Groq Reasoning Layer', type: 'ai', latency: '40ms', description: 'Grounded executive summaries, recommendations, and action-plan reasoning' },
      { id: '6', name: 'Executive Output', type: 'gateway', latency: '8ms', description: 'Decision-ready dashboard and PDF report distribution' },
    ],
    codeSnippets: [
      {
        filename: 'analysis_service.py',
        language: 'python',
        description: 'FastAPI workflow that coordinates analysis, forecasting, risk detection, and reporting from a single request',
        code: `@router.post('/analyze')
def analyze_dataset(payload: AnalysisRequest):
    dataset = load_dataset(payload.dataset_id)
    summary = build_executive_summary(dataset)
    forecast = run_forecast(dataset)
    risks = detect_risks(dataset)
    recommendations = build_recommendations(dataset)
    return {
        'summary': summary,
        'forecast': forecast,
        'risks': risks,
        'recommendations': recommendations,
    }`
      }
    ],
    techStack: ['React', 'FastAPI', 'Python', 'Pandas', 'PostgreSQL', 'JWT', 'Groq', 'PDF Reporting'],
    impactMetrics: [
      'Built the full product experience end to end, including frontend flows, backend services, database design, authentication, API structure, AI integration, and report generation.',
      'Focused the work on clarity and usability so the product would feel like a decision-support tool rather than a collection of disconnected features.',
      'Designed the system around modular architecture and explainable workflows so it could be extended without becoming difficult to maintain.'
    ],
    keyFeatures: [
      'Frontend experience for dataset upload, review, and report navigation',
      'Backend APIs for analysis workflows and report generation',
      'PostgreSQL-backed data model for structured storage and retrieval',
      'JWT-based authentication and session protection',
      'Deterministic analytics for KPIs, anomalies, forecasts, risks, correlations, and root-cause signals',
      'Groq reasoning layer that converts structured intelligence into executive summaries and recommendations',
      'PDF reporting for shareable executive output',
      'Modular architecture for maintainable product growth'
    ],
    tradeoffs: 'The engineering decisions were shaped by product clarity. React was chosen because it made the interface feel responsive and coherent without overcomplicating the frontend. FastAPI was a strong fit because it made API contracts and backend workflows explicit, which mattered when the product needed to connect multiple responsibilities cleanly. PostgreSQL was selected for structured data and dependable reporting rather than a more flexible but less predictable setup. JWT was used to keep authentication simple and practical for a product that needed secure access without unnecessary complexity. Groq was chosen to make AI-assisted analysis available early in the build, and PDF export was kept straightforward so the product could move from analysis to a decision-ready artifact without friction.',
    benchmarks: [],
    githubUrl: 'https://github.com/harshvardhan-it/NeuroSync',
    demoUrl: 'https://neurosync-ui16.onrender.com'
  },
  {
    id: 'pahchanai',
    title: 'PahchanAI',
    tagline: 'Face Recognition & Identity Matching System',
    category: 'Computer Vision',
    featured: true,
    image: '/assets/project_backend.png',
    overview: 'PahchanAI is a computer vision system for face recognition and identity matching. It combines OpenCV-based face detection, FaceNet embeddings, FAISS vector similarity search, and a web interface to manage missing-person records and review potential facial matches.',
    problem: 'Finding a potential identity match across stored missing-person records requires a repeatable way to detect faces, represent them as embeddings, and retrieve visually similar candidates for human review.',
    solution: 'PahchanAI uses OpenCV for image processing, FaceNet for facial feature embeddings, and FAISS for similarity search, then presents potential matches through a web platform for review. The pipeline remains explicit: image processing → embedding → similarity search → match review.',
    architectureNodes: [
      { id: '1', name: 'Image Input', type: 'client', latency: '2ms', description: 'Web interface for image submission and match review' },
      { id: '2', name: 'OpenCV Detection', type: 'gateway', latency: '10ms', description: 'Image preprocessing and face-detection handoff' },
      { id: '3', name: 'FaceNet Embeddings', type: 'worker', latency: '20ms', description: 'Converts detected faces into comparable vector embeddings' },
      { id: '4', name: 'FAISS Similarity Search', type: 'ai', latency: '35ms', description: 'Finds the nearest candidates across the indexed face vectors' },
      { id: '5', name: 'Identity Matches', type: 'database', latency: '15ms', description: 'Reference records and match results for recognition review' },
    ],
    codeSnippets: [
      {
        filename: 'recognition_pipeline.py',
        language: 'python',
        description: 'Face embedding and similarity lookup flow for identity matching',
        code: `def identify_face(image):
    face = detect_face_with_opencv(image)
    embedding = facenet.encode(face)
    distances, matches = faiss_index.search(embedding, k=5)
    return rank_identity_matches(matches, distances)`
      }
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OpenCV', 'FaceNet', 'FAISS', 'Python'],
    impactMetrics: [
      'Designed a computer-vision pipeline that connects face detection, embeddings, and vector similarity search to a usable product interface.',
      'Made the recognition stages inspectable so the system communicates how a match is produced rather than presenting an opaque result.'
    ],
    keyFeatures: [
      'Image upload and match review',
      'OpenCV face detection and preprocessing',
      'FaceNet embedding generation',
      'FAISS similarity search',
      'Identity match review in a MERN interface'
    ],
    tradeoffs: 'The core tradeoff was to prioritize a clear recognition pipeline over a vague “AI-powered” experience. Separating detection, embeddings, similarity search, and match review makes the system easier to reason about, evaluate, and evolve.',
    benchmarks: [],
    githubUrl: 'https://github.com/harshvardhan-it/PahchanAI',
    demoUrl: 'https://pahchan-ai.vercel.app/'
  },
  {
    id: 'sssmp-portal',
    title: 'SSSMP Portal',
    tagline: 'Bilingual Digital Membership Registration & Management Platform',
    category: 'Full-Stack Product',
    featured: true,
    image: '/assets/project_sssmp.png',
    overview: 'A bilingual Hindi-English membership portal for a teachers’ organization in Madhya Pradesh. The product experience brings together public information, multi-step member registration, printable digital membership cards, and administrative views for the State → District → Block hierarchy.',
    problem: 'Membership workflows need to be accessible to members while giving administrators a structured way to review and manage records across multiple organizational levels.',
    solution: 'Built a responsive React and TypeScript interface with Hindi and English language support, guided registration, member-facing card views, and administrative dashboards for hierarchical member management.',
    architectureNodes: [
      { id: '1', name: 'Public Portal', type: 'client', latency: '—', description: 'Responsive bilingual pages for organization information and member access' },
      { id: '2', name: 'Registration Flow', type: 'worker', latency: '—', description: 'Multi-step member registration with district, block, school, and designation details' },
      { id: '3', name: 'Member Card View', type: 'client', latency: '—', description: 'Member-facing digital membership card with print support' },
      { id: '4', name: 'Admin Dashboard', type: 'gateway', latency: '—', description: 'State, District, and Block-level member views with search, filtering, and approval actions' }
    ],
    codeSnippets: [],
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    impactMetrics: [
      'Built and deployed a bilingual Hindi-English membership portal with responsive public pages, multi-step registration, subscription options, and printable digital membership cards.',
      'Developed administrative dashboards for State, District, and Block-level member management, featuring search, filtering, approval workflows, and membership metrics.'
    ],
    keyFeatures: [
      'Hindi-first interface with English language toggle',
      'Multi-step membership registration',
      'District and Block selection with member details',
      'Printable digital membership cards',
      'State, District, and Block-level administrative dashboards',
      'Member search, filtering, approval actions, and dashboard metrics'
    ],
    tradeoffs: 'The implementation prioritizes a clear, accessible user experience and a reusable component structure. The frontend is built with React and TypeScript; backend services and integrations should be described separately from the completed interface.',
    benchmarks: [],
    githubUrl: 'https://github.com/harshvardhan-it/sssmp-portal',
    demoUrl: ''
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2026 – Present',
    role: 'Google Student Ambassador (GSA)',
    company: 'Google Student Ambassador Program',
    type: 'Leadership',
    location: 'SATI, Vidisha, India',
    description: 'Student Ambassador representing Google Gemini through student engagement and practical Generative AI activities. GSA ID: 12669.',
    impactHighlights: [
      'Represent Google as a Student Ambassador, promoting Google Gemini and practical Generative AI adoption through student engagement and community activities.',
      'Participated in student-facing initiatives including Gemini Product Trial and Build Night featuring Nano Banana, encouraging hands-on exploration of Google’s AI tools.'
    ],
    technologies: ['Google Gemini', 'Generative AI', 'Nano Banana', 'Community Engagement']
  },
  {
    period: 'June 2025 – July 2025',
    role: 'Data Analyst Intern',
    company: 'Calderys India Refractories Ltd.',
    type: 'Internship',
    location: 'India',
    description: 'At Calderys, I supported operational reporting and analytics for asset, inventory, and raw material data. My work focused on cleaning, validating, and presenting business data so the team could make better decisions from routine operational reporting.',
    impactHighlights: [
      'Used Power BI and Microsoft Excel to analyze asset, inventory, and raw material datasets and support operational reporting.',
      'Cleaned, validated, and organized business records and developed data visualizations to improve reporting accessibility and support data-driven decisions.'
    ],
    technologies: ['Power BI', 'Microsoft Excel', 'Data Analysis', 'Business Reporting']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend',
    description: 'Building product-facing interfaces with clear user flows and maintainable front-end structure.',
    skills: [
      { id: 'react', name: 'React', level: 'Proficient', experience: 'Used in NeuroSync and PahchanAI UI work', highlight: 'Component structure, interactive workflows, product-facing interfaces', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'tailwind', name: 'Tailwind CSS', level: 'Proficient', experience: 'Used in portfolio and product UI work', highlight: 'Rapid UI refinement and consistent styling', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'typescript', name: 'TypeScript', level: 'Proficient', experience: 'Used in the portfolio implementation and product-facing code', highlight: 'Safer component and API work', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'framer', name: 'Framer Motion', level: 'Proficient', experience: 'Used in this portfolio experience', highlight: 'Motion and interaction polish', usedInProjectIds: ['neurosync'] },
    ]
  },
  {
    title: 'Backend',
    description: 'Creating backend services that connect data processing, APIs, and business workflows.',
    skills: [
      { id: 'fastapi', name: 'FastAPI', level: 'Proficient', experience: 'Used in NeuroSync and PahchanAI backend flows', highlight: 'API structure, request handling, and workflow orchestration', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'python', name: 'Python', level: 'Proficient', experience: 'Used in analysis and backend logic', highlight: 'Data processing, request orchestration, and report preparation', usedInProjectIds: ['neurosync'] },
      { id: 'apis', name: 'REST API Design', level: 'Proficient', experience: 'Used in product backend development', highlight: 'Clear routes, structured request/response contracts', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'auth', name: 'Authentication', level: 'Proficient', experience: 'Used in NeuroSync product access workflows', highlight: 'JWT-based access control and protected routes', usedInProjectIds: ['neurosync'] },
    ]
  },
  {
    title: 'Databases',
    description: 'Working with structured data storage, data modeling, and reporting-oriented database design.',
    skills: [
      { id: 'postgres', name: 'PostgreSQL', level: 'Proficient', experience: 'Used in NeuroSync and analytics-focused work', highlight: 'Structured storage, report state, and relational data design', usedInProjectIds: ['neurosync'] },
      { id: 'mysql', name: 'MySQL', level: 'Proficient', experience: 'Used in analytics and reporting workflows', highlight: 'Relational query design and cross-system reporting', usedInProjectIds: [] },
      { id: 'sqlite', name: 'SQLite', level: 'Proficient', experience: 'Used for lightweight dataset storage and prototyping', highlight: 'Quick local persistence for data cleanup and analysis', usedInProjectIds: [] },
      { id: 'sql', name: 'SQL', level: 'Proficient', experience: 'Used in reporting and data organization tasks', highlight: 'Basic query design and data shaping', usedInProjectIds: [] },
      { id: 'datamodels', name: 'Data Modeling', level: 'Proficient', experience: 'Applied in analysis and reporting work', highlight: 'Organizing data for clarity and maintainability', usedInProjectIds: [] },
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Working across the languages most relevant to product and data-driven software development.',
    skills: [
      { id: 'python-lang', name: 'Python', level: 'Proficient', experience: 'Used in backend processing and analysis workflows', highlight: 'Service logic, data handling, and AI-assisted orchestration', usedInProjectIds: ['neurosync'] },
      { id: 'javascript', name: 'JavaScript / TypeScript', level: 'Proficient', experience: 'Used in UI and application implementation', highlight: 'Product front-end and service integration', usedInProjectIds: ['neurosync', 'pahchanai'] },
    ]
  },
  {
    title: 'Artificial Intelligence',
    description: 'Applying AI in a practical way to support analysis, summaries, computer vision, and decision-oriented workflows.',
    skills: [
      { id: 'ai-integration', name: 'AI Integration', level: 'Proficient', experience: 'Used in NeuroSync analysis workflows', highlight: 'Connecting model-assisted output to product features', usedInProjectIds: ['neurosync'] },
      { id: 'computer-vision', name: 'Computer Vision', level: 'Proficient', experience: 'Used FaceNet and OpenCV to build a missing person detection workflow', highlight: 'Visual similarity search and image preprocessing', usedInProjectIds: ['pahchanai'] },
      { id: 'faiss', name: 'FAISS', level: 'Proficient', experience: 'Used for fast approximate nearest neighbor search in face similarity tasks', highlight: 'Efficient similarity lookup for missing person matching', usedInProjectIds: ['pahchanai'] },
      { id: 'prompting', name: 'Prompt Engineering', level: 'Proficient', experience: 'Applied in AI-assisted product work', highlight: 'Shaping model outputs for summaries and recommendations', usedInProjectIds: ['neurosync'] },
      { id: 'llm-ops', name: 'LLM-Assisted Workflows', level: 'Proficient', experience: 'Used in product-oriented AI features', highlight: 'Combining user input, structured data, and model output', usedInProjectIds: ['neurosync', 'pahchanai'] },
    ]
  },
  {
    title: 'Data Analytics',
    description: 'Turning data into useful reporting, analysis, and decision support.',
    skills: [
      { id: 'excel', name: 'Excel', level: 'Proficient', experience: 'Used in Calderys reporting and data preparation work', highlight: 'Cleaning, organizing, and presenting operational data', usedInProjectIds: [] },
      { id: 'powerbi', name: 'Power BI', level: 'Proficient', experience: 'Used in internship reporting support', highlight: 'Dashboard-style reporting and data presentation', usedInProjectIds: [] },
      { id: 'reporting', name: 'Business Reporting', level: 'Proficient', experience: 'Applied in internship and analytics-focused work', highlight: 'Organizing reports around practical business needs', usedInProjectIds: [] },
    ]
  },
  {
    title: 'Developer Tools',
    description: 'Using practical tooling to develop, structure, and present software work clearly.',
    skills: [
      { id: 'git', name: 'Git', level: 'Proficient', experience: 'Used in portfolio and project development', highlight: 'Version control and iterative implementation', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'vscode', name: 'VS Code', level: 'Proficient', experience: 'Used throughout development work', highlight: 'Code editing, debugging, and project organization', usedInProjectIds: ['neurosync', 'pahchanai'] },
    ]
  },
  {
    title: 'Computer Science Fundamentals',
    description: 'Applying core computing concepts to build reliable software and understand system behavior.',
    skills: [
      { id: 'ds', name: 'Data Structures', level: 'Proficient', experience: 'Applied through coursework and practical problem solving', highlight: 'Clear logic and robust implementation', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'algorithms', name: 'Algorithms', level: 'Proficient', experience: 'Applied through coursework and practical engineering work', highlight: 'Reasoning about efficient problem solving', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'systems', name: 'Software Design', level: 'Proficient', experience: 'Used in structuring product systems and modules', highlight: 'Separation of concerns and maintainable code', usedInProjectIds: ['neurosync'] },
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: '2026',
    title: 'Qualified GATE 2026 — Computer Science and Information Technology',
    organization: 'GATE',
    type: 'Award',
    description: 'Qualified GATE 2026 in Computer Science and Information Technology on the first attempt.',
    badgeText: 'GATE Qualified',
    proofLink: '/gate-2026-scorecard.pdf'
  },
  {
    year: '2026',
    title: 'Data Analytics with Python',
    organization: 'NPTEL',
    type: 'Certification',
    description: 'Completed the NPTEL Data Analytics with Python certification.',
    badgeText: 'NPTEL',
    proofLink: '/nptel-data-analytics-python.pdf'
  },
  {
    year: '2026',
    title: 'Business Intelligence and Analytics',
    organization: 'NPTEL',
    type: 'Certification',
    description: 'Completed the NPTEL Business Intelligence and Analytics certification.',
    badgeText: 'NPTEL',
    proofLink: '/nptel-business-intelligence-analytics.pdf'
  }
];

export const EDUCATION_TIMELINE = {
  degree: 'B.Tech Information Technology',
  institution: 'Samrat Ashok Technological Institute (SATI)',
  period: '2023–2027',
  grade: 'CGPA: 7.86/10',
  relevantCoursework: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Artificial Intelligence',
    'Data Analytics',
    'Operating Systems',
    'Computer Networks',
    'Web Development'
],
  leadership: [
    'Building production-oriented applications with React, FastAPI, and PostgreSQL',
    'Developing AI-powered systems for data intelligence, analytics, and decision support',
    'Engineering scalable backends, APIs, and data-driven product solutions'
  ]
};

export const TESTIMONIALS: Testimonial[] = [];
