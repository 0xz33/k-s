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
      <div className={s.row}>
        {/* <div className={s.headerContainer}> */}
        <h3 className={s.title}>{title}</h3>
        <h5>{attribute}</h5>
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
