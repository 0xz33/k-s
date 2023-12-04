import s from "./page.module.scss";
import SidePane from "@/components/Sidepane";
import styles from "../styles/global.scss";

export default function RootLayout({
  children,
  seo,
  theme = "light",
  className,
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className={s.gridContainer}>
            {children}
            <SidePane />
          </div>
        </main>
      </body>
    </html>
  );
}
