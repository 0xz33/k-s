import React from "react";
import s from "./heroTable.module.scss";

const HeroTable = ({ children, tableHeader }) => {
  const numProjects = React.Children.count(children);

  return (
    <div className={s.tableContainer}>
      <div className={s.tableHeader}>
        <h1>{tableHeader}</h1>
        <h4>{numProjects} Projects</h4>
      </div>
      {children}
    </div>
  );
};

export default HeroTable;
