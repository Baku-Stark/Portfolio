export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Work' | 'Academic' | 'Leadership';
  description: string[];
  technologies: string[];
}

export const experiencesData: Experience[] = [
  {
    id: 'exp-01',
    role: 'Software Engineering Student / Developer',
    company: 'Jala University',
    location: 'Remote / USA - Brazil',
    period: '2024 - 2028',
    type: 'Academic',
    description: [
      'Development of high-performance full-stack applications using Java (Spring Boot), TypeScript, .NET, and the three major JavaScript frameworks.',
      'Implementation of distributed architectures, integration of RESTful APIs, and real-time communication via WebSockets.',
      'Implementation of DevOps practices, including containerization with Docker, CI/CD pipelines (GitLab), and static analysis with SonarQube.',
      'Software quality assurance using automated testing frameworks with Playwright and API contract validation.',
      'Design and simulation of complex enterprise network topologies using Cisco Packet Tracer, including VLANs, trunking, and dynamic routing protocols (e.g., OSPF, RIP).',
      'Advanced IPv4/IPv6 address planning and subnetting using FLSM and VLSM for efficient IP resource allocation.',
      'Development of real-time, bi-directional client-server applications utilizing WebSockets and custom socket programming.',
      'Network diagnostics, packet analysis, and performance optimization across Transport (TCP/UDP) and Application layers.'
    ],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'ReactJS', '.NET', 'Docker', 'PostgreSQL', 'GitLab CI/CD', 'Playwright', ]
  },
  {
    id: 'exp-02',
    role: 'Junior Back-End Developer ',
    company: 'Stefanini Group',
    location: 'Remote / USA - Brazil',
    period: '2025 - 2026',
    type: 'Work',
    description: [
      'Developed and maintained RESTful APIs using Java and Spring Boot for internal business applications.',
      'Implemented CRUD operations, authentication flows, and basic authorization mechanisms.',
      'Integrated relational and NoSQL databases (PostgreSQL and MongoDB) to support scalable data storage.',
      'Collaborated with front-end developers to ensure seamless API consumption and data consistency.',
      'Participated in code reviews and applied clean code and SOLID principles.'
    ],
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'GitLab CI/CD']
  },
];