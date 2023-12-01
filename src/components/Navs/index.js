import React from "react";
import NavButtons from "./NavButtons/NavButtons";
import s from "./Navs.module.scss";

const Navs = () => {
  return (
    <div className={s.navContainer}>
      <NavButtons />
    </div>
  );
};

export default Navs;
