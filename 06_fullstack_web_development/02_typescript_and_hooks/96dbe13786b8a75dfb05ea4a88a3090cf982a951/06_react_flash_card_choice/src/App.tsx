import React from "react";
import "./styles/app.css";
import WordPage from "./components/PlatformPage";

export const App: React.FC = () => {
  return (
    <div id="app" className="container default-flex">
      <WordPage />
    </div>
  );
};
