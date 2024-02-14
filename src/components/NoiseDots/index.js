import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import s from "./noiseDots.module.scss";

// RANDOMNESS GENERATION
const generateRandomInRange = (min, max) => Math.random() * (max - min) + min;

// Configuration variables
const gridSize = { x: 20, y: 20 };
const gridGap = { x: 10, y: 10 };
const dotSize = 8;
const displacementOffset = 10; // Max displacement in pixels
const smoothness = generateRandomInRange(0.1, 0.3);
const noiseSeed = Math.random();

const NoiseDots = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = gridSize.x * (dotSize + gridGap.x);
    const height = gridSize.y * (dotSize + gridGap.y);
    canvas.width = width;
    canvas.height = height;

    // Create a seeded 2D noise function
    const alea = require("alea");
    const noise2D = createNoise2D(alea(noiseSeed));
    const noiseScale = smoothness;

    // Animation variables
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

      ctx.clearRect(0, 0, width, height);

      for (let y = 0; y < gridSize.y; y++) {
        for (let x = 0; x < gridSize.x; x++) {
          // Generate noise-based displacement
          const noiseVal = noise2D(x * noiseScale, y * noiseScale, elapsedTime);
          const displacement = noiseVal * displacementOffset;

          ctx.beginPath();
          ctx.arc(
            x * (dotSize + gridGap.x) + displacement, // Apply noise-based displacement
            y * (dotSize + gridGap.y) + displacement, // Apply noise-based displacement
            dotSize / 2,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      // Request the next frame of the animation
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Cleanup function to cancel the animation when the component unmounts
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return <canvas ref={canvasRef} className={s.container}></canvas>;
};

export default NoiseDots;
