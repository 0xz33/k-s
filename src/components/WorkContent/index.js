import React from "react";
import s from "./workContent.module.scss";
import ClientList from "../ClientList";
import HomeLayout from "@/app/homeLayout";
import NavButtons from "../Navs/NavButtons";

const WorkContent = () => {
  return (
    <div className={s.content}>
      <ClientList />
      <NavButtons />
    </div>
  );
};

export default WorkContent;
