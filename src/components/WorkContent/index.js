import React from "react";
import s from "./workContent.module.scss";
import ClientList from "../ClientList";

const WorkContent = () => {
  return (
    <div className={s.content}>
      <ClientList />
    </div>
  );
};

export default WorkContent;
