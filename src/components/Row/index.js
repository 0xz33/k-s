"use client";
import React, { useState } from "react";
import s from "./row.module.scss";
import Link from "next/link";

const Row = ({ title, attribute, route, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Link
      href={route ? route : "/work"}
      target={route.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      passHref
    >
      <div className={s.row}>
        <h1 className={s.title}>{title}</h1>
        <h4 className={s.attr}>{attribute}</h4>

        {isOpen && (
          <>
            <br /> <div className={s.childrenContainer}>{children}</div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Row;
