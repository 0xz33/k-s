import React from "react";
import s from "./heroTable.module.scss";

const HeroTable = ({ children, tableHeader }) => {
  const numProjects = React.Children.count(children);

  return (
    <>
      <div className={s.tableHeader}>
        <h1>{tableHeader}</h1>
        <h4>{numProjects}</h4>
      </div>
      <div className={s.tableContainer}>{children}</div>
    </>
  );
};

export default HeroTable;
