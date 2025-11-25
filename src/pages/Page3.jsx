const Page3 = () => {
  return (
    <div id="projects" className="bg-[#ffffff] min-h-screen flex items-center justify-center py-16">
      <div className="h-[100%] w-[95%] bg-[#0f172a] rounded-3xl shadow-xl shadow-gray-700 p-10">
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-32 s:mb-16">
          <h1 className="text-4xl md:text-5xl font-[port3] font-bold text-white">
            My Projects
          </h1>
          <p className="text-[#2563eb] mt-4 font-[port1]">
            A glimpse of my work that blends creativity with technology.
          </p>
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-20">
          {/* Project 1 - Ecommerce */}
          {/*<div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left - Image */}
            {/*<div className="md:w-1/2 md:mr-5 flex flex-col items-center">
              <img
                src="/project1.jpg"
                alt="Ecommerce Project"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="flex gap-3 mt-4">
                <img src="/react.png" alt="React" className="w-8 h-8" />
                <img src="/redux.png" alt="Redux" className="w-8 h-8" />
                <img
                  src="/tailwind-css.png"
                  alt="Tailwind"
                  className="w-8 h-8"
                />
              </div>
            </div>
            {/* Right - Text */}
            {/*<div className="md:w-1/2 md:ml-5 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white font-[port2]">Ecommerce</h2>
              <p className="text-[#2563eb] mt-2">Modern Online Store</p>
              <p className="text-[#91a0b5] mt-4">
                A modern e-commerce platform built with React, Redux, and Tailwind CSS.

Features: Admin/User registration & login, product management create, update, delete and Add to Cart functionality.
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a
                  href="https://cartbite.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                            bg-white/10 backdrop-blur-lg border border-white/20 
                            shadow-lg hover:scale-105 hover:bg-white/20 
                            transition-all duration-300 ease-in-out font-[port2]"
                >
                  🚀 Live Demo
                </a>

                <a
                  href="https://github.com/DakshGoswami5/Ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                            bg-white/5 backdrop-blur-lg border border-white/20 
                            shadow-lg hover:scale-105 hover:bg-white/15 
                            transition-all duration-300 ease-in-out font-[port2]"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - MoodyPlayer */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Right - Image */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src="/moodyplayer.jpg"
                alt="MoodyPlayer Project"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="flex gap-3 mt-4">
                <img src="/react.png" alt="React" className="w-8 h-8" />
                <img
                  src="/tailwind-css.png"
                  alt="Tailwind"
                  className="w-8 h-8"
                />
                <img src="/nodejs.png" alt="NodeJS" className="w-8 h-8" />
                <img src="/mongo-db.png" alt="MongoDB" className="w-8 h-8" />
              </div>
            </div>
            {/* Left - Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white font-[port2]">Moody Player</h2>
              <p className="text-[#2563eb] mt-2">Personalized Music Player</p>
              <p className="text-[#91a0b5] mt-4">
                A smart music player using Node.js, Express, MongoDB, Mongoose, ImageKit, React, and Tailwind CSS.

Detects user's mood and plays songs accordingly.

Users can play music directly based on mood for a personalized experience.
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a
                  href="https://moodyplayer-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                              bg-white/10 backdrop-blur-lg border border-white/20 
                              shadow-lg hover:scale-105 hover:bg-white/20 
                              transition-all duration-300 ease-in-out font-[port2]"
                >
                  🎶 Live Demo
                </a>
                <a
                  href="https://github.com/DakshGoswami5/moodyplayer-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                              bg-white/5 backdrop-blur-lg border border-white/20 
                              shadow-lg hover:scale-105 hover:bg-white/15 
                              transition-all duration-300 ease-in-out font-[port2]"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - Social Media */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left - Image */}
            <div className="md:w-1/2 md:mr-5 flex flex-col items-center">
              <img
                src="/socialMedia.jpg"
                alt="Social Media Project"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="flex gap-3 mt-4">
                <img src="/react.png" alt="React" className="w-8 h-8" />
                <img src="/nodejs.png" alt="NodeJS" className="w-8 h-8" />
                <img src="/express.png" alt="Express" className="w-8 h-8" />
                <img src="/mongo-db.png" alt="MongoDB" className="w-8 h-8" />
              </div>
            </div>
            {/* Right - Text */}
            <div className="md:w-1/2 md:ml-5 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white font-[port2]">Social Media</h2>
              <p className="text-[#2563eb] mt-2">Generate AI Caption</p>
              <p className="text-[#91a0b5] mt-4">
                A full-stack social media application with Authentication that uses AI to generate captions for images automatically. Built with the MERN stack and integrated with Google Gemini AI and ImageKit CDN.
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a
                  href="https://social-media-gamma-opal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                              bg-white/10 backdrop-blur-lg border border-white/20 
                              shadow-lg hover:scale-105 hover:bg-white/20 
                              transition-all duration-300 ease-in-out font-[port2]"
                >
                  🌐 Live Demo
                </a>
                <a
                  href="https://github.com/DakshGoswami5/Social-Media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                              bg-white/5 backdrop-blur-lg border border-white/20 
                              shadow-lg hover:scale-105 hover:bg-white/15 
                              transition-all duration-300 ease-in-out font-[port2]"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 - ChatGPT */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Right - Image */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src="/ChatGPT.jpg"
                alt="ChatGPT Project"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
              <div className="flex gap-3 mt-4">
                <img src="/react.png" alt="React" className="w-8 h-8" />
                <img src="/nodejs.png" alt="NodeJS" className="w-8 h-8" />
                <img src="/mongo-db.png" alt="MongoDB" className="w-8 h-8" />
                <img src="/redis.webp" alt="Redis" className="w-8 h-8" />
              </div>
            </div>
            {/* Left - Text */}
            <div className="md:w-1/2 md:mr-5 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white font-[port2]">ChatGPT</h2>
              <p className="text-[#2563eb] mt-2">AI-Powered Assistant</p>
              <p className="text-[#91a0b5] mt-4">
                🧠 AI ChatBot

A full-stack AI chatbot that remembers the recent messages of each user during the session and gives context-aware responses. Built with React, Node.js, Express, and Socket.IO for real-time communication, and powered by the Gemini API for generating replies.
Each user gets their own isolated chat memory with a limited message context for efficient performance.

Tech Used: React, Node.js, Express, Socket.IO, Gemini API, Render, Vercel
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a
                  href="https://chat-bot-omega-amber.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                              bg-white/10 backdrop-blur-lg border border-white/20 
                              shadow-lg hover:scale-105 hover:bg-white/20 
                              transition-all duration-300 ease-in-out font-[port2]"
                >
                  🤖 Live Demo
                </a>
                <a
                  href="https://github.com/DakshGoswami5/ChatBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-xl text-white font-semibold 
                              bg-white/5 backdrop-blur-lg border border-white/20 
                              shadow-lg hover:scale-105 hover:bg-white/15 
                              transition-all duration-300 ease-in-out font-[port2]"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
