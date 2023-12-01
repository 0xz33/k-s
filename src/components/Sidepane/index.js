import React from "react";
import s from "./sidepane.module.scss";
import K from "../K";
import { useRouter } from "next/navigation";
import NavButtons from "../Navs/NavButtons";

const SidePane = React.memo(() => {
  const router = useRouter();

  const handleClick = (route) => {
    router.push(route), undefined, { shallow: true };
  };
  return (
    <div className={s.pane}>
      <div className={s.top}>
        <K />
        <NavButtons />
      </div>
      <div className={s.bottom}>
        <span>
          <p>
            Kharmha is a creative studio helping ambitious crypto & AI teams
            grow.
          </p>
          <br />
          We help you push the boundary of what you thought was possible with
          software. We have designed products for Ethereum & Bitcoin Startups, &
          AI Founders. <br />
          <br />
          We specialize in Product Design, Brand Design, Web Dev, AI Strategy, &
          Crypto Strategy.
        </span>
      </div>
    </div>
  );
});

export default SidePane;
