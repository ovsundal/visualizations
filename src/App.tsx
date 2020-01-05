import React from "react";
import { Histogram } from "./histogram/Histogram";

const App: React.FC = () => {
  return (
    <svg width={"2000"} height={"1500"}>
      <Histogram
          bins={5}
          data={testData}
      />
    </svg>
  );
};

const testData = [
    {
        name: "A",
        value: 1
    },
    {
        name: "B",
        value: 5
    },
    {
        name: "C",
        value: 2
    },
    {
        name: "D",
        value: 4
    },
    {
        name: "E",
        value: 7
    }
];

export default App;
