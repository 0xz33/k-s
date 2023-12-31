import React from "react";
import s from "./lore.module.scss";
import Image from "next/image";

const lore = () => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <Image
          key={i + 1}
          src={`/work/lore/${i + 1}.png`}
          width={1296}
          height={972}
          className={s.fullWidthImg}
        />
      ))}
    </>
  );
};

export default lore;
