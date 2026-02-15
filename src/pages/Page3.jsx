import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate heading
    gsap.from(".projectsHeading", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".projectsHeading",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    // Animate each project card
    gsap.utils.toArray(".projectCard").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  });

  const projects = [
    {
      title: "Moody Player",
      subtitle: "Personalized Music Player",
      description: "A smart music player that detects user's mood and plays songs accordingly. Built with MERN stack, ImageKit, and AI integration for mood detection.",
      image: "/moodyplayer.jpg",
      tech: [
        { name: "React", icon: "/react.png" },
        { name: "Node.js", icon: "/nodejs.png" },
        { name: "MongoDB", icon: "/mongo-db.png" },
        { name: "Tailwind", icon: "/tailwind-css.png" },
      ],
      liveLink: "https://moodyplayer-frontend.vercel.app/",
      codeLink: "https://github.com/DakshGoswami5/moodyplayer-frontend",
      emoji: "🎶"
    },
    {
      title: "Social Media",
      subtitle: "AI Caption Generator",
      description: "Full-stack social media app with authentication that uses Google Gemini AI to generate captions automatically. Integrated with ImageKit CDN for image management.",
      image: "/socialMedia.jpg",
      tech: [
        { name: "React", icon: "/react.png" },
        { name: "Node.js", icon: "/nodejs.png" },
        { name: "Express", icon: "/express.png" },
        { name: "MongoDB", icon: "/mongo-db.png" },
      ],
      liveLink: "https://social-media-gamma-opal.vercel.app/",
      codeLink: "https://github.com/DakshGoswami5/Social-Media",
      emoji: "🌐"
    },
    {
      title: "AI ChatBot",
      subtitle: "Context-Aware Assistant",
      description: "Full-stack AI chatbot with memory that remembers recent messages for context-aware responses. Real-time communication powered by Socket.IO and Gemini API.",
      image: "/ChatGPT.jpg",
      tech: [
        { name: "React", icon: "/react.png" },
        { name: "Node.js", icon: "/nodejs.png" },
        { name: "MongoDB", icon: "/mongo-db.png" },
        { name: "Redis", icon: "/redis.webp" },
      ],
      liveLink: "https://chat-bot-omega-amber.vercel.app/",
      codeLink: "https://github.com/DakshGoswami5/ChatBot",
      emoji: "🤖"
    },
  ];

  return (
    <div id="projects" className="bg-black min-h-screen py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="projectsHeading text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-[port2] font-bold text-white mb-6">
            Featured <span className="text-gray-500">Projects</span>
          </h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-base md:text-lg font-[port1] max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, AI integration, and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`projectCard group flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-white transition-all duration-500">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-6xl animate-bounce">
                      {project.emoji}
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges - Float on image */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border-2 border-zinc-800 p-2 hover:border-white hover:scale-110 transition-all duration-300 flex items-center justify-center group/tech"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                      {/* Tooltip */}
                      <span className="absolute -top-10 bg-white text-black text-xs px-3 py-1 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className={`md:w-1/2 flex flex-col justify-center ${
                index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
              } mt-8 md:mt-0`}>
                
                {/* Project Number */}
                <div className="text-gray-700 font-[port2] text-6xl md:text-8xl font-bold mb-4">
                  0{index + 1}
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-[port2] font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 text-lg md:text-xl font-[port1] mb-6">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 font-[port1] text-sm md:text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-black font-[port1] font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl text-sm md:text-base"
                  >
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>

                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-zinc-800 text-white font-[port1] font-semibold rounded-full hover:bg-zinc-900 hover:border-white hover:scale-105 transition-all duration-300 text-sm md:text-base"
                  >
                    <svg
                      className="w-5 h-5 group-hover/btn:rotate-12 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24 md:mt-32">
          <div className="inline-block">
            <p className="text-gray-500 font-[port1] text-base md:text-lg mb-4">
              Want to see more?
            </p>
            <a
              href="https://github.com/DakshGoswami5"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-zinc-800 text-white font-[port1] font-semibold rounded-full hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-6 h-6 group-hover:rotate-12 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;