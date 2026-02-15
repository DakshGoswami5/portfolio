const Page2 = () => {
  const skills = [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "React.js", icon: "/react.png" },
    { name: "Redux", icon: "/redux.png" },
    { name: "Tailwind CSS", icon: "/tailwind-css.png" },
    { name: "Node.js", icon: "/nodejs.png" },
    { name: "Express", icon: "/express.png" },
    { name: "MongoDB", icon: "/mongo-db.png" },
    { name: "Redis", icon: "/redis.webp" },
    { name: "GSAP", icon: "/GSAP.png" },
    { name: "Framer Motion", icon: "/framer.png" },
    { name: "Langchain", icon: "/langchain.webp" },
    { name: "Git", icon: "/git.png" },
    { name: "APIs", icon: "/APIs.png" },
    { name: "Python", icon: "/python.png" },
  ];

  return (
    <div id="about" className="bg-black min-h-screen py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[port2] font-bold text-white mb-6">
            About <span className="text-gray-500">Me</span>
          </h1>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-32 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <p className="text-gray-400 text-center text-lg md:text-2xl font-[port1] leading-relaxed">
            Hi, I'm a passionate{" "}
            <span className="text-white font-semibold">Full-Stack Web Developer</span>{" "}
            skilled in creating modern, responsive, and dynamic applications. I love working with both{" "}
            <span className="text-white font-semibold">Frontend & Backend</span>{" "}
            technologies, building scalable solutions, and integrating powerful tools like{" "}
            <span className="text-white font-semibold">AI & Animations</span>.
          </p>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl md:text-5xl font-[port2] font-bold text-white mb-4">
            Tech <span className="text-gray-500">Stack</span>
          </h2>
          <p className="text-gray-500 font-[port1] text-sm md:text-base">
            Technologies I work with daily
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8 mb-16 md:mb-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="animate-fadeInScale group flex flex-col items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-white hover:bg-zinc-800 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${0.4 + index * 0.03}s` }}
            >
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-white text-xs md:text-sm font-[port1] text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Resume Button */}
        <div className="text-center mt-12 md:mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-white text-black font-[port1] font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl text-sm md:text-base"
          >
            <svg
              className="w-5 h-5 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Extra Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:mt-32">
          {[
            {
              title: "Education",
              content: "B.Com from School of Open Learning",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              )
            },
            {
              title: "Focus",
              content: "MERN Stack & Modern Web Development",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: "Availability",
              content: "Open for Freelance & Full-time roles",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <div
              key={index}
              className="animate-fadeInUp p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-white transition-all duration-300 group"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-[port2] font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 font-[port1] text-sm md:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeInScale {
          opacity: 0;
          animation: fadeInScale 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Page2;