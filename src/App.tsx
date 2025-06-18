import { FaBoltLightning } from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useGSAP from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef();

  useEffect(() => {
    // Initialize Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: false, // We'll handle RAF manually for GSAP integration
    });

    // GSAP integration - recommended approach
    if (ScrollTrigger) {
      lenisRef.current.on("scroll", ScrollTrigger.update);
    }

    // Add Lenis to GSAP ticker for better performance
    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000);
    });

    // Disable lag smoothing for better scroll sync
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenisRef.current.raf);
      lenisRef.current?.destroy();
    };
  }, []);
  return (
    <>
      <section className="intro">
        <h1>GOURD doesn't lose. It wins.</h1>
      </section>
      <section className="product-overview">
        <div className="header-1">
          <h1>Store an endless supply of sand (or water)</h1>
        </div>
        <div className="header-2">
          <h1>GOURD Bottle</h1>
        </div>

        <div className="circular-mask"></div>

        <div className="tooltips">
          <div className="tooltip">
            <div className="icon">
              <FaBoltLightning />
            </div>
            <div className="divider"></div>
            <div className="title">
              <h2>#1 Defense</h2>
            </div>
            <div className="description">
              <p>
                Designed to last through S rank missions. GOURD is Gaara
                approved for durability. No distractions, keep fighting.{" "}
              </p>
            </div>
          </div>

          <div className="tooltip">
            <div className="icon">
              <GiWaterDrop />
            </div>
            <div className="divider"></div>
            <div className="title">
              <h2>Hydration</h2>
            </div>
            <div className="description">
              <p>
                Lasts you a trip from Sunagakure to the Konohagakure. Refill.
                Store. Repeat.
              </p>
            </div>
          </div>
        </div>

        <div className="model-container">{children}</div>
      </section>
      <section className="outro">Become Kazekage - GOURD</section>
    </>
  );
};

export default App;
