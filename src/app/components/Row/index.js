import React from "react";
import s from "./row.module.scss";
const Row = ({ title, attribute }) => {
  return (
    <div className={s.row}>
      <h3 className={s.title}>{title}</h3>
      <h6>{attribute}</h6>
      <a className={s.plusButton}>
        <span>+</span>
      </a>
    </div>
  );
};

export default Row;
