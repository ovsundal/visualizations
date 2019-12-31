import React from "react";
import { Histogram } from "./Histogram";

const App: React.FC = () => {
  return (
    <svg width={"2000"} height={"500"}>
      <Histogram />
    </svg>
  );
};

export default App;
