"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SidePane from "@/components/Sidepane";
import HomeContent from "@/components/HomeContent";
import WorkContent from "@/components/WorkContent";
import ContactContent from "@/components/ContactContent";
import s from "./page.module.scss";
import AboutContent from "@/components/AboutContent";
import HomeLayout from "./homeLayout";

const metadata = {
  title: "Kharmha Lab",
  description: "Design-Driven Creative Studio for Ambitious Founders",
  image: "",
  keywords: [
    "kharmha",
    "karma",
    "crypto",
    "design",
    "web3",
    "ai",
    "design",
    "product",
    "design",
    "studio",
  ],
};

export default function Home() {
  const pathname = usePathname();
  return (
    <Layout>
      <HomeContent path={pathname} />
    </Layout>
  );
}
