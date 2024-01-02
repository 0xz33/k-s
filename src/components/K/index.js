"use client";

import React, { useEffect, useState, useRef } from "react";
import { Noise } from "noisejs";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  DataTexture,
  ExtrudeGeometry,
  MeshNormalMaterial,
  Box3,
  Vector3,
  ShaderMaterial,
} from "three";

import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

const ExtrudedSvg = ({ svgUrl }) => {
  const [geometry, setGeometry] = useState(null);
  const meshRef = useRef();
  const { camera } = useThree();

  // noise
  const noise = new Noise(Math.random());

  const size = 512; // Size of the texture
  const data = new Uint8Array(size * size * 3);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Generate Perlin noise for this pixel
      const value = noise.simplex2(i / 100, j / 100);

      // Map the noise value to the range [0, 255]
      const color = (value + 1) * 0.5 * 255;

      // Set the red, green, and blue channels for this pixel
      data[(i * size + j) * 3 + 0] = color;
      data[(i * size + j) * 3 + 1] = color;
      data[(i * size + j) * 3 + 2] = color;
    }
  }
  const texture = new THREE.DataTexture(data, size, size);

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

  // BASE Shader Material
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
    gl_FragColor = vec4(intensity * vec3(0.8888888, 0.888888888, 0.55555555), 1.0);
  }
  `;

  //   const vertexShader = `
  //   varying vec3 vNormal;
  //   void main() {
  //     vNormal = normalize(normalMatrix * normal);
  //     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //   }
  // `;

  //   const fragmentShader = `
  //   varying vec3 vNormal;
  //   void main() {
  //     vec3 iridescentColor = vec3(0.5 * cos(vNormal.x * 2.0) + 0.5, 0.5 * cos(vNormal.y * 2.0) + 0.5, 0.5 * cos(vNormal.z * 2.0) + 0.5);
  //     gl_FragColor = vec4(iridescentColor, 0.5); // 0.5 for semi-transparent glass effect
  //   }
  // `;

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
    uniforms: {
      normalMap: { value: texture },
    },
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

const K = () => {
  const svgUrl = "/k.svg";

  return (
    <Canvas>
      <ExtrudedSvg svgUrl={svgUrl} />
    </Canvas>
  );
};

export default K;
