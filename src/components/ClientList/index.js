import React from "react";
import s from "./ClientList.module.scss";
import HeroTable from "../HeroTable";
import Row from "../Row";

const ClientList = () => {
  return (
    <HeroTable tableHeader={"Past Work"}>
      <Row title="ByBit / BitDAO" attribute="Token Launches" />
      <Row title="Windranger" attribute="Design Systems" />
      <Row title="Bazaar" attribute="P2P Lending" />
      <Row title="Magic Money" attribute="Mobile Lending" />
      <Row title="Disentropic Foundry" attribute="Ordinals Fabrication" />
      <Row
        title="Imaginary Company Company, LLC"
        attribute="Imagination Refinery"
      />
      <Row title="Cubits" attribute="BTC Auction House" />
      <Row title="Haste Arcade" attribute="P2E Gaming" />
      <Row title="Citibank" attribute="Data Analytics" />
      <Row title="Bank of America" attribute="DevOps Dashboard" />
      <Row title="The Urban Institute" attribute="Internal Tools" />
      <Row title="Rodan + Fields" attribute="Incentive Design" />
    </HeroTable>
  );
};

export default ClientList;
