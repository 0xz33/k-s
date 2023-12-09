import React from "react";
import Link from "next/link";
import s from "./page.module.scss";
import Image from "next/image";
import K from "@/components/K";

export default function Test() {
  return (
    <div className={s.container}>
      <K style={{ display: "absolute" }} />
      <Link className={s.studioLink} href="/">
        {[...Array(100)].map((_, i) => (
          <Image
            key={i}
            src="KS.svg"
            className={s.fullGridImage}
            alt={`Studios ${i + 1}`}
            width={160}
            height={160}
          />
        ))}
      </Link>

      <Link className={s.recordsLink} href="/">
        {[...Array(77)].map((_, i) => (
          <h1>KHARMHA RECORDS</h1>
        ))}
      </Link>
    </div>
  );
}
