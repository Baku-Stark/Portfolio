import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function About() {
  const { language, t } = useLanguage();

  const slidesContent = [
    {
      id: '01',
      title: t('WHO I AM', 'QUEM SOU EU'),
      subtitle: t(
        'Full Stack Developer & Software Engineer | Pentester | Python | Node.js | TypeScript | Java | Spring',
        'Desenvolvedor Full Stack & Engenheiro de Software | Pentester | Python | Node.js | TypeScript | Java | Spring'
      ),
      text: t(
        'I’m Wallace de Freitas (Baku-Stark). I’m passionate about creating modern interfaces, clean code, and robust frontend & backend architectures. I enjoy transforming ideas into seamless, scalable, and secure digital experiences.',
        'Sou Wallace de Freitas (Baku-Stark). Sou apaixonado por criar interfaces modernas, código limpo e arquiteturas robustas de frontend e backend. Gosto de transformar ideias em experiências digitais fluidas, escaláveis e seguras.'
      ),
    },
    {
      id: '02',
      title: t('FRONTEND DEVELOPER', 'DESENVOLVEDOR FRONTEND'),
      subtitle: t(
        'Interactive, Responsive & High-Performance Interfaces',
        'Interfaces Interativas, Responsivas e de Alta Performance'
      ),
      text: t(
        'Extensive experience in developing modern Web Interfaces focused on user experience (UX/UI), state management, and performance optimization. Skilled in crafting scalable design systems using Tailwind CSS, reusability with React, Vue, Angular, React Native and SASS.',
        'Extensa experiência no desenvolvimento de interfaces Web modernas focadas em experiência do usuário (UX/UI), gerenciamento de estado e otimização de performance. Habilidade em criar design systems escaláveis usando Tailwind CSS, reuso de componentes com React, Vue, Angular, React Native e SASS.'
      ),
    },
    {
      id: '03',
      title: t('BACKEND & INFRASTRUCTURE', 'BACKEND & INFRAESTRUTURA'),
      subtitle: t(
        'Scalable Systems, Microservices & REST APIs',
        'Sistemas Escaláveis, Microserviços e APIs REST'
      ),
      text: t(
        'Solid background building secure, high-concurrency server-side applications and RESTful APIs. Proficient in Node.js, Express, Java (Spring Boot), Python, and .NET. Experience managing relational and NoSQL databases like PostgreSQL, MySQL, Redis and Cassandra.',
        'Sólida bagagem na construção de aplicações server-side seguras, de alta concorrência e APIs RESTful. Proficiente em Node.js, Express, Java (Spring Boot), Python e .NET. Experiência no gerenciamento de bancos de dados relacionais e NoSQL como PostgreSQL, MySQL, Redis e Cassandra.'
      ),
    },
    {
      id: '04',
      title: t('CYBERSECURITY & PENTEST', 'CIBERSEGURANCA & PENTEST'),
      subtitle: t(
        'Security-First Development & Ethical Hacking',
        'Desenvolvimento Focado em Segurança e Hacking Ético'
      ),
      text: t(
        'Passion for offensive security, application auditing, and vulnerability assessment. Experienced with dedicated Linux distros for penetration testing, applying OWASP Top 10 guidelines to build resilient systems.',
        'Paixão por segurança ofensiva, auditoria de aplicações e análise de vulnerabilidades. Experiência com distribuições Linux dedicadas a testes de intrusão, aplicando diretrizes do OWASP Top 10 para construir sistemas resilientes.'
      ),
    },
    {
      id: '05',
      title: t('GOALS & VISION', 'OBJETIVOS & VISAO'),
      subtitle: t(
        'Continuous Evolution & High Impact',
        'Evolução Contínua e Alto Impacto'
      ),
      text: t(
        'Always seeking challenging opportunities to build high-impact products, balancing technical expertise with strong interpersonal collaboration to continuously grow as a complete software engineer.',
        'Sempre em busca de oportunidades desafiadoras para construir produtos de alto impacto, equilibrando expertise técnica com forte colaboração interpessoal para evoluir continuamente como um engenheiro de software completo.'
      ),
    },
  ];

  return (
    <section id="about" className="w-full min-h-screen bg-(--bg) text-white py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Section Title */}
      <div className="flex flex-col items-center gap-2 mb-12 text-center">
        <span className="text-(--cyan-primary) font-mono text-sm tracking-widest uppercase">
          {t('01. Discover More', '01. Descubra Mais')}
        </span>
        <h2 className="text-3xl md:text-5xl font-(--title-font) tracking-wide">
          {t('About Me', 'Sobre Mim')}
        </h2>
        <div className="w-16 h-[2px] bg-(--cyan-primary) shadow-[0_0_10px_var(--cyan-primary)] mt-2" />
      </div>

      {/* Slide Container */}
      <div className="w-full max-w-4xl mx-auto">
        <Swiper
          key={language} // Força o re-render do Swiper ao trocar de idioma
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="about-swiper pb-14 text-zinc-100"
        >
          {slidesContent.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-(--bg-surface) border border-(--border) rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col gap-6 backdrop-blur-sm relative group hover:border-(--cyan-primary)/50 transition-colors duration-300">
                
                {/* Number Indicator */}
                <span className="absolute top-6 right-8 font-mono text-4xl text-(--cyan-primary) opacity-20 font-bold">
                  {slide.id}
                </span>

                {/* Footer Card */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-(--cyan-primary) text-sm font-mono">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Text Content */}
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {slide.text}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}