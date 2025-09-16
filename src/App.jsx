import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Header from "./components/Header";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import PageMid from "./pages/PageMid";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // scroll speed control (default smoothness)
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ko Lenis ke sath sync karo
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div id="main">
        <Header />
        <Page1 />
        <PageMid />
        <Page2 />
        <Page3/>
        <Page4/>
      </div>
    </>
  );
};

export default App;
