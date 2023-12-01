"use client";

import React, { useEffect, useState, useRef } from "react";

const MetaballCanvas = ({ amount, density, width, height }) => {
  const isMobile = width <= 800;
  const canvasRef = useRef(null);

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  const [metaballs, setMetaballs] = useState(
    Array(amount)
      .fill()
      .map(() => ({
        x: width / 2,
        y: height / 2,
        r: isMobile ? getRandomFloat(7, 15) : getRandomFloat(11, 33),
        vx: getRandomFloat(-1, 1),
        vy: getRandomFloat(-1, 1),
      }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;

    function f(x, y) {
      let sum = 0;
      for (let ball of metaballs) {
        let dx = x - ball.x;
        let dy = y - ball.y;
        let distSq = dx * dx + dy * dy;
        sum += (ball.r * ball.r) / distSq;
      }
      return sum;
    }

    function updateMetaballs() {
      for (let ball of metaballs) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x < ball.r || ball.x > width - ball.r) ball.vx = -ball.vx;
        if (ball.y < ball.r || ball.y > height - ball.r) ball.vy = -ball.vy;
      }
    }

    function draw() {
      animationFrameId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, width, height);
      const stepSize = density;
      const threshold = 1;
      for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
          if (f(x, y) > threshold) {
            ctx.beginPath();
            ctx.fillStyle = "#F8FEEA"; // replace with your color
            ctx.fillRect(x, y, stepSize, stepSize);
            // ctx.strokeStyle = "#000000";
            // ctx.lineWidth = 1;
            // ctx.strokeRect(x, y, stepSize, stepSize);
          }
        }
      }

      updateMetaballs();
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, density, metaballs]);

  return (
    <canvas ref={canvasRef} id="metaballCanvas" width={width} height={height} />
  );
};

export default MetaballCanvas;
