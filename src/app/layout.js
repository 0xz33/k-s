import s from "./page.module.scss";
import SidePane from "@/components/Sidepane";
import cn from "clsx";
import styles from "../styles/global.scss";

export default function RootLayout({
  children,
  seo,
  theme = "dark",
  className,
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className={cn(`theme-${theme}`, s.gridContainer, className)}>
            {children}
            <SidePane />
          </div>
        </main>
      </body>
    </html>
  );
}
