"use client";
import React from "react";
import s from "./navButtons.module.scss";
import { usePathname, useRouter } from "next/navigation";

const NavButtons = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (route) => {
    router.push(route), undefined, { shallow: true };
  };

  return (
    <div className={s.navSwitcher}>
      <button
        className={pathname === "/about" ? s.active : ""}
        onClick={() => handleClick("/about")}
      >
        About
      </button>
      <button
        className={["/work", "/"].includes(pathname) ? s.active : ""}
        onClick={() => handleClick("/work")}
      >
        Work
      </button>
      {/* <button 
        className={router.pathname === "/contact" ? s.active : ""} 
        onClick={() => handleClick("/contact")}
      >
        Contact
      </button> */}
    </div>
  );
};

export default NavButtons;
