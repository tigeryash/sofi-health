import { createRoot } from "react-dom/client";
import "./index.css";
import Experience from "./Experience.tsx";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App>
      {/* <Canvas
        gl={{ antialias: true }}
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
        }}
      >
        <Experience />
      </Canvas> */}
    </App>
    <Leva collapsed />
  </>
);
