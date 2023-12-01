"use client";

import React from "react";
import AboutContent from "@/components/AboutContent";
import WorkContent from "@/components/WorkContent";
import ContactContent from "@/components/ContactContent";
import { usePathname } from "next/navigation";

const HomeContent = () => {
  const path = usePathname();
  switch (path) {
    case "/":
      return <WorkContent />;
    case "/about":
      return <AboutContent />;
    case "/contact":
      return <ContactContent />;
    default:
      return <WorkContent />;
  }
};

export default HomeContent;
