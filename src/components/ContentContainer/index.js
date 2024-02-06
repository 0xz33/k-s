import React from "react";
import s from "./ContentContainer.module.scss";

const ContentContainer = ({ children }) => {
  return <div className={s.contentContainer}>{children}</div>;
};

export default ContentContainer;
