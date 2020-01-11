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
        number: 1
    },
    {
        label: "B",
        number: 5
    },
    {
        label: "C",
        number: 2
    },
    {
        label: "D",
        number: 4
    },
    {
        label: "E",
        number: 7
    }
];

export default App;
