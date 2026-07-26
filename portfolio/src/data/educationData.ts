export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  type: 'Degree' | 'Bootcamp' | 'Certification';
  description: string[];
  skills: string[];
  certificateUrl?: string;
}

export const educationData: EducationItem[] = [
  {
    id: 'edu-jala',
    degree: "Master's Degree in Commercial Software Engineering",
    institution: 'Jala University',
    period: 'Jul 2024 – Jul 2028 (Expected)',
    location: 'Remote',
    type: 'Degree',
    description: [
      'Focus on Software Design, Clean Architecture, and Scalable Systems.',
      'Comprehensive curriculum covering advanced computer science fundamentals, software engineering principles, and full-stack development.'
    ],
    skills: ['Software Architecture', 'System Design', 'Java', 'TypeScript', 'React', 'Angular']
  },
  {
    id: 'edu-ts-fullstack',
    degree: 'TypeScript Fullstack Developer Training',
    institution: 'DIO / Technical Training',
    period: 'Jul 2025 – Aug 2025',
    location: 'Remote',
    type: 'Certification',
    description: [
      'Specialization in TypeScript for full-stack development.',
      'Applied static typing, interfaces, and generics to enhance code quality and maintainability in React and Node.js projects.'
    ],
    skills: ['TypeScript', 'React', 'Node.js', 'Clean Code', 'Generics']
  },
  {
    id: 'edu-react-native',
    degree: 'React Native Mobile Developer',
    institution: 'DIO / Technical Training',
    period: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    type: 'Certification',
    description: [
      'Engineered and delivered cross-platform mobile applications for both Android and iOS using Expo.',
      'Developed high-performance, reusable UI components in React Native and connected applications to back-end services via RESTful APIs.'
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'Mobile UI/UX', 'REST APIs']
  },
  {
    id: 'edu-santander-java',
    degree: 'Santander 2024 - Java Back-End Bootcamp',
    institution: 'Santander / DIO',
    period: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    type: 'Bootcamp',
    description: [
      'Intensive practical bootcamp focused on building RESTful APIs using Java and Spring Boot.',
      'Hands-on experience with MongoDB integration, unit testing using JUnit and Mockito, Maven builds, and OOP best practices.'
    ],
    skills: ['Java', 'Spring Boot', 'REST APIs', 'MongoDB', 'JUnit', 'Mockito']
  },
  {
    id: 'edu-santander-cyber',
    degree: 'Santander Bootcamp Cybersecurity #2',
    institution: 'Santander / DIO',
    period: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    type: 'Bootcamp',
    description: [
      'Immersive cybersecurity training focused on penetration testing, threat analysis, and system defense.',
      'Practical usage of Kali Linux, vulnerability scanning, exploitation frameworks, and secure network configurations.'
    ],
    skills: ['Cybersecurity', 'Kali Linux', 'Penetration Testing', 'Ethical Hacking', 'Network Security']
  },
  {
    id: 'edu-santander-fullstack',
    degree: 'Santander Bootcamp | Fullstack',
    institution: 'Santander / DIO',
    period: 'Jan 2024 – Mar 2024',
    location: 'Remote',
    type: 'Bootcamp',
    description: [
      'Immersive training in web development focusing on componentization, dependency injection, and API consumption.',
      'Developed dynamic front-end applications with Angular and integrated them with Node.js back-end services.'
    ],
    skills: ['AngularJS', 'TypeScript', 'Node.js', 'Dependency Injection', 'API Consumption']
  },
  {
    id: 'edu-cisco-ethical-hacker',
    degree: 'Ethical Hacker',
    institution: 'Cisco Networking Academy',
    period: '2024 / 2025', // Ajuste para o ano em que concluiu
    location: 'Remote',
    type: 'Certification', // Badge de nível "Intermediate / Learning"
    description: [
      'Broad understanding of legal and compliance requirements, vulnerability assessment scoping, execution, and mitigation strategies.',
      'Completed up to 34 hands-on activities using Kali Linux, WebSploit, and other security tools.',
      'Demonstrated proficiency by scoring ≥ 70% on Cisco Networking Academy comprehensive exam.'
    ],
    skills: [
      'Ethical Hacking',
      'Penetration Testing',
      'Vulnerability Assessment',
      'Vulnerability Scanning',
      'Exploiting Applications',
      'Exploiting Networks',
      'IoT Security',
      'Pentesting Tools',
      'Social Engineering',
      'Reporting'
    ]
  }
];