import React, { useMemo } from "react";
import s from "./glowHalo.module.scss";
import Halo from "./Halo";

const GlowHalo = ({ colors }) => {
  // console.log(startColor, endColor);
  const rings = useMemo(
    () => [
      {
        size: "22vw",
        duration: "22",
        zIndex: "112",
        marginTop: "3.33rem",
        colors,
      },
      {
        size: "70vw",
        duration: "21",
        zIndex: "102",
        marginTop: "1rem",
        colors,
      },
      {
        size: "55vw",
        duration: "20",
        zIndex: "102",
        marginTop: "3rem",
        colors,
      },
      {
        size: "133vw",
        duration: "21",
        zIndex: "102",
        marginTop: "11rem",
        colors,
      },
    ],
    [colors]
  );

  console.log(rings);

  return (
    <div className={s.container}>
      {rings.map((ring, index) => (
        <Halo
          key={index}
          size={ring.size}
          zIndex={ring.zIndex}
          marginTop={ring.marginTop}
          duration={ring.duration}
          colors={colors}
        />
      ))}
    </div>
  );
};

export default GlowHalo;
