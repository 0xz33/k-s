import React from "react";
import s from "./beliefs.module.scss";

const Beliefs = () => {
  return (
    <div className={s.content}>
      <div className={s.belief}>
        <h1>We believe in the gravitational pull of shared beliefs.</h1>
        <h4>
          {" "}
          Our designs go beyond functionality; they are vessels for stories,
          beliefs, and identities, using the viral nature of memes to create
          products that are as culturally impactful as they are technologically
          advanced.
        </h4>
      </div>
      <div className={s.belief}>
        <h1>
          We believe in the unexpected connections between design, technology,
          and culture.
        </h1>
        <h4>
          Our mission is to weave these elements into software that not only
          functions but inspires and challenges the status quo.
        </h4>
      </div>
      <div className={s.belief}>
        <h1>We believe in the art of reduction. </h1>
        <h4>
          In a world cluttered with complexity, our vision is to create software
          experiences that are as refined as they are revolutionary, bridging
          human intuition with machine intelligence.
        </h4>
      </div>
      <div className={s.belief}>
        <h1>
          We believe in the transformative power of technology to elevate human
          potential.{" "}
        </h1>
        <h4>
          Our mission is to harness AI and crypto not just as tools, but as
          catalysts for creativity, collaboration, and growth in a world where
          technology is a force for good.
        </h4>
      </div>
      <div className={s.belief}>
        <h1>We believe in the might of the minority.</h1>
        <h4>
          {" "}
          The things we create are more than mere products; they are
          declarations of independence, enabling individuals and tight-knit
          communities to carve their own destinies in the face of ever
          increasing corporate and governmental power.
        </h4>
      </div>
      <div className={s.belief}>
        <h1>We believe in the art of technological guerilla warfare.</h1>
        <h4>
          {" "}
          Our approach is not just to help you compete with the giants but to
          outmaneuver them entirely, going places they simply can't. AI and
          crypto give individuals and small groups the agility, intelligence,
          and resilience to reclaim power."
        </h4>
      </div>

      <div className={s.belief}>
        <h1>
          {" "}
          We believe in the art of storytelling in the metamodern world.{" "}
        </h1>
        <h4>
          {" "}
          Our approach transcends traditional branding, focusing instead on
          creating narratives that weave through societies, turning products
          into symbols of a shared ethos.
        </h4>
      </div>
    </div>
  );
};

export default Beliefs;
