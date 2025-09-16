import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const PageMid = () => {

    gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {
    gsap.utils.toArray(".rotateText").forEach((el) => {
      gsap.from(el, {
        rotateX: -90,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: false,
          once:true,
        //   markers: true,
        },
      });
    });
  });


  return (
    <div id="section2" className="bg-[#ffffff] text-black text-center p-10 md:p-20 overflow-x-auto">
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          FOCUS
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          ON
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          SEAMLESS
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          USER
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          EXPERIENCE
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          AND CLEAN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="font-[port4] leading-[0.9] whitespace-nowrap text-[15vw]">
          CODE
        </h1>
      </div>
    </div>
  );
};

export default PageMid;
