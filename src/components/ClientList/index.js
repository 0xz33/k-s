import React from "react";
import s from "./ClientList.module.scss";
import HeroTable from "../HeroTable";
import Row from "../Row";

const ClientList = () => {
  return (
    <HeroTable tableHeader={"Past Work"}>
      <Row
        title="Lore"
        attribute="Decentralized Storytelling"
        route="/work/lore"
      />
      <Row
        title="ByBit / BitDAO"
        attribute="Token Launches"
        route="/work/bit"
      />
      {/* <Row title="Windranger" attribute="Design Systems" /> */}
      {/* <Row title="Bazaar" attribute="P2P Lending" />chrom */}
      <Row title="Magic Money" attribute="Mobile Lending" route="/work/mm" />
      <Row
        title="Disentropic Foundry"
        attribute="Ordinals Fabrication"
        route="/work/df"
      />
      {/* <Row
        title="Imaginary Company Company, LLC"
        attribute="Imagination Refinery"
      /> */}
      <Row title="Cubits" attribute="BTC Auction House" route="/work/cubits" />
      <Row
        title="Haste Arcade"
        attribute="P2E Gaming"
        route="https://hastearcade.com"
      />
      <Row
        title="Citibank"
        attribute="Anayltics Dashboard"
        route="https://citi.com"
      />
      <Row
        title="Bank of America"
        attribute="DevOps Dashboard"
        route="https://bankofamerica.com"
      />
      <Row
        title="The Urban Institute"
        attribute="Analytics Dashboard"
        route="https://urban.org"
      />
      <Row
        title="Rodan + Fields"
        attribute="Incentive Design"
        route="https://rodanandfields.com"
      />
    </HeroTable>
  );
};

export default ClientList;
