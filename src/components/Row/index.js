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
        // onMouseEnter={() => {
        //   const colors = [
        //     "173, 255, 0",
        //     "0, 255, 255",
        //     "0, 255, 0",
        //     "0, 0, 255",
        //   ];
        //   let colorIndex = 0;
        //   if (typeof window !== "undefined") {
        //     colorIndex =
        //       parseInt(window.localStorage.getItem("colorIndex")) || 0;
        //   }
        //   const color = colors[colorIndex];
        //   colorIndex = (colorIndex + 1) % colors.length;
        //   if (typeof window !== "undefined") {
        //     window.localStorage.setItem("colorIndex", colorIndex);
        //   }
        //   document.documentElement.style.setProperty("--hover-color", color);
        // }}
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
