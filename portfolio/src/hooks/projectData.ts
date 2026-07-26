interface Project {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'security' | 'networks' | 'devops';
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  isFeatured?: boolean;
}

export const projectsData: Project[] = [
    {
      id: '01',
      title: 'Hacking Tools',
      description: 'HackTools is a suite of tools designed for performing network security analysis. It includes an IP address checker and a port scanner, which allow you to identify potential vulnerabilities in systems and networks.',
      category: 'security',
      tags: ['Python'],
      githubUrl: 'https://github.com/Baku-Stark/Hacking_Tools',
      isFeatured: true,
    },
    {
      id: '02',
      title: 'Academic Project - Reddit Clone Posts',
      description: 'A comprehensive RESTful API for managing post creation, voting, and secure authentication using JWT, including token renewal. The project simulates a scenario involving the migration from a relational database (MySQL) to a non-relational one (MongoDB). Java handled user management, while .NET managed posts, voting, content sharing, comments, and more.',
      category: 'backend',
      tags: ['.NET', 'Spring Boot', 'MySQL', 'Docker'],
      githubUrl: '#',
      isFeatured: true,
    },
    {
      id: '03',
      title: 'Black Holes - Stephen Hawking',
      description: 'My first project to test my styling skills. I did this as a tribute to the greatest scientist on the planet!',
      category: 'frontend',
      tags: ['HTML', 'SASS', 'Bootstrap'],
      githubUrl: 'https://github.com/Baku-Stark/Black-Holes',
      isFeatured: true,
    },
    {
      id: '04',
      title: 'Academic Project - QR Pede',
      description: 'Developed as my first academic project at Jala University, this system enables customers to place orders with automated QR code generation, item verification, total calculation, and payment processing. The React frontend manages order states and uses media queries for full responsiveness across devices (TVs, desktops, tablets, and smartphones), while the Spring Boot backend handles authentication, QR code logic, payment processing, and transaction confirmations.',
      category: 'fullstack',
      tags: ['Spring Boot', 'MySQL', 'ReactJS'],
      githubUrl: '#',
      isFeatured: true,
    },
    {
      id: '05',
      title: 'Dev Portfolio',
      description: 'A modern, responsive, and interactive web interface built with React, TypeScript, Tailwind CSS v4, and high-performance animations. This new portfolio showcases my growth as a developer.',
      category: 'frontend',
      tags: ['ReactJS', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Baku-Stark/Portfolio',
      demoUrl: '#',
      isFeatured: true,
    },
    {
      id: '06',
      title: 'Academic Project - QR Pede',
      description: 'Developed as my first academic project at Jala University, this system enables customers to place orders with automated QR code generation, item verification, total calculation, and payment processing. The React frontend manages order states and uses media queries for full responsiveness across devices (TVs, desktops, tablets, and smartphones), while the Spring Boot backend handles authentication, QR code logic, payment processing, and transaction confirmations.',
      category: 'fullstack',
      tags: ['Spring Boot', 'MySQL', 'ReactJS'],
      githubUrl: '#',
      isFeatured: true,
    },
    {
        id: '07',
        title: 'Academic Project - Qatu (DevOps Pipeline)',
        description: 'A full-stack web application integrated with an automated DevOps pipeline built for Jala University. Includes React/Vite frontend, Spring Boot backend, and PostgreSQL database. Features GitLab CI/CD automation, unit testing, static code analysis with SonarQube, multi-stage Docker containerization, GitLab Image Registry versioning, and automated remote deployment using Ansible.',
        category: 'devops',
        tags: ['Docker', 'Spring Boot', 'PostgreSQL', 'GitLab CI/CD', 'SonarQube'],
        githubUrl: '#',
        isFeatured: true,
    },
    {
        id: '08',
        title: 'Academic Project - Automated API Testing Framework (GitHub API)',
        description: 'Automated API testing framework developed using Playwright and TypeScript to validate the public GitHub API. The project implements a layered architecture, the Singleton pattern, contract validation via JSON Schema (AJV), detailed report generation, custom logging, and continuous execution within a GitLab CI/CD pipeline.',
        category: 'fullstack',
        tags: ['TypeScript', 'GitLab CI/CD'],
        githubUrl: '#',
        isFeatured: true,
    }
  ];