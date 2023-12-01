"use client";

import { useRouter } from "next/navigation";
import s from "./page.module.scss";
import SidePane from "@/components/Sidepane";
import K from "@/components/K";

export default function RootLayout({
  children,
  seo,
  theme = "light",
  className,
}) {
  return (
    <>
      <html lang="en">
        <body>
          <div className={s.gridContainer}>
            <div className={s.content}>{children}</div>
            {/* <SidePane /> */}
            <K />
          </div>
        </body>
      </html>
    </>
  );
}
