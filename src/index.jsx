import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as SPECTOR from "spectorjs";

// const spector = new SPECTOR.Spector();
// spector.displayUI();

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [1, 2, 6],
    }}
  >
    <Experience />
  </Canvas>
);
