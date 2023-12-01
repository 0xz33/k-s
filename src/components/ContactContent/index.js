import React from "react";
import s from "./contactContent.module.scss";

const ContactContent = () => {
  return (
    <div className={s.container}>
      <ClientList />
    </div>
  );
};

export default ContactContent;
