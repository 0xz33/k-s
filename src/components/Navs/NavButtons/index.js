"use client";
import React from "react";
import s from "./NavButtons.module.scss";
import { useRouter } from "next/navigation";

const NavButtons = () => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route), undefined, { shallow: true };
  };

  return (
    <div className={s.navSwitcher}>
      <button onClick={() => handleClick("/about")}>About</button>
      <button onClick={() => handleClick("/work")}>Work</button>
      <button onClick={() => handleClick("/contact")}>Contact</button>
    </div>
  );
};

export default NavButtons;
