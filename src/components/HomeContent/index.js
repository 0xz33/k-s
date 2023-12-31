"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ClientList from "../ClientList";
import Beliefs from "../Beliefs";

const HomeContent = () => {
  const path = usePathname();

  if (path === "/") {
    return <ClientList />;
  } else if (path === "/about") {
    return <Beliefs />;
  } else if (path === "/contact") {
    return <h1>contact</h1>;
  } else if (path.includes("/work/") && path !== "/work/") {
    return <WorkDetail />;
  } else {
    return <ClientList />;
  }
};

export default HomeContent;
