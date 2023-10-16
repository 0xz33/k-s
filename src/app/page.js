"use client";

import Image from "next/image";
import styles from "./page.module.css";
import MetaballCanvas from "./MetaballCanvas";
import { useRef, useState, useLayoutEffect } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 1731,
    height: 1000,
  });

  const resizeCanvas = () => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  };

  useLayoutEffect(() => {
    function updateDimensions() {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }

    resizeCanvas();
    updateDimensions();

    window.addEventListener("resize", resizeCanvas);
    return () =>
      window.removeEventListener("resize", resizeCanvas, updateDimensions);
  }, []);

  return (
    <main>
      <section
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MetaballCanvas
          style={{ zIndex: -111 }}
          width={dimensions.width}
          height={dimensions.height}
          amount={222}
          density={10}
        />
        <svg
          width="800"
          height="800"
          viewBox="0 0 1600 1600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", top: 0, left: 0 }}
        >
          <path
            d="M400.5 0V300H500.5L700.5 100V0H1600.5V300H600.5V400L1500.5 1300H1600.5V1600H1500.5V1400L500.5 400H400.5V1300H100.5V1600H0.5V700H300.5V600L0.5 300V0H400.5Z"
            fill="black"
          />
        </svg>
      </section>
    </main>
  );
}
