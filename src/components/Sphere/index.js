import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";

const SphereComponent = ({ position, args }) => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere args={args} position={position} ref={sphereRef}>
      <meshPhysicalMaterial attach="material" color="silver" shininess={100} />
    </Sphere>
  );
};

export default function App() {
  return (
    <Canvas>
      <ambientLight color="cyan" />
      <pointLight color="red" position={[10, 10, 10]} />
      <SphereComponent position={[0, 0, 0]} args={[1, 30, 30]} />
    </Canvas>
  );
}
