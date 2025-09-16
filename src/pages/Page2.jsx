
const Page2 = () => {
  return (
    <div id="about" className="bg-[#ffffff] flex items-center justify-center">
      <div className="rounded-3xl shadow-xl shadow-gray-700 h-[100%] w-[95%] bg-[#0f172a] p-10 flex flex-col items-center overflow-y-auto">
        
        {/* Heading */}
        <h1 className="text-5xl mt-10 md:text-7xl font-[port2] text-white mb-20">
          Who <span className="text-[#2563eb]">AM I</span>
        </h1>

        {/* Short Intro */}
        <p className="text-[#91a0b5] text-center max-w-5xl mb-32 px-4 text-xl md:text-2xl font-[port2]">
          Hi, I’m a passionate <span className="text-[#2563eb] font-semibold">Full-Stack Web Developer </span> 
          skilled in creating modern, responsive, and dynamic applications. 
          I love working with both <span className="text-[#2563eb] font-semibold">Frontend & Backend </span> 
          technologies, building scalable solutions, and integrating powerful tools like 
          <span className="text-[#2563eb] font-semibold"> AI & Animations</span>.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-10 font-[port2]">
          {/* Example Skill */}
          <div className="flex flex-col items-center gap-2">
            <img src="/html.png" alt="HTML" className="w-16 h-16 object-contain" />
            <span className="text-white">HTML</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/css.png" alt="CSS" className="w-16 h-16 object-contain" />
            <span className="text-white">CSS</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/javascript.png" alt="JavaScript" className="w-16 h-16 object-contain" />
            <span className="text-white">JavaScript</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/react.png" alt="React" className="w-16 h-16 object-contain" />
            <span className="text-white">React.js</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/redux.png" alt="Redux" className="w-16 h-16 object-contain" />
            <span className="text-white">Redux</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/tailwind-css.png" alt="Tailwind" className="w-16 h-16 object-contain" />
            <span className="text-white">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/nodejs.png" alt="Node.js" className="w-16 h-16 object-contain" />
            <span className="text-white">Node.js</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/express.png" alt="Express" className="w-16 h-16 object-contain" />
            <span className="text-white">Express</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/mongo-db.png" alt="MongoDB" className="w-16 h-16 object-contain" />
            <span className="text-white">MongoDB</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/redis.webp" alt="Redis" className="w-16 h-16 object-contain" />
            <span className="text-white">Redis</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/GSAP.png" alt="GSAP" className="w-16 h-16 object-contain" />
            <span className="text-white">GSAP</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/framer.png" alt="Framer Motion" className="w-16 h-16 object-contain" />
            <span className="text-white">Framer Motion</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/langchain.webp" alt="Langchain" className="w-16 h-16 object-contain" />
            <span className="text-white">Langchain</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/git.png" alt="Git" className="w-16 h-16 object-contain" />
            <span className="text-white">Git</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/APIs.png" alt="APIs" className="w-16 h-16 object-contain" />
            <span className="text-white">APIs</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/python.png" alt="Python" className="w-16 h-16 object-contain" />
            <span className="text-white">Python</span>
          </div>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-[#2563eb] text-white font-semibold rounded-lg shadow-lg hover:bg-[#1d4ed8] transition font-[port3] mt-8 mb-10"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Page2;
