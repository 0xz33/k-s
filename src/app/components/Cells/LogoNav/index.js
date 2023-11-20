import { useState } from "react";

const LogoNav = () => {
  const [appState, setAppState] = useState("");

  return (
    <div>
      <K />
      <div className={s.navSwitcher}>
        hieee
        <button onClick={() => setAppState("About")}>About</button>
        <button onClick={() => setAppState("Work")}>Work</button>
        <button onClick={() => setAppState("Manifesto")}>Contact</button>
      </div>
    </div>
  );
};

export default LogoNav;
