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
  category: 'AI / LLM Infrastructure' | 'Distributed Systems' | 'FinTech & Analytics' | 'Web Platform';
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
  title: 'Software Engineering Student | Full Stack Developer | AI Product Builder',
  shortBio: 'Final-year B.Tech Information Technology student with internship experience in data analytics, business intelligence, and practical software product engineering. Skilled in Python, SQL, Power BI, FastAPI, and applied AI workflows.',
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
    tagline: 'An AI-powered executive decision intelligence platform designed to turn messy operational data into clear, decision-ready insight.',
    category: 'AI / LLM Infrastructure',
    featured: true,
    image: '/assets/project_ai.png',
    overview: 'NeuroSync exists because executives do not need more dashboards; they need a clearer path from raw operational data to decisions they can actually act on. The idea came from the friction of existing workflows, where important signals were scattered across files, manual reports, and disconnected tools, making it difficult to move from observation to decision without losing context. I built it as a focused product experience that could help a user upload data, understand what mattered, and leave with a report they could use.',
    problem: 'The real business challenge was not just data volume. It was decision friction. Teams were collecting useful information, but the effort required to interpret it, summarize it, and turn it into a practical recommendation was too high. That gap creates delays, weakens confidence in decisions, and makes the value of the data far harder to realize.',
    solution: 'NeuroSync is a product that helps users move from a dataset to insight in a structured way. A user uploads data, the backend prepares it for analysis, AI-assisted workflows generate summaries and recommendations, and the system produces an executive-ready report with analytics, forecasting, risk assessment, and decision support. I chose React for a polished product experience, FastAPI for a clear backend API layer, PostgreSQL for reliable structured storage, JWT for secure access, Groq for practical AI-assisted analysis, and PDF generation so the output could be shared in a format decision-makers already understand. The product was designed to feel useful rather than decorative, which is why the workflow stays simple and explainable.',
    architectureNodes: [
      { id: '1', name: 'Dataset Input', type: 'client', latency: '3ms', description: 'React-based experience for upload, review, and workflow navigation' },
      { id: '2', name: 'FastAPI Backend', type: 'gateway', latency: '12ms', description: 'API layer for authentication, data handling, and orchestration' },
      { id: '3', name: 'Business Logic', type: 'worker', latency: '24ms', description: 'Processing layer for validation, transformation, and report preparation' },
      { id: '4', name: 'AI Analysis Layer', type: 'ai', latency: '40ms', description: 'Summaries, forecasting, anomaly detection, and recommendation generation' },
      { id: '5', name: 'PostgreSQL Database', type: 'database', latency: '18ms', description: 'Structured persistence for datasets, analysis context, and report state' },
      { id: '6', name: 'Executive Reports', type: 'gateway', latency: '8ms', description: 'PDF-ready outputs for decision support and distribution' },
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
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Groq', 'Python', 'PDF Reporting', 'Tailwind CSS'],
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
      'AI integration for executive summaries, forecasting, risk detection, and recommendations',
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
    tagline: 'Context-aware AI assistant for structured retrieval and grounded response generation.',
    category: 'Web Platform',
    featured: true,
    image: '/assets/project_backend.png',
    overview: 'PahchanAI is a focused product experience for helping users retrieve context from structured information and generate grounded responses. I built the experience with a polished frontend, a backend service layer, and a database-backed knowledge flow.',
    problem: 'Users often need accurate answers from information that is spread across documents, tables, and internal knowledge sources. Generic AI interactions are too shallow when the task depends on reliable retrieval and structure.',
    solution: 'PahchanAI combines a clean React interface with a FastAPI backend and structured storage so the assistant can answer questions with context rather than guesswork. The system emphasizes secure access, retrieval quality, and a straightforward user experience.',
    architectureNodes: [
      { id: '1', name: 'User Interface', type: 'client', latency: '2ms', description: 'React experience for prompts, context, and response review' },
      { id: '2', name: 'API Layer', type: 'gateway', latency: '10ms', description: 'FastAPI routes for auth, query handling, and orchestration' },
      { id: '3', name: 'Retrieval Logic', type: 'worker', latency: '20ms', description: 'Search and ranking layer for structured context retrieval' },
      { id: '4', name: 'AI Response Layer', type: 'ai', latency: '35ms', description: 'Prompt orchestration for grounded answer generation' },
      { id: '5', name: 'Knowledge Storage', type: 'database', latency: '15ms', description: 'PostgreSQL-backed storage for indexed knowledge and state' },
    ],
    codeSnippets: [
      {
        filename: 'retrieval.py',
        language: 'python',
        description: 'Simple retrieval flow for grounded answer generation',
        code: `def retrieve_context(query: str):
    candidates = search_documents(query)
    ranked = rank_candidates(candidates)
    return ranked[:5]`
      }
    ],
    techStack: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'JWT Authentication', 'LLM API'],
    impactMetrics: [
      'Built a retrieval-first assistant experience that focuses on grounded answers rather than generic AI output.'
    ],
    keyFeatures: [
      'Context-aware Q&A',
      'Secure authentication',
      'Knowledge retrieval',
      'Response generation',
      'Structured data support'
    ],
    tradeoffs: 'The main design choice was to keep the assistant reliable and explainable by using a retrieval-driven workflow instead of relying on opaque agent behavior. That tradeoff made the product more practical and easier to evolve.',
    benchmarks: [],
    githubUrl: 'https://github.com/harshvardhan-it/PahchanAI',
    demoUrl: 'https://pahchan-ai.vercel.app/'
  },
  {
    id: 'calderys-data-analytics-dashboard',
    title: 'Calderys Data Analytics Dashboard',
    tagline: 'Operational analytics dashboard for turning raw business data into focused reporting and decision support.',
    category: 'FinTech & Analytics',
    featured: true,
    image: '/assets/project_fintech.png',
    overview: 'This dashboard project focused on making business data easier to monitor and interpret. I built the experience around data modeling, API design, dashboard UI, and reliable frontend-backend communication so that stakeholders could review operational signals without manual reporting work.',
    problem: 'Teams need a practical way to review trends, distributions, and operational metrics without jumping between exports and disconnected reports. A strong dashboard needs to balance clarity, speed, and data integrity.',
    solution: 'The dashboard uses a React frontend, FastAPI services, and PostgreSQL storage to provide structured analytics, clear summaries, and a dependable path from raw data to presentation. The work emphasized clean interfaces, thoughtful data modeling, and scalable API design.',
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
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Artificial Intelligence',
    'Web Development'
  ],
  leadership: [
    'Building practical software products with React, FastAPI, and PostgreSQL',
    'Exploring AI-assisted workflows, analytics, and decision-support systems',
    'Strengthening backend engineering, API design, and product thinking'
  ]
};

export const TESTIMONIALS: Testimonial[] = [];
