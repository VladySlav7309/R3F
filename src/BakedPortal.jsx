import * as THREE from "three";
import {
  useGLTF,
  useTexture,
  Sparkles,
  shaderMaterial,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Center, Float } from "@react-three/drei";

import fragmentShader from "./shaders/portal/fragment.glsl";
import vertexShader from "./shaders/portal/vertex.glsl";
import { extend, useFrame } from "@react-three/fiber";
import * as dat from "dat.gui";

const poleLightColor = 0xffffe5;

// Debug
const debugObject = {};
const gui = new dat.GUI({
  width: 400,
});

const initalColorStart = "#fffee5";
// const initalColorStart = "#196ab3";
const initalColorEnd = "#d9d66b";
// const initalColorEnd = "#ffd100";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color(initalColorStart),
    uColorEnd: new THREE.Color(initalColorEnd),
  },
  vertexShader,
  fragmentShader
);

debugObject.portalColorStart = initalColorStart;
debugObject.portalColorEnd = initalColorEnd;

// const
extend({ PortalMaterial });

function BakedPortal() {
  const bakedTexture = useTexture("./model/Baked.jpg");
  bakedTexture.flipY = false;
  const { nodes } = useGLTF("./model/Portal Baked.glb");
  console.log("nodes: ", nodes);

  const portalMaterialRef = useRef();

  useEffect(() => {
    const portalColorStartController = gui
      .addColor(debugObject, "portalColorStart")
      .onChange(() => {
        portalMaterialRef.current.uColorStart = new THREE.Color(
          debugObject.portalColorStart
        );
      });
    const portalColorEndController = gui
      .addColor(debugObject, "portalColorEnd")
      .onChange(() => {
        portalMaterialRef.current.uColorEnd = new THREE.Color(
          debugObject.portalColorEnd
        );
      });

    return () => {
      gui.remove(portalColorStartController);
      gui.remove(portalColorEndController);
    };
  }, []);

  useFrame((state, delta) => {
    portalMaterialRef.current.uTime += delta;
  });

  return (
    <Center>
      <mesh
        geometry={nodes.baked.geometry}
        position={nodes.baked.position}
        rotation={nodes.baked.rotation}
      >
        <meshBasicMaterial
          map={bakedTexture}
          side={THREE.DoubleSide}
        ></meshBasicMaterial>
      </mesh>
      <mesh
        geometry={nodes.Portal.geometry}
        position={nodes.Portal.position}
        rotation={nodes.Portal.rotation}
      >
        <portalMaterial ref={portalMaterialRef} />
      </mesh>

      <mesh
        geometry={nodes.PoleLight1.geometry}
        position={nodes.PoleLight1.position}
        rotation={nodes.PoleLight1.rotation}
      >
        <meshBasicMaterial color={poleLightColor}></meshBasicMaterial>
      </mesh>
      <mesh
        geometry={nodes.PoleLight2.geometry}
        position={nodes.PoleLight2.position}
        rotation={nodes.PoleLight2.rotation}
      >
        <meshBasicMaterial color={poleLightColor}></meshBasicMaterial>
      </mesh>

      <Sparkles
        size={6}
        scale={[4, 2, 4]}
        position-y={1}
        speed={0.2}
        count={40}
      />
    </Center>
  );
}

export default BakedPortal;
