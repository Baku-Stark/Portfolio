export interface Experience {
  id: string;
  role: {
    en: string;
    pt: string;
  };
  company: string;
  location: string;
  period: string;
  type: 'Work' | 'Academic' | 'Leadership';
  description: {
    en: string[];
    pt: string[];
  };
  technologies: string[];
}

export const experiencesData: Experience[] = [
  {
    id: 'exp-01',
    role: {
      en: 'Software Engineering Student / Developer',
      pt: 'Estudante de Engenharia de Software / Desenvolvedor'
    },
    company: 'Jala University',
    location: 'Remote / USA - Brazil',
    period: '2024 - 2028',
    type: 'Academic',
    description: {
      en: [
        'Development of high-performance full-stack applications using Java (Spring Boot), TypeScript, .NET, and the three major JavaScript frameworks.',
        'Implementation of distributed architectures, integration of RESTful APIs, and real-time communication via WebSockets.',
        'Implementation of DevOps practices, including containerization with Docker, CI/CD pipelines (GitLab), and static analysis with SonarQube.',
        'Software quality assurance using automated testing frameworks with Playwright and API contract validation.',
        'Design and simulation of complex enterprise network topologies using Cisco Packet Tracer, including VLANs, trunking, and dynamic routing protocols (e.g., OSPF, RIP).',
        'Advanced IPv4/IPv6 address planning and subnetting using FLSM and VLSM for efficient IP resource allocation.',
        'Development of real-time, bi-directional client-server applications utilizing WebSockets and custom socket programming.',
        'Network diagnostics, packet analysis, and performance optimization across Transport (TCP/UDP) and Application layers.'
      ],
      pt: [
        'Desenvolvimento de aplicações full-stack de alta performance utilizando Java (Spring Boot), TypeScript, .NET e os três principais frameworks JavaScript.',
        'Implementação de arquiteturas distribuídas, integração de APIs RESTful e comunicação em tempo real via WebSockets.',
        'Aplicação de práticas de DevOps, incluindo conteinerização com Docker, pipelines de CI/CD (GitLab) e análise estática com SonarQube.',
        'Garantia de qualidade de software através de frameworks de testes automatizados com Playwright e validação de contratos de API.',
        'Design e simulação de topologias complexas de redes corporativas no Cisco Packet Tracer, cobrindo VLANs, trunking e protocolos de roteamento dinâmico (OSPF, RIP).',
        'Planejamento avançado de endereçamento IPv4/IPv6 e sub-redes utilizando FLSM e VLSM para alocação eficiente de recursos de IP.',
        'Desenvolvimento de aplicações cliente-servidor bidirecionais em tempo real com WebSockets e programação de sockets customizados.',
        'Diagnóstico de rede, análise de pacotes e otimização de performance nas camadas de Transporte (TCP/UDP) e Aplicação.'
      ]
    },
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'ReactJS', '.NET', 'Docker', 'PostgreSQL', 'GitLab CI/CD', 'Playwright']
  },
  {
    id: 'exp-02',
    role: {
      en: 'Junior Back-End Developer',
      pt: 'Desenvolvedor Back-End Junior'
    },
    company: 'Stefanini Group',
    location: 'Remote / USA - Brazil',
    period: '2025 - 2026',
    type: 'Work',
    description: {
      en: [
        'Developed and maintained RESTful APIs using Java and Spring Boot for internal business applications.',
        'Implemented CRUD operations, authentication flows, and basic authorization mechanisms.',
        'Integrated relational and NoSQL databases (PostgreSQL and MongoDB) to support scalable data storage.',
        'Collaborated with front-end developers to ensure seamless API consumption and data consistency.',
        'Participated in code reviews and applied clean code and SOLID principles.'
      ],
      pt: [
        'Desenvolvimento e manutenção de APIs RESTful utilizando Java e Spring Boot para aplicações corporativas internas.',
        'Implementação de operações CRUD, fluxos de autenticação e mecanismos de autorização.',
        'Integração de bancos de dados relacionais e NoSQL (PostgreSQL e MongoDB) para suporte a armazenamento escalável de dados.',
        'Colaboração com desenvolvedores front-end para garantir consumo fluido de APIs e consistência de dados.',
        'Participação em revisões de código aplicando princípios de Clean Code e SOLID.'
      ]
    },
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'GitLab CI/CD']
  }
];