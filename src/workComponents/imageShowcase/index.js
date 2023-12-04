import React from "react";
import s from "./lore.module.scss";

const ImageComponent = ({ src, alt, style }) => {
  return <img src={src} alt={alt} className={style} />;
};

export default ImageComponent;
