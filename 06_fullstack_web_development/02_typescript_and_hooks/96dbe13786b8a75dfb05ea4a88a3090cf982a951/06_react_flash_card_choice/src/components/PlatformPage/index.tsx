import React from "react";
import { HideOrNotHide } from "../WordCard";

const WordPage = (): JSX.Element => {
  return (
    <div className="platform-card row w-100 border" style={{ height: "600px" }}>
      <div id="app" className="container default-flex">
        <HideOrNotHide />
      </div>
    </div>
  );
};

export default WordPage;
