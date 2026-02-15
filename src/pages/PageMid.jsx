const PageMid = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Frontend Development",
      description: "Creating stunning, responsive interfaces with React, Tailwind CSS, and modern animations.",
      skills: ["React.js", "Tailwind CSS", "GSAP", "Responsive Design"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Backend Development",
      description: "Building scalable APIs and server-side applications with Node.js, Express, and MongoDB.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Full-Stack Solutions",
      description: "End-to-end web applications with seamless integration and optimized performance.",
      skills: ["MERN Stack", "Redux", "Authentication", "Deployment"]
    }
  ];

  return (
    <div className="bg-black text-white py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24 animate-fadeIn">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-[port2] font-bold mb-4">
            What I Do <span className="text-gray-500">Best</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-[port1] max-w-2xl mx-auto mt-6">
            Specialized in building modern web applications with clean code and exceptional user experiences
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fadeInUp group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-white transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-[port2] font-bold mb-4 text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 font-[port1] text-sm md:text-base mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-zinc-800 text-gray-300 rounded-full font-[port1] group-hover:bg-white group-hover:text-black transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Projects Built" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Available" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="animate-fadeIn"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <h3 className="text-4xl md:text-5xl font-[port2] font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-[port1]">
                {stat.label}
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
        
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PageMid;