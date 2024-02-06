import s from "./page.module.scss";
import SidePane from "@/components/Sidepane";
import cn from "clsx";
import styles from "../styles/global.scss";
import GlobalNav from "@/components/GlobalNav";

export default function RootLayout({
  children,
  seo,
  theme = "dark",
  className,
}) {
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
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </head>
      <body>
        <main>
          <GlobalNav />
          <div className={cn(`theme-${theme}`, s.gridContainer, className)}>
            {children}
            {/* <SidePane /> */}
          </div>
        </main>
      </body>
    </html>
  );
}
