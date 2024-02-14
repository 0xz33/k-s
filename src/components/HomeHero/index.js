import React from "react";
import s from "./HomeHero.module.scss";

const HomeHero = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <span className={s.text}>Common Goods</span>
        <br />
        <span className={s.text}> Are Our</span>
        <br />
        <span className={s.text}>Common Interest</span>
      </div>
      {/* <h1>We create products & experiences that</h1>
      <h1>enhance human potential,</h1>
      <h1>overpower mimetic corruption,</h1>
      <h1>& spread the truth of paradox</h1> */}
    </div>
  );
};

export default HomeHero;
