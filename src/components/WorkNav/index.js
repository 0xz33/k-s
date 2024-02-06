"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import s from "./workNav.module.scss";

const WorkNav = () => {
  const router = useRouter();
  const path = usePathname();

  if (path === "/work") {
    return null;
  }

  return (
    <nav className={s.navbar}>
      <div className={s.buttonContainer}>
        <button className={s.closeButton} onClick={() => router.back()}>
          CLOSE
        </button>
      </div>
    </nav>
  );
};

export default WorkNav;
