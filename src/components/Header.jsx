const Header = () => {
  return (
    <>
      <div className="fixed top-6 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 font-[port1]">
        <div className="backdrop-blur-md bg-black/30 text-white rounded-full px-4 py-1 sm:px-8 sm:py-2 md:px-12 md:py-3 flex space-x-6 sm:space-x-12 md:space-x-16 shadow-lg text-xl-sm sm:text-base md:text-xl">
          <a
            href="home"
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-pointer hover:text-gray-300 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="cursor-pointer hover:text-gray-300 transition"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="fixed top-[10%] sm:top-[8%] right-[8%] z-10 font-[port1]">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dakshgoswami2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white bg-black text-white px-3 py-1 sm:px-5 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:scale-105 cursor-pointer transform transition duration-300 text-sm sm:text-base md:text-lg"
        >
          Hire me
        </a>
      </div>
    </>
  );
};

export default Header;
