import React from "react";
import s from "./ClientList.module.scss";
import HeroTable from "../HeroTable";
import Row from "../Row";

const ClientList = () => {
  return (
    <HeroTable tableHeader={"Past Work"}>
      <Row title="Records" attribute="Records Archive" route="/records" />
      <Row
        title="Lore"
        attribute="Decentralized Storytelling"
        route="/work/lore"
      />
      <Row title="ByBit / BitDAO" attribute="Token Launches" />
      {/* <Row title="Windranger" attribute="Design Systems" /> */}
      {/* <Row title="Bazaar" attribute="P2P Lending" />chrom */}
      <Row title="Magic Money" attribute="Mobile Lending" />
      <Row title="Disentropic Foundry" attribute="Ordinals Fabrication" />
      {/* <Row
        title="Imaginary Company Company, LLC"
        attribute="Imagination Refinery"
      /> */}
      <Row title="Cubits" attribute="BTC Auction House" />
      <Row title="Haste Arcade" attribute="P2E Gaming" />
      <Row title="Citibank" attribute="Anayltics Dashboard" />
      <Row title="Bank of America" attribute="DevOps Dashboard" />
      <Row title="The Urban Institute" attribute="Analytics Dashboard" />
      <Row title="Rodan + Fields" attribute="Incentive Design" />
    </HeroTable>
  );
};

export default ClientList;
