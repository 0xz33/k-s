"use client";
import { usePathname } from "next/navigation";
import WorkContent from "@/components/WorkContent";
import s from "./page.module.scss";
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
    <div className={s.content}>
      <WorkContent />
    </div>
  );
}
