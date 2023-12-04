import React from "react";
import s from "./contactContent.module.scss";
import ClientList from "../ClientList";

const ContactContent = () => {
  return (
    <div className={s.container}>
      <ClientList />
    </div>
  );
};

export default ContactContent;
