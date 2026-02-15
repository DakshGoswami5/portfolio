import { useEffect, useState } from "react";

const HeroSection = (props) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const roles = ["Web Developer", "MERN Stack Developer", "Open Source Contributor", "Frontend Developer", "Backend Developer"];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      setDisplayText("");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (displayText.length < roles[currentIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText(roles[currentIndex].slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex]);

  return (
    <div className="relative h-[96%] w-[95%] pt-15 pb-10 rounded-3xl overflow-hidden bg-black border border-zinc-800">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181810_1px,transparent_1px),linear-gradient(to_bottom,#18181810_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Main content container - Centered layout */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-20 py-16 md:py-20">
        
        {/* Centered Text Section */}
        <div className="flex flex-col gap-4 md:gap-6 text-center max-w-4xl z-10">
          {/* Small greeting - STABLE */}
          <div className="flex items-center gap-3 justify-center opacity-0 animate-fadeInUp">
            <span className="w-8 h-[1px] bg-white"></span>
            <p className="text-gray-400 font-[port1] text-xs md:text-sm tracking-[0.3em] uppercase">
              Hello There
            </p>
            <span className="w-8 h-[1px] bg-white"></span>
          </div>

          {/* Main heading with staggered animation - TILT ANIMATION ONLY ON THIS */}
<div 
  id="tiltDiv" 
  ref={!isMobile ? props.abc : null} 
>
  {/* CSS Animation inner div par laga di hai taaki GSAP ke saath clash na ho */}
  <div className="space-y-3 md:space-y-4 animate-fadeInUp animation-delay-200">
    <h1 className="text-4xl md:text-7xl lg:text-8xl font-[port2] font-bold text-white leading-tight">
      I'm Daksh Goswami
    </h1>
    
    {/* Animated role with cursor */}
    <div className="h-14 md:h-24">
      <h2 className="text-2xl md:text-5xl lg:text-6xl font-[port2] font-bold text-gray-400">
        {displayText}
        <span className="inline-block w-[2px] md:w-[3px] h-7 md:h-14 bg-white ml-1 animate-blink"></span>
      </h2>
    </div>
  </div>
</div>

          {/* Description - STABLE */}
          <p className="text-gray-500 text-base md:text-xl font-[port1] max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animation-delay-400">
            Specialized in building modern web applications using MERN stack. 
            Focused on creating clean, scalable, and user-friendly solutions.
          </p>

          {/* CTA Buttons - STABLE */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-6 md:mt-3 opacity-0 animate-fadeInUp animation-delay-600">
            <a
              href="#projects"
              className="group px-8 md:px-10 py-4 md:py-5 bg-white text-black font-[port1] font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 text-sm md:text-base"
            >
              View Work
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="group px-8 md:px-10 py-4 md:py-5 border-2 border-zinc-800 text-white font-[port1] font-semibold rounded-full hover:bg-zinc-900 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm md:text-base"
            >
              Contact Me
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>

          {/* Social Links - STABLE */}
          <div className="flex gap-4 md:gap-5 justify-center mt-6 md:mt-2 mb-8 opacity-0 animate-fadeInUp animation-delay-800">
            {[
              { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", label: "GitHub", link: "https://github.com/DakshGoswami5" },
              { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", label: "LinkedIn", link: "https://www.linkedin.com/in/daksh-goswami-" },
              { icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", label: "Twitter", link: "https://twitter.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-zinc-800 hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned better for mobile */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fadeInUp animation-delay-1000">
        <p className="text-gray-600 text-[10px] md:text-xs tracking-widest uppercase font-[port1]">Scroll Down</p>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white to-transparent animate-scrollLine"></div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-scrollLine {
          animation: scrollLine 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;