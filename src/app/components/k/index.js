"use client";

import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ExtrudeGeometry, MeshNormalMaterial, Box3, Vector3 } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

const ExtrudedSvg = ({ svgUrl }) => {
  const [geometry, setGeometry] = useState(null);
  const meshRef = useRef();

  const { camera } = useThree();

  useEffect(() => {
    const loader = new SVGLoader();
    loader.load(svgUrl, (data) => {
      const shapes = data.paths[0].toShapes(true);
      const shape = shapes[0];
      const newGeometry = new ExtrudeGeometry(shape, { depth: 13 });

      // Calculate the bounding box of the geometry
      newGeometry.computeBoundingBox();
      const box = newGeometry.boundingBox;

      // Calculate the center of the bounding box
      const center = new Vector3();
      box.getCenter(center);

      // Negate the center vector to center the geometry
      newGeometry.center();
      setGeometry(newGeometry);
    });
  }, [svgUrl]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0077;
    }
  });
  useEffect(() => {
    if (geometry) {
      // Update the camera position
      camera.position.z = 5;
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }
  }, [geometry, camera]);

  if (!geometry) return null;

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[0.04, -0.04, 0.04]}>
      <meshStandardMaterial attach="material" />
    </mesh>
  );
};

export default function K() {
  // Replace this with the URL to your SVG file
  const svgUrl = "./k.svg";

  return (
    <Canvas>
      <ExtrudedSvg svgUrl={svgUrl} />
    </Canvas>
  );
}
