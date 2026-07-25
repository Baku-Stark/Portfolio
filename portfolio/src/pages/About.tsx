import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Padrão de Cores Unificado Cyan & Dark para todos os Shields.io
// Background Dark (0E1726) + Cyan Neon (38BDF8)
const BADGE_URLS: Record<string, string> = {
  // Languages & Core
  Python: 'https://img.shields.io/badge/Python-0E1726?style=for-the-badge&logo=python&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  JavaScript: 'https://img.shields.io/badge/JavaScript-0E1726?style=for-the-badge&logo=javascript&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  TypeScript: 'https://img.shields.io/badge/TypeScript-0E1726?style=for-the-badge&logo=typescript&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  Java: 'https://img.shields.io/badge/Java-0E1726?style=for-the-badge&logo=openjdk&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  'C++': 'https://img.shields.io/badge/C++-0E1726?style=for-the-badge&logo=c%2B%2B&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  '.NET': 'https://img.shields.io/badge/.NET-0E1726?style=for-the-badge&logo=dotnet&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  
  // Frontend
  ReactJS: 'https://img.shields.io/badge/React-0E1726?style=for-the-badge&logo=react&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  Angular: 'https://img.shields.io/badge/Angular-0E1726?style=for-the-badge&logo=angular&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  Vue: 'https://img.shields.io/badge/Vue.js-0E1726?style=for-the-badge&logo=vuedotjs&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  'React Native': 'https://img.shields.io/badge/React_Native-0E1726?style=for-the-badge&logo=react&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  SASS: 'https://img.shields.io/badge/Sass-0E1726?style=for-the-badge&logo=sass&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  'Tailwind CSS': 'https://img.shields.io/badge/Tailwind_CSS-0E1726?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',

  // Backend & Databases
  'Node.js': 'https://img.shields.io/badge/Node.js-0E1726?style=for-the-badge&logo=nodedotjs&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  'Spring Boot': 'https://img.shields.io/badge/Spring_Boot-0E1726?style=for-the-badge&logo=springboot&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  PostgreSQL: 'https://img.shields.io/badge/PostgreSQL-0E1726?style=for-the-badge&logo=postgresql&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  MySQL: 'https://img.shields.io/badge/MySQL-0E1726?style=for-the-badge&logo=mysql&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  MongoDB: 'https://img.shields.io/badge/MongoDB-0E1726?style=for-the-badge&logo=mongodb&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  Redis: 'https://img.shields.io/badge/Redis-0E1726?style=for-the-badge&logo=redis&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  Cassandra: 'https://img.shields.io/badge/Cassandra-0E1726?style=for-the-badge&logo=apachecassandra&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',

  // Cybersecurity / Linux
  'Kali Linux': 'https://img.shields.io/badge/Kali_Linux-0E1726?style=for-the-badge&logo=kalilinux&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
  Parrot: 'https://img.shields.io/badge/Parrot_OS-0E1726?style=for-the-badge&logo=parrotsecurity&logoColor=38BDF8&labelColor=0E1726&color=38BDF8',
};

export function About() {
  const slidesContent = [
    {
      id: '01',
      title: 'WHO I AM?',
      subtitle: "Full Stack Developer & Software Engineer | Pentester | Python | Node.js | TypeScript | Java | Spring",
      text: "I’m Wallace de Freitas (Baku-Stark). I’m passionate about creating modern interfaces, clean code, and robust frontend & backend architectures. I enjoy transforming ideas into seamless, scalable, and secure digital experiences.",
      tags: ['TypeScript', 'Java', 'Python', '.NET', 'C++', 'JavaScript'],
    },
    {
      id: '02',
      title: 'FRONTEND ENGINEERING',
      subtitle: 'Interactive, Responsive & High-Performance Interfaces',
      text: 'Extensive experience in developing modern Web Interfaces focused on user experience (UX/UI), state management, and performance optimization. Skilled in crafting scalable design systems using Tailwind CSS, reusability with React, Vue, Angular, React Native and SASS.',
      tags: ['ReactJS', 'Angular', 'Vue', 'React Native', 'TypeScript', 'Tailwind CSS', 'SASS'],
    },
    {
      id: '03',
      title: 'BACKEND & INFRASTRUCTURE',
      subtitle: 'Scalable Systems, Microservices & REST APIs',
      text: 'Solid background building secure, high-concurrency server-side applications and RESTful APIs. Proficient in Node.js, Express, Java (Spring Boot), Python, and .NET. Experience managing relational and NoSQL databases like PostgreSQL, MySQL, Redis and Cassandra.',
      tags: ['Node.js', 'Java', 'Spring Boot', 'Python', '.NET', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra'],
    },
    {
      id: '04',
      title: 'CYBERSECURITY & PENTEST',
      subtitle: 'Security-First Development & Ethical Hacking',
      text: 'Passion for offensive security, application auditing, and vulnerability assessment. Experienced with dedicated Linux distros for penetration testing, applying OWASP Top 10 guidelines to build resilient systems.',
      tags: ['Kali Linux', 'Parrot', 'Python', 'C++', 'JavaScript'],
    },
    {
      id: '05',
      title: 'GOALS & VISION',
      subtitle: 'Continuous Evolution & High Impact',
      text: 'Always seeking challenging opportunities to build high-impact products, balancing technical expertise with strong interpersonal collaboration to continuously grow as a complete software engineer.',
      tags: ['Soft Skills', 'Hard Skills', 'TypeScript', 'Java', 'Python', '.NET'],
    },
  ];

  return (
    <section id="about" className="w-full min-h-screen bg-(--bg) text-white py-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Título da Section */}
      <div className="flex flex-col items-center gap-2 mb-12 text-center">
        <span className="text-(--cyan-primary) font-mono text-sm tracking-widest uppercase">
          01. Discover More
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-(--title-font) tracking-wide">
          About Me
        </h2>
        <div className="w-16 h-[2px] bg-(--cyan-primary) shadow-[0_0_10px_var(--cyan-primary)] mt-2" />
      </div>

      {/* Container do Slide */}
      <div className="w-full max-w-4xl mx-auto">
        <Swiper
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
                
                {/* Indicador de Número */}
                <span className="absolute top-6 right-8 font-mono text-4xl text-(--cyan-primary) opacity-20 font-bold">
                  {slide.id}
                </span>

                {/* Cabeçalho do Card */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {slide.title}
                  </h3>
                  <p className="text-(--cyan-primary) text-sm font-mono">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Conteúdo em Texto */}
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {slide.text}
                </p>

                {/* Renderização das Badges dos Shields */}
                <div className="flex flex-wrap items-center gap-2 pt-4">
                  {slide.tags.map((tag, idx) => {
                    const badgeUrl = BADGE_URLS[tag];

                    if (badgeUrl) {
                      return (
                        <img
                          key={idx}
                          src={badgeUrl}
                          alt={`${tag} badge`}
                          className="h-7 rounded-md border border-(--border) hover:border-(--cyan-primary)/60 hover:scale-105 transition-all duration-200 shadow-md"
                        />
                      );
                    }

                    // Fallback para Soft/Hard skills ou tags sem logo estático
                    return (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-(--bg) border border-(--border) rounded-full text-xs font-mono text-zinc-300 hover:text-(--cyan-primary) hover:border-(--cyan-primary)/40 transition-colors"
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}