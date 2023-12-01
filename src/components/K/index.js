"use client";

import React, { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "postprocessing";
import { RenderPass } from "postprocessing";
import { BloomPass } from "postprocessing";
import {
  ExtrudeGeometry,
  MeshNormalMaterial,
  Box3,
  Vector3,
  ShaderMaterial,
} from "three";

import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { AnaglyphEffect } from "three/addons/effects/AnaglyphEffect.js";

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

  // Shader Material
  const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;

  const fragmentShader = `
  varying vec3 vNormal;
  void main() {
    float intensity = max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    gl_FragColor = vec4(intensity * vec3(1.0), 1.0);
  }
  `;

  // COLOR CHANGER
  //   const vertexShader = `
  //   void main() {
  //     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  // }`;

  //   const fragmentShader = `
  //   void main() {
  //     gl_FragColor = vec4(abs(sin(gl_FragCoord.x * 0.01)), abs(cos(gl_FragCoord.y * 0.01)), 0.0, 1.0);
  // }`;

  // Texture

  //   const vertexShader = `
  //     varying vec2 vUv;
  // void main() {
  //   vUv = uv;
  //   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //   }`;

  //   const fragmentShader = `
  //   uniform sampler2D texture;
  //   uniform sampler2D normalMap;
  //   varying vec2 vUv;

  //   void main() {
  //     // Sample the normal from the normal map
  //     vec3 normal = texture2D(normalMap, vUv).rgb;

  //     // Remap from [0, 1] to [-1, 1]
  //     normal = normal * 2.0 - 1.0;

  //     // Refraction factor
  //     float refraction = 0.1;

  //     // Calculate the refracted texture coordinates
  //     vec2 refractedUv = vUv + normal.xy * refraction;

  //     // Sample the texture using the refracted coordinates
  //     vec4 color = texture2D(texture, refractedUv);

  //     gl_FragColor = color;
  //   }
  //   `;

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {},
  });
  ``;

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      scale={[0.04, -0.04, 0.04]}
    >
      {/* <meshStandardMaterial attach="material" /> */}
    </mesh>
  );
};

export default function K() {
  const svgUrl = "./k.svg";

  return (
    <Canvas>
      <ExtrudedSvg svgUrl={svgUrl} />
    </Canvas>
  );
}
