import React from "react";
import s from "./globalNav.module.scss";
import K from "../K";
import Marquee from "../Marquee";

const GlobalNav = () => {
  return (
    <>
      <nav className={s.topNav}>
        {/* <p>KHARMHA LAB</p> */}
        <Marquee text="The Common Good Is Our Common Interest" />
        <div className={s.logo}>
          <K />
        </div>
      </nav>
      <div className={s.rightNav}></div>
    </>
  );
};

export default GlobalNav;
