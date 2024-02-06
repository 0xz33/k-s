import React from "react";
import Layout from "./layout";
import s from "./layout.module.scss";

const WorkPage = () => {
  return (
    <Layout>
      <div className={s.container}>
        <h1>Welcome to the Work Page</h1>
        <p>This is where we showcase our projects.</p>
      </div>
    </Layout>
  );
};

export default WorkPage;
