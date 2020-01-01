import React from "react";
import { Histogram } from "./histogram/Histogram";

const App: React.FC = () => {
  return (
    <svg width={"2000"} height={"1500"}>
      <Histogram />
    </svg>
  );
};

export default App;
