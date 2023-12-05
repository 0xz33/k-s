import React from "react";
import s from "./workDetailPane.module.scss";
import projects from "@/data/projects.json"; // Adjust the path according to your project structure

const WorkDetailPane = ({ project }) => {
  if (!project) {
    return null;
  }

  const projectData = projects[project];

  return (
    <div className={s.workDetailContainer}>
      <h1>{projectData.longName}</h1>
      <p>{projectData.overview}</p>
      {/* <p>{projectData.productType}</p> */}
      {/* <p>{projectData.body}</p> */}
    </div>
  );
};

export default WorkDetailPane;
