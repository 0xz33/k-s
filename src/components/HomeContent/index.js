"use client";

import React from "react";
import AboutContent from "@/components/AboutContent";
import WorkContent from "@/components/WorkContent";
import ContactContent from "@/components/ContactContent";
import { usePathname } from "next/navigation";

const HomeContent = () => {
  const path = usePathname();
  const contentMap = {
    "/": <WorkContent />,
    "/about": <AboutContent />,
    "/contact": <ContactContent />,
  };
  return contentMap[path] || <WorkContent />;
};
// const HomeContent = () => {
//   return <h1>contact</h1>;
// };

export default HomeContent;
