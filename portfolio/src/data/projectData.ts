export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    pt: string;
  };
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
    description: {
      en: 'HackTools is a suite of tools designed for performing network security analysis. It includes an IP address checker and a port scanner, which allow you to identify potential vulnerabilities in systems and networks.',
      pt: 'HackTools é um conjunto de ferramentas projetado para análise de segurança de rede. Inclui um verificador de IP e um scanner de portas para identificação de vulnerabilidades em sistemas e redes.'
    },
    category: 'security',
    tags: ['Python'],
    githubUrl: 'https://github.com/Baku-Stark/Hacking_Tools',
    isFeatured: true,
  },
  {
    id: '02',
    title: 'Academic Project - Reddit Clone Posts',
    description: {
      en: 'A comprehensive RESTful API for managing post creation, voting, and secure authentication using JWT, including token renewal. The project simulates a scenario involving the migration from a relational database (MySQL) to a non-relational one (MongoDB). Java handled user management, while .NET managed posts, voting, content sharing, comments, and more.',
      pt: 'Uma API RESTful completa para gerenciamento de postagens, votações e autenticação segura com JWT e renovação de token. O projeto simula a migração de um banco relacional (MySQL) para um não-relacional (MongoDB), dividindo o gerenciamento entre Java e .NET.'
    },
    category: 'backend',
    tags: ['.NET', 'Spring Boot', 'MySQL', 'Docker'],
    githubUrl: '#',
    isFeatured: true,
  },
  {
    id: '03',
    title: 'Black Holes - Stephen Hawking',
    description: {
      en: 'My first project to test my styling skills. I did this as a tribute to the greatest scientist on the planet!',
      pt: 'Meu primeiro projeto para testar habilidades de estilização. Feito como uma homenagem a um dos maiores cientistas do mundo!'
    },
    category: 'frontend',
    tags: ['HTML', 'SASS', 'Bootstrap'],
    githubUrl: 'https://github.com/Baku-Stark/Black-Holes',
    isFeatured: true,
  },
  {
    id: '04',
    title: 'Truth Table',
    description: {
      en: 'A web application for generating truth tables, developed with Vue.js. The backend is responsible for interpreting and evaluating user-provided Boolean expressions. It dynamically generates the truth table based on the variables identified in the expression.',
      pt: 'Aplicação web para geração de tabelas verdade desenvolvida com Vue.js. O backend interpreta e avalia expressões booleanas fornecidas pelo usuário, gerando a tabela dinamicamente com base nas variáveis.'
    },
    category: 'fullstack',
    tags: ['TypeScript', 'Vue', 'Node.js'],
    githubUrl: 'https://github.com/Baku-Stark/Truth_Table',
    demoUrl: 'https://truth-table-six.vercel.app/',
    isFeatured: true,
  },
  {
    id: '05',
    title: 'Dev Portfolio',
    description: {
      en: 'A modern, responsive, and interactive web interface built with React, TypeScript, Tailwind CSS v4, and high-performance animations. This new portfolio showcases my growth as a developer.',
      pt: 'Interface web moderna, responsiva e interativa construída com React, TypeScript, Tailwind CSS v4 e animações de alta performance para apresentar minha evolução como desenvolvedor.'
    },
    category: 'frontend',
    tags: ['ReactJS', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Baku-Stark/Portfolio',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: '06',
    title: 'Academic Project - QR Pede',
    description: {
      en: 'Developed as my first academic project at Jala University, this system enables customers to place orders with automated QR code generation, item verification, total calculation, and payment processing. The React frontend manages order states and uses media queries for full responsiveness across devices (TVs, desktops, tablets, and smartphones), while the Spring Boot backend handles authentication, QR code logic, payment processing, and transaction confirmations.',
      pt: 'Sistema de pedidos com geração automatizada de QR Code, verificação de itens, cálculo de totais e processamento de pagamentos. Frontend React totalmente responsivo integrado a um backend Spring Boot seguro.'
    },
    category: 'fullstack',
    tags: ['Spring Boot', 'MySQL', 'ReactJS'],
    githubUrl: '#',
    isFeatured: true,
  },
  {
    id: '07',
    title: 'Academic Project - HirePro (DevOps Pipeline)',
    description: {
      en: 'A full-stack web application integrated with an automated DevOps pipeline built for Jala University. Includes React/Vite frontend, Spring Boot backend, and PostgreSQL database. Features GitLab CI/CD automation, unit testing, static code analysis with SonarQube, multi-stage Docker containerization, GitLab Image Registry versioning, and automated remote deployment using Ansible.',
      pt: 'Aplicação web full-stack integrada a uma pipeline DevOps automatizada. Inclui automação com GitLab CI/CD, testes unitários, análise estática com SonarQube, conteinerização Docker multi-stage e deploy automatizado via Ansible.'
    },
    category: 'devops',
    tags: ['Docker', 'Spring Boot', 'PostgreSQL', 'GitLab CI/CD', 'SonarQube'],
    githubUrl: '#',
    isFeatured: true,
  },
  {
    id: '08',
    title: 'Academic Project - Automated API Testing Framework (GitHub API)',
    description: {
      en: 'Automated API testing framework developed using Playwright and TypeScript to validate the public GitHub API. The project implements a layered architecture, the Singleton pattern, contract validation via JSON Schema (AJV), detailed report generation, custom logging, and continuous execution within a GitLab CI/CD pipeline.',
      pt: 'Framework automatizado de testes de API desenvolvido com Playwright e TypeScript para validar a API pública do GitHub. Implementa arquitetura em camadas, validação de contrato JSON Schema e execução contínua no GitLab CI/CD.'
    },
    category: 'fullstack',
    tags: ['TypeScript', 'GitLab CI/CD'],
    githubUrl: '#',
    isFeatured: true,
  },
  {
    id: '09',
    title: 'Academic Project - Tic-Tac-Toe Game',
    description: {
      en: 'A distributed multiplayer Tic-Tac-Toe application built with client-server architecture. It features real-time communication via WebSockets for gameplay, REST APIs for user management, and OAuth2 security. The system handles game state logic, player authentication, and match history persistence.',
      pt: 'Jogo da velha multiplayer distribuído com arquitetura cliente-servidor. Possui comunicação em tempo real via WebSockets, APIs REST para gestão de usuários, segurança OAuth2 e persistência de histórico.'
    },
    category: 'networks',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'OAuth2'],
    githubUrl: '#',
    isFeatured: true,
  }
];