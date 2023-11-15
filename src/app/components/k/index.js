import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ExtrudeGeometry, MeshNormalMaterial, Shape, ShapePath } from "three";

// Replace this with your SVG path
const svgPath = "M10 10 H 90 V 90 H 10 Z";

const ExtrudedSvg = () => {
  const meshRef = useRef();

  // Parse SVG path into Shape
  const shapePath = new ShapePath();
  const shapes = shapePath.toShapes(svgPath, false);
  const shape = shapes[0];

  // Create extruded geometry from Shape
  const geometry = new ExtrudeGeometry(shape, { depth: 10 });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default function App() {
  return (
    <Canvas>
      <ExtrudedSvg />
    </Canvas>
  );
}
