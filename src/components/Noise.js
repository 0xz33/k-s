import { useFrame } from "@studio-freight/hamo";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import styles from "../styles/canvas.module.scss";

function Noise() {
  const el = useRef();
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [canvas, setCanvas] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [context, setContext] = useState(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const newCanvas = document.createElement("canvas");
      const newBuffer = document.createElement("canvas");
      const newContext = newCanvas.getContext("2d");

      setCanvas(newCanvas);
      setBuffer(newBuffer);
      setContext(newContext);

      el.current.appendChild(newCanvas);

      return () => {
        newCanvas.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (canvas && buffer && context) {
      const dpr = Math.min(window.devicePixelRatio, 1);
      const width = windowWidth;
      const height = windowHeight;

      canvas.width = width;
      canvas.height = height;

      const image = context.createImageData(width * dpr, height * dpr);
      const buffer32 = new Uint32Array(image.data.buffer);

      // NOISE DENSITY
      for (let i = 0; i < buffer32.length; i++) {
        if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
      }

      buffer.width = width;
      buffer.height = height;
      buffer.getContext("2d").putImageData(image, 0, 0);
    }
  }, [buffer, canvas, context, windowWidth, windowHeight]);

  let frameCount = 0;
  const frameThrottle = 2; // Update every 2nd frame

  useFrame(() => {
    frameCount++;
    if (frameCount % frameThrottle !== 0) return;

    if (context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // NOISE MOVEMENT
      context.drawImage(
        buffer,
        -Math.random() * 200, // X-AXIS
        -Math.random() * 200, // Y-AXIS,
        canvas.width + 200,
        canvas.height + 200
      );
    }
  });

  return <div ref={el} className={styles.noiseCanvas} />;
}

export default Noise;
