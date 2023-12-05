"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import s from "./workNav.module.scss";

const WorkNav = () => {
  const router = useRouter();
  const path = usePathname();

  const isWork = path.includes("/work");

  return (
    <nav className={s.navbar}>
      <div classname={s.buttonContainer}>
        <button className={s.closeButton} onClick={() => router.back()}>
          Close
        </button>
      </div>
    </nav>
  );
};

export default WorkNav;
