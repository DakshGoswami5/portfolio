
const Page1Bottom = () => {
  return (
    <div className="absolute bottom-0 w-full text-center font-[port3] text-gray-400 mb-18 md:mb-12 px-4">
      <div className="flex flex-col gap-2 opacity-0 animate-fadeSlideUp">
        <h1 className="text-xs md:text-base lg:text-xl tracking-wide">
          Frontend | Backend | MERN Stack
        </h1>
        <h1 className="text-xs md:text-base lg:text-xl tracking-wide">
          Open Source Contribution | AI Integration | Animations
        </h1>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeSlideUp {
          animation: fadeSlideUp 1s ease-out 1.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default Page1Bottom;
