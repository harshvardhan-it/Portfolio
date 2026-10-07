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
  title: 'AI + Data + Full-Stack Engineer',
  shortBio: 'B.Tech Information Technology student with internship experience in data analytics and business intelligence, focused on building intelligent products with Python, SQL, Power BI, FastAPI, and applied AI workflows.',
  location: 'B.Tech Information Technology, SATI (2023-2027)',
  email: 'harshvardhan.dubey.it@gmail.com',
  github: 'https://github.com/harshvardhan-it',
  linkedin: 'https://www.linkedin.com/in/harshvardhan-dubey-31051a294',
  resumeUrl: '/Harshvardhan_Resume.pdf',
  status: 'Seeking Software Engineering Internships and New Graduate Software Engineer roles',
  metrics: [
    { label: 'Education', value: 'B.Tech IT' },
    { label: 'Institute', value: 'SATI' },
    { label: 'Core Stack', value: 'React / FastAPI' },
    { label: 'Backend', value: 'Python / PostgreSQL' },
  ]
};

export const RECRUITER_FAST_PASS = {
  headline: 'Recruiter Summary — Harshvardhan Dubey',
  roles: ['Software Engineering Student', 'Full Stack Developer', 'AI Product Builder', 'Data-Driven Software Engineer'],
  topCapabilities: [
    'Builds React-based product experiences with a clear focus on usability and engineering structure',
    'Works with FastAPI, PostgreSQL, Python, and reporting tools to turn data into practical software features',
    'Interested in AI-assisted product workflows that support decision-making and analysis',
    'Keeps technical claims grounded in portfolio projects, internship work, and interview-defensible implementation details'
  ],
  education: 'B.Tech Information Technology, Samrat Ashok Technological Institute (SATI), 2023-2027',
  locationFlexibility: 'Seeking software engineering internships and new graduate roles',
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
    demoUrl: 'https://neuro-sync-phi.vercel.app/auth'
  },
  {
    id: 'pahchanai',
    title: 'PahchanAI',
    tagline: 'Face Recognition & Identity Matching System',
    category: 'Computer Vision',
    featured: true,
    image: '/assets/project_backend.png',
    overview: 'PahchanAI is a computer vision system for face recognition and identity matching. It combines OpenCV-based face detection, FaceNet embeddings, FAISS vector similarity search, and a React/Node.js web interface to support identity matching from image or CCTV-style inputs.',
    problem: 'Manual identification from visual footage is slow and unreliable when a system needs to compare faces across a large reference set. The problem calls for a pipeline that can detect faces, represent them consistently as embeddings, and retrieve the closest matches efficiently.',
    solution: 'PahchanAI processes an image through OpenCV-based face detection, creates FaceNet embeddings, searches them with FAISS for nearest-neighbor matching, and presents identity matches through a full-stack interface. The design keeps the computer-vision pipeline transparent — detection → embedding → similarity search → match review — rather than obscuring it behind a generic "AI" label.',
    architectureNodes: [
      { id: '1', name: 'Image / CCTV Input', type: 'client', latency: '2ms', description: 'Web interface for image submission and match review' },
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
      'Image and CCTV-style input handling',
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
    id: 'calderys-data-analytics-dashboard',
    title: 'Calderys Data Analytics Dashboard',
    tagline: 'Operational analytics & reporting (Professional Experience — Calderys Internship)',
    category: 'FinTech & Analytics',
    featured: true,
    image: '/assets/project_fintech.png',
    overview: 'During my internship at Calderys, I built operational analytics dashboards and reporting workflows using Power BI, Excel, Python, and SQL. The work focused on cleaning, validating, and presenting business data for 200+ employee assets and 1,000+ inventory records so stakeholders could make decisions without manual reporting overhead.',
    problem: 'Teams needed a practical way to review operational trends and metrics without jumping between fragmented exports and disconnected reports. The challenge was balancing clarity, speed, and data integrity in a manufacturing context.',
    solution: 'I designed interactive Power BI dashboards, built data cleaning workflows in Excel/Python, and created structured reporting that reduced manual reporting time and data inconsistencies. The work emphasized clean data modeling, reliable ETL, and stakeholder-ready presentation.',
    architectureNodes: [
      { id: '1', name: 'Analytics UI', type: 'client', latency: '3ms', description: 'React dashboard for charts, filters, and reporting views' },
      { id: '2', name: 'API Services', type: 'gateway', latency: '10ms', description: 'FastAPI routes for query execution and aggregation' },
      { id: '3', name: 'Data Models', type: 'worker', latency: '18ms', description: 'Structured query and transformation layer for analytics views' },
      { id: '4', name: 'Reporting Layer', type: 'ai', latency: '12ms', description: 'Summary and presentation logic for stakeholder-friendly output' },
      { id: '5', name: 'Analytics Database', type: 'database', latency: '15ms', description: 'PostgreSQL storage for curated analytics and report state' },
    ],
    codeSnippets: [
      {
        filename: 'analytics_query.py',
        language: 'python',
        description: 'Backend aggregation for dashboard metrics and report summaries',
        code: `def build_summary(query: str):
    rows = fetch_rows(query)
    return {
        'count': len(rows),
        'trend': summarize_trend(rows),
        'status': classify_status(rows),
    }`
      }
    ],
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'JWT Authentication', 'Charting'],
    impactMetrics: [
      'Delivered a dashboard experience centered on clear reporting, reliable data flow, and practical product use.'
    ],
    keyFeatures: [
      'Interactive dashboard',
      'Structured analytics',
      'Data modeling',
      'Report-ready summaries',
      'Frontend-backend integration'
    ],
    tradeoffs: 'I focused the product on clarity and maintainability rather than trying to overfit it with every possible visualization. That made the implementation easier to extend and more appropriate for real business use.',
    benchmarks: [],
    githubUrl: "",
    demoUrl: ""
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2026',
    role: 'Google Gemini Student Ambassador',
    company: 'Google',
    type: 'Leadership',
    location: 'India',
    description: 'Selected as a Google Gemini Student Ambassador for 2026, representing Gemini through student-focused content, community engagement, and practical AI experiences.',
    impactHighlights: [
      'Create student-focused content that demonstrates practical ways Gemini can support ideation, learning, and creative workflows.',
      'Participate in Gemini community activities and campaigns designed to help students discover useful generative AI workflows.',
      'Represent Gemini in student communities while building hands-on experience in AI advocacy, communication, and community leadership.'
    ],
    technologies: ['Google Gemini', 'Generative AI', 'Content Creation', 'Community Engagement']
  },
  {
    period: 'June 2025 – July 2025',
    role: 'Data Analyst Intern',
    company: 'Calderys India Refractories Ltd.',
    type: 'Internship',
    location: 'India',
    description: 'At Calderys, I supported operational reporting and analytics for asset, inventory, and raw material data. My work focused on cleaning, validating, and presenting business data so the team could make better decisions from routine operational reporting.',
    impactHighlights: [
      'Designed interactive Power BI dashboards to monitor 200+ employee assets, improving tracking efficiency by 25% and reducing manual reporting time by 30%.',
      'Cleaned, validated, and transformed 1,000+ asset and inventory records using Microsoft Excel, reducing data inconsistencies by 20%.',
      'Performed exploratory data analysis to support operational reporting, resource planning, and business decision-making.',
      'Built reporting support that made operational information easier to access without relying on fragmented manual exports.'
    ],
    technologies: ['Power BI', 'Microsoft Excel', 'Python', 'SQL', 'Data Analysis']
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
      { id: 'fastapi', name: 'FastAPI', level: 'Proficient', experience: 'Used in NeuroSync and PahchanAI backend flows', highlight: 'API structure, request handling, and workflow orchestration', usedInProjectIds: ['neurosync', 'pahchanai', 'calderys-data-analytics-dashboard'] },
      { id: 'python', name: 'Python', level: 'Proficient', experience: 'Used in analysis and backend logic', highlight: 'Data processing, request orchestration, and report preparation', usedInProjectIds: ['neurosync', 'calderys-data-analytics-dashboard'] },
      { id: 'apis', name: 'REST API Design', level: 'Proficient', experience: 'Used in product backend development', highlight: 'Clear routes, structured request/response contracts', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'auth', name: 'Authentication', level: 'Proficient', experience: 'Used in NeuroSync product access workflows', highlight: 'JWT-based access control and protected routes', usedInProjectIds: ['neurosync'] },
    ]
  },
  {
    title: 'Databases',
    description: 'Working with structured data storage, data modeling, and reporting-oriented database design.',
    skills: [
      { id: 'postgres', name: 'PostgreSQL', level: 'Proficient', experience: 'Used in NeuroSync and analytics-focused work', highlight: 'Structured storage, report state, and relational data design', usedInProjectIds: ['neurosync', 'calderys-data-analytics-dashboard'] },
      { id: 'mysql', name: 'MySQL', level: 'Proficient', experience: 'Used in analytics and reporting workflows', highlight: 'Relational query design and cross-system reporting', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
      { id: 'sqlite', name: 'SQLite', level: 'Proficient', experience: 'Used for lightweight dataset storage and prototyping', highlight: 'Quick local persistence for data cleanup and analysis', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
      { id: 'sql', name: 'SQL', level: 'Proficient', experience: 'Used in reporting and data organization tasks', highlight: 'Basic query design and data shaping', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
      { id: 'datamodels', name: 'Data Modeling', level: 'Proficient', experience: 'Applied in analysis and reporting work', highlight: 'Organizing data for clarity and maintainability', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
    ]
  },
  {
    title: 'Programming Languages',
    description: 'Working across the languages most relevant to product and data-driven software development.',
    skills: [
      { id: 'python-lang', name: 'Python', level: 'Proficient', experience: 'Used in backend processing and analysis workflows', highlight: 'Service logic, data handling, and AI-assisted orchestration', usedInProjectIds: ['neurosync', 'calderys-data-analytics-dashboard'] },
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
      { id: 'excel', name: 'Excel', level: 'Proficient', experience: 'Used in Calderys reporting and data preparation work', highlight: 'Cleaning, organizing, and presenting operational data', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
      { id: 'powerbi', name: 'Power BI', level: 'Proficient', experience: 'Used in internship reporting support', highlight: 'Dashboard-style reporting and data presentation', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
      { id: 'reporting', name: 'Business Reporting', level: 'Proficient', experience: 'Applied in internship and analytics-focused work', highlight: 'Organizing reports around practical business needs', usedInProjectIds: ['calderys-data-analytics-dashboard'] },
    ]
  },
  {
    title: 'Developer Tools',
    description: 'Using practical tooling to develop, structure, and present software work clearly.',
    skills: [
      { id: 'git', name: 'Git', level: 'Proficient', experience: 'Used in portfolio and project development', highlight: 'Version control and iterative implementation', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'vscode', name: 'VS Code', level: 'Proficient', experience: 'Used throughout development work', highlight: 'Code editing, debugging, and project organization', usedInProjectIds: ['neurosync', 'pahchanai', 'calderys-data-analytics-dashboard'] },
    ]
  },
  {
    title: 'Computer Science Fundamentals',
    description: 'Applying core computing concepts to build reliable software and understand system behavior.',
    skills: [
      { id: 'ds', name: 'Data Structures', level: 'Proficient', experience: 'Applied through coursework and practical problem solving', highlight: 'Clear logic and robust implementation', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'algorithms', name: 'Algorithms', level: 'Proficient', experience: 'Applied through coursework and practical engineering work', highlight: 'Reasoning about efficient problem solving', usedInProjectIds: ['neurosync', 'pahchanai'] },
      { id: 'systems', name: 'Software Design', level: 'Proficient', experience: 'Used in structuring product systems and modules', highlight: 'Separation of concerns and maintainable code', usedInProjectIds: ['neurosync', 'calderys-data-analytics-dashboard'] },
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    year: '2025',
    title: 'Internship experience in data analysis and reporting',
    organization: 'Calderys India Refractories Ltd.',
    type: 'Award',
    description: 'Supported reporting workflows through data cleaning, dashboard support, and business reporting during an internship focused on operational information.',
    badgeText: 'Internship'
  },
  {
    year: '2025',
    title: 'Built portfolio projects centered on practical software work',
    organization: 'Independent portfolio work',
    type: 'Certification',
    description: 'Developed and refined case studies around NeuroSync, PahchanAI, and a data analytics dashboard to present tangible engineering work clearly.',
    badgeText: 'Completed Projects'
  }
];

export const EDUCATION_TIMELINE = {
  degree: 'B.Tech Information Technology',
  institution: 'Samrat Ashok Technological Institute (SATI)',
  period: '2023–2027',
  grade: 'Focused on software engineering, applied AI, and practical product building',
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
