"use client";
import { useState } from "react";
import Halo from "./components/GlowHalo/Halo";
import HeroTable from "./components/HeroTable";
import K from "./components/K";
import Row from "./components/Row";
import s from "./page.module.scss";
import Landing from "./pages/Landing";

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
              <Row title="Lore" attribute="Web3 Media">
                Synergy and Scalability Ipsum: "At the end of the day, going
                forward, a new normal that has evolved from generation X is on
                the runway heading towards a streamlined cloud solution.
                User-generated content in real-time will have multiple
                touchpoints for offshoring." Global Market Ipsum: "Leverage
                global markets to reach out to key demographics. Streamline
                content-centric client-centric data without comprehensive
                win-win survival strategies. The paradigm shift in global market
                strategy requires careful analysis and out-of-the-box thinking."
                Digital Integration Ipsum: "Seamlessly visualize quality
                intellectual capital without superior collaboration and
                idea-sharing. Holistically pontificate installed base portals
                after maintainable products. Dramatically engage top-line web
                services vis-a-vis cutting-edge deliverables." Customer
                Centricity Ipsum: "Proactively fabricate one-to-one materials
                via effective e-business. Completely synergize scalable
                e-commerce rather than high standards in e-services. Assertively
                iterate resource maximizing products after leading-edge
                intellectual capital." Agile Workflow Ipsum: "Bring to the table
                win-win survival strategies to ensure proactive domination. At
                the end of the day, going forward, a new normal that has been
                set in motion due to our streamlined cloud solutions and agile
                frameworks." Data-Driven Decision Ipsum: "Empower data-driven
                decision-making to craft meaningful brand experiences. Harness
                big data to deliver customer-centric solutions and personalized
                user experiences. Utilize analytics to drive innovation and
                efficiency in our operations."
              </Row>
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

      <Landing />
    </main>
  );
}
