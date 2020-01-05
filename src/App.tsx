import React from "react";
import { Histogram } from "./histogram/Histogram";

const App: React.FC = () => {
  return (
    <svg width={"2000"} height={"1500"}>
      <Histogram
          bins={5} // amount of value ranges
          data={testData}
          height={400}
      />
    </svg>
  );
};

const testData = [
    {
        label: "A",
        value: 1
    },
    {
        label: "B",
        value: 5
    },
    {
        label: "C",
        value: 2
    },
    {
        label: "D",
        value: 4
    },
    {
        label: "E",
        value: 7
    }
];

export default App;
