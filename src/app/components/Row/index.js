import React, { useState } from "react";
import s from "./row.module.scss";
const Row = ({ title, attribute, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={s.row} onClick={toggleOpen}>
      {/* <div className={s.headerContainer}> */}
      <h3 className={s.title}>{title}</h3>
      <h6>{attribute}</h6>
      {/* </div> */}
      <a className={s.plusButton}>
        <span>{isOpen ? "-" : "+"} </span>
      </a>

      {isOpen && (
        <>
          <br /> <div className={s.childrenContainer}>{children}</div>
        </>
      )}
    </div>
  );
};

export default Row;
