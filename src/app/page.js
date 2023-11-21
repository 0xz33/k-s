"use client";
import { useState } from "react";
import Halo from "./components/GlowHalo/Halo";
import HeroTable from "./components/HeroTable";
import K from "./components/K";
import Row from "./components/Row";
import s from "./page.module.scss";

const metadata = {
  title: "Kharmha Lab",
  description: "Design-Driven Creative Studio for Ambitious Founders",
  image: "",
  keywords: [
    "kharmha",
    "crypto",
    "design",
    "web3",
    "design",
    "product",
    "design",
    "studio",
  ],
};

export default function Home() {
  const [content, setContent] = useState("Work");
  return (
    <main>
      {/* <GlowHalo colors={["#0000FF", "#00FFFF"]} /> */}
      <div className={s.gridContainer}>
        {content === "Work" && (
          <div className={s.content}>
            <HeroTable tableHeader={"Design"}>
              <Row title="Lore" attribute="Web3 Media" />
              <Row title="Bazaar" attribute="P2P Lending" />
              <Row title="Magic Money" attribute="Mobile Lending" />
              <Row title="Cubits" attribute="Auction House" />
              <Row title="BitDAO" attribute="Token Launches" />
              <Row title="Windranger" attribute="Design Systems" />
            </HeroTable>
          </div>
        )}
        {content === "About" && (
          <div className={s.content}>What about US bitch</div>
        )}
        {content === "Contact" && (
          <div className={s.content}>{/* Contact content goes here */}</div>
        )}

        <div className={s.pane}>
          <div className={s.top}>
            <K />
            <div className={s.navSwitcher}>
              <button onClick={() => setContent("About")}>About</button>
              <button onClick={() => setContent("Work")}>Work</button>
              <button onClick={() => setContent("Manifesto")}>Contact</button>
            </div>
          </div>
          <div className={s.bottom}>
            <p>
              Kharmha is a creative tech company helping teams build. <br />
              We help you push the boundary of what you thought was possible
              with technology. Product Design. Custom AI Automation. Content.
              Crypto.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
