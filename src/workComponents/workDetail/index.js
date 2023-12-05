"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ClientList from "../ClientList";

const WorkDetail = () => {
  const path = usePathname();

  if (path === "/work/lore") {
    // return <WorkDetail project="lore" />;
  } else {
    return <ClientList />;
  }
};

export default WorkDetail;
