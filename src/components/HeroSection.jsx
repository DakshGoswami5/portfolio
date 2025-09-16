
const HeroSection = (props) => { 
  return (
    <div id="page1-inside" className="relative h-[96%] w-[95%] rounded-3xl shadow-xl shadow-gray-700 bg-[#0f172a] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20">
      
          {/* Right Photo Section - mobile me upar, desktop me right */}
          <div className="order-1 md:order-2 md:w-1/2 flex justify-center mt-30 md:mt-0">
            <div className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-xl border-4 border-[#2563eb]">
              <img
                src="/profile.jpg" 
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Left Text Section - mobile me neeche, desktop me left */}
          <div id="tiltDiv" ref={props.abc} className="order-2 md:order-1 flex flex-col gap-2 md:gap-4 text-center md:text-left md:w-1/2 mb-64 md:mb-0">
            <h1 className="text-3xl md:text-7xl font-[port2] font-bold text-white">
              I AM <span className="text-[#2563eb]">MODERN</span>
            </h1>
            <h1 className="text-3xl md:text-7xl font-[port2] font-bold text-white">
              <span className="text-[#2563eb]">WEB</span> DEVELOPER
            </h1>
            <h1 className="text-3xl md:text-7xl font-[port2] font-bold text-white">
              TO HIRE
            </h1>
          </div>
        </div>
  )
}

export default HeroSection;
