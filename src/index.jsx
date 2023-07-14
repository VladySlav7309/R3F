import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import * as SPECTOR from "spectorjs";

/*
  Performance Debugging
*/
// const spector = new SPECTOR.Spector();
// spector.displayUI();

/*
  Debug Objects
*/
export const debugObject = {};
// export const gui = new dat.GUI({
//   width: 400,
// });

debugObject.clearColor = "#201919";
// gui.addColor(debugObject, "clearColor");

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    flat
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [1, 2, 6],
    }}
  >
    <color args={[debugObject.clearColor]} attach="background" />
    <Experience />
  </Canvas>
);
