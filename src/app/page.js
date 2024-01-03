"use client";
import K from "@/components/K";
import s from "./page.module.scss";
import HomeContent from "@/components/HomeContent";
import MetaballCanvas from "./MetaballCanvas";
import { useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";

const metadata = {
  title: "Kharmha Lab",
  description: "Design-Driven Creative Studio for Ambitious Founders",
  image: "",
  keywords: [
    "kharmha",
    "karma",
    "crypto",
    "design",
    "web3",
    "ai",
    "design",
    "product",
    "design",
    "studio",
  ],
};

export default function Home() {
  const containerRef = useRef(null);
  const { x, y } = useWindowSize();
  console.log(x, y);
  const [dimensions, setDimensions] = useState({
    width: 1440,
    height: 1024,
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
    // <div className={s.content}>
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <MetaballCanvas
        width={dimensions.width}
        height={dimensions.height}
        amount={177}
        density={11}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <K />
      </div>
      {/* <HomeContent /> */}
    </section>
  );
}
