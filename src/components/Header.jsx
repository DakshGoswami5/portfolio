import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Main Navigation Header */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 font-[port1] w-max max-w-[95vw]">
        <div className="backdrop-blur-md bg-zinc-900/80 border border-zinc-800 rounded-full px-1.5 md:px-2 py-1.5 md:py-2 shadow-2xl">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveLink(item.id)}
                className="relative px-3 md:px-5 py-2 md:py-2.5 rounded-full font-medium transition-all duration-300 text-xs sm:text-base group"
              >
                {activeLink === item.id ? (
                  <>
                    <span className="absolute inset-0 bg-white rounded-full"></span>
                    <span className="relative z-10 text-black">{item.name}</span>
                  </>
                ) : (
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hire Me Button */}
      <div className="fixed top-24 md:top-8 right-4 md:right-24 z-50 font-[port1] scale-90 md:scale-100 origin-top-right">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dakshgoswami2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base"
        >
          <span className="flex items-center gap-2">
            Hire Me
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
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
          </span>
        </a>
      </div>
    </>
  );
};

export default Header;