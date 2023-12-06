"use client";
import React, { useState } from "react";
import s from "./row.module.scss";
import Link from "next/link";

const Row = ({ title, attribute, route, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Link href={route ? route : "/work"}>
      <div
        className={s.row}
        onMouseEnter={() => {
          const colors = ["#DEFF5C", "#adff00", "#ccff00", "#D6FF33"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          document.documentElement.style.setProperty(
            "--hover-color",
            randomColor
          );
        }}
      >
        {/* <div className={s.headerContainer}> */}
        <h1 className={s.title}>{title}</h1>
        <h4>{attribute}</h4>
        {/* </div> */}
        {/* <a className={s.plusButton}>
        <span>{isOpen ? "-" : "+"} </span>
      </a> */}
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
