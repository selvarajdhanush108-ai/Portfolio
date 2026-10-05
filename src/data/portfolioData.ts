import type { Project, ExperienceItem, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Dhanush S',
  role: '.NET Developer | Software Engineer',
  eyebrow: "HELLO, I'M DHANUSH S",
  headline: '.NET Developer',
  subHeadline: 'Software Engineer',
  rotatingRoles: [
    '.NET Developer',
    'C# Backend Engineer',
    'ASP.NET Core Specialist',
    'Software Engineer',
  ],
  location: 'Salem, Tamil Nadu, India',
  email: 'contact@dhanushs.dev',
  githubUrl: 'https://github.com/selvarajdhanush108-ai',
  linkedinUrl: 'https://linkedin.com/in/dhanush-s1006',
  bio: 'Final-year MCA student focused on C# and .NET development, building backend applications with ASP.NET Core, Entity Framework Core, LINQ, and SQL Server.',
  aboutDetailed:
    "I'm Dhanush S, a final-year Master of Computer Applications student focused on C# and .NET development. I build backend applications, design RESTful APIs, work with relational databases, and strengthen my programming fundamentals through hands-on architectures and practical implementation.",
  resumeSummary:
    'Final-year Master of Computer Applications (MCA) student specialized in C# and .NET backend development. Proficient in engineering RESTful Web APIs with ASP.NET Core, designing relational database schemas with SQL Server, and implementing efficient data access layers using Entity Framework Core and LINQ. Strong foundation in Object-Oriented Programming (OOP) and software engineering principles. Currently seeking entry-level .NET Developer and Software Engineer opportunities.',
  statusText: 'Currently seeking entry-level .NET Developer / Software Engineer opportunities.',
  isOpenToWork: true,
};

export const CODE_SNIPPET = `// Dhanush S - Software Engineer
public class DhanushDeveloper : ISoftwareEngineer
{
    public string Focus => ".NET Development";
    public string Language => "C#";
    public string Framework => "ASP.NET Core";
    public string ORM => "Entity Framework Core";
    public string Database => "SQL Server";
    public string Location => "Salem, Tamil Nadu, India";

    public async Task<StatusReport> BuildSolutionsAsync()
    {
        return await Task.FromResult(new StatusReport
        {
            Readiness = "Entry-Level .NET Developer",
            CoreSpecialty = "RESTful APIs & Data Architectures"
        });
    }
}`;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    category: 'languages',
    skills: [
      { name: 'C#', description: 'Core object-oriented language for robust backend solutions', level: 'Core' },
      { name: 'Java', description: 'Strong foundational object-oriented programming', level: 'Proficient' },
      { name: 'SQL', description: 'Relational queries, schema design, and data integrity', level: 'Core' },
    ],
  },
  {
    title: '.NET Ecosystem',
    category: 'dotnet',
    skills: [
      { name: 'ASP.NET Core', description: 'Building high-performance Web APIs & services', level: 'Core' },
      { name: '.NET MAUI', description: 'Cross-platform native application framework', level: 'Proficient' },
      { name: 'Entity Framework Core', description: 'ORM for efficient database queries and migrations', level: 'Core' },
      { name: 'LINQ', description: 'Declarative, type-safe data querying across datasets', level: 'Core' },
    ],
  },
  {
    title: 'Backend Architecture',
    category: 'backend',
    skills: [
      { name: 'RESTful APIs', description: 'Standardized HTTP endpoints with status codes & JSON', level: 'Core' },
      { name: 'CRUD Operations', description: 'Clean data manipulation and state management', level: 'Core' },
      { name: 'Object-Oriented Programming', description: 'SOLID principles, encapsulation, and clean structure', level: 'Core' },
    ],
  },
  {
    title: 'Database Management',
    category: 'database',
    skills: [
      { name: 'SQL Server', description: 'Relational database engine, indexing, and procedures', level: 'Core' },
      { name: 'DBMS', description: 'Database management systems and ACID compliance', level: 'Core' },
      { name: 'Relational Concepts', description: 'Normalization, foreign keys, and referential integrity', level: 'Core' },
    ],
  },
  {
    title: 'Developer Tools',
    category: 'tools',
    skills: [
      { name: 'Git', description: 'Version control, branching, and commit workflows', level: 'Core' },
      { name: 'GitHub', description: 'Remote repositories, collaboration, and code hosting', level: 'Core' },
      { name: 'Visual Studio', description: 'Full-featured IDE for .NET debugging & profiling', level: 'Core' },
      { name: 'VS Code', description: 'Lightweight code editor for web & scripts', level: 'Core' },
      { name: 'Postman', description: 'API contract testing, request suites, and validation', level: 'Core' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'real-time-bus-tracking-system',
    title: 'Real-Time Bus Tracking System',
    year: '2025',
    shortDescription:
      'Backend system built using C# and ASP.NET Core Web API to manage and serve bus location information.',
    fullDescription:
      'A backend service engineered to process, store, and deliver bus location and route updates. Developed with ASP.NET Core Web API, Entity Framework Core, and SQL Server, the system handles dynamic location points, optimizes route-based querying with LINQ, and guarantees structured responses with strict input validation and exception handling.',
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Web API',
      'Entity Framework Core',
      'SQL Server',
      'LINQ',
      'REST',
    ],
    highlights: [
      'RESTful API endpoints for telemetry and location intake',
      'Bus location management and route-based retrieval routines',
      'Entity Framework Core code-first mappings with SQL Server',
      'LINQ query optimization for rapid geospatial lookup',
      'Comprehensive request validation and structured exception handling',
      'Systematic Postman test suites verifying contract compliance',
    ],
    endpoints: [
      { method: 'GET', path: '/api/v1/buses/{id}/location', description: 'Retrieves latest telemetry coordinates and route progress' },
      { method: 'POST', path: '/api/v1/buses/{id}/telemetry', description: 'Ingests new GPS coordinates with schema validation' },
      { method: 'GET', path: '/api/v1/routes/{routeId}/active', description: 'Lists all active buses currently assigned to a route' },
      { method: 'PUT', path: '/api/v1/buses/{id}/status', description: 'Updates vehicle in-service status in SQL Server' },
    ],
    architectureNotes: [
      'Layered architecture cleanly separating Controller, Service, and Data Access layers',
      'Entity Framework Core DbContext handling transactions and connection pooling',
      'Global exception handling middleware producing standard RFC 7807 problem details',
      'Indexed route foreign keys in SQL Server for O(log n) retrieval latency',
    ],
    testingNotes: [
      'Postman collection covering positive paths, boundary conditions, and invalid payloads',
      'Validation tests ensuring coordinate bounds and non-null identifiers',
      'HTTP 404, 400, and 500 error resilience verification',
    ],
    visualType: 'bus-tracking',
    githubUrl: 'https://github.com/selvarajdhanush108-ai',
  },
  {
    id: 'faculty-contact-management-system',
    title: 'Faculty Contact Management System',
    year: '2026',
    shortDescription:
      'Backend application built using C#, ASP.NET Core Web API, and SQL Server for managing faculty and staff contact information.',
    fullDescription:
      'A centralized administrative backend system designed to manage academic department contacts, faculty directories, designations, and communication channels. Implements full RESTful CRUD workflows using ASP.NET Core Web API, Entity Framework Core for relational persistence, and LINQ for filtering and sorting records.',
    technologies: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Web API',
      'Entity Framework Core',
      'SQL Server',
      'LINQ',
      'REST',
    ],
    highlights: [
      'RESTful CRUD APIs supporting full faculty directory lifecycle',
      'Relational database integration using SQL Server & EF Core',
      'LINQ queries for department-wise filtering, search, and sorting',
      'Model validation attributes guarding against malformed inputs',
      'Consistent error handling with informative API status responses',
      'Verified with Postman API tests for endpoint integrity',
    ],
    endpoints: [
      { method: 'GET', path: '/api/faculty', description: 'Fetches faculty list with optional department and search query parameters' },
      { method: 'GET', path: '/api/faculty/{id}', description: 'Returns complete faculty record by primary key identifier' },
      { method: 'POST', path: '/api/faculty', description: 'Creates a new faculty entry with email uniqueness check' },
      { method: 'PUT', path: '/api/faculty/{id}', description: 'Updates existing contact and departmental designation' },
      { method: 'DELETE', path: '/api/faculty/{id}', description: 'Safely removes faculty record from the database' },
    ],
    architectureNotes: [
      'Repository and service pattern promoting testability and modular separation',
      'Relational schema enforcing foreign keys between Departments and Faculty tables',
      'LINQ AsNoTracking queries employed for read-only listing endpoints to maximize throughput',
      'DTO (Data Transfer Object) patterns ensuring database entities remain encapsulated',
    ],
    testingNotes: [
      'Automated Postman test suites verifying CRUD lifecycles (Create -> Read -> Update -> Delete)',
      'Constraint checks for duplicate email addresses and required departmental IDs',
      'Null and empty payload edge-case handling',
    ],
    visualType: 'faculty-management',
    githubUrl: 'https://github.com/selvarajdhanush108-ai',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'zetheta-algorithms',
    role: 'Software Engineering Extern',
    company: 'Zetheta Algorithms Pvt. Ltd.',
    period: 'August 2026',
    type: 'Externship',
    description:
      'Participated as a Software Engineering Extern, observing and engaging in core software engineering workflows, application architecture reviews, and backend system best practices.',
    highlights: [
      'Gained practical insights into modern software engineering workflows and agile practices',
      'Explored backend system architectures, API design principles, and database management',
      'Examined patterns for application reliability, maintainability, availability, and fault tolerance',
      'Analyzed technical requirement gathering, debugging workflows, and cross-functional team collaboration',
    ],
    skills: [
      'Software Engineering Workflows',
      'Application Architecture',
      'Backend Systems',
      'API Design',
      'Databases',
      'System Reliability',
      'Maintainability',
      'Debugging',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'K.S.R. College of Engineering',
    period: '2025 – 2027',
    cgpa: '8.4 / 10',
    details:
      'Advanced coursework focused on Software Engineering, Relational Database Management Systems, Advanced Programming, and Distributed Systems. Actively focusing on C# and .NET backend architectures.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Vysya College',
    period: '2022 – 2025',
    cgpa: '8.2 / 10',
    details:
      'Comprehensive foundation in Computer Science fundamentals, Object-Oriented Programming, Data Structures, Relational Database Management Systems, and Web Technologies.',
  },
];

export const TECH_CONSTELLATION = [
  { name: 'C#', role: 'Core Language', tier: 'Primary' },
  { name: 'ASP.NET Core', role: 'Web API Framework', tier: 'Primary' },
  { name: 'EF Core', role: 'Object-Relational Mapping', tier: 'Primary' },
  { name: 'LINQ', role: 'Query Engine', tier: 'Primary' },
  { name: 'SQL Server', role: 'Relational Database', tier: 'Primary' },
  { name: 'REST APIs', role: 'Service Protocol', tier: 'Core' },
  { name: 'Git & GitHub', role: 'Version Control', tier: 'Tools' },
  { name: 'Postman', role: 'API Testing', tier: 'Tools' },
  { name: 'Visual Studio', role: 'Primary IDE', tier: 'Tools' },
];
