import { OrbitControls } from "@react-three/drei";
import BakedPortal from "./BakedPortal";

export default function Experience() {
  return (
    <>
      <color args={["#201919"]} attach="background" />
      <OrbitControls makeDefault />

      <BakedPortal></BakedPortal>
      {/* <mesh scale={ 1.5 }>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}
    </>
  );
}
