import React from "react";
import s from "./lore.module.scss";
import Image from "next/image";

const lore = () => {
  return (
    <>
      <Image
        src={"/work/lore/1.png"}
        width={1296}
        height={972}
        // layout="responsive"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Image src={"/work/lore/1.png"} width={1296} height={972} />
      <Image src={"/work/lore/1.png"} width={1296} height={972} />
    </>
  );
};

export default lore;
