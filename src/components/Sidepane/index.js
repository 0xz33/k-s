"use client";

import React from "react";
import s from "./sidepane.module.scss";
import K from "../K";
import { useWindowSize } from "react-use";
import BottomPane from "./BottomPane";
import { usePathname } from "next/navigation";

const SidePane = () => {
  const path = usePathname();
  const isWork = path.includes("/work/");
  // const { width: viewportWidth } = useWindowSize();
  return (
    <div className={s.pane}>
      <div className={isWork ? s.workPaneTop : s.top}>
        <K />
      </div>
      <div className={isWork ? s.workPaneBottom : s.bottom}>
        <BottomPane />
      </div>
    </div>
  );
};

export default SidePane;
