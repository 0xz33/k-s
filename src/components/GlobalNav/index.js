import React from "react";
import s from "./globalNav.module.scss";
import K from "../K";

const GlobalNav = () => {
  return (
    <>
      <nav className={s.topNav}>
        <p>KHARMHA LAB</p>
        <div className={s.logo}>
          <K />
        </div>
      </nav>
      <div className={s.rightNav}></div>
    </>
  );
};

export default GlobalNav;
