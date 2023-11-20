"use client";
import React, { useEffect, useRef } from "react";
import s from "./glowHalo.module.scss";

const Halo = ({ duration, size, zIndex, marginTop, colors = [] }) => {
  const ringRef = useRef(null);

  useEffect(() => {
    // const gradients = [
    //   ["#EF9B80", "#E44A66", "#6D0505"],
    //   ["#EFD080", "#FA630D", "#6D0550"],
    //   ["#F4FDD2", "#F5E15B", "#57340A"],
    //   ["#d0ffcc", "#2de21d", "#ff1a1a"],
    //   ["#F2F2FB", "#07C2EB", "#6D0177"],
    //   ["#CDC9F7", "#7188FE", "#000938"],
    //   ["#CAC9FA", "#65B09E", "#7D0062"],
    //   ["#989BF5", "#8E6FD6", "#E62D44"],
    // ];

    let step = 0;
    const durationInMs = duration * 1000; // convert to ms
    const steps = (durationInMs / 1000) * 60; // Assuming 60 frames per second

    function computeStepColor(colors, colorIndex, colorFraction) {
      const startColor = colors[colorIndex];
      const endColor = colors[(colorIndex + 1) % colors.length];

      const startRGB = parseInt(startColor.slice(1), 16);
      const startR = startRGB >> 16;
      const startG = (startRGB >> 8) & 0xff;
      const startB = startRGB & 0xff;

      const endRGB = parseInt(endColor.slice(1), 16);
      const endR = endRGB >> 16;
      const endG = (endRGB >> 8) & 0xff;
      const endB = endRGB & 0xff;

      const diffR = endR - startR;
      const diffG = endG - startG;
      const diffB = endB - startB;

      const r = Math.round(startR + diffR * colorFraction)
        .toString(16)
        .padStart(2, "0");
      const g = Math.round(startG + diffG * colorFraction)
        .toString(16)
        .padStart(2, "0");
      const b = Math.round(startB + diffB * colorFraction)
        .toString(16)
        .padStart(2, "0");

      return `#${r}${g}${b}`;
    }

    function animateGradient() {
      const durationInMs = duration * 1000; // convert to ms
      const steps = (durationInMs / 1000) * 60; // Assuming 60 frames per second
      const fraction = step / steps;

      const colorIndex = Math.floor(fraction * colors.length);
      const nextColorIndex = (colorIndex + 1) % colors.length;
      const colorFraction = fraction * colors.length - colorIndex;

      const currentColor = computeStepColor(colors, colorIndex, colorFraction);

      if (ringRef.current) {
        ringRef.current.style.background = `radial-gradient(50% 50% at 50% 50%, ${currentColor} 0%, ${currentColor}00 100%)`;
      }

      step++;

      if (step >= steps) {
        step = 0;
      }

      requestAnimationFrame(animateGradient);
    }

    requestAnimationFrame(animateGradient);
  }, [duration]);

  return (
    <div
      ref={ringRef}
      className={s.ring}
      style={{
        "--size": size,
        "--zIndex": zIndex,
        "--marginTop": marginTop,
      }}
    ></div>
  );
};

export default Halo;
