import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) return undefined;

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isHomePage]);

  return (
    <>
      <CustomCursor />
      {!isHomePage && <Header />}
      <AppRouter />
      {!isHomePage && <Footer />}
    </>
  );
};

export default App;
