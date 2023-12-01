import React from "react";
import s from "./aboutContent.module.scss";
import Beliefs from "./Beliefs/Beliefs";

const AboutContent = () => {
  return (
    <div className={s.container}>
      <Beliefs />
    </div>
  );
};

export default AboutContent;
