import React, { useMemo } from "react";
import s from "./glowHalo.module.scss";
import Halo from "./Halo";

const GlowHalo = ({ startColor, endColor }) => {
  // console.log(startColor, endColor);
  const rings = useMemo(
    () => [
      {
        size: "22vw",
        duration: "11",
        zIndex: "112",
        marginTop: "3.33rem",
        startColor,
        endColor,
      },
      {
        size: "70vw",
        duration: "11",
        zIndex: "102",
        marginTop: "1rem",
        startColor,
        endColor,
      },
      {
        size: "55vw",
        duration: "10",
        zIndex: "102",
        marginTop: "3rem",
        startColor,
        endColor,
      },
      {
        size: "133vw",
        duration: "5",
        zIndex: "102",
        marginTop: "11rem",
        startColor,
        endColor,
      },
    ],
    [startColor, endColor]
  );

  return (
    <div className={s.container}>
      {rings.map((ring, index) => (
        <Halo
          key={index}
          size={ring.size}
          zIndex={ring.zIndex}
          marginTop={ring.marginTop}
          duration={ring.duration}
          startColor={ring.startColor}
          endColor={ring.endColor}
        />
      ))}
    </div>
  );
};

export default GlowHalo;
