import Page1Bottom from "../components/Page1Bottom";
import HeroSection from "../components/HeroSection";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setxVal] = useState(0);
  const [yVal, setyVal] = useState(0);

  const mouseMoving = (e) => {
    if (tiltRef.current) {
      const rect = tiltRef.current.getBoundingClientRect();
      setxVal((e.clientX - rect.x - rect.width / 2) / 25);
      setyVal(-(e.clientY - rect.y - rect.height / 2) / 8);
    }
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2.5,
        ease: "power3.out",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      id="home"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>

      {/* Main content container - Adjusted for mobile padding */}
      <div className="relative min-h-screen md:h-screen flex items-center justify-center px-4 md:px-8 pt-32 md:pt-0 pb-16 md:pb-0">
        <HeroSection abc={tiltRef} />
      </div>

      {/* Page1Bottom component */}
      <Page1Bottom />
    </div>
  );
};

export default Page1;