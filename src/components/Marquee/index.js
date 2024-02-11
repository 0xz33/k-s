import React, { memo, useMemo } from "react";
import s from "./marquee.module.scss";

const Marquee = memo(({ text, items = 10, gap = "3.33rem", speed = "44s" }) => {
  const arrayItems = useMemo(() => [...Array(items)], [items]);

  return (
    <div className={s.container} style={{ gap: gap }}>
      <TrackContent arrayItems={arrayItems} text={text} gap={gap} />
      <TrackContent arrayItems={arrayItems} text={text} gap={gap} ariaHidden />
    </div>
  );
});

const TrackContent = ({ arrayItems, text, gap, ariaHidden = false }) => (
  <div
    className={s.track}
    style={{ gap: gap, animationDuration: "55s" }}
    aria-hidden={ariaHidden}
  >
    {arrayItems.map((_, i) => (
      <h5 key={i} className={s.text}>
        {text}
      </h5>
    ))}
  </div>
);

export default Marquee;
