// "use client";
import s from "./page.module.scss";
import HomeContent from "@/components/HomeContent";
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
  return (
    <div className={s.content}>
      <HomeContent />
    </div>
  );
}
