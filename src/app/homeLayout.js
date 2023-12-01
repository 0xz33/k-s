"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/global.scss";
import SidePane from "@/components/Sidepane";
import s from "./page.module.scss";
import HomeContent from "@/components/HomeContent";

export default function HomeLayout({ children }) {
  return { children };
}
