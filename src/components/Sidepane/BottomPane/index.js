"use client";

import { usePathname } from "next/navigation";
import s from "./bottomPane.module.scss";
import WorkDetailPane from "../WorkDetailPane";

const BottomPane = () => {
  const path = usePathname();
  const isWorkPath = path.includes("/work/");
  let project = "";
  if (isWorkPath) {
    project = path.split("/work/")[1];
  }

  return isWorkPath ? (
    <div className={s.bottom}>
      <WorkDetailPane project={project} />
    </div>
  ) : (
    <div className={s.bottom}>
      <span>
        <p>
          Kharmha is a creative studio helping ambitious crypto & AI teams build
          their imagination.
        </p>
        <br />
        We help you push the boundary of what you thought was possible with
        software. We have designed products for Crypto Startups, Big Banks, & AI
        Founders. <br />
        <br />
        We specialize in Product Design, Brand Design, Web Dev, AI Strategy, &
        Crypto Strategy.
      </span>
    </div>
  );
};

export default BottomPane;
