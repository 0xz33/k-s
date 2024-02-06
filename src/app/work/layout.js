import React from "react";
import s from "./layout.module.scss";
import WorkNav from "@/components/WorkNav";
import { usePathname } from "next/navigation";
import SidePane from "@/components/Sidepane";

const Layout = ({ children }) => {
  return (
    <div className={s.layout}>
      <WorkNav />
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default Layout;
