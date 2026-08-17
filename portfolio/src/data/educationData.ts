export interface EducationItem {
  id: string;
  degree: {
    en: string;
    pt: string;
  };
  institution: string;
  period: string;
  location?: string;
  type: 'Degree' | 'Bootcamp' | 'Certification';
  description: {
    en: string[];
    pt: string[];
  };
  skills: string[];
  certificateUrl?: string;
}

export const educationData: EducationItem[] = [
  {
    id: 'edu-jala',
    degree: {
      en: "Master's Degree in Commercial Software Engineering",
      pt: "Bacharelado/Mestrado em Engenharia de Software Comercial"
    },
    institution: 'Jala University',
    period: 'Jul 2024 – Jul 2028 (Expected)',
    location: 'Remote',
    type: 'Degree',
    description: {
      en: [
        'Focus on Software Design, Clean Architecture, and Scalable Systems.',
        'Comprehensive curriculum covering advanced computer science fundamentals, software engineering principles, and full-stack development.'
      ],
      pt: [
        'Foco em Design de Software, Clean Architecture e Sistemas Escaláveis.',
        'Currículo abrangente cobrindo fundamentos avançados de ciência da computação, engenharia de software e desenvolvimento full-stack.'
      ]
    },
    skills: ['Software Architecture', 'System Design', 'Java', 'TypeScript', 'React', 'Angular']
  },
  {
    id: 'edu-ts-fullstack',
    degree: {
      en: 'TypeScript Fullstack Developer Training',
      pt: 'Formação Desenvolvedor Fullstack TypeScript'
    },
    institution: 'DIO / Technical Training',
    period: 'Jul 2025 – Aug 2025',
    location: 'Remote',
    type: 'Certification',
    description: {
      en: [
        'Specialization in TypeScript for full-stack development.',
        'Applied static typing, interfaces, and generics to enhance code quality and maintainability in React and Node.js projects.'
      ],
      pt: [
        'Especialização em TypeScript para desenvolvimento full-stack.',
        'Aplicação de tipagem estática, interfaces e generics para aumentar a qualidade e manutenibilidade do código em projetos React e Node.js.'
      ]
    },
    skills: ['TypeScript', 'React', 'Node.js', 'Clean Code', 'Generics']
  },
  {
    id: 'edu-react-native',
    degree: {
      en: 'React Native Mobile Developer',
      pt: 'Desenvolvedor Mobile React Native'
    },
    institution: 'DIO / Technical Training',
    period: 'Oct 2024 – Nov 2024',
    location: 'Remote',
    type: 'Certification',
    description: {
      en: [
        'Engineered and delivered cross-platform mobile applications for both Android and iOS using Expo.',
        'Developed high-performance, reusable UI components in React Native and connected applications to back-end services via RESTful APIs.'
      ],
      pt: [
        'Desenvolvimento de aplicações mobile multiplataforma (Android e iOS) utilizando Expo.',
        'Criação de componentes de UI reutilizáveis e de alta performance no React Native com integração a serviços back-end via APIs RESTful.'
      ]
    },
    skills: ['React Native', 'Expo', 'TypeScript', 'Mobile UI/UX', 'REST APIs']
  },
  {
    id: 'edu-santander-java',
    degree: {
      en: 'Santander 2024 - Java Back-End Bootcamp',
      pt: 'Bootcamp Santander 2024 - Java Back-End'
    },
    institution: 'Santander / DIO',
    period: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    type: 'Bootcamp',
    description: {
      en: [
        'Intensive practical bootcamp focused on building RESTful APIs using Java and Spring Boot.',
        'Hands-on experience with MongoDB integration, unit testing using JUnit and Mockito, Maven builds, and OOP best practices.'
      ],
      pt: [
        'Bootcamp prático intensivo focado na criação de APIs RESTful utilizando Java e Spring Boot.',
        'Experiência prática com integração MongoDB, testes unitários usando JUnit e Mockito, builds Maven e boas práticas de POO.'
      ]
    },
    skills: ['Java', 'Spring Boot', 'REST APIs', 'MongoDB', 'JUnit', 'Mockito']
  },
  {
    id: 'edu-santander-cyber',
    degree: {
      en: 'Santander Bootcamp Cybersecurity #2',
      pt: 'Bootcamp Santander Cibersegurança #2'
    },
    institution: 'Santander / DIO',
    period: 'Sep 2024 – Oct 2024',
    location: 'Remote',
    type: 'Bootcamp',
    description: {
      en: [
        'Immersive cybersecurity training focused on penetration testing, threat analysis, and system defense.',
        'Practical usage of Kali Linux, vulnerability scanning, exploitation frameworks, and secure network configurations.'
      ],
      pt: [
        'Treinamento imersivo em cibersegurança focado em testes de intrusão, análise de ameaças e defesa de sistemas.',
        'Uso prático do Kali Linux, varredura de vulnerabilidades, frameworks de exploração e configurações de redes seguras.'
      ]
    },
    skills: ['Cybersecurity', 'Kali Linux', 'Penetration Testing', 'Ethical Hacking', 'Network Security']
  },
  {
    id: 'edu-santander-fullstack',
    degree: {
      en: 'Santander Bootcamp | Fullstack',
      pt: 'Bootcamp Santander | Fullstack'
    },
    institution: 'Santander / DIO',
    period: 'Jan 2024 – Mar 2024',
    location: 'Remote',
    type: 'Bootcamp',
    description: {
      en: [
        'Immersive training in web development focusing on componentization, dependency injection, and API consumption.',
        'Developed dynamic front-end applications with Angular and integrated them with Node.js back-end services.'
      ],
      pt: [
        'Treinamento imersivo em desenvolvimento web com foco em componentização, injeção de dependência e consumo de APIs.',
        'Desenvolvimento de aplicações front-end dinâmicas em Angular integradas a serviços back-end em Node.js.'
      ]
    },
    skills: ['AngularJS', 'TypeScript', 'Node.js', 'Dependency Injection', 'API Consumption']
  },
  {
    id: 'edu-cisco-ethical-hacker',
    degree: {
      en: 'Ethical Hacker',
      pt: 'Hacker Etico'
    },
    institution: 'Cisco Networking Academy',
    period: '2024 / 2025',
    location: 'Remote',
    type: 'Certification',
    description: {
      en: [
        'Broad understanding of legal and compliance requirements, vulnerability assessment scoping, execution, and mitigation strategies.',
        'Completed up to 34 hands-on activities using Kali Linux, WebSploit, and other security tools.',
        'Demonstrated proficiency by scoring ≥ 70% on Cisco Networking Academy comprehensive exam.'
      ],
      pt: [
        'Amplo entendimento de requisitos legais, escopo de avaliação de vulnerabilidades, execução e estratégias de mitigação.',
        'Conclusão de 34 atividades práticas utilizando Kali Linux, WebSploit e outras ferramentas de segurança.',
        'Proficiência demonstrada com pontuação ≥ 70% no exame oficial da Cisco Networking Academy.'
      ]
    },
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