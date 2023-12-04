import React from "react";
import s from "./layout.module.scss";
import WorkContent from "@/components/WorkContent";

const Layout = ({ children }) => {
  return <div className={s.layout}>{children}</div>;
};

export default Layout;
