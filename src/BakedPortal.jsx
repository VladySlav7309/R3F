import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";
import { Center } from "@react-three/drei";
import * as dat from "dat.gui";

const portalLightColor = 0xffffff;
const poleLightColor = 0xffffe5;

const debugObject = {};

debugObject.clearColor = "#ff0000";
const gui = new dat.gui({
  width: 400
});

function BakedPortal() {
  const bakedTexture = useTexture("./model/Baked.jpg");
  bakedTexture.flipY = false;
  const { nodes } = useGLTF("./model/Portal Baked.glb");
  console.log("nodes: ", nodes);
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
        <meshBasicMaterial
          color={portalLightColor}
          side={THREE.DoubleSide}
        ></meshBasicMaterial>
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
    </Center>
  );
}

export default BakedPortal;
